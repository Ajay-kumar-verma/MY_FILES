#include <iostream>
using namespace std;
class node {
    public:
    int data;
    node *next;
 node(int val){
     data=val;
     next=NULL;
 }
};

void insertAtTail(node*  &head,int val){
 node* n=new node(val);
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

if(head==NULL){
    cout<<"Empty list";
    return;
}

node* temp =head;
while(temp!=NULL){
    cout<<temp->data<<"->";
    temp=temp->next;
}
cout<<"NULL"<<endl;

}


void inserAtHead(node* &head,int val){

  node* n=new node(val);
  n->next=head;
 head=n;

}

bool search(node* head,int key){

 node* temp = head;
 while(temp!=NULL){

     if(temp->data==key){
         return true;
     }
     temp=temp->next;
 }

return false;
}
node* revers(node* &head){
    node* prevptr=NULL;
    node* currptr=head;
    node* nextptr;

    while(currptr!=NULL){
        nextptr=currptr->next;
        currptr->next=prevptr;
        
        prevptr  =currptr;
        currptr=nextptr;
       
    }
 return prevptr;

}



int main(){
 
  node* head=NULL;
  insertAtTail(head,1);
  insertAtTail(head,4);
  insertAtTail(head,6);
  inserAtHead(head,89);
  display(head);
  cout<<search(head,6)<<endl;
   
  node* newhead=revers(head);
    display(newhead);


    return 0;
}