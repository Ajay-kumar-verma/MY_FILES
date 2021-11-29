#include<iostream>
using namespace std;
void octaToDec(int n){
 int dec=0;  int index=1;
 int rem; 
 while(n>0)
 {
   rem=n%10;
   if(rem>8)
      cout<<" Error"<<endl;break;
  
  dec+=rem*index;
  index*=8;
  n/=10;
 } 
cout<<dec <<""<<endl;
}





void DecToOcta(int n){
 long ans=0;
 long index=1;
 int temp=n;

  while(temp>0){
  int r= temp%8;
  ans= r*index+ans;
  index*=10;
  temp/=8;
  }


cout<<ans<<endl;

}




int main(){
    
while(true)
{
 int n; 
  cin>>n;
//  octaToDec(n);
DecToOcta(n);

}


}
