'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type MapModuleProps = {
	locations: {
		lat: number;
		lng: number;
	}[];
	zoomLevel: number;
	pretitle?: string;
};

export default function MapModule({ locations, zoomLevel, pretitle }: Partial<MapModuleProps> & Sanity.Module) {
	const mapContainerStyle = {
		height: '80vh',
		width: '100%',
	};

	const center = {
		lat: locations?.[0]?.lat ?? 0,
		lng: locations?.[0]?.lng ?? 0,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ''}>
			<div className="px-28 py-20">
				{pretitle && <div className="text-2xl font-bold text-center mb-16 text-primary uppercase">{pretitle}</div>}
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					center={center}
					zoom={zoomLevel}
				>
					{locations?.map((location, index) => (
						<Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
					))}
				</GoogleMap>
			</div>
		</LoadScript>
	);
};