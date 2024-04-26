const fs = require('fs');

// Read the JSON file
fs.readFile('filteredData.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const filteredDataLength = jsonData.length;

    console.log('Length of filteredData.json:', filteredDataLength);
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
