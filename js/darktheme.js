const d= document,
    ls=localStorage;

// <!-- data-dark-background is to background -->
// <!-- data-dark-element is to element -->
 
    export default function darktheme(btn,classDarkBack,classDarkEl) {

        let conta=0;
        
        const $selectorsBackground = d.querySelectorAll("[data-dark-background]"),
                $selectorsElements = d.querySelectorAll("[data-dark-element]");
            
        const darkMode = () =>
        {
            $selectorsBackground.forEach(el => el.classList.add(classDarkBack));
            $selectorsElements.forEach(el => el.classList.add(classDarkEl));
            ls.setItem("theme","dark") 
        }    
        const lighMode = () =>{
            $selectorsBackground.forEach(el => el.classList.remove(classDarkBack));
            $selectorsElements.forEach(el => el.classList.remove(classDarkEl));
            ls.setItem("theme","light")
        }    
    
        d.addEventListener("click",(e)=>{
           
            if(e.target.matches(btn))
            {       
                conta++;
                if(conta === 1){
                    darkMode();
                    conta=1;
                          
                }else{
                    lighMode();
                    conta=0;
                    
                }

            }
        })
       
        d.addEventListener("DOMContentLoaded",(e)=>{
           
                if (ls.getItem("theme") === null) {
                    ls.setItem("theme","light")
                    let conta=0;
                }
                
                if (ls.getItem("theme") === "light") {
                    lighMode();
                    conta=0;
                }
                if (ls.getItem("theme") === "dark") {
                    darkMode();
                    conta=1;
                    
                }
        })
    };