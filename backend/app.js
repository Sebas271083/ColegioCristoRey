import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';


const app = express()

app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/public')));


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.get('/index', (req, res) => {
    const indexPath = join(__dirname, `../frontend/public/page/index.html`);
    const headerPath = join(__dirname, `../frontend/public/page/header.html`);

    
    // Send the file
    res.sendFile(indexPath);
    res.sendFile(headerPath);

    console.log(indexPath);
  });

  
app.get('/contacto', (req, res) => {
    const indexPath = join(__dirname, `../frontend/public/page/contacto.html`);
    
    // Send the file
    res.sendFile(indexPath);
    console.log(indexPath);
  });

const PORT = 8080


app.listen(PORT, ()=> {
    console.log(`Escuchando al puerto: ${PORT}`)
})