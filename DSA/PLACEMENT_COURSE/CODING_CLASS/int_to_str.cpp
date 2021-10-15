#include<iostream>
using namespace std;

void int_to_str(int n){
char str[100];
int temp= n;
int i=0;
while(temp>0){
 int r= temp%10;
 str[i]=r+'0';
 str[++i]='\0';
 temp/=10; 
} 

for(i;i>=0;i--){
cout<<str[i];
}
cout<<endl;

}

int main(){

while(true)
{
cout<<"Enter integral number..";
int n;
cin>>n;
int_to_str(n);
} 

return 0;

}