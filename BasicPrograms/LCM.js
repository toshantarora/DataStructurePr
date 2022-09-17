// recursive solution 

function Gcd(a, b)
{
    if(b === 0)
    {
        return a;
    }
    return Gcd(b, a % b);

}

function LCM(a,b ){
    return a * b / Gcd(a,b);
}
console.log(LCM(4,6)); // Time Complexity O(min(a, b))

