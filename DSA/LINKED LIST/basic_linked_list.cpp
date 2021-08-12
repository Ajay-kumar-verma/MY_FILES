#include<iostream>

using namespace std;


class node{
 public:
 int data;
 node* next;

 node(int val){
     data=val;
    next=NULL;
 }

};

void inserAtTail(node* &head,int val){

node* n= new node(val);

if(head==NULL){
    head=n; 
    return;
}

node* temp=head;

while(temp->next!=NULL){
temp=temp->next;
}

temp->next=n;

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

 node* head=NULL;

inserAtTail(head,3);
inserAtTail(head,2);
inserAtTail(head,5);
inserAtTail(head,7);
inserAtTail(head,9);
  
  display(head);


 return 0;
}