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
        name: $("#trainName").val().trim(),
        destination: $("#destination").val().trim(),
        time: $("#firstTrainTime").val().trim(),
        frequency: $("#trainFrequency").val().trim()
    }

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");

// Code for the push
    dataRef.ref().push({newTrip});
});