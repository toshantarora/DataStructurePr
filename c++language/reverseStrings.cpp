// usign begin and end iterator functions
#include <iostream>
using namespace std;

int main()
{
    // Declaring string
    string str;
    
    // Taking string input using getline()
    getline(cin, str);
    string::iterator it;

    string::reverse_iterator it1;

    // Displaying string
    cout << "The string using forward iterators is : ";
    for (it = str.begin(); it != str.end(); it++)
        cout << *it;
    cout << endl;

    cout << "The reverse string is : ";

    for(it1 = str.rbegin(); it1 != str.rend(); it1++)
    
        cout<< *it1;
        cout << endl;
    


return 0;

}