import React from 'react';
import { Header } from './components/Header';
import { ThreatMap } from './components/ThreatMap';
import { AlertsFeed } from './components/AlertsFeed';
import { ResourceMonitor } from './components/ResourceMonitor';
import { WeatherInfo } from './components/WeatherInfo';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ThreatMap />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ResourceMonitor />
            <WeatherInfo />
          </div>
        </div>
        <div className="lg:col-span-1">
          <AlertsFeed />
        </div>
      </main>
    </div>
  );
}

export default App;