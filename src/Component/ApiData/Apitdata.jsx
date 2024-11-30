export const Apitdata = async () =>{
    
    const APIUrl = `https://www.omdbapi.com/?i=tt389619&apikey=${import.meta.env.VITE_APT_KEY}&f&s=godfather`;
    try{
        const res = await fetch(APIUrl);
        const data= await res.json();
        return data;
    }
    catch(error){
            console.log(error)
    }
    return(
        <>
        </>
    )
}