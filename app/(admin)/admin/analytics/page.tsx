'use client';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const pageViews = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Page Views',
      data: [1000, 1500, 2000, 2500, 3000, 3500],
      backgroundColor: '#2563eb',
    },
  ],
};

const countryViews = {
  labels: ['USA', 'UK', 'Canada', 'Australia', 'Germany'],
  datasets: [
    {
      data: [12000, 8000, 6000, 5000, 4000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const trendingProducts = {
  labels: [
    'Gaming Mouse',
    'Mechanical Keyboard',
    'Gaming Headset',
    'Gaming Chair',
    'Gaming Monitor',
  ],
  datasets: [
    {
      label: 'Sales',
      data: [500, 450, 400, 300, 250],
      backgroundColor: '#2563eb',
    },
  ],
};

const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [50000, 60000, 75000, 85000, 100000, 120000],
      borderColor: '#2563eb',
      tension: 0.1,
    },
    {
      label: 'Expenses',
      data: [30000, 35000, 40000, 45000, 50000, 55000],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
    },
  ],
};

const invoices = [
  { id: 'INV-001', customer: 'John Doe', amount: '$299.99', status: 'Paid' },
  {
    id: 'INV-002',
    customer: 'Jane Smith',
    amount: '$199.99',
    status: 'Pending',
  },
  { id: 'INV-003', customer: 'Bob Johnson', amount: '$499.99', status: 'Paid' },
  {
    id: 'INV-004',
    customer: 'Alice Brown',
    amount: '$399.99',
    status: 'Overdue',
  },
  {
    id: 'INV-005',
    customer: 'Charlie Davis',
    amount: '$599.99',
    status: 'Paid',
  },
];

export default function Analytics() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <Select defaultValue="last7days">
          <SelectTrigger className="w-[180px] dark:bg-gray-900 bg-gray-50">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-900 bg-gray-50  ">
            <SelectItem value="last7days">Last 7 days</SelectItem>
            <SelectItem value="last30days">Last 30 days</SelectItem>
            <SelectItem value="last3months">Last 3 months</SelectItem>
            <SelectItem value="lastyear">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$120,000</div>
            <p className="text-xs text-muted-foreground">
              +20% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$55,000</div>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={pageViews} options={{ responsive: true }} />
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Country Views</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={countryViews} options={{ responsive: true }} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Trending Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar
              data={trendingProducts}
              options={{ responsive: true, indexAxis: 'y' as const }}
            />
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-900 bg-gray-50  ">
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={revenueData} options={{ responsive: true }} />
          </CardContent>
        </Card>
      </div>

      <Card className="dark:bg-gray-900 bg-gray-50  ">
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="dark:bg-gray-900 bg-gray-50 ">
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow
                  key={invoice.id}
                  className="dark:bg-gray-900 bg-gray-50 "
                >
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
