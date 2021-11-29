#include<iostream>
using namespace std;




int main(){


// class can be used as a data type also 
// class is a user defined date type 
// wheras object is a instance of class 

// class is like data type  so we can define anywhere 
// inside main or outside main

class Date{
  public:
  int day,month,year;
};


//with class keyword or without class keyword 
// Date date;
  class Date date;

date.day=04;
date.month=11;
date.year=02;


cout<<"Date is :"<<date.day<<endl;
cout<<"Month is :"<<date.month<<endl;
cout<<"Year is :"<<date.year<<endl;

    return 0;
}