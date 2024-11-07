import React from 'react';
import { Database } from 'lucide-react';
import DataMappingPanel from './components/DataMappingPanel';
import DataVisualization from './components/DataVisualization';
import UsagiTool from './components/tools/UsagiTool';
import WhiteRabbitTool from './components/tools/WhiteRabbitTool';
import AthenaTool from './components/tools/AthenaTool';
import RabbitInHat from './components/tools/RabbitInHat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Database className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">EMR to OMOP-CDM Mapper</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Data Mapping Tool</h1>
            <p className="text-gray-600">
              Map your Electronic Medical Record (EMR) data to the OMOP Common Data Model (CDM) format
              for standardized research analysis.
            </p>
          </div>

          <WhiteRabbitTool />
          <RabbitInHat />
          <UsagiTool />
          <AthenaTool />
          <DataMappingPanel />
          <DataVisualization />
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            EMR to OMOP-CDM Mapper - Research Data Standardization Tool
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;