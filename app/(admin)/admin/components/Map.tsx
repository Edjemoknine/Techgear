'use client';

import React, { useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import L from 'leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

const customers = [
  {
    country: 'United States',
    coordinates: [40, -95],
    count: 12194,
    flag: '🇺🇸',
  },
  { country: 'England', coordinates: [52, -1], count: 10410, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { country: 'Germany', coordinates: [51, 10], count: 9084, flag: '🇩🇪' },
  { country: 'Qatar', coordinates: [25, 51], count: 8824, flag: '🇶🇦' },
  { country: 'Turkey', coordinates: [39, 35], count: 7741, flag: '🇹🇷' },
];

// Create a custom marker icon
const createCustomIcon = (isSelected: boolean) =>
  new L.DivIcon({
    className: 'custom-marker',
    html: `<div class="w-4 h-4 rounded-full ${isSelected ? 'bg-red-500' : 'bg-red-400'} border-2 border-white shadow-lg"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

// MapController component to handle map interactions
function MapController({
  selectedCountry,
}: {
  selectedCountry: string | null;
}) {
  const map = useMap();

  React.useEffect(() => {
    if (selectedCountry) {
      const country = customers.find((c) => c.country === selectedCountry);
      if (country) {
        map.flyTo(country.coordinates, 4, { duration: 1.5 });
      }
    } else {
      map.flyTo([30, 0], 2, { duration: 1.5 });
    }
  }, [selectedCountry, map]);

  return null;
}

export default function CustomerDistributionMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Custom light style map tiles
  const LIGHT_MAP_TILE =
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  const handleCountryClick = useCallback((country: string) => {
    setSelectedCountry((prev) => (prev === country ? null : country));
  }, []);

  return (
    <div className="flex gap-4">
      <Card className="w-full  bg-white text-black">
        {/*  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <CardTitle className="text-base font-medium">
            Customers Distribution
          </CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </CardHeader> */}
        <CardContent className="p-0">
          <div className="relative">
            <div className="h-[400px] rounded-md overflow-hidden">
              <MapContainer
                center={[30, 0]}
                zoom={2}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                attributionControl={false}
              >
                <TileLayer
                  url={LIGHT_MAP_TILE}
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {customers.map((customer) => (
                  <Marker
                    key={customer.country}
                    position={customer.coordinates}
                    icon={createCustomIcon(
                      selectedCountry === customer.country,
                    )}
                    eventHandlers={{
                      click: () => handleCountryClick(customer.country),
                    }}
                  />
                ))}
                <MapController selectedCountry={selectedCountry} />
              </MapContainer>
            </div>

            {/* Legend */}
          </div>
        </CardContent>
      </Card>
      <div className=" flex flex-col gap-2 dark:bg-gray-900 bg-gray-50 p-3 h-fit">
        {customers.map((customer) => (
          <Button
            key={customer.country}
            variant="outline"
            size="sm"
            className={`flex items-center justify-start gap-2 px-3 py-1.5 h-auto dark:bg-gray-900 bg-gray-50
            ${selectedCountry === customer.country ? 'bg-muted' : 'bg-white'}`}
            onClick={() => handleCountryClick(customer.country)}
          >
            <span className="text-base">{customer.flag}</span>
            <span className="text-sm">
              {customer.country} ({customer.count.toLocaleString()})
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
