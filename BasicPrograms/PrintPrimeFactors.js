function PrintPrimeFactors(n)
{
    if( n <= 1)
    {
        return;
    }

    for(let i= 2; i * i <= n; i++)
    {
        while( n % i === 0)
        {
            console.log(i);
            n = n / i;
        }
    }

    if(n > 1)
    {
        console.log(n);
    }
}
// PrintPrimeFactors
// console.log(PrintPrimeFactors(12));


// Print Prime Factors from 2 to range
function isPrimeCheck(n) 
{
    //first check if n = 1 return false because n is not a prime number
    if(n === 1)
    {
        return false;
    }

    // second explicit check because 2 and 3 is a prime number
    if(n === 2 || n === 3 )
    {
        return true;
    }

    // optimize the number of iterations
    if(n % 2 === 0 || n % 3 === 0)
    {
        return false;
    }


    // loop start from 5
    for(let i = 5; i * i < n; i += 6)
    {
        if(n % i === 0 || n % (i + 2) === 0)
        {
            return false
        }
       
    }
    return true;
}

function PrintPrimeNumbers(start, end)
{
    for(let j = start; j <= end; j++)
    {
        if(isPrimeCheck(j))
        {
            console.log(j);
        }
    }
}

const res = PrintPrimeNumbers(2,8);
console.log({res});