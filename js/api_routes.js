const DOMAIN= "restcountries",
    URL=`https://${DOMAIN}.com/v3.1`,
    GETALL=`${URL}/all`,
    SEARCH=`${URL}/name/`,
    REGION=`${URL}/region/`;

   
let  PAGE=1,
    ITEMS=10;

    export default{
        DOMAIN,
        URL,
        SEARCH,
        GETALL,
        PAGE,
        ITEMS,
        REGION

    }