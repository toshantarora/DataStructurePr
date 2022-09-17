#include <iostream>
using namespace std;

int main()
{
    int capacity = 100;
    int totalParticipants = 0;

    while (totalParticipants < capacity)
    {
        /* code */
        char isAlumnus;
        string passCode;
        cout << "Enter you are alumnus? (Y/N)" << endl;
        cin >> isAlumnus;
        cout << "Enter a passcode: ";
        cin >> passCode;

        if(isAlumnus != 'Y')
        {
            cout << "Sorry you are not permitted." << endl;
            continue;
        }

        if(passCode != "CLASSROOM")
        {
            cout << "Wrong passcode entered! Locking the system. No more Participants" << endl;
            break;
        }

        cout << "Welcome to the party!" << endl;
        totalParticipants = totalParticipants + 1;

    }

    if(totalParticipants == capacity)
    {
        cout << "Sorry you are late. The party hall is full now" << endl;
    }
    
}