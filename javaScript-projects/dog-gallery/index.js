const breedListUrl = new URL('https://dog.ceo/api/breeds/list/all')

async function fetchList(url){
    const response = await fetch(url)
    const breedList = await response.json()
    const list = Object.keys(breedList.message)
    fetchBreedImg(list)

}

async function fetchBreedImg(list) {
    const allBreedUrls = list.map(async (item)=>{
        const res = await fetch( `https://dog.ceo/api/breed/${item}/images/random`)
        const promise = await res.json()
        return {name:item,res:promise}
    })
    console.log(allBreedUrls)
    const response = await Promise.all(allBreedUrls);
    
    console.log(response)
}

fetchList(breedListUrl)