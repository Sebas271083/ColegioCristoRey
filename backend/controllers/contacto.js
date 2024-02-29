
 export const contacto = (req, res) => {
    const indexPath = join(__dirname, `../frontend/public/page/contacto.html`);
    
    // Send the file
    res.sendFile(indexPath);
    console.log(indexPath);
  };