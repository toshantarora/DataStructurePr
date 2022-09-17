#include <iostream>
using namespace std;

int main()
{
    int N;
    cout << "Enter the Number: ";
    cin >> N;

    int i = 1;
    do{
        cout << i << endl;
        i++;
    }
    while(i <= N);  
}
// Initialization of the looping control variable (if any)
// do{
//     Body of the loop
//     Statements(s)
//     Updating the looping control variable(if any)
// }
// while(control statement);