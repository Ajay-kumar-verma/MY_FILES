#include<iostream>
using namespace std;
void hex(int num){
 int  temp = num;
 char hex[50];
 int i=0;
    while (temp != 0)
    {
     int  r = temp % 16;
        if (r < 10)
         {
         hex[i++] = r + 48;
         }
        else
        {
        hex[i++] = r + 55;
        }
        temp = temp / 16;
        
    }

 for (int j = i; j > 0; j--)
        cout << hex[j];

}


int main(){
while(true){

cout<<"Enter number :";
int n;
cin>>n;
hex(n);

cout<<endl;
}

  return 0;
}