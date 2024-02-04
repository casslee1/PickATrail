//Navigation bar
function hamburgerNav() {
  let x = document.getElementById("navigationBar");
  if (x.className === "navigationBar") {
    x.className += " responsive";
  } else {
    x.className = "navigationBar";
  }
}

function goHome() {
  window.location.href = "./index.html";
}

function goToAbout() {
  window.location.href = "./about.html";
}

function goToPick() {
  window.location.href = "./pickATrail.html";
}

function goToTrack() {
  window.location.href = "./trackATrail.html";
}

function goToLogin() {
  window.location.href = "./login.html";
}

//Get Started button on home page
function getStarted() {
  window.location.href = "./pickATrail.html";
}

//Create Account button on login page
/*function createAccount() {
  window.location.href = "./createAccount.html";
}

//fake login
function submitLogin () {
  const userID = document.getElementById('userID');
  const userPassword = document.getElementById('userPassword');

  const userIDValue = userID.value.trim();
  const userPasswordValue = userPassword.value.trim();
 

  if((userIDValue === 'userID') && (userPasswordValue === "userPassword")){
  window.location.href = "./trackATrail.html";}
  else if(userIDValue !== 'userID'){
    alert("The user ID does not exist.");}
  else if((userIDValue === 'userID') && (userPasswordValue !== "userPassword")){
    alert("The password is incorrect.");
  }
}*/

//Slider to select trails by length
let slider = document.getElementById("myRange");
let output = document.getElementById("selectedRange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;

  //Change availability of Difficulty radio buttons based on trail length slider
  let trailDifficultyArr=[];
  trails.forEach(({difficulty, lengthInKm}) => {
    if(lengthInKm <= slider.value){
      trailDifficultyArr.push(difficulty);
    }
  });

  if (trailDifficultyArr.includes("Easy")){
    document.getElementById("Easy").disabled = false;
  }
  else {
    document.getElementById("Easy").disabled = true;
  }

  if (trailDifficultyArr.includes("Easy to Moderate")){
    document.getElementById("Easy to Moderate").disabled = false;
  }
  else {
    document.getElementById("Easy to Moderate").disabled = true;
  }

  if (trailDifficultyArr.includes("Moderate")){
    document.getElementById("Moderate").disabled = false;
  }
  else {
    document.getElementById("Moderate").disabled = true;
  }
  
  if (trailDifficultyArr.includes("Moderate to Difficult")){
    document.getElementById("Moderate to Difficult").disabled = false;
  }
  else {
    document.getElementById("Moderate to Difficult").disabled = true;
  }

  if (trailDifficultyArr.includes("Difficult")){
    document.getElementById("Difficult").disabled = false;
  }
  else {
    document.getElementById("Difficult").disabled = true;
  }

  if (trailDifficultyArr.includes("Difficult to Strenuous")){
    document.getElementById("Difficult to Strenuous").disabled = false;
  }
  else {
    document.getElementById("Difficult to Strenuous").disabled = true;
  }

  if (trailDifficultyArr.includes("Strenuous")){
    document.getElementById("Strenuous").disabled = false;
  }
  else {
    document.getElementById("Strenuous").disabled = true;
  }

}

let newArr=[];
//Select trails
function trailSuggestions() {    
  let getSelectedValue = document.querySelector(   
      'input[name="difficultyRadio"]:checked'); 
  
          trails.forEach(({trailName, difficulty, lengthInKm, lat, lng}) => {
        if(difficulty == getSelectedValue.value && lengthInKm <= slider.value){
          newArr.push({trailName, lengthInKm, lat, lng})
        }
      });

      function displayObjects(objects) {
        const trailListContainer = document.getElementById('trailSuggestions');
    
        // Clear previous content
        trailListContainer.innerHTML = '';

        const trailsList = document.createElement('ul');
    
        // Loop through each object and create HTML elements to display them
        objects.forEach(object => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');
            listItem.innerHTML = `
                <p>${object.trailName} ${object.lengthInKm}km</p>
                 `;
            trailsList.appendChild(listItem);
        });
        trailListContainer.appendChild(trailsList);
    }
    
    // Call the displayObjects function with the list of objects
    displayObjects(newArr);

      /*let text = "<ul>";
      newArr.forEach(myFunction);
      
      document.getElementById("difficultyResult").innerHTML = text;

      function myFunction(value) {
        text += "<li>" + value + "</li>";
      }*/
    // Function to add markers
    function addMarkers() {
      // Loop through each location and add a marker
      newArr.forEach(function(newArr) {
          // Create a marker for each location
          const marker = new google.maps.Marker({
              position: { lat: newArr.lat, lng: location.lng },
              map: map,
              title: location.name // Optionally, you can set a title for each marker
          });

          // Optionally, add an info window to each marker
          const infowindow = new google.maps.InfoWindow({
              content: location.name // Display the name as info window content
          });
      });
    }
 
      } 

//Trail names and attributes
let trails = [
    { trailName: "Long Shore Path", lengthInKm: 17.2, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Piccos Ridge Path", lengthInKm: 14.5, difficulty: "Strenuous", lat: 0, lng: 0},
    { trailName: "White Horse Path", lengthInKm: 18.2, difficulty: "Strenuous", lat: 0, lng: 0},
    { trailName: "Biscan Cove Path", lengthInKm: 7, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Stiles Cove Path", lengthInKm: 15.1, difficulty: "Moderate", lat: 0, lng: 0},
    { trailName: "Father Troys Trail", lengthInKm: 8.9, difficulty: "Easy", lat: 0, lng: 0},
    { trailName: "Silver Mine Head Path", lengthInKm: 3.8, difficulty: "Easy", lat: 0, lng: 0},
    { trailName: "Cobblers Path", lengthInKm: 5, difficulty: "Moderate", lat: 47.392152, lng: -52.402483},
    { trailName: "Sugarloaf Path", lengthInKm: 8.8, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Deadmans Bay Path", lengthInKm: 10.5, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Cape Spear Path", lengthInKm: 15.4, difficulty: "Moderate", lat: 0, lng: 0},
    { trailName: "Motion Path", lengthInKm: 13.8, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Spout Path", lengthInKm: 16.2, difficulty: "Strenuous", lat: 0, lng: 0},
    { trailName: "Mickeleens Path", lengthInKm: 7.2, difficulty: "Moderate", lat: 0, lng: 0},
    { trailName: "Beaches Path", lengthInKm: 7.1, difficulty: "Easy", lat: 0, lng: 0},
    { trailName: "Tinkers Point Path", lengthInKm: 5, difficulty: "Easy", lat: 0, lng: 0},
    { trailName: "La Manche Village Path", lengthInKm: 6.4, difficulty: "Easy", lat: 0, lng: 0},
    { trailName: "Flamber Head Path", lengthInKm: 11.5, difficulty: "Moderate to Difficult", lat: 0, lng: 0},
    { trailName: "Brigus Head Path", lengthInKm: 6.4, difficulty: "Moderate", lat: 0, lng: 0},
    { trailName: "Cape Broyle Head Path", lengthInKm: 19.4, difficulty: "Difficult to Strenuous", lat: 0, lng: 0},
    { trailName: "Caplin Bay Path", lengthInKm: 5.6, difficulty: "Easy to Moderate", lat: 0, lng: 0},
    { trailName: "Sounding Hills Path", lengthInKm: 5.4, difficulty: "Easy to Moderate", lat: 0, lng: 0},
    { trailName: "Spurwink Island Path", lengthInKm: 20.4, difficulty: "Difficult", lat: 0, lng: 0},
    { trailName: "Bear Cove Point Path", lengthInKm: 11.9, difficulty: "Moderate", lat: 0, lng: 0},
    { trailName: "Island Meadow Path", lengthInKm: 10, difficulty: "Moderate", lat: 0, lng: 0}
  ];

  let map; // Declare map variable

        // Initialize Google Map
        function initMap() {
            // Create a map object and specify the DOM element for display.
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 47.5, lng: -52.7 }, // Center the map to default location
                zoom: 9 // Adjust the zoom level as needed
            });
        }

        // Function to add markers
        function addMarkers() {
            // Loop through each location and add a marker
            newArr.forEach(function(location) {
                // Create a marker for each location
                const marker = new google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.trailName // Optionally, you can set a title for each marker
                });

                // Optionally, add an info window to each marker
                const infowindow = new google.maps.InfoWindow({
                    content: location.trailName // Display the name as info window content
                });

                // Add click event listener to display info window when marker is clicked
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });
        }




