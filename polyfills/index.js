/*1.Promise.all polyfill
 **/

const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("resolved 1")
        // rej('rej 1')
    },1000)
})

const promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("resolved 2")
        // rej('rej 2')

    },1000)
})

const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("res 3")
        rej('rej 3')
    },2000)
})

Promise.myAllPromise = function(promises){
    if(promises.length === 0) return Promise.resolve([]);
    const promiseResults = [];
    let resolvedPromises = 0;
    return new Promise((res,rej) => {
        for(let i = 0; i<promises.length; i++){
            promises[i].then((result)=> {
                promiseResults[i] = result;
                resolvedPromises++;
                if(resolvedPromises === promises.length)
                   res(promiseResults)
            })
            .catch(err => {
                rej(err)
            })
        }
    })
}


// Promise.myAllPromise([promise1,promise2,promise3]).then((res) =>{
//     console.log('res my promise all',res)}).catch(err=> console.log(err))

// Promise.all([promise1,promise2,promise3]).then((res) =>{
//     console.log('res promise all',res)}).catch(err=> console.log(err))


/* 2.Promise allSettled polyfill
 **/

Promise.myAllPromiseSettled = function(promises){
    if(promises.length === 0) return Promise.resolve([]);
    const allSettledResult = [];
    let allSettledCount = 0;
    return new Promise((resolve,reject)=>{
        for(let i = 0; i<promises.length; i++){
            promises[i].then(res=>{
                allSettledResult[i] = res;
                allSettledCount++;
                 if(allSettledCount === promises.length){
                    resolve(allSettledResult)
                }
            }).catch(err=>{
                allSettledResult[i] = err;
                allSettledCount++
                if(allSettledCount === promises.length){
                    resolve(allSettledResult)
                }
            })
        }
    })
}

// Promise.myAllPromiseSettled([promise1,promise2,promise3]).then(res=>{
//     console.log('res my all settled',res)
// })

// Promise.allSettled([promise1,promise2,promise3]).then(res=>{
//     console.log('res  all settled',res)
// })


/* 3.Promise any polyfill
 **/

Promise.myAny = function(promises){
    if(promises.length === 0) return Promise.reject("AggregateError: All promises were rejected");
    let rejectedCount = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((prom) => {
            prom.then(res=>{
                resolve(res)
            }).catch(err=>{
                rejectedCount++;
                if(rejectedCount === promises.length)
                    reject("AggregateError: All promises were rejected")
            })
        });

    })
}

// Promise.myAny([promise1,promise2,promise3]).then(res => console.log('res myAny',res)).catch(err=> console.log('my any err',err))
// Promise.any([promise1,promise2,promise3]).then(res => console.log('res any',res)).catch(err=> console.log('any err',err))

/**
 * 4. Promise race polyfill
 */

Promise.myRace = function(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((prom) => {
            prom.then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        });

    })
}

Promise.myRace([promise1,promise2,promise3]).then(res=> console.log('res my race',res)).catch(err=> console.log('err my race',err))
Promise.race([promise1,promise2,promise3]).then(res=> console.log('res race',res)).catch(err=> console.log('err race',err))

