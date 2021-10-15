#include<iostream>
using namespace std;

void HexTodec(string s){
  string temp=s;
  int ans=0;  
  int index=1;  
 for(int i=temp.size()-1;i>=0;i--){
        if(temp[i]<='9')
        { int r=temp[i]-'0';
          ans+=r*index;
        }
       else if(temp[i]>='A' && temp[i]<='F')
       {
         int s=temp[i]-'A'+10;
         ans+=s*index;
       }
       else
       {
           cout<<"Error..!"<<endl;
           return;
       }  

      index*=16;
 }

 cout<<ans<<endl;

}


void DecToHexa(int n)
{
  string ans="";
  int  index=1;
  int temp=n;
  
  while(temp>0){
    int r=temp%16;
  
    if(r<=9)
    {
      char s=r+'0';  ans+=s;
    }
    else
    {
     char s=r+'A'-10; ans+=s;
    }
    temp/=16;
  }

  
  cout<<ans<<endl;

       

}







int main(){

while (true)
{
cout<<"Enter hexa decimal number ...!"<<endl;
// string str;
// getline(cin,str);
// HexTodec(str);


int n;
cin>>n;
DecToHexa(n);

}


 return 0;
}