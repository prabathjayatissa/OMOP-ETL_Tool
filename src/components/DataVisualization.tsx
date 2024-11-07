import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { syntheticConditions, syntheticPatients } from '../data/syntheticData';

const getAgeDistribution = () => {
  const currentYear = new Date().getFullYear();
  return syntheticPatients.reduce((acc: any, patient) => {
    const age = currentYear - new Date(patient.birthDate).getFullYear();
    const ageGroup = Math.floor(age / 10) * 10;
    const key = `${ageGroup}-${ageGroup + 9}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

const getConditionDistribution = () => {
  return syntheticConditions.reduce((acc: any, condition) => {
    acc[condition.description] = (acc[condition.description] || 0) + 1;
    return acc;
  }, {});
};

export default function DataVisualization() {
  const ageData = Object.entries(getAgeDistribution()).map(([range, count]) => ({
    range,
    count,
  }));

  const conditionData = Object.entries(getConditionDistribution()).map(([condition, count]) => ({
    condition,
    count,
  }));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Data Visualization</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Age Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3B82F6" name="Patient Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Condition Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conditionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="condition" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#10B981" name="Condition Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}