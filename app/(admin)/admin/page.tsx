'use client';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);
import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import CustomerDistributionMap from './components/Map';
import Map from './components/CountryMap';

// You'll need to download this file and host it in your public directory
const geoUrl = '/world-countries.json';
const data = [
  {
    name: 'United States',
    code: 'US',
    latitude: 37.0902,
    longitude: -95.7129,
    customers: 12194,
  },
  {
    name: 'England',
    code: 'GB',
    latitude: 52.3555,
    longitude: -1.1743,
    customers: 10410,
  },
  {
    name: 'Germany',
    code: 'DE',
    latitude: 51.1657,
    longitude: 10.4515,
    customers: 9084,
  },
  {
    name: 'Qatar',
    code: 'QA',
    latitude: 25.3548,
    longitude: 51.1839,
    customers: 8824,
  },
  {
    name: 'Turkey',
    code: 'TR',
    latitude: 38.9637,
    longitude: 35.2433,
    customers: 7741,
  },
];
const customers = [
  {
    country: 'United States',
    coordinates: [-95, 40],
    count: 12194,
    flag: '🇺🇸',
  },
  { country: 'England', coordinates: [0, 52], count: 10410, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { country: 'Germany', coordinates: [10, 51], count: 9084, flag: '🇩🇪' },
  { country: 'Qatar', coordinates: [51, 25], count: 8824, flag: '🇶🇦' },
  { country: 'Turkey', coordinates: [35, 39], count: 7741, flag: '🇹🇷' },
];

export default function Dashboard() {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#2563eb',
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#2563eb',
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={salesData} />
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={revenueData} />
          </CardContent>
        </Card>
      </div>
      <CustomerDistributionMap />
      {/*<Map data={data} />*/}
    </>
  );
}
