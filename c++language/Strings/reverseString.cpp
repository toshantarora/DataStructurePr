#include<iostream>
#include <string>
#include <algorithm>
using namespace std;

// reverse a string
void reverseString(char name[], int n)
{
    int start = 0; 
    int end  = n - 1;

    while(start < end)
    {
      swap(name[start++], name[end--]);
    }
}

// get length of string
int getLength(char name[]) {
    int count = 0;

    for(int i =0; name[i] != '\0'; i++)
    {
       count++;
    }
    return count;
}

int main() {

char name[20];

cout<< "Enter your name: " << endl;
cin >> name;

cout<< "Your name is ";
cout << name <<endl;

int len = getLength(name);
cout << "Length of string " <<len <<endl;

reverseString(name, len);

cout << "reverse string is: " << name <<endl;
    return 0;
}