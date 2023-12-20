/// Configuration.  Edit these values.
const targetDate = new Date("2024-01-18T00:00:00"); // Edit this date.
const updateInterval = 1000; // Update every second (1000ms).
const activationMessage = "Firo Spark has been activated!"; // Countdown ending message.
const realTimeUpdate = true; // Set to false to pause countdown.

/// Constants.  
const targetBlockHeight = 819300;
const explorerURL = "https://explorer.firo.org";
const blockDiffs = {
  high: 1000,     // 1000 blocks, or about a week.
  medium: 100,    // 100 blocks, or about 16 hours.
  low: 10,        // 10 blocks, or about 1.5 hours.
};
const queryIntervals = {
  highDiff: 24 * 60 * 60 * 1000, // 24 hours.  If the block height difference is over 1000 blocks, don't query firo.explorer.org more than once a day.
  mediumDiff: 60 * 60 * 1000,    // 1 hour.  If the block height difference is over 100 blocks, don't query firo.explorer.org more than once an hour.
  lowDiff: 10 * 60 * 1000,       // 10 minutes.
  veryLowDiff: 30 * 1000         // 30 seconds.
};

// Calculate the time difference between now and the target date.
function calculateTimeDifference() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    document.getElementById("activationMessage").innerHTML = activationMessage;
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const daysLabel = days === 1 ? "day" : "days";
    const hoursLabel = hours === 1 ? "hour" : "hours";
    const minutesLabel = minutes === 1 ? "minute" : "minutes";
    const secondsLabel = seconds === 1 ? "second" : "seconds";

    document.getElementById("days").innerHTML = `${days} ${daysLabel}`;
    document.getElementById("daysLabel").innerHTML = `${daysLabel}`;
    document.getElementById("hours").innerHTML = `${hours} ${hoursLabel}`;
    document.getElementById("hoursLabel").innerHTML = `${hoursLabel}`;
    document.getElementById("minutes").innerHTML = `${minutes} ${minutesLabel}`;
    document.getElementById("minutesLabel").innerHTML = `${minutesLabel}`;
    document.getElementById("seconds").innerHTML = `${seconds} ${secondsLabel}`;
    document.getElementById("secondsLabel").innerHTML = `${secondsLabel}`;
  }
}

/// Query to block height from explorer.firo.org.
function queryBlockHeight() {
  fetch(explorerURL + "/api/status?q=getInfo")
    .then(response => response.json())
    .then(data => {
      const latestBlockHeight = data.info.blocks;
      console.log("Latest Block Height:", latestBlockHeight);

      if (latestBlockHeight >= targetBlockHeight) {
        clearInterval(timerInterval);
        document.getElementById("activationMessage").innerHTML = activationMessage;

        document.getElementById("days").innerHTML = 0;
        document.getElementById("daysLabel").innerHTML = "days";
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("hoursLabel").innerHTML = "hours";
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("minutesLabel").innerHTML = "minutes";
        document.getElementById("seconds").innerHTML = 0;
        document.getElementById("secondsLabel").innerHTML = "seconds";
      } else {
        // Determine the next query interval based on block height difference.
        let nextQueryInterval = queryIntervals.highDiff;
        const blockHeightDifference = targetBlockHeight - latestBlockHeight;

        if (blockHeightDifference <= blockDiffs.high) {
            nextQueryInterval = queryIntervals.mediumDiff;
        }
        if (blockHeightDifference <= blockDiffs.medium) {
            nextQueryInterval = queryIntervals.lowDiff;
        }
        if (blockHeightDifference <= blockDiffs.low) {
            nextQueryInterval = queryIntervals.veryLowDiff;
        }

        // Schedule the next block height query.
        setTimeout(queryBlockHeight, nextQueryInterval);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Initial calculation.
calculateTimeDifference();

// Update the countdown at the specified interval.
const timerInterval = setInterval(() => {
  if (realTimeUpdate) {
    calculateTimeDifference();
  }
}, updateInterval);

// Start the block height query after the initial countdown update.
setTimeout(queryBlockHeight, updateInterval);
