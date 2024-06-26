import fs from 'fs';
import path from 'path';
import get__dirname from './get__dirname.js';

const __dirname = get__dirname();

function getFiles (directoryPath, error = () => {}) {
  const dirPath = path.resolve(__dirname, directoryPath);

  if (!fs.existsSync(dirPath)) {
    error(`The path ${dirPath} does not exist.`);
    return [];
  }

  const files = fs.readdirSync(dirPath).filter((file) => {
    return fs.statSync(path.resolve(dirPath, file)).isFile();
  });

  return files;
}

export default getFiles;
