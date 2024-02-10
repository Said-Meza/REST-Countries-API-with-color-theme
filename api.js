
// const url="https://restcountries.com/v3.1/all";
// let pagina= 1,
//     items=10;

 export default async function apigetpagination(api){
    let countries=""

    try {
        
        const res = await fetch(api.GETALL),
            json= await res.json(),
            indexpag = (api.PAGE-1) * api.ITEMS ,
            indexitems = indexpag + api.ITEMS;
            countries =  json.slice(indexpag ,indexitems)

            // console.log(countries);
                
            return countries;
            
        } 
        catch (err) {
        console.log(err);
        // let message = err.statusText || "Ocurrió un error";
        // const $error = `Error ${err.status}: ${message}`;
        // return $error
    }

    

}