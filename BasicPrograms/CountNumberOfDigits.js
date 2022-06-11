// example  - 1234
// output is - 4

//Iterative approach
function digits_count(n) {
 let count = 0;
    while(n != 0)
    {
        n = Math.floor(n /10);
        count++;

    }
    return count;
}
//   console.log(digits_count(12112));
  
  console.log(digits_count(123456789)); // TIme complexity O(n)
// Recursive approach

const num = 2353454;
const digits = (num, count = 0) => {
   if(num){
      return digits(Math.floor(num / 10), ++count);
   };
   return count;
};
// or

const countOfDigits = (numb) => {
 if(numb / 10  === 0)
 {
     return 0;
 }
return 1 + countOfDigits(Math.floor(numb / 10));
}
console.log('Countof digits using redursive: ', countOfDigits(1234)); //Time complextiy O(log (n))
console.log(digits(num));
console.log(digits(123456)); 

// Log based solution

function logBasedCount(n) {

    return Math.floor(Math.log10( n) + 1);
}
console.log('log based',logBasedCount(1212)); // time complexity O(1) 

// 4 Method - convet number into string and get the length

const countDigitToString = (no) => {

    let numbe = no.toString();
    console.log(numbe.length); //Time complexity O(1)
}

countDigitToString(12121);