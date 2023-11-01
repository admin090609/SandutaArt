// pages/api/addPret.json
import fs from 'fs/promises';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Read the JSON data from the file
      const dataPath = 'pages/category/products_nav_cat.json';
      const rawData = await fs.readFile(dataPath);
      const data = JSON.parse(rawData);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while reading the data.' });
    }
  } else if (req.method === 'POST') {
    try {
      // Read the JSON data from the file
      const dataPath = 'pages/category/products_nav_direct.json    ';
      const rawData = await fs.readFile(dataPath);
      const data = JSON.parse(rawData);

      // Iterate through the objects and add the "pret" key with the value "pret"
      data.forEach((product) => {
        product.pret = 'pret';
      });

      // Write the modified data back to the file
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'Added "pret" key to all objects.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
