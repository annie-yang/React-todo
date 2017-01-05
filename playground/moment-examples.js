var moment =require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp:', now.unix());

var timestamp = 1483643271;
var currentMoment = moment.unix(timestamp);

// Version 1
console.log('Current moment:', currentMoment.format('MMM D Y @ h:mm A'));


// Version 2
console.log('Current moment:', currentMoment.format('MMMM Do Y @ h:mm A'));
