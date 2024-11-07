import React, { useState } from 'react';
import { Search, CheckCircle, AlertCircle } from 'lucide-react';

interface MappingSuggestion {
  sourceCode: string;
  sourceTerm: string;
  targetConceptId: string;
  targetTerm: string;
  matchScore: number;
}

export default function UsagiTool() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const sampleSuggestions: MappingSuggestion[] = [
    {
      sourceCode: "E11.9",
      sourceTerm: "Type 2 diabetes mellitus",
      targetConceptId: "201254",
      targetTerm: "Type 2 diabetes mellitus without complication",
      matchScore: 0.95
    },
    {
      sourceCode: "I10",
      sourceTerm: "Essential hypertension",
      targetConceptId: "316866",
      targetTerm: "Essential hypertension",
      matchScore: 1.0
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Search className="mr-2 h-6 w-6 text-blue-600" />
        USAGI Concept Mapping
      </h2>
      
      <div className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search source terms..."
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search Concepts
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Concept</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleSuggestions.map((suggestion, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{suggestion.sourceTerm}</div>
                  <div className="text-sm text-gray-500">{suggestion.sourceCode}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{suggestion.targetTerm}</div>
                  <div className="text-sm text-gray-500">ID: {suggestion.targetConceptId}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {(suggestion.matchScore * 100).toFixed(1)}%
                  </div>
                </td>
                <td className="px-6 py-4">
                  {suggestion.matchScore > 0.9 ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}