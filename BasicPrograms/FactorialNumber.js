// Iterative Approach

function findFactorial(n)
{
    let res = 1;
    for(let i = 2; i <= n; i++)
    {
        res *= i;
    }
    return res;
}
console.log(findFactorial(5));

// Recursive Approach

function fact(n) {

    if( n === 0) // base case condition
    {
        return 1;
    }
    return n * fact(n - 1);
}

console.log(fact(6));