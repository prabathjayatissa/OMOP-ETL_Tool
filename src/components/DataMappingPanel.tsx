import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { MappingRule } from '../types';

const defaultMappingRules: MappingRule[] = [
  {
    sourceField: "patients.gender",
    targetTable: "person",
    targetField: "gender_concept_id",
    transformationRule: "Map F->8532 (Female), M->8507 (Male)"
  },
  {
    sourceField: "conditions.code",
    targetTable: "condition_occurrence",
    targetField: "condition_concept_id",
    transformationRule: "Map to SNOMED CT"
  },
  {
    sourceField: "medications.code",
    targetTable: "drug_exposure",
    targetField: "drug_concept_id",
    transformationRule: "Map to RxNorm"
  }
];

export default function DataMappingPanel() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Data Mapping Configuration</h2>
      <div className="space-y-4">
        {defaultMappingRules.map((rule, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-gray-700">{rule.sourceField}</p>
              <p className="text-sm text-gray-500">Source Field</p>
            </div>
            <ArrowRight className="text-blue-500" />
            <div className="flex-1">
              <p className="font-medium text-gray-700">{rule.targetTable}.{rule.targetField}</p>
              <p className="text-sm text-gray-500">Target Field</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">{rule.transformationRule}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          Add Mapping Rule
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Execute Mapping
        </button>
      </div>
    </div>
  );
}