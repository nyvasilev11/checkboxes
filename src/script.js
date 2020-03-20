const passes = [
  {
    result: "incomplete",
    receiver: "Demaryius Thomas",
    distance: 0.7
  },
  {
    result: "complete",
    receiver: "Tim Patrick",
    distance: 0.9
  },
  {
    result: "complete",
    receiver: "Demaryius Thomas",
    distance: 0.3
  },
  {
    result: "incomplete",
    receiver: "Tim Patrick",
    distance: 0.9
  },
  {
    result: "incomplete",
    receiver: "Tim Patrick",
    distance: 0.8
  },
  {
    result: "complete",
    receiver: "Demaryius Thomas",
    distance: 0.1
  },
  {
    result: "interception",
    receiver: "Demaryius Thomas",
    distance: 0.4
  }
];

let playersData = {};

//Collect players data
passes.forEach(pass => {
  if (!playersData.hasOwnProperty(pass.receiver)) {
    playersData[pass.receiver] = {};
    playersData[pass.receiver]["completedPasses"] = 0;
    playersData[pass.receiver]["totalPasses"] = 0;
    playersData[pass.receiver]["longDistancePass"] = 0;
  }

  playersData[pass.receiver]["totalPasses"] += 1;

  if (pass.result === "complete") {
    playersData[pass.receiver]["completedPasses"] += 1;

    if (pass.distance > playersData[pass.receiver]["longDistancePass"]) {
      playersData[pass.receiver]["longDistancePass"] = pass.distance;
    }
  }
});

//Init result objects
let mostCompletePercentage = {
  player: null,
  value: 0
};

let longDistancePass = {
  player: null,
  value: 0
};

for (const [player, data] of Object.entries(playersData)) {
  //Calculate percentage of passes caught
  let percentageOfPassesCaught = (data.completedPasses * 100) / data.totalPasses;

  //Check for biggest percentage of passes caught
  if (percentageOfPassesCaught > mostCompletePercentage.value) {
    mostCompletePercentage.player = player;
    mostCompletePercentage.value = percentageOfPassesCaught;
  }

  //Check for longest distance pass
  if (data.longDistancePass > longDistancePass.value) {
    longDistancePass.player = player;
    longDistancePass.value = data.longDistancePass;
  }
}

//Round percentages
mostCompletePercentage.value = Math.round(mostCompletePercentage.value) + "%";

//Show results
console.log(mostCompletePercentage);
console.log(longDistancePass);
