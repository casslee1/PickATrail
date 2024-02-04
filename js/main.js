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
  
      newArr=[];

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
    { trailName: "Long Shore Path", lengthInKm: 17.2, difficulty: "Moderate to Difficult", lat: 47.544593, lng: -52.917690},
    { trailName: "Piccos Ridge Path", lengthInKm: 14.5, difficulty: "Strenuous", lat: 47.629338000061615, lng: -52.858152260358196},
    { trailName: "White Horse Path", lengthInKm: 18.2, difficulty: "Strenuous", lat: 47.72483252213966, lng: -52.83269907474295},
    { trailName: "Biscan Cove Path", lengthInKm: 7, difficulty: "Moderate to Difficult", lat: 47.77576619454907, lng: -52.76427323241235},
    { trailName: "Stiles Cove Path", lengthInKm: 15.1, difficulty: "Moderate", lat: 47.808192701271295, lng: -52.787024732409975},
    { trailName: "Father Troys Trail", lengthInKm: 8.9, difficulty: "Easy", lat: 47.70064844413555, lng: -52.70265049009049},
    { trailName: "Silver Mine Head Path", lengthInKm: 3.8, difficulty: "Easy", lat: 47.658105498543804, lng: -52.701918757748224},
    { trailName: "Cobblers Path", lengthInKm: 5, difficulty: "Moderate", lat: 47.63471954989772, lng: -52.66933962595794},
    { trailName: "Sugarloaf Path", lengthInKm: 8.8, difficulty: "Moderate to Difficult", lat: 47.58348138022673, lng: -52.67796173242585},
    { trailName: "Deadmans Bay Path", lengthInKm: 10.5, difficulty: "Moderate to Difficult", lat: 47.52470725029297, lng: -52.706913807546094},
    { trailName: "Cape Spear Path", lengthInKm: 15.4, difficulty: "Moderate", lat: 47.52267182625721, lng: -52.62342849031273},
    { trailName: "Motion Path", lengthInKm: 13.8, difficulty: "Moderate to Difficult", lat: 47.46293009306454, lng: -52.70485557661655},
    { trailName: "Spout Path", lengthInKm: 16.2, difficulty: "Strenuous", lat: 47.43618180684211, lng: -52.759185607581855},
    { trailName: "Mickeleens Path", lengthInKm: 7.2, difficulty: "Moderate", lat: 47.308652328760424, lng: -52.81138658404936},
    { trailName: "Beaches Path", lengthInKm: 7.1, difficulty: "Easy", lat: 47.26264089655869, lng: -52.81160787477549},
    { trailName: "Tinkers Point Path", lengthInKm: 5, difficulty: "Easy", lat: 47.23750664702713, lng: -52.830909800147516},
    { trailName: "La Manche Village Path", lengthInKm: 6.4, difficulty: "Easy", lat: 47.16276575348777, lng: -52.88043452263977},
    { trailName: "Flamber Head Path", lengthInKm: 11.5, difficulty: "Moderate to Difficult", lat: 47.163774511345544, lng: -52.880965828259136},
    { trailName: "Brigus Head Path", lengthInKm: 6.4, difficulty: "Moderate", lat: 47.099953051810076, lng: -52.89843357478685},
    { trailName: "Cape Broyle Head Path", lengthInKm: 19.4, difficulty: "Difficult to Strenuous", lat: 47.088986368409074, lng: -52.94848536129695},
    { trailName: "Caplin Bay Path", lengthInKm: 5.6, difficulty: "Easy to Moderate", lat: 47.02397485788381, lng: -52.88492393785894},
    { trailName: "Sounding Hills Path", lengthInKm: 5.4, difficulty: "Easy to Moderate", lat: 47.01198015191497, lng: -52.933878740574954},
    { trailName: "Spurwink Island Path", lengthInKm: 20.4, difficulty: "Difficult", lat: 47.01052004601296, lng: -52.96945426130245},
    { trailName: "Bear Cove Point Path", lengthInKm: 11.9, difficulty: "Moderate", lat: 46.96094518649381, lng: -52.914186661305855},
    { trailName: "Island Meadow Path", lengthInKm: 10, difficulty: "Moderate", lat: 46.8640376899864, lng: -52.93893395216589}
  ];

  let map; // Declare map variable
  let markers = [];

        // Initialize Google Map
        function initMap() {
            // Create a map object and specify the DOM element for display.
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 47.35, lng: -52.9 }, // Center the map to default location
                zoom: 8 // Adjust the zoom level as needed
            });
        }

        // Function to add markers
        function addMarkers() {

          clearMarkers();

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

                markers.push(marker);
                });
        }

        function clearMarkers() {
          // Loop through markers and set map to null
          markers.forEach(function(marker) {
              marker.setMap(null);
          });
          // Clear the markers array
          markers = [];
      }




