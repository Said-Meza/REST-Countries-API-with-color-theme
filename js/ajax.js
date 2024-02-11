export default async function ajax(props){

    let {url,cbSuccess}= props;

    try {
        const res = await fetch(url),
            json = await res.json()
            cbSuccess(json)
    } catch (err) {
        let message=err.statusText||"Ocurrio un error al acceder a la API";
        document.getElementById("main").innerHTML=`
        <div >
            <p>Error:${err.status} Mesansaje:${message}</p>
        <div>`;
    }
    
}