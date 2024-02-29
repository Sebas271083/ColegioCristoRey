import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const contacto = (req, res) => {
    const indexPath = join(__dirname, `../../frontend/public/page/contacto.html`);
    
    // Send the file
    res.sendFile(indexPath);
    console.log(indexPath);
  };

