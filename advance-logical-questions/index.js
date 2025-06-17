const arr = [45,45,89,23,19383,2992,12,90,-450,23,34,45,56,67,78,89,90,56,367,34,45]

const sortedArr = arr.sort((a,b)=> a-b)
console.log(sortedArr)
function binarySearch(array,searchElem){
    if(!searchElem){
        return null
    }
    let leftIdx = 0;
    let rightIdx = array.length;
    while(leftIdx < rightIdx){
        let midIdx = Math.floor((rightIdx + leftIdx)/2)
        if(array[midIdx] === searchElem){
            return midIdx
        }else if(searchElem > array[midIdx]){
            leftIdx = midIdx + 1;
        }else if(searchElem < array[midIdx]){
            rightIdx = midIdx - 1;
        } 
    }
    return -1
}

console.log(binarySearch(sortedArr,-450))


// 2. Sort array of object based on title 
const library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];

function sortArray(array){
    const sortedArr = array.sort((a,b) => a.title > b.title ? 1 : -1)
    console.log(sortedArr)
}

console.log(sortArray(library))


// 3. Find Anagram 

function checkAnagram(firstInput,secondInput){
    if(firstInput.length !== secondInput.length){
        return 'not an anagram'
    }
    const x = firstInput.split('')
    for(const char of x){
        if(!secondInput.includes(char)){
            return 'not an anagram'
        }
    }
    return 'anagram'
}

console.log(checkAnagram('silent','listeen'))

