getAllCountries()


async function getAllCountries() {
    const res = await fetch('http://localhost:8000/all')
    const countries = await res.json()
   
    countriesList(countries.data)
    
    /*
    for (let i=0 ; i < data.length ; i++) {
        const li = document.createElement('li')
        ul.appendChild(li)
        li.innerHTML=li.innerHTML + data[i];
    }
    */
}

function countriesList(list) {
	list.forEach((country) =>
		$("#list").append(`<li><p>${country.name} - ${country.capital}</p></li>`));
}

