CREATE TABLE IF NOT EXISTS crops (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  scientific_name TEXT,
  description TEXT
);

CREATE TABLE IF NOT EXISTS diseases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  crop_id INTEGER,
  name TEXT NOT NULL,
  symptoms TEXT,
  treatment TEXT,
  prevention TEXT,
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (crop_id) REFERENCES crops (id)
);

CREATE TABLE IF NOT EXISTS analysis_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  crop_id INTEGER,
  disease_id INTEGER,
  image_url TEXT,
  confidence_score REAL,
  analysis_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (crop_id) REFERENCES crops (id),
  FOREIGN KEY (disease_id) REFERENCES diseases (id)
);