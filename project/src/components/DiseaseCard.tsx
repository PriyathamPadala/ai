import React from 'react';

interface Disease {
  id: number;
  name: string;
  crop: string;
  symptoms: string;
  treatment: string;
  image_url: string;
}

interface DiseaseCardProps {
  disease: Disease;
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={disease.image_url}
        alt={disease.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{disease.name}</h3>
        <p className="text-sm text-gray-600 mt-1">Crop: {disease.crop}</p>
        <div className="mt-3">
          <h4 className="text-sm font-medium text-gray-900">Symptoms:</h4>
          <p className="text-sm text-gray-600 mt-1">{disease.symptoms}</p>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-medium text-gray-900">Treatment:</h4>
          <p className="text-sm text-gray-600 mt-1">{disease.treatment}</p>
        </div>
      </div>
    </div>
  );
}