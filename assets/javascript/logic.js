 // Initialize Firebase
var config = {
    apiKey: "AIzaSyDj2Ugq-1GcD4F0vGkaJbCNx6ijUNSRkxQ",
    authDomain: "trainproject-cf11b.firebaseapp.com",
    databaseURL: "https://trainproject-cf11b.firebaseio.com",
    projectId: "trainproject-cf11b",
    storageBucket: "trainproject-cf11b.appspot.com",
    messagingSenderId: "118238346812"
};
firebase.initializeApp(config);

var database = firebase.database();




$(document).ready(function()
{
    $("#submit").on("click", function(event) 
    {
        event.preventDefault();

        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrain = $("#firstTrain").val().trim();
        var frequency = $("#frequency").val().trim();

        console.log(trainName, destination, firstTrain, frequency)

        var newRow = $("<tr>");
        
            var newTrainName = $("<td>").text(trainName);
            var newDestination = $("<td>").text(destination);
            var newFirstTrain = $("<td>").text(firstTrain);
            var newFrequency = $("<td>").text(frequency);
            var newMinutesAway = $("<td>").text("");
        
            newRow.append(newTrainName);
            newRow.append(newDestination);
            newRow.append(newFrequency);
            newRow.append(newFirstTrain);
            newRow.append(newMinutesAway);
        
            $("tbody").append(newRow);
    })

    // var newRow = $("<tr>");

    // var newTrainName = $("<td>").text(trainName);
    // var newDestination = $("<td>").text(destination);
    // var newFirstTrain = $("<td>").text(firstTrain);
    // var newFrequency = $("<td>").text(frequency);
    // var newMinutesAway = $("<td>").text("");

    // newRow.append(newTrainName);
    // newRow.append(newDestination);
    // newRow.append(newFrequency);
    // newRow.append(newFirstTrain);
    // newRow.append(newMinutesAway);

    // $("tbody").append(newRow);

});