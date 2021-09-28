class Iterator {
    constructor(items){
        this._items = items;
        this._index = 0;
    }

    hasNext(){
        return this._index < this._items.length;
    }

    next(){
        return this._items[this._index++]; // post increment; return current index and then increments;
    }
}


const arr = [1,2,3,4,5];


const myItr = new Iterator(arr);

while(myItr.hasNext()){
    console.log(myItr.next());
}