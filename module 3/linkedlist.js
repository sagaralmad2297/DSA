class node{
    constructor(data){
        this.data=data;//this parameter store the actual data of the representation by the node
        this.next=null;//this parameter store the address of the next adjasent node
    }
}

class LinkedList {
    constructor(){
        this.head=null;//head store the address of the first node of our linked list
    }

    InsertAtHead(data){
        /**
         * time O(1);
         */
        //data is the value to be stored in new node
        let newNode=new node(data);
        if(this.head==null){
            this.head=newNode
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }

    }

    InsertAtTail(data){
        /**
         * time O(n)
         */
        let newNode= new node(data);
        if(this.head == null){
            //if the linked list is empty head is the 
            this.head =newNode;
        }
        //if the linked list is not empty, iterate towards the tail node and then add
        let temp=this.head;

        
        while(temp.next !== null){

            temp=temp.next;
            
        }
        temp.next=newNode//add the new node after tail, make the new node as new tail
    }

    insertAt(data,idx){
        if(idx==0){
            this.InsertAtHead(data);
            return;
        }
        let temp=this.head;
        for(let i=0; i<idx-1 && temp!==null; i++){
            temp=temp.next;
        }
        if(temp== null){
            console.log("cannot add node at this index");
            return
        }
        let newNode=new node(data);
        newNode.next=temp.next;
        temp.next=newNode;
    }

    deleteAt(idx){
        if(idx== 0){
            this.deleteFromHead();
            return;
        }
        let temp=this.head;
        for(let i=0; i<idx-1 && temp!==null; i++){
            temp=temp.next;
        }
        if(temp==null){
            console.log('cannot remove an element at this index')
            return;
        }
        let tobedeleted=temp.next;
        temp.next=tobedeleted.next;
        tobedeleted.next=null;
    }
     
    getAt(idx){
        let temp=this.head;
        for(let i=0; i<idx && temp!==null; i++){
            temp=temp.next;
        }
        if(temp==null){
            console.log('cannot retrive data of the node present at the index');
            return;
        }
        return temp.data;
    }

    
    

    deleteFromHead(){
        /**
         * time O(1)
         */
        if(this.head==null){
            console.log('cannot remove a node from empty linked list');
            return;
        }
        let temp=this.head.next;
        this.head=null;
        this.head=temp;
    }

    deleteFromTail(){
        /**
         * time O(n)
         */
        if(this.head == null){
            console.log("cannot remove a node from empty linked list")
            return;
        }
        if(this.head.next==null){
            //the head node is the tail node also
            this.head =null;
        }
        let temp=this.head;
        while(temp.next.next!==null){
            temp=temp.next;
        }
        //we have the access to the second last node
        temp.next=null;
    }

    display(){
        let temp=this.head;
        while(temp !== null){
            console.log(temp.data)
            temp=temp.next;
        }
    }
}

let ll=new LinkedList();
ll.InsertAtHead(10);
ll.InsertAtHead(20);
ll.InsertAtHead(30);
ll.display();
console.log('***');
console.log(ll.getAt(8));

