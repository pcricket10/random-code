




const child = document.getElementById('child');
const parent = document.getElementById('parent');
const notParent = document.getElementById('not-a-parent');

isDescendant(parent, child) // true
isDescendant(notParent, child) // false


const isDescendant = (parent, child) => {
    //check if direct descendent is child
    let currNode = child
    while(currNode.parentNode){
        if(currNode.parentNode === parent) return true
        currNode = currNode.parentNode

    }
    return false;



}
