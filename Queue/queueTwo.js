//https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/



function Queue(capacity){
    this.capacity = capacity;
    this.front = 0;
    this.rear =capacity-1;
    this.size = 0;
    this.array = new Array(5);
}

Queue.prototype.isFull = function(){
    this.size === this.capacity;
}

Queue.prototype.enqueue = function(data){
        if(this.isFull()){
            return "Queue Is Full";
        }
        this.rear = (this.rear+1) % this.capacity;
        this.array[this.rear] = data;
        this.size = this.size + 1;
}

Queue.prototype.deQueue = function(){
    var item = this.array[this.front];

    this.front = (this.front+1)%this.capacity;
    this.size = this.size-1;
    return item;
}

Queue.prototype.print = function(){
    for(var i=0; i< this.array.length; i++){
        console.log(this.array[i]);
    }
}

var queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.deQueue();



queue.print();