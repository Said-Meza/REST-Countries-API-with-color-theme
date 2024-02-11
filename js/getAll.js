
 export default async function apigetpagination(props){
    let countries=""
    let {url,cbSuccess,api}= props;

    try {
        
        const res = await fetch(url),
            json= await res.json(),
            indexpag = (api.PAGE-1) * api.ITEMS ,
            indexitems = indexpag + api.ITEMS;
            countries =  json.slice(indexpag ,indexitems)
            cbSuccess(countries)
           
            
        } 
        catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        document.getElementById("main").innerHTML=`
        <div >
            <p>Error:${err.status} Mesansaje:${message}</p>
        <div>`;
    }

    

}