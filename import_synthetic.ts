import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const importSyntheticData = async () => {
  const dataPath = join(__dirname, './output/fhir'); // Update this path
  const files = fs.readdirSync(dataPath);
  console.log(files);
  for (const file of files) {
    if (file.endsWith('.json')) {
      console.log('Hit!!');
      // Ensure you are only processing JSON files
      const filePath = path.join(dataPath, file);
      const data = fs.readFileSync(filePath, 'utf-8');
      await axios.post('http://localhost:8080/fhir/Patient', data, {
        headers: { 'Content-Type': 'application/fhir+json' },
      });
      console.log(`Imported ${file}`);
    }
  }
};

importSyntheticData().catch(error => {
  console.log(error.response.data);
});
