const reachDestination = (distance, speed) => {
    // const time = Math.round(((distance / speed)/0.5)* 0.5) + 0.5;
let time = (distance / speed);
    if (time -Math.floor(time)<0.5)
    time = Math.floor(time) + 0.5;
    if (time-Math.floor(time) >0.5)
    time = Math.ceil(time);
return `I should be there in ${time} hours.`;
};
  
module.exports = reachDestination;
