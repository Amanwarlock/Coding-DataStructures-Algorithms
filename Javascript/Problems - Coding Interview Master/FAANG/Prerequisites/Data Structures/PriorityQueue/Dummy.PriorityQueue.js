/**
 * 
 *  Simplest way of implementing a Priority Queue (aka MinMax Heap) for interviews
 *      - Consider as Skeleton or Pseudo code
 */

class DummyPriorityQueue{

    _heap = null;
    _comparator = null;

    constructor(comparator = (x, y) => x - y){
        this._heap = [];
        this._comparator = comparator;
    }

    size(){
        return this._heap.length;
    }

    isEmpty(){
        return this._heap.length === 0;
    }

    // pop
    poll(){
        return this._heap.shift();
    }

    // 
    add(val){
        this._heap.push(val);
        this._heap.sort(this._comparator);
    }

    print(){
        console.log("Heap : ", this._heap);
    }
}



const maxHeap = new DummyPriorityQueue((x, y) => y-x);

// maxHeap.add(5);
// maxHeap.add(1);
// maxHeap.add(3);
// maxHeap.add(4);
// maxHeap.add(2);
// maxHeap.print();
// console.log(maxHeap.poll(), "Size : " + maxHeap.size());
// console.log(maxHeap.poll(), "Size : " + maxHeap.size());
// maxHeap.print();
// maxHeap.add(5);
// maxHeap.print();

const minHeap = new DummyPriorityQueue((x, y) => x-y);

minHeap.add(5);
minHeap.add(1);
minHeap.add(3);
minHeap.add(4);
minHeap.add(2);
minHeap.print();
console.log(minHeap.poll(), "Size: " + minHeap.size());
minHeap.print();
console.log(minHeap.poll(), "Size: " + minHeap.size());
minHeap.print();
minHeap.add(1);
minHeap.print();