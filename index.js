// Code your solution in this file!

const scuberHeadquarters = 42;

function distanceFromHqInBlocks(pickupLocation){
  // let distanceFromHqInBlocksAnswer = Math.abs(pickupLocation - scuberHeadquarters);
  // return distanceFromHqInBlocksAnswer;
  return Math.abs(pickupLocation - scuberHeadquarters);
}

// console.log(distanceFromHqInBlocks(56));

function distanceFromHqInFeet(x){
  return 264 * distanceFromHqInBlocks(x);
}

// console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, end){
  let totalBlocks = Math.abs(start - end);
  return totalBlocks * 264;
}

function calculatesFarePrice(start, end){
  if (distanceTravelledInFeet(start, end) < 400){
    return 0;
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000){
    return (distanceTravelledInFeet(start, end) - 400) * .02;
  } else if (distanceTravelledInFeet(start, end) > 200 && distanceTravelledInFeet(start, end) <= 2500){
      // return (distanceTravelledInFeet(start, end) - 400) * .02;
      return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500){
      return 'cannot travel that far';
    }
}
console.log(calculatesFarePrice(300));

// function scuberGreetingForFeet(ride){
//   // let ride;
//   if (ride <= 400){
//     return 'This one is on me!';
//   }else if (ride > 400 && ride <= 2000){
//     return 'That will be twenty bucks.';
//   } else if (ride > 2000 && ride <= 2500){
//     return 'I will gladly take your thirty bucks.';
//   } else if (ride > 2500){
//     return 'No can do.';
//   }
// }
