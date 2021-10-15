#include<iostream>

using namespace std;

int sum_of_digits(long n){
   if(n<9){
      return n;
   }
long temp=n;
long sum=0;
while(temp>0){
 sum+=temp%10;
 temp/=10;
}
return sum_of_digits(sum);
}
int main(){

while(true){
cout<<"Enter number..!"<<endl;
long n;
cin>>n;
cout<<"Sum of digit is ="<<sum_of_digits(n)<<endl;


}

    return 0;
}