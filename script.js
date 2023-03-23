function Search()
{
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementsByClassName('SearchInput')[0];
  filter = input.value.toUpperCase();
  ul = document.getElementById("Labels");
  li = ul.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("Amgous")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

window.onload= function()
{
    const api_url = "https://restcountries.com/v3.1/all";
    async function getUser() {
      
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_url);

      // Parsing it to JSON format
      const data = await response.json();
      
      // Retrieving data from JSON
      const parent = document.getElementById('Labels');
      
      for (let i = data.length -1; i >= 0; i--) {
        if (data[i].name.common == "Israel") {continue;}
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        parent.appendChild(cardDiv);

        const figure = document.createElement("figure");
        cardDiv.appendChild(figure);

        const img = document.createElement('img');
        img.className = "FlagImage";
        img.alt = data[i].flags.alt;
        img.src = data[i].flags.svg;
        figure.appendChild(img);

        const figcaption = document.createElement('figcaption');
        figure.appendChild(figcaption);

        const h1 = document.createElement('h1');
        h1.className = "Nunito_Sans_Weight_800 Amgous";
        h1.innerHTML = data[i].name.common;
        figcaption.appendChild(h1);

        const article = document.createElement("article");
        article.className = "info";
        cardDiv.appendChild(article);

        //////////////////////////////////////////
        const h21 = document.createElement('h2');
        h21.className = "Nunito_Sans_Weight_600";
        h21.innerHTML = "<strong>Population:&nbsp</strong>" + data[i].population.toLocaleString('EN-US');
        article.appendChild(h21);
        //////////////////////////////////////////
        const h22 = document.createElement('h2');
        h22.className = "Nunito_Sans_Weight_600";
        h22.innerHTML = "<strong>Region:&nbsp</strong>" + data[i].region;
        article.appendChild(h22);
        //////////////////////////////////////////
        const h23 = document.createElement('h2');
        h23.className = "Nunito_Sans_Weight_600";
        h23.innerHTML = "<strong>Capital:&nbsp</strong>" + String(data[i].capital);
        article.appendChild(h23);
        //////////////////////////////////////////

        img.onclick = function()
        {
          window.location.href = 'CountryDetails.html';
          sessionStorage.setItem("CountryNumber", i);
        };
      }
    }
    
    // Calling the function
    getUser();
}

