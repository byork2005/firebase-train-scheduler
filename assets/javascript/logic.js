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
    // var mathHours;
    // var mathMinutes;
    // var totalMinutes;

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
            var frequencyOutput = parseInt(trainList[i].frequency);

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

            $("tbody").append(newRow);
        }
    }

    var nextArrivalOutput;
    var minutesAwayOutput;


    var string = moment("2300", "HHmm");
    console.log(string);
    var now = moment();
    console.log(moment(now).isBefore(string, "m"));
    var testFreq = 90;
    var test = moment("1900", "HHmm").add(25, 'm');
    console.log(test);

    function nextArrival(first, freq)
    {
        moment(first).add(freq, "m");
        if (moment(first).isBefore(now, "m"))
        {
            nextArrival(first, freq);
        } else 
        {
            var nextArrivalOutput = first;
            // var minutesAwayOutput = moment(first).toNow();
        }
        console.log(nextArrivalOutput);
    }

    // function nextArrival()
    // {
    //     moment("23:00").add(90, "m");
    //     if (moment("23:00").isBefore(now, "m"))
    //     {
    //         nextArrival("23:00", 90);
    //     } else 
    //     {
    //         var nextArrivalOutput = "23:00";
    //         var minutesAwayOutput = moment("23:00").toNow;
    //     }
    // }
    nextArrival(string, testFreq);
    







    // function stdTime(FTO)
    // {
    //     var firstTime = FTO.split(":");
    //     var hours = Number(firstTime[0]);
    //     var minutes = Number(firstTime[1]);
    //     mathHours = Number(firstTime[0]);
    //     mathMinutes = Number(firstTime[1]);
    //     totalMinutes = (mathHours * 60 + mathMinutes)

    //     var convertedStdTime;

    //     if (hours > 0 && hours <= 12)
    //     {
    //       convertedStdTime= "" + hours;
    //     } else if (hours > 12)
    //     {
    //         convertedStdTime= "" + (hours - 12);
    //     }
    //     else if (hours == 0)
    //     {
    //       convertedStdTime= "12";
    //     }
         
    //     convertedStdTime += (minutes < 10) ? ":0" + minutes : ":" + minutes;
    //     convertedStdTime += (hours >= 12) ? " P.M." : " A.M.";   
    //     console.log(convertedStdTime)  
    // }




    // function timeconverter(t) 
    // {
    //        
    //         var hours = Math.floor(t / 60);
    //         var seconds = t - (hours * 60);
        
    //         if (minutes < 10) {
    //           minutes = "0" + minutes;
    //         }
        
    //         if (hours === 0) {
    //           hours = "00";
    //         }
    //         else if (hours < 10) {
    //           hours = "0" + hours;
    //         }
            
        
    //        hours + ":" + minutes;
    // };

        

});