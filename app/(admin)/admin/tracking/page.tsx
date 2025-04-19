'use client';

import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Search,
  Phone,
  MessageSquare,
  Clock,
  Package,
  MapPin,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const deliveries = [
  {
    id: '#456789',
    from: 'London Warehouse',
    to: 'Berlin, DE',
    status: 'ON THE WAY',
    progress: 81,
    customer: 'Sarah Parker',
    weight: '2.8 kg',
    price: '$430',
    departure: '22 July',
    driver: {
      name: 'Adam Brady',
      avatar: '/placeholder.svg',
      phone: '+1234567890',
    },
    currentLocation: {
      lat: 52.52,
      lng: 13.405,
    },
    destination: {
      lat: 52.53,
      lng: 13.415,
    },
    route: [
      [52.52, 13.405],
      [52.525, 13.41],
      [52.53, 13.415],
    ],
    routes: [52.52, 13.405],
  },
  {
    id: '#456790',
    from: 'Paris Warehouse',
    to: 'Munich, DE',
    status: 'RECEIVED',
    progress: 100,
    customer: 'John Smith',
    weight: '1.5 kg',
    price: '$230',
    departure: '21 July',
    driver: {
      name: 'Emma Wilson',
      avatar: '/placeholder.svg',
      phone: '+1234567891',
    },
    currentLocation: {
      lat: 52.51,
      lng: 13.4,
    },
    destination: {
      lat: 52.52,
      lng: 13.41,
    },
    route: [
      [52.51, 13.4],
      [52.515, 13.405],
      [52.52, 13.41],
    ],
  },
];

export default function Tracking() {
  const [selectedDelivery, setSelectedDelivery] = useState(deliveries[0]);
  const center: [number, number] = [52.52, 13.405];

  return (
    <>
      <div className="flex h-[calc(100vh-2rem)] gap-6 mb-40">
        {/* Sidebar */}
        <div className="w-96 flex flex-col gap-4">
          <Card className="bg-gray-50 dark:bg-gray-900  ">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  className="pl-8 bg-inherit"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex-1 overflow-auto">
            {deliveries.map((delivery) => (
              <Card
                key={delivery.id}
                className={`mb-4 cursor-pointer transition-colors hover:bg-gray-800/50 bg-gray-50 dark:bg-gray-900   ${
                  selectedDelivery.id === delivery.id ? 'border-primary' : ''
                }`}
                onClick={() => setSelectedDelivery(delivery)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">
                        Package from {delivery.from}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Order ID {delivery.id}
                      </p>
                    </div>
                    <Badge
                      variant={
                        delivery.status === 'ON THE WAY'
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {delivery.status}
                    </Badge>
                  </div>

                  {delivery.status === 'ON THE WAY' && (
                    <div className="mb-4">
                      <div className="h-2 bg-muted rounded-full">
                        <div
                          className="h-2 bg-primary rounded-full"
                          style={{ width: `${delivery.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Weight</p>
                      <p className="font-medium">{delivery.weight}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price</p>
                      <p className="font-medium">{delivery.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 ">
          <Card className="bg-gray-50 dark:bg-gray-900  ">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Order {selectedDelivery.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    From {selectedDelivery.from} to {selectedDelivery.to}
                  </p>
                </div>
                <Badge
                  variant={
                    selectedDelivery.status === 'ON THE WAY'
                      ? 'default'
                      : 'secondary'
                  }
                >
                  {selectedDelivery.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={selectedDelivery.driver.avatar} />
                  <AvatarFallback>
                    {selectedDelivery.driver.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {selectedDelivery.driver.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Driver</p>
                </div>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Departure</p>
                  <p className="font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {selectedDelivery.departure}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-medium flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    {selectedDelivery.weight}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">{selectedDelivery.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customer</p>
                  <p className="font-medium">{selectedDelivery.customer}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardContent className="p-0">
              <MapContainer
                center={center}
                zoom={13}
                style={{ height: '100%', minHeight: '500px' }}
                className="rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[
                    selectedDelivery.currentLocation.lat,
                    selectedDelivery.currentLocation.lng,
                  ]}
                >
                  <Popup>Current Location</Popup>
                </Marker>
                <Marker
                  position={[
                    selectedDelivery.destination.lat,
                    selectedDelivery.destination.lng,
                  ]}
                >
                  <Popup>Destination</Popup>
                </Marker>
                <Polyline
                  positions={selectedDelivery?.route!}
                  color="#ff4444"
                  weight={3}
                  opacity={0.7}
                />
              </MapContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
