/// Configuration.  Edit these values.
const targetBlockHeight = 819300; // Target block height.
const updateInterval = 1000; // Update every second (1000ms).
const activationMessage = "Firo Spark has been activated!"; // Countdown ending message.
const explorerURL = "https://explorer.firo.org";
const defaultRemainingTime = 525.5 * 60 * 1000; // Default remaining time in milliseconds (525.5 minutes).

// Constants for block height difference intervals and query intervals.
const blockDiffs = {
  high: 1000,
  medium: 100,
  low: 10,
};
const queryIntervals = {
  highDiff: 24 * 60 * 60 * 1000,
  mediumDiff: 60 * 60 * 1000,
  lowDiff: 10 * 60 * 1000,
  veryLowDiff: 30 * 1000
};

// Calculate the time difference based on blocks remaining.
function calculateTimeDifference(blocksRemaining) {
  const timeDifference = blocksRemaining > 0 ? blocksRemaining * 2.5 * 60 * 1000 : 0;

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

    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("daysLabel").innerHTML = `${daysLabel}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("hoursLabel").innerHTML = `${hoursLabel}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("minutesLabel").innerHTML = `${minutesLabel}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;
    document.getElementById("secondsLabel").innerHTML = `${secondsLabel}`;
  }
}

// Query the current block height and calculate the time difference.
function queryBlockHeight() {
  fetch(explorerURL + "/api/status?q=getInfo")
    .then(response => response.json())
    .then(data => {
      const latestBlockHeight = data.info.blocks;
      console.log("Latest Block Height:", latestBlockHeight);

      const blocksRemaining = targetBlockHeight - latestBlockHeight;
      calculateTimeDifference(blocksRemaining);

      if (blocksRemaining <= 0) {
        clearInterval(timerInterval);
        document.getElementById("activationMessage").innerHTML = activationMessage;
      } else {
        // Determine the next query interval based on block height difference.
        let nextQueryInterval = queryIntervals.highDiff;

        if (blocksRemaining <= blockDiffs.high) {
            nextQueryInterval = queryIntervals.mediumDiff;
        }
        if (blocksRemaining <= blockDiffs.medium) {
            nextQueryInterval = queryIntervals.lowDiff;
        }
        if (blocksRemaining <= blockDiffs.low) {
            nextQueryInterval = queryIntervals.veryLowDiff;
        }

        // Schedule the next block height query.
        setTimeout(queryBlockHeight, nextQueryInterval);
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      // Use default remaining time if there's an error fetching data.
      calculateTimeDifference(Math.round(defaultRemainingTime / (2.5 * 60 * 1000)));
    });
}

// Start the initial query.
queryBlockHeight();

// Update the countdown at the specified interval.
const timerInterval = setInterval(queryBlockHeight, updateInterval);