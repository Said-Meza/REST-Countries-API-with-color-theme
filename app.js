import api from './js/api_routes.js';
import apigetpagination from "./js/getAll.js";
import ajax from './js/ajax.js';

    //VARIABLES DEL DOM

    const d=document,
        w=window,
        $template=d.getElementById("card").content,
        $fragment=d.createDocumentFragment(),
        $cards=d.querySelector(".cards"),
        ls=localStorage,
        rootElement = document.documentElement,
        $formulario=d.querySelector(".search__form");
        let URL="",
            conta=0;  

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

        

            URL=api.GETALL
        
            
             await apigetpagination({
                url:URL,
                api:api,
                cbSuccess:(paises)=>{

                    if (ls.getItem("modedark")==1){
                        darkmode();
                      }

                    paises.forEach(element => {
                        
                        $template.querySelector(".card__img").src=element.flags.svg
                        $template.querySelector(".card__title").textContent=element.name.common
                        $template.querySelector(".card__populacion").textContent=element.population
                        $template.querySelector(".card__Region").textContent=element.region
                        $template.querySelector(".card__capital").textContent=element.capital
                        $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;
        
                        
        
                        let $clone = document.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $cards.appendChild($fragment);
                    
                }
            });
          

            d.addEventListener("submit", async (e)=>{
                
                e.preventDefault();
                
                if(e.target.matches(".search__form")){

                    const $form=e.target,
                    forminput = $form.querySelector(".searchs").value;

                    if (!forminput==0 || !forminput=="" ) 
                    {
                        // console.log(URL)
                        URL=`${api.SEARCH}${forminput}`
                        await ajax({
                            url:URL,
                            cbSuccess:(busqueda)=>{
                                    busqueda.forEach(element => {
                                    
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
                        
                    }
                }
                // $formulario.reset()

            })

            d.addEventListener("change",async e=>{

                if(e.target.matches("select")){
                   
                    const region=e.target.value;
                    URL=`${api.REGION}${region}`;
                    // console.log(URL)
                    // console.log(url)

                    // const side = await apibuscar(url);
                        await apigetpagination({
                            api:api,
                            url:URL,
                            cbSuccess:(side)=>{

                                side.forEach(element => {
                                    
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
                }
                // $formulario.reset()

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

          
            w.addEventListener("scroll", async (e)=>{
                let {scrollTop,clientHeight,scrollHeight}=d.documentElement;

                if(scrollTop+clientHeight>=scrollHeight){
                    
                    api.PAGE++;

                   await apigetpagination({
                    url:URL,
                    api:api,
                    cbSuccess:((morepaises)=>{
                        // console.log(morepaises)

                        morepaises.forEach(element => {
            
                                $template.querySelector(".card__img").src=element.flags.svg
                                $template.querySelector(".card__title").textContent=element.name.common
                                $template.querySelector(".card__populacion").textContent=element.population
                                $template.querySelector(".card__Region").textContent=element.region
                                $template.querySelector(".card__capital").textContent=element.capital
                                $template.querySelector(".card__link").href=`./views/more.html#/query=${element.name.common}`;
                

                                let $clone = document.importNode($template, true);
                                $fragment.appendChild($clone);

                            });
                            $cards.appendChild($fragment);
                        })
                   })
                }

            })        


           

    
    

