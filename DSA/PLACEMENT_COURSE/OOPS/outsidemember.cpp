#include<iostream>
using namespace std;

class person {
string name;
 public:
 void setName(string s);
 string getName();

};

// In Cpp we can defien memeber outside also 
    
void person :: setName(string s){
name=s;
}

string person :: getName(){return name;}

int main(){

person details;

details.setName("Ajay");
cout<<details.getName();

    return 0;
}
