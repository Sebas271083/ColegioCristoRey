import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import dotenv from 'dotenv'
import indexRouter from './routes/index.router.js'


dotenv.config()

const app = express()

app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/public')));


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/', (req, res) => {
//     const indexPath = join(__dirname, `../frontend/public/page/index.html`);
//     const headerPath = join(__dirname, `../frontend/public/page/header.html`);

    
//     // Send the file
//     res.sendFile(indexPath);
//     res.sendFile(headerPath);

//     console.log(indexPath);
//   });

app.use('/', indexRouter)
  
app.use('/contacto', indexRouter)

app.get('/galeria', (req, res)=>{
    const indexPath = join(__dirname, `../frontend/public/page/galeria.html`);
    console.log()
    
    // Send the file
    res.sendFile(indexPath);
    console.log(indexPath);
})

const PORT = process.env.PORT || 8080


app.listen(PORT, ()=> {
    console.log(`Escuchando al puerto: ${PORT}`)
})
