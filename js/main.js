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

/*function trailByLength() {
 
  let lengthArr=[];

  trails.forEach(({trailName, lengthInKm}) => {
    if(lengthInKm <= slider.value){
      lengthArr.push(trailName);
    }
  });

  let text = "<ul>";
  lengthArr.forEach(myFunction);
  text += "</ul>"; 
  
  document.getElementById("lengthResult").innerHTML = text;

  function myFunction(value) {
    text += "<li>" + value + "</li>";
  }

}*/

//Select trails
function trailSuggestions() {    
  let getSelectedValue = document.querySelector(   
      'input[name="difficultyRadio"]:checked'); 
  
    let newArr=[];

      trails.forEach(({trailName, difficulty, lengthInKm}) => {
        if(difficulty == getSelectedValue.value && lengthInKm <= slider.value){
          newArr.push(trailName);
        }
      });

      let text = "<ul>";
      newArr.forEach(myFunction);
      
      document.getElementById("difficultyResult").innerHTML = text;

      function myFunction(value) {
        text += "<li>" + value + "</li>";
      }

} 

//Trail names and attributes
let trails = [
    { trailName: "Long Shore Path", lengthInKm: 17.2, difficulty: "Moderate to Difficult"},
    { trailName: "Piccos Ridge Path", lengthInKm: 14.5, difficulty: "Strenuous"},
    { trailName: "White Horse Path", lengthInKm: 18.2, difficulty: "Strenuous"},
    { trailName: "Biscan Cove Path", lengthInKm: 7, difficulty: "Moderate to Difficult"},
    { trailName: "Stiles Cove Path", lengthInKm: 15.1, difficulty: "Moderate"},
    { trailName: "Father Troys Trail", lengthInKm: 8.9, difficulty: "Easy"},
    { trailName: "Silver Mine Head Path", lengthInKm: 3.8, difficulty: "Easy"},
    { trailName: "Cobblers Path", lengthInKm: 5, difficulty: "Moderate"},
    { trailName: "Sugarloaf Path", lengthInKm: 8.8, difficulty: "Moderate to Difficult"},
    { trailName: "Deadmans Bay Path", lengthInKm: 10.5, difficulty: "Moderate to Difficult"},
    { trailName: "Cape Spear Path", lengthInKm: 15.4, difficulty: "Moderate"},
    { trailName: "Motion Path", lengthInKm: 13.8, difficulty: "Moderate to Difficult"},
    { trailName: "Spout Path", lengthInKm: 16.2, difficulty: "Strenuous"},
    { trailName: "Mickeleens Path", lengthInKm: 7.2, difficulty: "Moderate"},
    { trailName: "Beaches Path", lengthInKm: 7.1, difficulty: "Easy"},
    { trailName: "Tinkers Point Path", lengthInKm: 5, difficulty: "Easy"},
    { trailName: "La Manche Village Path", lengthInKm: 6.4, difficulty: "Easy"},
    { trailName: "Flamber Head Path", lengthInKm: 11.5, difficulty: "Moderate to Difficult"},
    { trailName: "Brigus Head Path", lengthInKm: 6.4, difficulty: "Moderate"},
    { trailName: "Cape Broyle Head Path", lengthInKm: 19.4, difficulty: "Difficult to Strenuous"},
    { trailName: "Caplin Bay Path", lengthInKm: 5.6, difficulty: "Easy to Moderate"},
    { trailName: "Sounding Hills Path", lengthInKm: 5.4, difficulty: "Easy to Moderate"},
    { trailName: "Spurwink Island Path", lengthInKm: 20.4, difficulty: "Difficult"},
    { trailName: "Bear Cove Point Path", lengthInKm: 11.9, difficulty: "Moderate"},
    { trailName: "Island Meadow Path", lengthInKm: 10, difficulty: "Moderate"}
  ];


  let map;

async function initMap() {
  // The location of Beaches Path
  const position = { lat: 47.26247133670132, lng: -52.811623612792076};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Beaches Path",
  });
}

initMap();
/*function showList() {
  let paths = document.getElementById("pathID");

  if (paths.style.display === "none") {
    paths.style.display = "block";
  } else {
    paths.style.display = "none";
  }
}*/

