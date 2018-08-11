


function Queue(){
    this._oldestIndex = 1;
    this._newestIndex =1;
    this._storage = {};
}

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
}

Queue.prototype.size = function(){
    return this._newestIndex - this._oldestIndex;
}

Queue.prototype.dequeue = function(){

var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
if(Object.keys(this._storage).length === 0){
    return "Queue is empty, no items to dequee";
}

  // if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
   // }


}

Queue.prototype.print = function(){
    for(var key in this._storage){
        console.log(this._storage[key]);
    }
}


var queue = new Queue();
queue.enqueue("Table");
queue.enqueue("Chair");
queue.enqueue("Printer");
queue.enqueue("HairOil");
//queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size())
