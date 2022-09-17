#include <iostream>
using namespace std;

int main() {

   char x = 'a';
   char str[] = "toshant";
   char str1[] = {'t', 'o', 's','\0'}; // we must use /0 if you want to length or sizeof functions
   cout << (int)x << endl;
   cout << sizeof(str) << endl; // op - 8 because sizeof an array gives you size of an array
   //size of char one byte because is an extra back slash 0 (/0) at the end that's why you get o/p 8

   cout << sizeof(str1) << endl; 
    return 0;
}

// Functions used for c-style strings - main 3 functions are most use
// 1). strlen(str) - which is used to find length of the string. It gives a character of array
// it will traverse the character array until it find a backslash zero and counts the character 
// and returns that count.

// 2). strcmp(s1, s2) - It compares two strings lexicographically. If the first string is greater
// than the second string, then it returns a positive value. if they are both lexicographically same
// if the both strings are same then it returns zero (0). if the  first string lexicographically smaller
// than second string it returns a negative value

// Example ------

int main() {


   char s1[] = "abc";
   char s2[] = "bcd";
   int res = strcmp(s1, s2);

   if(res > 0) 
   {
    cout << "greater";
   }
   else if( res == 0)
   {
    cout <<"same";
   }
   else 
   {
    cout << "smaller";
   }
    return 0;
}


// 3). strcpy(s1, s2) - 

// Example ----- //
int main() {

    char st[];
    // st = "gfg"; // it gives a compliation error
    strcpy(st, "gfg");
    cout << st;

    return 0;
}

// use C++ string instead of C style string
// * Richer library
// * Support Operators like +, <, >, ==, , <=, >=,  are possible
// * Can assign a string later ex- string str; str = "gfg"; if c style string we use strcpy
// * Do not have to worry about size
// * Can be converted to C-style if needed

// Example -

int main() {

    string strin = "geek";
    cout << strin.length() << " ";
    strin = strin + "for"; // it concatenates
    cout << strin << "";
    cout << strin.substr(1,3)<< ""; // two parameters beginning index and lenght of the substring you want to find
    cout << strin.find("eek") << " "; // It is a two to search a string in a given string. you will find a index eek if it present in the string
    // it returns  index of first occurrence it gives o/p 1 . if string is not present in a given string, then find function returns 
    // a special constants called string::npos no position found
}

// Reading Strings from console 

int main() {

    string st12;
    cout << "Enter your name: ";
    cin >> st12;
    cout << "\n your name is" << st12; // it print the name if your enter Toshant it prints but if you enter a Toshant Arora it print only Toshant
    // because in cin operator, when it sees a space it stops reading the character when it sees a space or a new line character So how do we read
    // a string with spaces. we don't use cin  for this purpose we have a function getline(cin , str)

    return 0;
}

// Iterating through a string

int main() {

    string str22 = "geeeksforgeeks";
    for(int i = 0; i <str22.length(); i++)
    {
        cout <<str22[i];
        cout <<endl;

        //another method
        // for(char x : str22)
        // cout<<x;
    }
}