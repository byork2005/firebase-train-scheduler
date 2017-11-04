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

    var trainCount;


    // Monitor for value changes. Change trainCount and runs makeRows fn.
    var database = firebase.database();
    database.ref('trains').on('child_added', function(snapshot) 
    {
    trains = snapshot.val();
    trainCount = trains.length;
    console.log(trains.trainName);
    console.log(trains.destination);
    console.log(trains.frequency);

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
        database.ref('trains/' + length).push(
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
        console.log(trainList);

            var trainNameOutput = trainList.trainName;
            var destinationOutput = trainList.destination;
            var firstTrainOutput = trainList.firstTrain;
            var frequencyOutput = parseInt(trainList.frequency);

            runNumbers(firstTrainOutput, frequencyOutput);

            var newRow = $("<tr>");

            var newTrainName = $("<td>").text(trainNameOutput);
            var newDestination = $("<td>").text(destinationOutput);
            var newNextArrival = $("<td>").text(nextArrivalOutput);
            var newFrequency = $("<td>").text(frequencyOutput);
            var newMinutesAway = $("<td>").text(minutesAwayOutput);

            newRow.append(newTrainName);
            newRow.append(newDestination);
            newRow.append(newFrequency);
            newRow.append(newNextArrival);
            newRow.append(newMinutesAway);

            $("tbody").append(newRow);
    }

    var now = moment();
    var nextArrivalOutput;
    var minutesAwayOutput;

    function runNumbers(FTO, freq)
    {
        var now = moment();
        var iterations = 0;
        var xArray = FTO.split("");
        var hours = Number(xArray[0] + xArray[1]);
        var minutes = Number(xArray[2] + xArray[3]);

        var arrivalObject = moment().hour(hours).minute(minutes).second(0);

        loop();
        function loop()
        {
            if ((moment().isBefore(arrivalObject, "m")))
            {
                nextArrivalOutput = arrivalObject.format("HH:mm");
                var awayHour = arrivalObject.hour() - now.hour();
                var awayMin = arrivalObject.minute() - now.minute();
                if (awayMin < 0)
                {
                    awayMin = 60 + awayMin
                }
                var totalMin = (awayHour * 60) + awayMin;
                minutesAwayOutput = totalMin;
            } else
            {
                arrivalObject = moment(arrivalObject).add(freq, 'm');
                iterations++;
                loop();
            }
        }
    }

    setInterval(function()
    {
        $("tbody").empty();
        makeRows()
    }, 1000 * 60);

});