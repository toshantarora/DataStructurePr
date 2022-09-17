function sortStringAlphabetically(str) {
    return [...str].sort().join('');
}

console.log(sortStringAlphabetically("toshantarorar"));

// separate strings and numbers from given an array
var arr = ["a", "b", 1, 4, 52, "f"];
function separateNumAndString(arr)
{
    let sortedStrings = [];
    let sortedNumber = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(typeof arr[i] === "string")
        {
        sortedStrings.push(arr[i])
        }
        if(typeof arr[i] === "number")
        {
            sortedNumber.push(arr[i])
        }
    }

    let res  = {
        sortedStrings,
        sortedNumber
    }
    return res
}


console.log(separateNumAndString(arr));