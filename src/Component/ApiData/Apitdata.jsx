export const Apitdata = async () =>{
    
    const APIUrl = 'https://www.omdbapi.com/?i=tt389619&apikey=150486b3&f&s=godfather';
    try{
        const res = await fetch(APIUrl);
        const data= res.json();
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