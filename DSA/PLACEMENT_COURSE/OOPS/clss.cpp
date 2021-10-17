#include<iostream>

using namespace std;

// By default all member of class are private 

class student
{
  
    int age;

  public:
 void setAge(){
      cin>>age;
  }
void getAge(){
    cout<<age<<"\t";
}



};



int main(){
student a[3];

for(int i=0;i<3;i++){
  a[i].setAge();
 
 }


for(int i=0;i<3;i++)
{
  cout<<a[i].getAge();
  cout<<endl;
}


    return 0;
}