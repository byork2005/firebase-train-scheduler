$(document).ready(function()
{ 
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

    // Monitor for value changes. Change trainCount and runs makeRows fn.
    var database = firebase.database();
    database.ref('trains/').on('value', function(snapshot) 
    {
    trains = snapshot.val();
    trainCount = trains.length;
    makeRows(trains);
    }, function(error)
    {
        console.log(error);
    });

    // Form Submit. Collects data, runs addTrain fn.
    $("#submitBtn").on("click", function(event) 
    {
        event.preventDefault();

        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrain = $("#firstTrain").val().trim();
        var frequency = $("#frequency").val().trim();

        console.log(trainName, destination, firstTrain, frequency)
        console.log(trains)

        addTrain(trainName, destination, firstTrain, frequency) 
    });

    // Sends data to database as new entry.
    var addTrain = function(trainName, destination, firstTrain, frequency)
    {
        database.ref('trains/' + trainCount).set(
        {
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency
        }); 
    }

    // Runs through array of entrys and creates new rows for each train. Runs when change is made.
    var makeRows = function(trainList) 
    {
        $("tbody").empty();
        for(var i = 0; i < trainList.length; i++)
        {
            var trainNameOutput = trainList[i].trainName;
            var destinationOutput = trainList[i].destination;
            var firstTrainOutput = trainList[i].firstTrain;
            var frequencyOutput = trainList[i].frequency;

            var newRow = $("<tr>");

            var newTrainName = $("<td>").text(trainNameOutput);
            var newDestination = $("<td>").text(destinationOutput);
            var newNextArrival = $("<td>").text("");
            var newFrequency = $("<td>").text(frequencyOutput);
            var newMinutesAway = $("<td>").text("");

            newRow.append(newTrainName);
            newRow.append(newDestination);
            newRow.append(newFrequency);
            newRow.append(newNextArrival);
            newRow.append(newMinutesAway);

            var time = (""+firstTrainOutput).split("");
            console.log(time)





            $("tbody").append(newRow);
        }
    }

    // function timeconverter(t) 
    // {
    //        
    //         var minutes = Math.floor(t / 60);
    //         var seconds = t - (minutes * 60);
        
    //         if (seconds < 10) {
    //           seconds = "0" + seconds;
    //         }
        
    //         if (minutes === 0) {
    //           minutes = "00";
    //         }
    //         else if (minutes < 10) {
    //           minutes = "0" + minutes;
    //         }
            
        
    //         minutes + ":" + seconds;
    // };

        

});