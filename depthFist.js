"use strict"


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach(function(child){
      child.depthFirstSearch(array);
    });
    
    return array;
  }
}

var test1 = new Node("A");
tes t1.addChild("B").addChild("C");
test1.children[0].addChild("D");
console.log(test1.depthFirstSearch([]));
