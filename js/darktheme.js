const d= document,
    ls=localStorage;
//    let conta=0;

// <!-- data-dark-background is to background -->
// <!-- data-dark-element is to element -->
 
//darktheme("dark-mode-btn","dark-mode-background","dark-mode-element");
    export default function darktheme(btn,classDarkBack,classDarkEl) {

        let conta=0;
        
        const $themeDarkbtn= d.getElementById(btn),
            $selectorsBackground = d.querySelectorAll("[data-dark-background]"),
            $selectorsElements = d.querySelectorAll("[data-dark-element]");
            
            // console.log($themeDarkbtn)
            // console.log($selectorsBackground)
            // console.log($selectorsElements)
            

        const darkMode = () =>
        {
            $selectorsBackground.forEach(el => el.classList.add(classDarkBack));
            $selectorsElements.forEach(el => el.classList.add(classDarkEl));
            
            ls.setItem("theme","dark")
            // console.log(classDark)
            
            
        }    
        const lighMode = () =>{
            
            $selectorsBackground.forEach(el => el.classList.remove(classDarkBack));
            $selectorsElements.forEach(el => el.classList.remove(classDarkEl));
            
            ls.setItem("theme","light")

        }    
    
        
        d.addEventListener("click",(e)=>{
            
            // console.log(e.target)

            if(e.target.matches(".nav__darktext"))
            {       
                conta++;
                // console.log(`---`,conta)
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
            // console.log(`este es el domcontentload`)
            // alert("hola mundo desde tema oscuro")

                if (ls.getItem("theme") === null) {
                    ls.setItem("theme","light")
                    let conta=0;
                    // console.log("hay variable para themedark")
                }
                // else{
                //     console.log("no hay variable en localstores")
                // }
        
                if (ls.getItem("theme") === "light") {
                    lighMode();
                    conta=0;
                    // console.log("tema claro")
                }
                
                if (ls.getItem("theme") === "dark") {
                    darkMode();
                    conta=1;
                    // console.log("tema obscuro")
                }

        })
    
    };