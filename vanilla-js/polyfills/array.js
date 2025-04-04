// splice polyfills...

Array.prototype.mySplice = function(idx,del=null,...items){
        const removedElements = []
        const orgArr = [...this]
        this.length = 0
        for(let i=0;i<orgArr.length;i++){
            if( i >= idx && i < idx+del){
                removedElements.push(orgArr[i])
             }else{
                // this.push(this[i])
                this[this.length] = orgArr[i]
             }
        }

        
    // Shift elements after idx to insert new items
    const rightPart = this.slice(idx); // Save elements after idx
    this.length = idx; // Trim the array at idx
    for (let i = 0; i < items.length; i++) {
        this[this.length] = items[i]; // Insert new items
    }
    for (let i = 0; i < rightPart.length; i++) {
        this[this.length] = rightPart[i]; // Reattach right part
    }
   return removedElements
}

const arr = [8,4,45,12,74,56]

console.log('my splice',arr.mySplice(2,2,87))
console.log(arr)

const spliceCheck = document.getElementById('splice')
spliceCheck.checked = true;

// slice polyfill

Array.prototype.mySlice = function(start=null,end=null){
   let slicedElements = []
   let originalArr = this
   if(!start && !end){
      return slicedElements = originalArr
   }
   if(start && !end){
      if(start>0){
         for(let i = start; i<originalArr.length;i++){
            slicedElements[slicedElements.length] = originalArr[i]
         }
      }else{
         const startPosIdx = Math.abs(start)
         const length = originalArr.length
         for(let i=length-startPosIdx; i<length;i++){
            slicedElements[slicedElements.length] = originalArr[i]
         }
      }
   }
   if(start>0 && end>0){
      for(let i = start; i<end; i++){
         slicedElements[slicedElements.length] = originalArr[i]
      }
   }
   return slicedElements
}


const sliceArr = [8,4,45,12,74,56]
console.log('without arguments',sliceArr.mySlice())
console.log('with one - 4 and two - 3,6 argument',sliceArr.mySlice(4),sliceArr.mySlice(3,6))
console.log('with neg start index (-5)',sliceArr.mySlice(-5))
console.log('orginal arr',sliceArr)

const sliceCheck = document.getElementById('slice')
sliceCheck.checked = true;


