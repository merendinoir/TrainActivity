// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfwR1np1MKFHr8_fXGGEscMYmBfUQ41Ks",
    authDomain: "trainactivity-c7feb.firebaseapp.com",
    databaseURL: "https://trainactivity-c7feb.firebaseio.com",
    projectId: "trainactivity-c7feb",
    storageBucket: "trainactivity-c7feb.appspot.com",
    messagingSenderId: "9182396337"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

// Capture Button Click
$("#addTrain").on("click", function (event) {
    event.preventDefault();

    var newTrip = {
        departure: $("#dep").val().trim(),
        destination: $("#destination").val().trim(),
        time: $("#firstTrainTime").val().trim(),
        frequency: $("#trainFrequency").val().trim()
    }

    $("#dep").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");

// Code for the push
    dataRef.ref().push(newTrip);
});

dataRef.ref().on("value", function(addTrip) {
    console.log(addTrip.val());
    // newTrip = addTrip.val().newTrip
    console.log("Response key values: ", Object.keys(addTrip.val()));

    var responseKeys = Object.keys(addTrip.val());

    for (i = 0; i < responseKeys.length; i++) {
        console.log(addTrip.val()[responseKeys[i]]);
        console.log(addTrip.val()[responseKeys[i]].destination);
        console.log(addTrip.val()[responseKeys[i]].frequency);
        var dest = addTrip.val()[responseKeys[i]].destination;
        var freq = addTrip.val()[responseKeys[i]].frequency;
        var dept = addTrip.val()[responseKeys[i]].departure;
        var time = addTrip.val()[responseKeys[i]].time;
        $("#data").append('<tr><td>' + dept + '</td><td>' + dest +'</td></tr>' + '</td><td>' + time + '</td></tr>' + '</td><td>' + freq + '</td></tr>')
    }
    

})