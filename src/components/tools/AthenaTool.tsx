import React, { useState } from 'react';
import { Book, Download, Filter } from 'lucide-react';

interface Vocabulary {
  id: string;
  name: string;
  version: string;
  conceptCount: number;
}

export default function AthenaTool() {
  const [selectedVocabularies, setSelectedVocabularies] = useState<string[]>([]);
  
  const vocabularies: Vocabulary[] = [
    {
      id: "SNOMED",
      name: "SNOMED CT",
      version: "2023-09",
      conceptCount: 350432
    },
    {
      id: "ICD10",
      name: "ICD-10-CM",
      version: "2024",
      conceptCount: 95412
    },
    {
      id: "RXNORM",
      name: "RxNorm",
      version: "2023-10",
      conceptCount: 158963
    }
  ];

  const toggleVocabulary = (id: string) => {
    setSelectedVocabularies(prev =>
      prev.includes(id)
        ? prev.filter(v => v !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Book className="mr-2 h-6 w-6 text-blue-600" />
        ATHENA Vocabulary Browser
      </h2>

      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            Select vocabularies to download:
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vocabularies.map((vocab) => (
            <div
              key={vocab.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedVocabularies.includes(vocab.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => toggleVocabulary(vocab.id)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{vocab.name}</h3>
                  <p className="text-sm text-gray-500">Version: {vocab.version}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {vocab.conceptCount.toLocaleString()} concepts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className={`px-4 py-2 rounded-lg flex items-center ${
            selectedVocabularies.length > 0
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={selectedVocabularies.length === 0}
        >
          <Download className="mr-2 h-5 w-5" />
          Download Selected Vocabularies
        </button>
      </div>
    </div>
  );
}