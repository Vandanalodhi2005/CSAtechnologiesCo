import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data', 'db');

function ensureDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

function getFilePath(collectionName) {
  ensureDir();
  return path.join(DB_DIR, `${collectionName}.json`);
}

export function readCollection(collectionName) {
  try {
    const filePath = getFilePath(collectionName);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error(`Error reading collection ${collectionName}:`, error);
    return [];
  }
}

export function writeCollection(collectionName, data) {
  try {
    const filePath = getFilePath(collectionName);
    ensureDir();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing collection ${collectionName}:`, error);
    return false;
  }
}
