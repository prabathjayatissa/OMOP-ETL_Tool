import React, { useState } from 'react';
import { Database, FileSpreadsheet, BarChart2 } from 'lucide-react';

interface TableScan {
  tableName: string;
  rowCount: number;
  columnCount: number;
  completeness: number;
}

export default function WhiteRabbitTool() {
  const [selectedSource, setSelectedSource] = useState('');
  
  const sampleScans: TableScan[] = [
    {
      tableName: "patients",
      rowCount: 10000,
      columnCount: 15,
      completeness: 98.5
    },
    {
      tableName: "conditions",
      rowCount: 25000,
      columnCount: 8,
      completeness: 95.2
    },
    {
      tableName: "medications",
      rowCount: 30000,
      columnCount: 10,
      completeness: 97.8
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Database className="mr-2 h-6 w-6 text-blue-600" />
        White Rabbit Scan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Source Database
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            <option value="">Select a source...</option>
            <option value="mysql">MySQL Database</option>
            <option value="csv">CSV Files</option>
            <option value="postgresql">PostgreSQL Database</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
            <FileSpreadsheet className="mr-2 h-5 w-5" />
            Generate Scan Report
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
            Scan Results
          </h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Table Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Row Count</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Columns</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completeness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sampleScans.map((scan, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{scan.tableName}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{scan.rowCount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{scan.columnCount}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${scan.completeness}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm text-gray-500">{scan.completeness}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}