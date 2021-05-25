const crypto = require('crypto');
const prompt = require('prompt-sync')();
// we have to find a positive number less than target
const target = '0x00000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
// data is a constant message that will go in block
let string = prompt("Enter constant Data: ");
let num = 0; 

let hash = crypto.createHash('sha256').update(string).digest('hex')
 console.time("time for loop")
for(let i = 0; hash >= target; i++) {
     num = i + 1;
     hash = crypto.createHash('sha256').update(string + num).digest('hex')
 }
 console.log(num);
 console.timeEnd("time for loop");


