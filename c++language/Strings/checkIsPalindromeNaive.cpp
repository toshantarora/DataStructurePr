#include <iostream>
using namespace std;

// naive solution 
bool isPalindrome(string &str)
{
    string rev = str;
    reverse(rev.begin() , rev.end());
    return (rev == str);

    // Time compexity -- theta(n)
    // Space complexity -- theta(n)
}

// efficient sol

bool isPal(string &str) 
{
    int begin = 0;
    int end = str.length() - 1;

    while( begin  < end)
    {
        if(str[begin] != str[end])
        {
            return false;
        }
        begin++;
        end--;
    }
    return true;
}

 // Time compexity -- O(n)
    // Space complexity -- O(1)