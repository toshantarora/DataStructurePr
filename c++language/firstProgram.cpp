#include <iostream>
//for using sort function
#include <algorithm>
using namespace std;

int main()
{
    int arr[10];
    for(int i =0; i <= 10; i++)
    {
       arr[i] = 10 - i;  
    }
    sort(arr, arr + 10);
    for(int i = 0; i < 10; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<"\n";
    return 0;
}