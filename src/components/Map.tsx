import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import type { Profile } from '../types/profile';

interface MapViewProps {
  profile: Profile | null;
}

const containerStyle = {
  width: '100%',
  height: '100%'
};

export function MapView({ profile }: MapViewProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  });

  if (!isLoaded || !profile) return null;

  const center = {
    lat: profile.address.coordinates[1],
    lng: profile.address.coordinates[0]
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
    >
      <Marker
        position={center}
        title={profile.name}
      />
    </GoogleMap>
  );
}