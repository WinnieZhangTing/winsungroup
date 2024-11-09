'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

type MapModuleProps = {
	locations: {
		lat: number;
		lng: number;
		title?: string;
		address?: string;
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

	const [selectedMarker, setSelectedMarker] = React.useState<{
		lat: number;
		lng: number;
		index: number;
	} | null>(null);

	const handleMarkerClick = (location: { lat: number; lng: number }, index: number) => {
		setSelectedMarker({ ...location, index });
	};

	const handleDirectionsClick = (lat: number, lng: number) => {
		const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
		window.open(url, '_blank');
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
						<Marker
							key={index}
							position={{ lat: location.lat, lng: location.lng }}
							onClick={() => handleMarkerClick(location, index)}
						/>
					))}

					{selectedMarker && (
						<InfoWindow
							position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
							onCloseClick={() => setSelectedMarker(null)}
							options={{
								pixelOffset: new google.maps.Size(0, -30),
							}}
						>
							<div className="pt-0 px-2 pb-2 min-w-[200px]">
								<h3 className="font-bold text-lg mb-3">
									{locations?.[selectedMarker.index]?.title ?? `Location ${selectedMarker.index + 1}`}
								</h3>
								{locations?.[selectedMarker.index]?.address && (
									<p className="text-gray-800 mb-4 text-sm">{locations[selectedMarker.index].address}</p>
								)}
								<button
									onClick={() => handleDirectionsClick(selectedMarker.lat, selectedMarker.lng)}
									className="w-full mt-2 bg-primary text-black px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
								>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
									Get Directions
								</button>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</div>
		</LoadScript>
	);
};