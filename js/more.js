
import api from "./api_routes.js";
import ajax from "./ajax.js";

const d=document,
    $template=d.getElementById("plantilla").content,
    $fragment=d.createDocumentFragment(),
    $main=d.querySelector("main"),
    rootElement = document.documentElement,
    ls=localStorage;

   let conta=0,
    {hash}=location;
    const param = hash.substring(2),
    [key, value] = param.split('=');


    const darkmode =()=>{
        rootElement.style.setProperty('--Element', 'hsl(209, 23%, 22%)');
        rootElement.style.setProperty('--Background', 'hsl(207, 26%, 17%)');
        rootElement.style.setProperty('--Text', 'white');
    }      
    
    const ligthmode=()=>{
        rootElement.style.setProperty('--Element', 'hsl(0, 0%, 100%)');
                rootElement.style.setProperty('--Background', 'hsl(0, 100%, 98%)');
                rootElement.style.setProperty('--Text', ' hsl(200, 15%, 8%)');
                conta=0;
    }
    
        await ajax({
            url:`${api.SEARCH}${value}`,
            cbSuccess:((busqueda)=>{

                if (ls.getItem("modedark")==1){
                    darkmode();
                  }

                $template.querySelector(".content__img").src=busqueda[0].flags.svg
                $template.querySelector(".card__title").textContent=busqueda[0].name.common
                $template.querySelector(".name").textContent=busqueda[0].name.official
                $template.querySelector(".population").textContent=busqueda[0].population
                $template.querySelector(".region").textContent=busqueda[0].region
                $template.querySelector(".subregion").textContent=busqueda[0].subregion
                $template.querySelector(".capital").textContent=busqueda[0].capital
                $template.querySelector(".domain").textContent=busqueda[0].tld
            
                let dinero = busqueda[0].currencies,
                    lenguas= busqueda[0].languages,
                    cadena="",
                    lengua=[],
                    idiomas="";

                for (const clave in dinero) {
                    if (dinero.hasOwnProperty(clave)) {
                            cadena = clave
                    }
                }
                $template.querySelector(".currencies").textContent=busqueda[0].currencies[`${cadena}`].name;
                
                for (const clave in lenguas) {
                    if (lenguas.hasOwnProperty(clave)) {
                            lengua.push(clave) 
                    }
                }

                for (let i = 0; i < lengua.length; i++) {
                    idiomas += " " +busqueda[0].languages[`${lengua[i]}`] ;
                }
                $template.querySelector(".languaje").textContent=idiomas;
                
                const $othercontent =$template.querySelector(".other__container"),
                    longitud =busqueda[0].borders

                if(longitud)
                {
                    for (let i = 0; i < longitud.length; i++) 
                    {
                        const $links = d.createElement("a");
                        $links.setAttribute('data-dark-element', '');
                    
                        $links.textContent=busqueda[0].borders[i]
                        $othercontent.appendChild($links)
                        
                        if (ls.getItem("theme") === "dark") {
                            $links.classList="botton botton--modifi dark-mode-element"; 
                        }else{
                            $links.classList="botton botton--modifi "; 
                        }
                    }
                }else{
                    $template.querySelector(".morepaises").textContent="No has Border Contries";
                }
                
                let $clone = document.importNode($template, true);
                $fragment.appendChild($clone);

                $main.appendChild($fragment);
            })
        })


        d.addEventListener("click",(e)=>{
        
            if(e.target.matches(".nav__darktext")||e.target.matches(".nav__img")|| e.target.matches(".nav__darkmode")){
                e.preventDefault();                    
                conta++;

                if(conta==1){
                    darkmode()
                    ls.setItem("modedark","1")
                }
                if(conta>1 ||conta ==0)
                {
                    ligthmode()
                    ls.setItem("modedark","0")
                }
            }
        })

   




       
