#include<iostream>
#include<cmath>
using namespace std;
class q{
    int a, b, c;
public:
void abc(){
 cout<<"a "<<endl;
 cin>>a;
 cout<<"b "<<endl;
 cin>>b;
 cout<<"c "<<endl;
 cin>>c;
}

void getRoot(){
    
float d=sqrt((b*b-4*a*c));
float r1=(-b+d)/(2*a);
float r2=(-b-d)/(2*a);

cout<<"First root is :"<<r1<<endl;
cout<<"First root is :"<<r2<<endl;
}



};

int main(){

q qr;

qr.abc();
qr.getRoot();

main();
 
 return 0;
}
