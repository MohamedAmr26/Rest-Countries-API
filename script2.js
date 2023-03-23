window.onload= function()
{
  const api_url = "https://restcountries.com/v3.1/all";
  async function getUser() {

  const response = await fetch(api_url);
  const data = await response.json();
  var i = sessionStorage.getItem('CountryNumber');
  console.log(data[i]);

  const FlagImage = document.getElementsByClassName('FlagImage')[0];
  FlagImage.className = "FlagImage";
  FlagImage.alt = data[i].flags.alt;
  FlagImage.src = data[i].flags.svg;

  const CountryName = document.getElementsByClassName('CountryName')[0];
  CountryName.innerHTML = data[i].name.common;

  const NativeName = document.getElementsByClassName('NativeName')[0];
  NativeName.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Native Name: </strong>" + data[i].name.nativeName[Object.keys(data[i].name.nativeName)[0]].common;

  const Population = document.getElementsByClassName('Population')[0];
  Population.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Population: </strong>" + data[i].population.toLocaleString('EN-US');

  const Region = document.getElementsByClassName('Region')[0];
  Region.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Region: </strong>" + data[i].region;

  const SubRegion = document.getElementsByClassName('SubRegion')[0];
  SubRegion.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Sub Region: </strong>" + data[i].subregion;

  const Capital = document.getElementsByClassName('Capital')[0];
  Capital.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Capital: </strong>" + String(data[i].capital);

  const TopLevelDomain = document.getElementsByClassName('TopLevelDomain')[0];
  TopLevelDomain.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Top Level Domain: </strong>" + data[i].tld[0];

  const Currencies = document.getElementsByClassName('Currencies')[0];
  var alr = "<strong class='Nunito_Sans_Weight_800'>Currencies: </strong>";
  Currencies.innerHTML = alr;

  for (let x = 0; x < Object.keys(data[i].currencies).length; x++) {
    if (Object.keys(data[i].currencies).length > 1 & x+1 != Object.keys(data[i].currencies).length){
      Currencies.innerHTML = alr + " " + data[i].currencies[Object.keys(data[i].currencies)[x]].name + ", ";
      alr = Currencies.innerHTML;  
    }
    else{
      Currencies.innerHTML = alr + " " + data[i].currencies[Object.keys(data[i].currencies)[x]].name;
      alr = Currencies.innerHTML;  
    }
  }

  const Languages = document.getElementsByClassName('Languages')[0];
  var alr2 = "<strong class='Nunito_Sans_Weight_800'>Languages: </strong>";
  Languages.innerHTML = alr2;

  for (let x = 0; x < Object.keys(data[i].languages).length; x++) {
    if (Object.keys(data[i].languages).length > 1 & x+1 != Object.keys(data[i].languages).length){
      Languages.innerHTML = alr2 + " " + data[i].languages[Object.keys(data[i].languages)[x]] + ", ";
      alr2 = Languages.innerHTML;  
    }
    else{
      Languages.innerHTML = alr2 + " " + data[i].languages[Object.keys(data[i].languages)[x]];
      alr2 = Languages.innerHTML;  
    }
  }

  const borderCountriesH2 = document.getElementsByClassName('borderCountriesH2')[0];
  borderCountriesH2.innerHTML = "<strong class='Nunito_Sans_Weight_800'>Border Countries: </strong>";

  if (Object.keys(data[i].borders)){
    for (let x = 0; x < Object.keys(data[i].borders).length; x++) {
      const h2 = document.createElement("h2");
      const parent = document.getElementsByClassName('borderCountries')[0];
      h2.className = "Label Nunito_Sans_Weight_300 EffectAfter";
      parent.appendChild(h2);
      
      for (let u = 0; u < data.length-1; u++) {
        if (data[u].cca3 == data[i].borders[x])
        {
          h2.innerHTML = data[u].name.common;
        }
      }

      h2.onclick = function()
      {
        for (let k = 0; k < data.length-1; k++) {
          if (data[k].cca3 == data[i].borders[x])
          {
            window.location.href = 'CountryDetails.html';
            sessionStorage.setItem("CountryNumber", k);    
          }
        }
      };
    }
  }
  }

  getUser();
}

