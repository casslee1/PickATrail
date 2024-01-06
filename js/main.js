//Get Started button on home page
function getStarted() {
  window.location.href = "./pickATrail.html";
}

//Create Account button on login page
//Get Started button on home page
function createAccount() {
  window.location.href = "./createAccount.html";
}

//Select trails by difficulty
function trailByDifficultyValue() {    
  let getSelectedValue = document.querySelector(   
      'input[name="difficultyRadio"]:checked'); 
  
    let newArr=[];

      trails.forEach(({trailName, difficulty}) => {
        if(difficulty == getSelectedValue.value){
          newArr.push(trailName);
        }
      });

      let text = "<ul>";
      newArr.forEach(myFunction);
      text += "</ul>";
      
      document.getElementById("difficultyResult").innerHTML = text;

      function myFunction(value) {
        text += "<li>" + value + "</li>";
      }

} 

//Select trails by length
let slider = document.getElementById("myRange");
let output = document.getElementById("selectedRange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


function trailByLength() {
 
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