const countries = require('./countriesData.json')
const express = require('express');
const PORT = 8000;
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/all", (req, res) => {
	res.json({
		data: countries,
	});
});



app.get("/country/:countryName", (req, res) => {
	const countryName = req.params.countryName.toLowerCase();
	const countryData = countries.filter(
		(country) => 
        country.name.toLowerCase() === countryName
    );
	res.json({
		data: countryData,
	});
});

app.get("/capital/:capitalName", (req, res) => {
	const capitalName = req.params.capitalName.toLowerCase();
	const countryData = countries.filter(
		(country) => country.capital.toLowerCase() === capitalName
    );
	res.json({
		data: countryData,
	});
});

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT);
});

