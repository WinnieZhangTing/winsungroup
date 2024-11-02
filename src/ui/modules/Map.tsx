'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type MapModuleProps = {
	location: {
		lat: number;
		lng: number;
	};
	zoomLevel: number;
	pretitle?: string;
};

export default function MapModule({ location, zoomLevel, pretitle }: Partial<MapModuleProps> & Sanity.Module) {
	const mapContainerStyle = {
		height: '80vh',
		width: '100%',
	};

	const center = {
		lat: location?.lat ?? 0,
		lng: location?.lng ?? 0,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ''}>
			<div className="px-28 py-20">
				{pretitle && <div className="text-4xl font-bold text-center mb-16 text-primary uppercase">{pretitle}</div>}
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					center={center}
					zoom={zoomLevel}
				>
					<Marker position={center} />
				</GoogleMap>
			</div>
		</LoadScript>
	);
};