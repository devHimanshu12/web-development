// find the largest sum of any continuous subarray

const arr = [8,-9,12,3,4,1,9,23,12,90,67]

function sumOfContinuousSubArray(array,k){
    let sum = 0;
    let kSum = 0;
    for(let i=0;i<array.length-k+1;i++){
        sum = 0;
        for(let j=i;j<i+k;j++){
            sum += array[j]
        }
        if(kSum < sum){
            kSum = sum
        }
    }
    return kSum
}

// console.log(sumOfContinuousSubArray(arr,3))


// find the second maximum in an array

function secondMaximum(array){
    let max = 0;
    let secMax = 0;
    for(let i=0;i<array.length;i++){
        if(max<array[i]){
            secMax = max
            max = array[i];
        }
        if(secMax<array[i]&& max != arr[i]){
            secMax = array[i]
        }
    }
    return secMax
}

// console.log(secondMaximum(arr))

// find the two number sum of target in an array
// O(n2)

function twoNumberTargetSum(input,target){
    for(let i=0; i<input.length; i++){  
        const firstNum = input[i];
        for(let j = i+1;j<input.length;j++){ 
            const secNum = input[j]
            if(firstNum + secNum === target){
                return [firstNum,secNum]
            }
        }
    }
    return null
}

// console.log(twoNumberTargetSum(arr,98))

// optimized
// O(n)

function twoNumTargetSum(input,target){
    const numObj = {}
    for(const num of input){
        const secNum = target - num;
        if(secNum in numObj){
            return [num,secNum]
        }else{
            numObj[num]=true;
        }
    }
    console.log(numObj)
    return []
}

// console.log(twoNumTargetSum(arr,21))


// bubble sort


const unsortedArr = [2,1,3,13,12,9]

function sortFn(input){
    for(let i =0;i<input.length;i++){
        for(let j = i+1;j<input.length;j++){
            if(input[i]>input[j]){
                let temp = input[i]
                input[i] = input[j]
                input[j] = temp
            }
        }
    }

    return input
}

// console.log('sorted func',sortFn(unsortedArr))

// swap two number without using third variable

function swap(a,b){ 
    [a,b]=[b,a];
    return [a,b]
}

// console.log(swap(5,6))

// find the interection of two array 

const iArr=[2,3,4,1,89,23]
const iArr2 = [3,41,4,2,9,2]

function interection(input1,input2){
    const intersectArr = [];
    for(let i=0;i<input1.length;i++){
            if(input2.includes(input1[i])){
                intersectArr.push(input1[i])
            }
    }
    return intersectArr
}

// console.log(interection(iArr,iArr2))

const a = new Set(iArr)
const b = new Set(iArr2)

const interArr = [...a].filter(item=> b.has(item))

// console.log(a,b,[...a],interArr)

// remove duplicate from string using SET

const str = "abdk ckdjkab"

const newStr = new Set(str)
const uni = [...newStr].join('')
// console.log(uni)


// find the first non repeating character

function firstNonRepeating(str){
    const obj = {}
    for(let char of str){
        if(obj[char]){
            obj[char] += obj[char]
        }else{
            obj[char] = 1
        }
    }
    for(let char of str){
        if(obj[char]=== 1){
            return char
        }
    }
}

// console.log(firstNonRepeating("spsprogramming"))

// Find a triplet in an array that sums up to a given value
const input = [1, 5,2,4, 45, 6, 10, 10];
const sum = 15

function tripletSum(arr,sum){
    
    for(let i=0;i<arr.length;i++){
        let x = sum - arr[i] -arr[i+1]
        for(let j = i+2; j<arr.length; j++){
            if(x == arr[j]){
                return [arr[i],arr[i+1],arr[j]]
            }

        }
    }
}

console.log(tripletSum(input,sum))


// write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

function yyyyMMDD(currentDate){
    const day = currentDate.getDay();
    const rawMonth = currentDate.getMonth() + 1;
    const month = rawMonth < 10 ? `0${rawMonth}` : rawMonth 
    const year = currentDate.getFullYear();
    return `${year}-${month}-${day}`
}

// console.log(yyyyMMDD(new Date()))


// string compression

function stringCompression(str){
    const strArr = str.split('')
    console.log('str',strArr)
    let count = 0;
    let compStr = ''
    for(let i=0;i<strArr.length;i++){
        if(strArr[i] === strArr[i+1]){
            count++;
        }else{
            compStr += strArr[i]+(count+1)
            count = 0
        }
    }
    console.log(compStr)
    return compStr
}

const stringaa = 'aaabcccdda'

// stringCompression(stringaa)

// ? fibonacci series

function getFibonacciSeries(n){
    if(!n) return []
    const first = 0;
    const second = 1;
    if(n == 1) return [first]
    const fibSeries = [first,first+second]
    for(let i = 2;i<n;i++){
        const sum = fibSeries[fibSeries.length-2] + fibSeries[fibSeries.length-1] 
        fibSeries.push(sum)
    }
    return fibSeries
}

// console.log(getFibonacciSeries(10))

function createPattern(n){
    let str = ""
    for(let i=0;i<n;i++){
        for(let j = 0;j<=i;j++){
            str += "* "
        }
        str += '\n'
    }
    return str
}

// console.log(createPattern(5))


const arr1 = [2,4,"himanshu",5,2,"himanshu",59,48,89]
const arr2 = [{id:1,name:"himanshu"},{id:2,name:"vinay"},{id:19,name:"sheetal"},{id:67,name:"mehak"},{id:1,name:"himanshu"},{id:19,name:"sheetal"}]

function removeDuplicates(arr){
    const newArr = []
    for(const item of arr){
        if(typeof item === 'object'){
            const index = newArr.findIndex(_=> _.id === item.id)
            if(index === -1) newArr.push(item)
        }else{
            if(!newArr.includes(item)) newArr.push(item)
        }
    }
    return newArr
}

// console.log(removeDuplicates(arr1))
// console.log(removeDuplicates(arr2))

// ? first non repeating character

function firstNonRepChar(str){
    const obj = {}
    for(const char of str){
        if(obj[char]){
            obj[char] += obj[char]
        }else{
            obj[char] = 1
        }
    }
    for(const char of str){
        if(obj[char] == 1){
            return char
        }
    }
    return ("there is no non repeating char")
}

console.log(firstNonRepChar("himanimsasunhu"))


/**
 * There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
   Sample array :
   * array1 = [1,0,2,3,4];
   * array2 = [3,5,6,7,8,13];
   * Expected Output : [4, 5, 8, 10, 12, 13]
 */

function sumOfTwoArray(a1,a2){
    const length = a1.length > a2.length ? a1.length : a2.length
    const sumOfArr = []
    for(let i =0;i<length;i++){
        if(a1[i] && a2[i]){
            sumOfArr[i] = a1[i] + a2[i]
        }else{
            sumOfArr[i] = a1[i] ? a1[i] : a2[i]
        }
    }
    return sumOfArr
}

console.log(sumOfTwoArray([1,0,2,3,4,9,89],[3,5,6,7,8,13]))





