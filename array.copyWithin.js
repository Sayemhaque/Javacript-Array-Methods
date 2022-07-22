const names = ["shakil" , "murad", "mizan" , "nimay"];

const result = names.copyWithin(1 , 0 , 2); //array.copyWithin(target, start, end)
/* 
1.copies array elements to another position in the array.
2.overwrites the existing values
3. does not add items to the array
*/
console.log(result); // output: [ 'shakil', 'shakil', 'murad', 'nimay' ]

console.log(names); // output:[ 'shakil', 'shakil', 'murad', 'nimay' ]