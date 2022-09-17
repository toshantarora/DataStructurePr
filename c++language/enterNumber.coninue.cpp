#include <iostream>
using namespace std;

int main()
{
    int N,K;
    cout << "Enter the N Number: ";
    cin >> N;
    cout << "Enter the K Number: ";
    cin >> K;

    for(int i = 0; i <= N; i++)
    {
        if(i == K)
        {
            continue;
        }
        cout << i << endl;
        
    }
}