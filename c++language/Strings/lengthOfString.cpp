#include<iostream>
#include <string>
#include <algorithm>
using namespace std;

// make a function to getLength;
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

cout << "Length of string " << getLength(name) <<endl;
    return 0;
}