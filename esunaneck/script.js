// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://eu.api.battle.net/wow/character/aggra-portugues/Esunä?fields=items&locale=en_GB&apikey=h8532e7wbbt5wwm22cvhp8387zzps22m', true);

request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
    console.log(data["items"]["neck"]["itemLevel"]);

    const app = document.getElementById('root');
    const ilvl = document.createElement('ilvl');

    const h1 = document.createElement('p');
    h1.textContent = "Item level: " + data["items"]["neck"]["itemLevel"];
    app.appendChild(h1);

    const h2 = document.createElement('p');
    h2.textContent = "Azerite Level: " + data["items"]["neck"]["azeriteItem"]["azeriteLevel"];
    app.appendChild(h2);

    const h3 = document.createElement('p');
    h3.textContent = "AP for next Azerite Level: " + data["items"]["neck"]["azeriteItem"]["azeriteExperienceRemaining"];
    app.appendChild(h3);

  }

// Send request
request.send();