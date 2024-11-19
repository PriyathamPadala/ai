import React from 'react';
import { useParams } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Sprout, ThermometerSun, Droplets } from 'lucide-react';

interface DiseaseDetail {
  id: string;
  name: string;
  cropType: string;
  description: string;
  symptoms: string[];
  causes: string[];
  preventiveMeasures: string[];
  treatments: {
    organic: string[];
    chemical: string[];
  };
  environmentalConditions: {
    temperature: string;
    humidity: string;
    rainfall: string;
  };
  images: string[];
  severity: 'low' | 'medium' | 'high';
}

const diseaseData: Record<string, DiseaseDetail> = {
  'wheat-leaf-rust': {
    id: 'wheat-leaf-rust',
    name: 'Leaf Rust',
    cropType: 'Wheat',
    description: 'Leaf rust is one of the most common diseases affecting wheat worldwide, caused by the fungus Puccinia triticina.',
    symptoms: [
      'Orange-brown pustules on leaves',
      'Circular to oval shaped lesions',
      'Powdery spores that can be rubbed off',
      'Chlorotic areas around pustules',
      'Reduced photosynthetic area'
    ],
    causes: [
      'Fungal pathogen Puccinia triticina',
      'Warm temperatures (15-25°C)',
      'High humidity',
      'Extended periods of leaf wetness'
    ],
    preventiveMeasures: [
      'Plant resistant varieties',
      'Early planting to avoid peak disease periods',
      'Proper spacing between plants',
      'Field monitoring during vulnerable growth stages',
      'Crop rotation with non-host plants'
    ],
    treatments: {
      organic: [
        'Remove infected plant debris',
        'Increase air circulation',
        'Apply neem oil solution',
        'Use copper-based fungicides',
        'Maintain proper field sanitation'
      ],
      chemical: [
        'Apply propiconazole fungicide',
        'Use tebuconazole-based products',
        'Systemic fungicide application',
        'Preventive fungicide spraying',
        'Follow recommended fungicide rotation'
      ]
    },
    environmentalConditions: {
      temperature: '15-25°C optimal for disease development',
      humidity: 'Above 75% relative humidity',
      rainfall: 'Frequent light rains favor disease spread'
    },
    images: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585502064596-c7e5d105f8c5?w=800&auto=format&fit=crop'
    ],
    severity: 'high'
  },
  'rice-blast': {
    id: 'rice-blast',
    name: 'Rice Blast',
    cropType: 'Rice',
    description: 'Rice blast, caused by Magnaporthe oryzae, is one of the most destructive rice diseases globally.',
    symptoms: [
      'Diamond-shaped lesions on leaves',
      'White to gray lesion centers',
      'Brown to reddish-brown borders',
      'Nodal infection causing stem rot',
      'Panicle blast affecting grains'
    ],
    causes: [
      'Fungal pathogen Magnaporthe oryzae',
      'High nitrogen fertilization',
      'Dense canopy',
      'Extended periods of leaf wetness'
    ],
    preventiveMeasures: [
      'Use resistant varieties',
      'Balanced fertilization',
      'Proper water management',
      'Optimal planting density',
      'Silicon application'
    ],
    treatments: {
      organic: [
        'Silicon-rich amendments',
        'Biological control agents',
        'Plant extracts application',
        'Cultural control methods',
        'Field sanitation'
      ],
      chemical: [
        'Triazole fungicides',
        'Strobilurin fungicides',
        'Preventive fungicide application',
        'Systemic fungicide treatment',
        'Proper timing of application'
      ]
    },
    environmentalConditions: {
      temperature: '20-30°C optimal for infection',
      humidity: 'Above 90% relative humidity',
      rainfall: 'Frequent rainfall increases disease severity'
    },
    images: [
      'https://images.unsplash.com/photo-1536054820006-1f0d0c82d588?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595839095404-8118d3974ef3?w=800&auto=format&fit=crop'
    ],
    severity: 'high'
  }
};

export default function DiseaseDetails() {
  const { diseaseId } = useParams();
  const disease = diseaseId ? diseaseData[diseaseId] : null;

  if (!disease) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Disease not found</h2>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{disease.name}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(disease.severity)}`}>
              {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Severity
            </span>
          </div>
          <p className="text-lg text-gray-600 mt-2">{disease.cropType}</p>
          <p className="mt-4 text-gray-700">{disease.description}</p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {disease.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${disease.name} image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Symptoms and Causes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-semibold">Symptoms</h2>
            </div>
            <ul className="space-y-2">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 mr-2"></span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-semibold">Causes</h2>
            </div>
            <ul className="space-y-2">
              {disease.causes.map((cause, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 mr-2"></span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Environmental Conditions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <ThermometerSun className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Environmental Conditions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <ThermometerSun className="h-5 w-5 text-gray-500" />
              <span>{disease.environmentalConditions.temperature}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="h-5 w-5 text-gray-500" />
              <span>{disease.environmentalConditions.humidity}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="h-5 w-5 text-gray-500" />
              <span>{disease.environmentalConditions.rainfall}</span>
            </div>
          </div>
        </div>

        {/* Treatment and Prevention */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold">Organic Treatments</h2>
            </div>
            <ul className="space-y-2">
              {disease.treatments.organic.map((treatment, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold">Chemical Treatments</h2>
            </div>
            <ul className="space-y-2">
              {disease.treatments.chemical.map((treatment, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                  <span>{treatment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}