#include<iostream>
using namespace std;

class stud{
 public:
 string name;
 string age;
};



int main(){
 stud st;  
 stud *studs= &st;
// Here studs is a pointer typed 

cout<<"Enter name..!"; 
 // pointer can be accessed using  arrow operator 
// getline(cin,studs->name); 

cin>>studs->name;
cout<<"Enter age..";


cin>>(*studs).age;

cout<<(*studs).name;
cout<<studs->age;

    return 0;
}