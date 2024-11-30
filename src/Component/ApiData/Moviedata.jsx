export const Moviedata = async() =>{
    const movieApi = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_APT_KEY}&i=tt8080122`;

    try{
        const ajxcall = await fetch(movieApi);
        const data  = await ajxcall.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

