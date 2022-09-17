#include <iostream>
using namespace std;


// convert into lowercase

char toLowerCase(char ch)
{
    if(ch >= 'a' && ch <= 'z')
    {
        return ch;
    }
    else
    {
        char temp = ch - 'A' + 'a';
        return temp;
    }

}
bool checkPalindrome(char str[], int len)
{
    int start = 0;
    int end = len - 1;

    while( start <= end)
    {
        if(toLowerCase(str[start]) != toLowerCase(str[end]))
        {
            return 0;
        }
        else
        {
            start++;
            end--;
        }
    }
    return 1;
}

int getLength(char st[])
{
    int count = 0;
   for(int i =0; st[i] != '\0'; i++)
    {
       count++;
    }

    return count;

}

int main() {
char name[20];

cout<< "Enter your name: " << endl;
cin >> name;
int len = getLength(name);
cout << "Check Palindrome string is: " << checkPalindrome(name, len) <<endl;
    return 0;
}