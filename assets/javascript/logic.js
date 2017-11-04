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
    database.ref('trains').on('value', function(snapshot) 
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
    }

    var now = moment();
    var nextArrivalOutput;
    var minutesAwayOutput;

    // var x = testNum.split("");
    // var hours = Number(x[0] + x[1]);
    // var minutes = Number(x[2] + x[3]);

    // console.log(now);
    // var arrivalObject = moment().hour(hours).minute(minutes).second(0);
    // console.log(arrivalObject);
    // var intervalTime = moment(arrivalObject).add(180, 'm');
    // console.log(intervalTime);
    // if (moment().isBefore(arrivalObject, "m"))
    // {
    //     console.log("the event has not happened yet")
    // } else
    // {
    //     console.log('the event already happened.')
    // }

    function runNumbers(FTO, freq)
    {
        var now = moment();
        var iterations = 0;
        var xArray = FTO.split("");
        var hours = Number(xArray[0] + xArray[1]);
        var minutes = Number(xArray[2] + xArray[3]);

        var arrivalObject = moment().hour(hours).minute(minutes).second(0);
        console.log("1",FTO, freq)
        console.log("2",xArray)
        console.log("3",hours, minutes);
        console.log("4", arrivalObject)
        

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
                console.log("done")
                console.log("5",arrivalObject);
                console.log("6", nextArrivalOutput);
                console.log("7", minutesAwayOutput);
                console.log("8", awayHour, awayMin);
            } else
            {
                arrivalObject = moment(arrivalObject).add(freq, 'm');
                iterations++;
                loop();
            }
        }
    }

    // setInterval(function()
    // {
    //     makeRows()
    // }, 1000 * 60);
    






    // var string = moment(testNum, "HH:mm");
    // // moment(string, ["HHmm", "HH:mm"])
    // console.log(string);
    // var now = moment();
    // // console.log(moment(now).isBefore(string, "m"));
    // var testFreq = 90;
    
    // // console.log(now);
    // var enterTime = moment().hour(20).minute(15);
    // // console.log(enterTime);

    // moment(now).add(90, "m");
    // console.log(now);
    // console.log(now.add(90, "m"));






    // function nextArrival(first, freq)
    // {
    //     moment(first).add(freq, "m");
    //     if (moment(first).isBefore(now, "m"))
    //     {
    //         nextArrival(first, freq);
    //     } else 
    //     {
    //         var nextArrivalOutput = first;
    //         // var minutesAwayOutput = moment(first).toNow();
    //     }
    //     console.log(nextArrivalOutput);
    // }


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
           
    //         var hours = Math.floor(t / 60);
    //         var minutes = t - (hours * 60);
        
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