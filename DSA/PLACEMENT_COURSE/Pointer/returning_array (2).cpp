#include <iostream>

using namespace std;

// int * is return type which is address of int type array 

int * getRandom( ) {
   static int  r[3]={5,4,12};
   return r;
//   Here we are returning address of array 

  

}

int main () {


   int *p;
   p = getRandom();
   for ( int i = 0; i < 3; i++ ) {
          cout << *p << endl;
    p++;
   }

   return 0;
}