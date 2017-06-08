// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCSvOu4Mej6TLLSoBIl8rjNAFfdfg9O3c",
    authDomain: "train-schedule-fd60c.firebaseapp.com",
    databaseURL: "https://train-schedule-fd60c.firebaseio.com",
    projectId: "train-schedule-fd60c",
    storageBucket: "train-schedule-fd60c.appspot.com",
    messagingSenderId: "362246187549"
  };
  firebase.initializeApp(config);
  //Create a variable to reference the database
  var database = firebase.database();

  //initial values for the administrator input
  var trainName = "";
  var destination ="";
  var firstTrainTime = 0;
  var frequency = 0;

  //capture button click
  $("#addTrain").on("click", function(event){
  	event.preventDefault();
  
	  // grab input from text boxes
	  trainName = $("#trainName").val().trim();
	  destination = $("#destination").val().trim();
	  firstTrainTime = $("#firstTrainTime").val().trim();
	  frequency = $("#frequency").val().trim();
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
  });

//code for handling the push to Firebase
		database.ref().on("value", function(childSnapshot){
      console.log(childSnapshot.val());
      var newRow = $('<tr>');
      
      var newName = $('<td>').text(childSnapshot.val().trainName).appendTo(newRow);
      var newRole = $('<td>').text(childSnapshot.val().destination).appendTo(newRow);
      var newStartDate = $('<td>').text(childSnapshot.val().firstTrainTime).appendTo(newRow);
      var newMonthRate = $('<td>').text(childSnapshot.val().frequency).appendTo(newRow);
      
      newRow.appendTo($('#new-data')); 
    }); 

/*code for creating the array
  database.ref().on("value", function(snapshot){

    //storing snapshot.val() in a variable for later
    var sv = snapshot.val();

    //for loop to create an array
    for( var key in sv){
      var thisObject = sv[key];
      console.log(thisObject);
  }
// getting an array of each key into into Firebase
    var svArr = Object.keys(sv);

 // finding the last user's key
    var lastIndex = svArr.length - 1;   
  });
// code for using the array to populate the schedule table*/
