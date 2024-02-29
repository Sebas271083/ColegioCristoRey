import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';


export const enviarFormulario = (req, res) => {
    const { floating_email, floating_nombre, floating_repeat_apellido, floating_telefono, floating_fecha, floating_consulta} = req.body;
  
      console.log(req.body)
  
    //Configura el transporte de nodemailer (ajústalo según tu proveedor de correo)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
          user: process.env.gmail_user,
          pass: process.env.gmail_password
      }
    });
  
    // Configura el contenido del correo
    const mailOptions = {
      from: email,
      to: 'sebdelgado83@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${floating_nombre}\nEmail: ${floating_email}\nMensaje: ${floating_consulta}`
    }
  
    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error)
        return res.status(500).send(error.toString());
      }
      res.send('Mensaje enviado: ' + info.response);
    })
  }
  


export const contacto = (req, res) => {
    const indexPath = join(__dirname, `../../frontend/public/page/contacto.html`);
    
    // Send the file
    res.sendFile(indexPath);
    console.log(indexPath);
  };

