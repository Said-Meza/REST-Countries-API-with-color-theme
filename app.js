import api from './js/api_routes.js';
import apigetpagination from "./api.js";
import darktheme from "./js/darktheme.js";
import apibuscar from "./js/apisearch.js";

//VARIABLES DEL DOM
    const d=document,
        w=window,
        $template=d.getElementById("card").content,
        $fragment=d.createDocumentFragment(),
        $cards=d.querySelector(".cards"),
        $search=d.querySelector(".search__form"),
        ls=localStorage;
        
        // console.log($template)
        darktheme("dark-mode-btn","dark-mode-background","dark-mode-element");
       
       
            const paises = await apigetpagination(api);
    
            
            paises.forEach(element => {
                // console.log(element.name.common)

                $template.querySelector(".card__img").src=element.flags.svg
                $template.querySelector(".card__title").textContent=element.name.common
                $template.querySelector(".card__populacion").textContent=element.population
                $template.querySelector(".card__Region").textContent=element.region
                $template.querySelector(".card__capital").textContent=element.capital
                $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;

                if (ls.getItem("theme") === null) {
                    ls.setItem("theme","light")
                    $template.querySelector("article").classList.removed(`dark-mode-element`);
                    $template.querySelector(".card__link").classList.removed(`dark-mode-element`);
                        
                }
                
                if (ls.getItem("theme") === "dark") {
                    $template.querySelector("article").classList=`dark-mode-element`;
                    $template.querySelector(".card__link").classList.add(`dark-mode-element`);
                   
                }

                let $clone = document.importNode($template, true);
                $fragment.appendChild($clone);
            });


            $cards.appendChild($fragment);

            darktheme("dark-mode-btn","dark-mode-background","dark-mode-element");
       

          
            d.addEventListener("submit", async (e)=>{
                e.preventDefault();

                console.log(e.target)

                if(e.target.matches(".search__form")){

                    const $form=e.target,
                    forminput = $form.querySelector(".searchss").value;

                    if (!forminput==0 || !forminput=="" ) 
                    {
                        // console.log(forminput)

                        let url=`${api.SEARCH}${forminput}`
                        // console.log(url)

                        const busqueda = await apibuscar(url);
                        
                        busqueda.forEach(element => {
                            console.log(element)
                            
                            $template.querySelector(".card__img").src=element.flags.svg
                            $template.querySelector(".card__title").textContent=element.name.common
                            $template.querySelector(".card__populacion").textContent=element.population
                            $template.querySelector(".card__Region").textContent=element.region
                            $template.querySelector(".card__capital").textContent=element.capital
                            $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;
                            let $clone = document.importNode($template, true);
                            $fragment.appendChild($clone);
                    
                        })

                        $cards.innerHTML="";
                        $cards.appendChild($fragment);
                    }
  
                }

                


            })

            d.addEventListener("change",async e=>{

                if(e.target.matches("select")){
                   
                    const region=e.target.value;
                    let url=`${api.REGION}${region}`;
                    // console.log(url)

                    const side = await apibuscar(url);
                        
                    side.forEach(element => {
                        console.log(element)
                        
                        $template.querySelector(".card__img").src=element.flags.svg
                        $template.querySelector(".card__title").textContent=element.name.common
                        $template.querySelector(".card__populacion").textContent=element.population
                        $template.querySelector(".card__Region").textContent=element.region
                        $template.querySelector(".card__capital").textContent=element.capital
                        $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;
                        let $clone = document.importNode($template, true);
                        $fragment.appendChild($clone);
                
                    })

                    $cards.innerHTML="";
                    $cards.appendChild($fragment);
                    
                }

            })


            w.addEventListener("scroll", async (e)=>{
                let {scrollTop,clientHeight,scrollHeight}=d.documentElement;


                if(scrollTop+clientHeight>=scrollHeight){
                    // console.log("hola si entro al if")
                    api.PAGE++;

                   const morepaises = await apigetpagination(api);

                   morepaises.forEach(element => {
                    // console.log(element)
    
                    $template.querySelector(".card__img").src=element.flags.svg
                    $template.querySelector(".card__title").textContent=element.name.common
                    $template.querySelector(".card__populacion").textContent=element.population
                    $template.querySelector(".card__Region").textContent=element.region
                    $template.querySelector(".card__capital").textContent=element.capital
                    $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;
    
                    // if (ls.getItem("theme") === null) {
                    //     ls.setItem("theme","light")
                    //     $template.querySelector("article").classList.removed(`dark-mode-element`);
                    //     $template.querySelector(".card__link").classList.removed(`dark-mode-element`);
                            
                    // }
                    
                    // if (ls.getItem("theme") === "dark") {
                    //     $template.querySelector("article").classList=`dark-mode-element`;
                    //     $template.querySelector(".card__link").classList.add(`dark-mode-element`);
                       
                    // }
    
                    let $clone = document.importNode($template, true);
                    $fragment.appendChild($clone);
                });
                    $cards.appendChild($fragment);
                }

            })        


           

            
       

       


       
      

        
        

    
    

