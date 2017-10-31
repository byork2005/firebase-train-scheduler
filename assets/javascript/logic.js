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

var trainCount = 0;

var dbRef = firebase.database().ref();
dbRef.child('trains').on('value', function(snapshot) 
{
   var trains = snapshot.val();
   trainCount = trains.length;
   makeRows(trains);
}, function(error)
{
    console.log(error);
});

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

        addTrain(trainName, destination, firstTrain, frequency)
    });

});

var addTrain = function(trainName, destination, firstTrain, frequency)
{
    dbRef.child('trains').child(trainCount).set(
    {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }); 
}

var makeRows = function(trains) 
{
    $("tbody").empty();
    for(i = 0; i < trains.lengh; i++)
    {
        var trainNameOutput = trains[i].trainName;
        var destinationOutput = trains[i].destination;
        var firstTrainOutput = trains[i].firstTrain;
        var frequencyOutput = trains[i].frequency;

        var newRow = $("<tr>");

        var newTrainName = $("<td>").text(trainNameOutput);
        var newDestination = $("<td>").text(destinationOutput);
        var newFirstTrain = $("<td>").text(firstTrainOutput);
        var newFrequency = $("<td>").text(frequencyOutput);
        var newMinutesAway = $("<td>").text("");

        newRow.append(newTrainName);
        newRow.append(newDestination);
        newRow.append(newFrequency);
        newRow.append(newFirstTrain);
        newRow.append(newMinutesAway);

        $("tbody").append(newRow);
    }
}

    // var newRow = $("<tr>");

    // var newTrainName = $("<td>").text(trainNameOutput);
    // var newDestination = $("<td>").text(destinationOutput);
    // var newFirstTrain = $("<td>").text(firstTrainOutput);
    // var newFrequency = $("<td>").text(frequencyOutput);
    // var newMinutesAway = $("<td>").text("");

    // newRow.append(newTrainName);
    // newRow.append(newDestination);
    // newRow.append(newFrequency);
    // newRow.append(newFirstTrain);
    // newRow.append(newMinutesAway);

    // $("tbody").append(newRow);
