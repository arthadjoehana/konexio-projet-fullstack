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



app.get("/country/:id", (req, res) => {
	const countryName = req.params.id.toLowerCase();
	const countryData = countries.filter(
		(country) => 
        country.name.toLowerCase() === countryName
    );
	res.json({
		data: countryData,
	});
});

app.get("/capital/:id", (req, res) => {
	const capitalName = req.params.id.toLowerCase();
	const countryData = countries.filter(
		(country) => country.capital.toLowerCase() === capitalName
    );
	res.json({
		data: countryData,
	});
});

app.get("/region/:id", (req, res) => {
	const regionName = req.params.id.toLowerCase();
	const countryData = countries.filter(
		(country) => country.region.toLowerCase() === regionName
    );
	res.json({
		data: countryData,
	});
});

app.listen(PORT, () => {
  console.log('Server started on port: ' + PORT);
});

