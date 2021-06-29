class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  getMatchCount(word, node = this.root) {
    let wordArr = [];
    let str = new String();
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return 0;
      } else {
        str = str.concat(word[0]);
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }

    const search = function (node, str, wordsArr) {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), str.concat(letter), wordsArr);
        }
        if (node.isEnd()) {
          wordsArr.push(str);
        }
      } else {
        wordsArr.push(str);
        return;
      }
    };

    if (node.keys.has(word)) {
      str = str.concat(word[0]);
      node = node.keys.get(word[0]);
      search(node, str, wordArr);
    } else {
      return 0;
    }
    return wordArr.length;
  }

  print() {
    let words = new Array();
    let search = function (node, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : mo;
  }
}

/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */

function contacts(queries) {
  // Write your code here
  console.log("Queries : ", queries);

  const myTrie = new Trie();

  const arr = [];

  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === "add") {
      myTrie.add(queries[i][1]);
    } else if (queries[i][0] === "find") {
      let count = myTrie.getMatchCount(queries[i][1]);
      arr.push(count);
      console.log(count);
    }
  }

  myTrie.print();

  return arr;
}

const queries = [
  ["add", "hack"],
  ["add", "hackerrank"],
  ["find", "hac"],
  ["find", "hak"],
];

contacts(queries);
