class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }

    InsertAthead(data){
        let newnode=new node(data);
        if(this.head==null){
            this.head=newnode
        }else{
            newnode.next=this.head
            this.head=newnode
        }

    }

    InsertAtTail(data){
        let newnode = new node(data);
        if(this.head == null){
            this.head = newnode
        }
        let temp=this.head;
        while(temp.next!==null){
            temp=temp.next
        }
        temp.next=newnode
    }

    deleteFromHead(){
        if(this.head == null){
            console.log("link list is empty cannot delete")
            return;
        }
        let temp=this.head.next
        this.temp=null;
        this.head=temp;
        

    }

    deleteFromTail(){
        if(this.head == null){
            console.log("link list is empty cannot delete");
            return;
        }
        if(this.head.next=null){
            this.head=null
        }

        let temp=this.head;
        while(temp.next.next!==null){
            temp=temp.next
        }
        temp.next=null
    }


    display(){
        let temp=this.head;
        while(temp !== null){
            console.log(temp.data)
            temp=temp.next;
        }
    }
}

let ll =new LinkedList();
ll.InsertAthead(10)
ll.InsertAthead(20)
ll.InsertAthead(30)
ll.InsertAtTail(33);
ll.display();
console.log("***");
ll.deleteFromHead();
ll.display()

console.log("***")
ll.deleteFromTail();
ll.display();