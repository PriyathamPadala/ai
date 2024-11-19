import React from 'react';

const cropTypes = [
  'Rice',
  'Wheat',
  'Corn',
  'Potato',
  'Tomato',
  'Cotton',
  'Soybean',
  'Sugarcane'
];

interface CropFilterProps {
  selectedCrop: string;
  onCropChange: (crop: string) => void;
}

export default function CropFilter({ selectedCrop, onCropChange }: CropFilterProps) {
  return (
    <div className="w-full max-w-md">
      <label htmlFor="crop-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select Crop Type
      </label>
      <select
        id="crop-select"
        value={selectedCrop}
        onChange={(e) => onCropChange(e.target.value)}
        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      >
        <option value="">All Crops</option>
        {cropTypes.map((crop) => (
          <option key={crop} value={crop}>
            {crop}
          </option>
        ))}
      </select>
    </div>
  );
}