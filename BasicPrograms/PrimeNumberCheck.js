// Naive solution

function isPrime(n)
{
    if(n === 1)
    {
        return false;
    }

    for(let i =2; i <= n; i++)
    {
        if(n % i == 0)
        {
            return false;
        }
        return true;
    }
}

console.log(isPrime(13));

//best solution

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
        return true;
    }
}

console.log(isPrimeCheck(37))