import React, { useState } from 'react';
import { Upload, AlertCircle, Droplets, Thermometer, Wind } from 'lucide-react';

export default function Dashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Environmental Data */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <Thermometer className="h-5 w-5" />
            <h3 className="font-semibold">Temperature</h3>
          </div>
          <p className="text-2xl font-bold mt-2">24°C</p>
          <p className="text-sm text-gray-500">Optimal range: 20-25°C</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <Droplets className="h-5 w-5" />
            <h3 className="font-semibold">Humidity</h3>
          </div>
          <p className="text-2xl font-bold mt-2">65%</p>
          <p className="text-sm text-gray-500">Optimal range: 60-70%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <Wind className="h-5 w-5" />
            <h3 className="font-semibold">Soil Moisture</h3>
          </div>
          <p className="text-2xl font-bold mt-2">42%</p>
          <p className="text-sm text-gray-500">Optimal range: 40-60%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center space-x-2 text-yellow-600">
            <AlertCircle className="h-5 w-5" />
            <h3 className="font-semibold">Risk Level</h3>
          </div>
          <p className="text-2xl font-bold mt-2">Moderate</p>
          <p className="text-sm text-gray-500">Based on current conditions</p>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="mb-8">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Uploaded crop"
                className="max-h-64 mx-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Upload Another Image
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="text-lg font-semibold">
                Drag and drop your crop image here
              </h3>
              <p className="text-gray-500">or click to select a file</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Analysis Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Recent Analysis</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              {
                date: '2024-03-15',
                crop: 'Wheat',
                condition: 'Healthy',
                confidence: '95%',
                image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop'
              },
              {
                date: '2024-03-14',
                crop: 'Corn',
                condition: 'Rust Detected',
                confidence: '87%',
                image: 'https://images.unsplash.com/photo-1601472544834-b6433481f31c?w=800&auto=format&fit=crop'
              }
            ].map((analysis, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={analysis.image}
                  alt={analysis.crop}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{analysis.crop}</p>
                  <p className={`text-sm ${
                    analysis.condition === 'Healthy' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {analysis.condition}
                  </p>
                  <p className="text-sm text-gray-500">
                    Confidence: {analysis.confidence}
                  </p>
                  <p className="text-sm text-gray-500">{analysis.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}