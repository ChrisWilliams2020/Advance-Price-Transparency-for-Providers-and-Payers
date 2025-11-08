"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, DollarSign, Activity, CheckCircle2 } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Welcome to Your MedPACT Dashboard</h1>

        {/* Notifications */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✔️ Contract #247 optimized for 18% higher revenue.</li>
                <li>✔️ 12 payer negotiations in progress.</li>
                <li>✔️ New opportunity: $892,340 identified.</li>
                <li>✔️ Federal Reserve rate updated to 5.25%.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 mb-2">$4,832,450</div>
              <div className="text-green-600 font-semibold">+12.3% this month</div>
              <div className="text-gray-500 text-sm mt-2">Current Month Revenue</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-yellow-600 mb-2" />
              <CardTitle>Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-700 mb-2">$892,340</div>
              <div className="text-gray-500 text-sm mt-2">Revenue Opportunity Identified</div>
              <Button className="mt-4">View Details</Button>
            </CardContent>
          </Card>
        </div>
        {/* Recent Activity & Chart */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🕒 2 mins ago: Revenue dashboard updated</li>
                <li>🕒 10 mins ago: New payer negotiation started</li>
                <li>🕒 1 hour ago: AI analysis completed for 5 contracts</li>
                <li>🕒 3 hours ago: User John D. signed up</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 flex items-end space-x-2">
                {/* Simple bar chart placeholder */}
                {[45, 52, 58, 63, 71, 78, 85, 90].map((h, i) => (
                  <div key={i} className="bg-blue-400 rounded w-6" style={{height: `${h}%`}}></div>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">Revenue growth trend over 8 months</div>
            </CardContent>
          </Card>
        </div>
          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle>Active Negotiations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700 mb-2">12</div>
              <div className="text-gray-500 text-sm mt-2">In Progress</div>
              <Button className="mt-4">Manage</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 mb-2">94.2%</div>
              <div className="text-gray-500 text-sm mt-2">AI Analysis Completed</div>
              <Button className="mt-4">View Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
