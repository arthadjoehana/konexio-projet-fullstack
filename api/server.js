const countries = require('./countriesData.json')
const express = require('express');
const PORT = 8000;
const app = express();
const cors = require('cors')
app.use(cors())




app.get('/all', (req, res) => {
    let countryList = []
    for (let i = 0 ; i < countries.length ; i++) {
        countryList.push(countries[i].name)
    }
    
    res.json(countryList);
});





app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT);
});