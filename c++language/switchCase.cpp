#include <iostream>
using namespace std;

int main()
{
    int digits;
    cout << "Enter the digits: ";
    cin >> digits;
    switch(digits)
    {
        case 1: 
        cout<< "One" << endl;
        break;
        case 2: 
        cout<< "two" << endl;
        break;
        case 3: 
        cout<< "three" << endl;
        break;
        case 4: 
        cout<< "four" << endl;
        break;
        case 5: 
        cout<< "five" << endl;
        break;
         case 6: 
        cout<< "six" << endl;
        break;
         case 7: 
        cout<< "seven" << endl;
        break;
         case 8: 
        cout<< "eight" << endl;
        break;
         case 9: 
        cout<< "nine" << endl;
        break;
         case 10: 
        cout<< "ten" << endl;
        break;
        default:
        break;
    }
    
}


// switch (expression)
// {
// case 1:
// Action when evaluated expression is 1
// statements(s)
//     break;

// case 2:
// Action when evaluated expression is 1
// statements(s)
//     break;    

// default:
//     break;
// }

//to prevent the nested if else statement and code readablity is good rather than nested if else statement

