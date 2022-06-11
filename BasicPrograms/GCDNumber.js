// Find Greatest Common Divisor

// Example -- a =  5 and b = 10  output will be 5 is GCD of a and b

function findGcd(a, b)
{

    let res = Math.min(a,b); // store min value example a = 5 and b = 10 so initialize with 5 minimum value
    while(res > 0)
    {
        if(a % res === 0 && b % res === 0)
        {

            break;
        }
        res--;
    }
    return res;

}

console.log(findGcd(5,10)) // Time complexit is O(min(a,b));

// optimized way using a Euclidean Algorithm

function findGcdNum(a,b)
{
    if(b === 0) // base condition 
    {
        return a;
    }

    return findGcdNum(b, a % b);
}

console.log(findGcdNum(5,10));