$( document ).ready(function() {

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
      alert("clicked");
    	  // grab input from text boxes
    	  trainName = $("#trainName").val().trim();
    	  destination = $("#destination").val().trim();
    	  firstTrainTime = $("#firstTrainTime").val().trim();
    	  frequency = $("#frequency").val().trim();
        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);


//code for handling the push to Firebase

      database.ref().push({
        trainName: trainName, 
        destination: destination, 
        firstTrainTime: firstTrainTime,
        frequency: frequency
      });

    });

		database.ref().on('child_added', function(childSnapshot){
      console.log(childSnapshot.val().trainName);
      var newRow = $('<tr>');
      alert(childSnapshot.val().trainName);
      var newName = $('<td>').html(childSnapshot.val().trainName).appendTo(newRow);
      var newRole = $('<td>').text(childSnapshot.val().destination).appendTo(newRow);
      var newStartDate = $('<td>').text(childSnapshot.val().firstTrainTime).appendTo(newRow);
      var newMonthRate = $('<td>').text(childSnapshot.val().frequency).appendTo(newRow);
      
  newRow.appendTo($('#new-data'));
  
    }); 

   });

  