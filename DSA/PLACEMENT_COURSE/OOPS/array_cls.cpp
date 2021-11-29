#include<iostream>
using namespace std;
class student{
public:
string name;
string age;
};


int main(){

class student stud[2];

for(int i=0;i<2;i++){
   cout<<"Enter name .."<<endl;
   getline(cin,stud[i].name);
  // if we are using getline make sure it should be string type   
   cout<<"Enter age.."<<endl;
   getline(cin,stud[i].age);
}


for(int i=0;i<2;i++){
    // cout takes whole sentence or group of words 
   cout<<stud[i].name<<'\t';
   cout<<stud[i].age<<'\t';
   cout<<endl;
}


    return 0;
}