class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const currentNode = this.data[address];
        if(currentNode) {
            for(let i = 0; i < currentNode.length; i++) {
                if(currentNode[i][0] === key) return currentNode[i][1]
            }
        } else return undefined;
    }

    keys() {
        const keyArrays = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keyArrays.push(this.data[i][0][0]);
            }
        }
        return keyArrays;
    }

    values() {
        const valueArrays = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                valueArrays.push(this.data[i][0][1]);
            }
        }
        return valueArrays;
    }
}

let newHash = new HashTable(100);
newHash.set("grapes", "First");
newHash.set("apples", "Second");
newHash.set("oranges", "Second");
newHash.set("mango", "Secondgf");
console.log(newHash.get("mango"));
console.log(newHash.keys());
console.log(newHash.values());

