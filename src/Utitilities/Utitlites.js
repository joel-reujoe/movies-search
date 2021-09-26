

let baseUrl = "http://localhost:8732/movies/";

const getMovieList = async ()=>{
    let data = []
    let response = await fetch(baseUrl,{method:"GET"})
    if(response.status===200)
    {
        data = await response.json()
    }
    return data
}

export const getMovieDetails = async (id)=>{
    let data = []
    let response = await fetch(`${baseUrl}${id}`,{method:"GET"})
    if(response.status===200)
    {
        data = await response.json()
        console.log(data)
    }
    return data
}

export default getMovieList

