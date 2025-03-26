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