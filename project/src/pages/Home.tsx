import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CropDisease {
  id: string;
  cropType: string;
  diseaseName: string;
  symptoms: string;
  treatment: string;
  imageUrl: string;
  severity: 'low' | 'medium' | 'high';
}

export default function Home() {
  const navigate = useNavigate();
  const [selectedCropType, setSelectedCropType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [diseases, setDiseases] = useState<CropDisease[]>([]);

  const cropTypes = [
    'All',
    'Wheat',
    'Rice',
    'Corn',
    'Potato',
    'Tomato',
    'Cotton',
    'Soybean'
  ];

  useEffect(() => {
    const fetchedDiseases: CropDisease[] = [
      {
        id: 'wheat-leaf-rust',
        cropType: 'Wheat',
        diseaseName: 'Leaf Rust',
        symptoms: 'Orange-brown pustules on leaves',
        treatment: 'Apply fungicide, use resistant varieties',
        imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop',
        severity: 'high'
      },
      {
        id: 'rice-blast',
        cropType: 'Rice',
        diseaseName: 'Blast',
        symptoms: 'Diamond-shaped lesions',
        treatment: 'Use resistant varieties, apply fungicides',
        imageUrl: 'https://images.unsplash.com/photo-1536054820006-1f0d0c82d588?w=800&auto=format&fit=crop',
        severity: 'medium'
      }
    ];

    setDiseases(fetchedDiseases);
  }, []);

  const filteredDiseases = diseases.filter(disease => {
    const matchesType = selectedCropType.toLowerCase() === 'all' || 
                       disease.cropType.toLowerCase() === selectedCropType.toLowerCase();
    const matchesSearch = disease.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         disease.cropType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered Crop Disease Detection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Protect your crops with advanced disease detection and get instant treatment recommendations
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search diseases..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
              value={selectedCropType}
              onChange={(e) => setSelectedCropType(e.target.value)}
            >
              {cropTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.map((disease) => (
          <div key={disease.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={disease.imageUrl}
              alt={disease.diseaseName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{disease.diseaseName}</h3>
                  <p className="text-sm text-gray-600">{disease.cropType}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(disease.severity)}`}>
                  {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)}
                </span>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-2">{disease.symptoms}</p>
              <button
                onClick={() => navigate(`/disease/${disease.id}`)}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}