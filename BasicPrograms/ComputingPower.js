// naive solution
// example
// input- x = 3  , n = 4
// output -  81 (3 * 3 * 3 * 3)

function ComputingPower(x, n)
{
    // inititaize res 1
    let res = 1;

    //loop
    for(let i =0; i < n; i++){

        res = res * x;
    }
    return res;
}

console.log(ComputingPower(110,2));