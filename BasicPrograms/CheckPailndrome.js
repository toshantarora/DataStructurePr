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