// Find a string is palindrome or not.
// Palindrome means if read a string from  Left to Right or Right to Left same 
// example Input - Madam if you read Right to left and Left to right is same 

//Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
function checkIsPalindrome(str){

    if(str.length === 0)
    {
        return true;
    }

    // Javascript is case sensitive to convert a string into lowercase
    str = str.toLowerCase();

    // let take two variables start and end;
    let start = 0,  end = str.length - 1; 

    while(start < end) // stop conditon 
    {

        // check if string in this form - man, a plan, a canal: Panama 
        // remove - specical chanraters allow only number and aplaphabets
 
        if(/^[^a-z0-9]*$/.test(str[start]))
        {
            start++;
            continue;
        }
        if(/^[^a-z0-9]*$/.test(str[end]))
        {
            end--;
            continue;
        }
        if(str[start] !== str[end])
        {
            console.log(`This ${str} is not a palindrome`);
           return false;
        }
        console.log(`This ${str} is  a palindrome`);
        start++;
        end--;
       
        return true;
    }
    
}

checkIsPalindrome("A man, a plan, a canal: Panama");


function checkIsPalindrome2(str) {
    let len = str.length;
    for(let i = 0; i < len / 2; i++)
    {
        if(str[i].toLowerCase() !== str[len - 1 - i].toLowerCase())
        {

            console.log(`This string is not a palindrome${str}`)
            return 0;
        }
        console.log(`This string is  a palindrome${str}`)
        return 1;
    }
}
const result2 = checkIsPalindrome2("Madam");
console.log(result2);


// understand above program
// let take a String Madam
// Madam string length is 5
// Madam 
// 01234
// i=0, len = 5
// 0 < 5/ 2 = 2.5 
// str[0] !== str[5- 1 - 0] = 0 !== 4 then return 0
// 

// or
function checkPalindrome(n) {

    //first convert n convert into string
    let convertedString = n.toString();
    
    //then reverse a string
    let reversedString = convertedString.split('').reverse().join('');
    
    console.log(reversedString);
    //compare the convertedString === reversedString
    return reversedString === convertedString ? true : false;
    }
    
    console.log(checkPalindrome(12321));

    //or

    function checkTheNumberPalindrome(n)
    {
        let rev = 0;
        let temp = n;

        while(temp !== 0)
        {
            let lastDigit = temp % 10;  // get last digit
            rev = parseInt(rev * 10) + parseInt(lastDigit); // then rev the number or add last digit
            temp = parseInt(temp / 10); // remove the last digit of temp
        }
        if(rev===n)
            {
                console.log("Hann bhai hu mein palindrome");
            }
            else
            {
                console.log("Nahhhh! bhai mein ni hu palindrome");
            }
        
    }

    const result3 = 123212;
    checkTheNumberPalindrome(result3);
    