#include<iostream>

using namespace std;

class node{
 public:
 int data;
 node *next=NULL;
 };


node  insert(node head,int val){
node Node=node();
 Node.data=val;

if(head==NULL){
   return Node;
}

node* temp=head;

while(temp->next!=NULL){
temp=temp->next;
}

temp->next=Node;

return Node;
}


void display(node* head){
node* temp=head;

while (temp!=NULL)
{
    cout<<temp->data<<"\t";
    temp=temp->next;
}
}

int main(){

 node  head=NULL;

 head= inserAtTail(head,3);
 head=  inserAtTail(head,2);
 head=  inserAtTail(head,5);
//  head=  inserAtTail(head,7);
//  head=  inserAtTail(head,9);
  
  display(head);


 return 0;
}