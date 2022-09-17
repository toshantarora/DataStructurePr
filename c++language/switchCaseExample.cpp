#include <iostream>
using namespace std;

int main()
{
    cout << "Welcome to spenny" <<endl;
    cout << "We Have Three Products" << endl;
    cout << "1. GOLD" << endl;
    cout << "2. MUTUALFUNDS" << endl;
    cout << "3. SPENNY WISE" << endl;

   char product;
   cout << "Enter the Product : " << endl;
   cin >> product;

   switch (product)
   {
   case '1':
        cout << "Gold always gives better interest" << endl;
         break;
   case '2':
        cout << "Mutual funds give 10 percentage fix interest annually" << endl;
         break;      
   case '3':
       
        cout << "Spenny wise give 10 percentage fix interest annually" << endl;
         break;   
//    default:
//     break;
   }  
}