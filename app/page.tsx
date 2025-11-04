'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, BarChart3, ShieldCheck, Mic, Cpu, DollarSign, Activity, ArrowRight, Building2, Lock, Server } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-600">MedPACT</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Advanced Healthcare Technology</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advance Price Transparency for <br />
              <span className="text-blue-600">Providers & Payers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionizing healthcare cost transparency with AI-powered insights, 
              real-time pricing, and seamless integration for both healthcare providers and payers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform bridges the gap between providers and payers with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced analytics dashboard providing real-time insights into pricing trends, 
                  cost variations, and market dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>HIPAA Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built with security-first approach ensuring full HIPAA compliance 
                  and protection of sensitive healthcare data.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Machine learning algorithms analyze pricing patterns and provide 
                  predictive insights for better decision making.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-yellow-600 mb-2" />
                <CardTitle>Cost Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clear, upfront pricing information helping patients and providers 
                  make informed healthcare decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Live Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  24/7 monitoring of pricing changes, policy updates, and 
                  market fluctuations with instant notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Multi-Provider Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamless integration across multiple healthcare providers 
                  and payer networks for comprehensive coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Provider & Payer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Provider Side */}
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                  <CardTitle className="text-2xl">For Healthcare Providers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Price comparison across networks</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Patient cost estimation tools</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Revenue optimization insights</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Automated billing transparency</span>
                </div>
                <Button className="w-full mt-6">Get Started for Providers</Button>
              </CardContent>
            </Card>

            {/* Payer Side */}
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-green-600 mr-3" />
                  <CardTitle className="text-2xl">For Healthcare Payers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Claims cost analysis</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Member cost transparency</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Network optimization tools</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Fraud detection algorithms</span>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Get Started for Payers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MedPACT</h3>
            <p className="text-gray-400 mb-8">
              Advancing healthcare transparency through innovative technology
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Terms of Service
              </Button>
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}