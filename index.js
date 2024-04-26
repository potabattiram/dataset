
const fs = require('fs');

fs.readFile('dataset.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const filteredData = [];

    jsonData.forEach(entry => {
      const fullName = entry['Full name'];
      const school = entry['School'];

      if (  
        !fullName.split(' ')[0].match(/(i|e|a)$/i) &&
        school.toLowerCase().includes('solapur') 
        && 
        fullName.split(' ')[0].toUpperCase() != 'PAYAL' 
        && 
        fullName.split(' ')[0].toUpperCase() != 'KAJAL' && 
        fullName.split(' ')[0].toUpperCase() != 'KOYAL' &&
        fullName.split(' ')[0].toUpperCase() != 'MUSKAN'  &&
        fullName.split(' ')[0].toUpperCase() != 'SHEJAL' && 
        fullName.split(' ')[0].toUpperCase() != 'KOMAL' && 
        fullName.split(' ')[0].toUpperCase() != 'SNEHAL'
      ) {
        filteredData.push(entry);
      }
    });

    fs.writeFile('filteredData.json', JSON.stringify(filteredData, null, 2), err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Filtered data saved to filteredData.json');
      });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
