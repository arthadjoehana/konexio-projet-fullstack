$(() => {
	getAllCountries();
	$("#btnShowData").click(handleClick);
});



async function getAllCountries() {
    const res = await fetch('http://localhost:8000/all');
    const jsonRes = await res.json();
   
    countriesList(jsonRes.data);
};

function countriesList(list) {
    $("#list").empty();
	list.forEach((country) =>
		$("#list").append(`<li><p>${country.name} - ${country.capital}</p></li>`)
    );
};

async function handleClick() {
    
    if ($('#country').is(':checked')) {
        const submitValue = $("#submitValue").val();
        const res = await fetch(`http://localhost:8000/country/${submitValue}`);
        const jsonRes = await res.json();
        console.log("this is country", jsonRes);
        countriesList(jsonRes.data);
        if (jsonRes.data.length === 0) {
            alert("error: there is no country with that name");
        };
    } else
    if ($('#capital').is(':checked')) {
        const submitValue = $("#submitValue").val();
        const res = await fetch(`http://localhost:8000/capital/${submitValue}`);
        const jsonRes = await res.json();
        console.log("this is capital", jsonRes);
        countriesList(jsonRes.data);
        if (jsonRes.data.length === 0) {
            alert("error: there is no capital with that name");
        };
    } else
    if ($('#region').is(':checked')) {
        const submitregions = $("#regionInput").val();
        const res = await fetch(`http://localhost:8000/region/${submitregions}`);
        const jsonRes = await res.json();
        console.log("this is region", $("#regionInput").val(), jsonRes);
        countriesList(jsonRes.data);
        if (jsonRes.data.length === 0) {
            alert("error: there is no region with that name");
        };
    };
};