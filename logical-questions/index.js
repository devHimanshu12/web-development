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

console.log(sumOfContinuousSubArray(arr,3))


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

console.log(secondMaximum(arr))

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

console.log(twoNumberTargetSum(arr,98))

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

console.log(twoNumTargetSum(arr,21))


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

console.log('sorted func',sortFn(unsortedArr))

// swap two number without using third variable

function swap(a,b){ 
    [a,b]=[b,a];
    return [a,b]
}

console.log(swap(5,6))

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

console.log(interection(iArr,iArr2))

const a = new Set(iArr)
const b = new Set(iArr2)

const interArr = [...a].filter(item=> b.has(item))

console.log(a,b,[...a],interArr)

// remove duplicate from string using SET

const str = "abdk ckdjkab"

const newStr = new Set(str)
const uni = [...newStr].join('')
console.log(uni)




