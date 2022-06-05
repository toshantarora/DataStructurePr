// Three functions using to find N Natural Numbers

// 1st using formula n * (n - 1) / 2
function findSumNatural1(n) {
  if(typeof n === "number")
  {
      return n * (n + 1)/2;
  }
}

const result1 = findSumNatural1(3);
console.log(result1);


// 2nd using for loop
   function findSumNatural2(n)
   // i/p - 3
   {
       let sum = 0;

       for(let i = 1; i <= n; i++)
           sum = sum + i;  // loop 1 + 2 + 3 
           return sum;  
   }

   const result2 = findSumNatural2(3);
   console.log(result2); // o/p - 6

// using nested loop
    function findSumNatural3(n)
    {
        let sum1 = 0; 

        for(let i = 1; i <= n; i++)
        {
            for(let j = 1; j <= i; j++)
            {
                sum1++;
                console.log(sum1)
                return sum1;
            }
        }
    }

 findSumNatural3(5);
    