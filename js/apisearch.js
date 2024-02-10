


export default async function apibuscar(api){
    
    try {
        
        const res = await fetch(api),
              json = await res.json()
            
            // console.log(countries);
                
            return json;
            
        } 
        catch (err) {
        console.log(err);
        // let message = err.statusText || "Ocurrió un error";
        // const $error = `Error ${err.status}: ${message}`;
        // return $error
    }

    

}