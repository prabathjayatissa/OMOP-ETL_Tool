import React, { useState } from 'react';
import { ArrowRight, MoveHorizontal, Settings } from 'lucide-react';

interface MappingField {
  sourceTable: string;
  sourceField: string;
  targetTable: string;
  targetField: string;
  logic: string;
}

export default function RabbitInHat() {
  const [selectedMapping, setSelectedMapping] = useState<string>('');

  const sampleMappings: MappingField[] = [
    {
      sourceTable: "patients",
      sourceField: "birth_date",
      targetTable: "person",
      targetField: "birth_datetime",
      logic: "Direct mapping with format conversion"
    },
    {
      sourceTable: "conditions",
      sourceField: "diagnosis_code",
      targetTable: "condition_occurrence",
      targetField: "condition_concept_id",
      logic: "Map using SNOMED vocabulary"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MoveHorizontal className="mr-2 h-6 w-6 text-blue-600" />
        Rabbit-In-Hat ETL Designer
      </h2>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <select
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedMapping}
            onChange={(e) => setSelectedMapping(e.target.value)}
          >
            <option value="">Select a mapping...</option>
            <option value="demographics">Demographics Mapping</option>
            <option value="conditions">Conditions Mapping</option>
            <option value="medications">Medications Mapping</option>
          </select>
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sampleMappings.map((mapping, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-3">
                <div className="text-sm font-medium text-gray-900">
                  {mapping.sourceTable}
                </div>
                <div className="text-sm text-gray-500">
                  {mapping.sourceField}
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="h-5 w-5 text-blue-600" />
              </div>

              <div className="col-span-3">
                <div className="text-sm font-medium text-gray-900">
                  {mapping.targetTable}
                </div>
                <div className="text-sm text-gray-500">
                  {mapping.targetField}
                </div>
              </div>
            </div>
            
            <div className="mt-2 text-sm text-gray-600">
              <span className="font-medium">Logic:</span> {mapping.logic}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Save Mapping
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Generate ETL Document
        </button>
      </div>
    </div>
  );
}
