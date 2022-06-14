window.addEventListener('load', function () {
    //use fetch to create GET request
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
  
        let container = document.getElementById('container');
        let astronauts = '';
         json.sort(function (a, b) {
          return a.hoursInSpace < b.hoursInSpace ? -1 : 1;
        });
        let count = document.getElementById('count');
        count.innerHTML += `${json.length}`;


        //the for loop they said we would need in the book
        for (let astronaut of json) {
          astronauts += `<div class = "astronaut">
            <div class = "bio">
              <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
              <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li style = "color:${astronaut.active ? 'green':''}">Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.join(', ')}</li>
              </ul>
            </div>
            <img src ="${astronaut.picture}" alt="" class= "avatar"/>
          </div>`;
        }
  
        container.innerHTML = astronauts;
      });
  });