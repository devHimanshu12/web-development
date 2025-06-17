const apiUrls = ['https://jsonplaceholder.typicode.com/todos',
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/photos',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/todos',
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/photos',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/todos',
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/photos',
'https://jsonplaceholder.typicode.com/posts']

const cachedResults = {}
const arrayOfData = []

async function  fetchApi(url){
    const resp = await fetch(url);
    const data = await resp.json();
    cachedResults[url] = data;
    return cachedResults[url]
}

async function  getData(){
    for(const url of apiUrls){
        if(!cachedResults[url]){
          const data =  await fetchApi(url)
          arrayOfData.push(data)
        }else{
          const data =  cachedResults[url]
          arrayOfData.push(data)
        }
    }
    console.log(cachedResults)
    console.log(arrayOfData)
}

function cacheApiData(url,data){
    cachedResults[url] = data
}

getData()

