fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name.common}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>Name: ${country.name.common}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flags.svg}" alt="" />
    `;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}