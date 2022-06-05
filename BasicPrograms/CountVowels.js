// count a vowels in a given string

const vowels = ["a", "e", "i", "o", "u"];
function CountVowels(str) {
    let count = 0;

    for(let letters of str.toLowerCase())
    {
        if(vowels.includes(letters))
        {
            count++;
        }
    }
    return count;
}
    

const result = CountVowels("I am a boy");
console.log(result);

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

const result2 = countVowel("Hey How are you");

console.log(result2);