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

  //Array of paths, length, and difficulty
  const trails = [
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
      //Dropdown menu for path selection
      trails.forEach((trail) => {
        let o = document.createElement("option");
        o.text = trail.trailName;
        o.value = trail.trailName;
        selectTrails.appendChild(o);
      });

      //display results from trail diary entry
      function display() {
        document.getElementById("trailNameEntry").innerHTML = "Trail Name:   " +   document.form1.selectTrails.value;
        document.getElementById("dateEntry").innerHTML = "Date:   " +   document.form1.hikeDate.value;
        document.getElementById("reviewEntry").innerHTML = "Review:   " +   document.form1.review.value;
        document.getElementById("weatherEntry").innerHTML += "Weather:   " +  document.form1.weather.value;
        document.getElementById("hikingPartnersEntry").innerHTML += "Hiking Parners:   " +  document.form1.hikingPartners.value;
        document.getElementById("wildlifeEntry").innerHTML += "Wildlife Observations:   " +  document.form1.wildlifeObservations.value;
        
      };