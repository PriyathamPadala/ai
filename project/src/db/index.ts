import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join } from 'path';

const db = new Database('cropguard.db');

// Initialize database with schema
const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
db.exec(schema);

// Seed initial data if needed
const seedData = () => {
  const crops = [
    { name: 'Wheat', scientific_name: 'Triticum aestivum', description: 'Common wheat variety' },
    { name: 'Rice', scientific_name: 'Oryza sativa', description: 'Asian rice variety' },
    { name: 'Corn', scientific_name: 'Zea mays', description: 'Sweet corn variety' }
  ];

  const insertCrop = db.prepare(`
    INSERT INTO crops (name, scientific_name, description)
    VALUES (@name, @scientific_name, @description)
  `);

  const insertDisease = db.prepare(`
    INSERT INTO diseases (crop_id, name, symptoms, treatment, prevention, image_url)
    VALUES (@crop_id, @name, @symptoms, @treatment, @prevention, @image_url)
  `);

  for (const crop of crops) {
    const result = insertCrop.run(crop);
    const cropId = result.lastInsertRowid;

    // Add some diseases for each crop
    if (crop.name === 'Wheat') {
      insertDisease.run({
        crop_id: cropId,
        name: 'Leaf Rust',
        symptoms: 'Orange-brown pustules on leaves',
        treatment: 'Apply fungicide',
        prevention: 'Use resistant varieties',
        image_url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop'
      });
    }
  }
};

// Export database queries
export const queries = {
  getAllCrops: db.prepare('SELECT * FROM crops'),
  getCropById: db.prepare('SELECT * FROM crops WHERE id = ?'),
  getDiseasesByCropId: db.prepare('SELECT * FROM diseases WHERE crop_id = ?'),
  addAnalysisHistory: db.prepare(`
    INSERT INTO analysis_history (crop_id, disease_id, image_url, confidence_score)
    VALUES (@crop_id, @disease_id, @image_url, @confidence_score)
  `)
};

// Initialize database with seed data
try {
  const cropCount = db.prepare('SELECT COUNT(*) as count FROM crops').get().count;
  if (cropCount === 0) {
    seedData();
  }
} catch (error) {
  console.error('Error initializing database:', error);
}

export default db;