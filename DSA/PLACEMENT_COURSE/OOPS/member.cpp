#include<iostream>
using namespace std;

class Date {
 int date,month,year;

public:
void setDay(int d){date=d;}
void setMonth(int m){ month=m;}
void setDate(int y){year=y;}

int getDay(){return  date;}
int getMonth(){return month;}
int getDate(){return  year;}


};



int main(){

Date date;

date.setDay(3);

cout<<date.getDay();

    return 0;
}
