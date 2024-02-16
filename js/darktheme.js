const d= document,
ls=localStorage; 
let conta=0;
// <!-- data-dark-background is to background -->
// <!-- data-dark-element is to element -->

    // export default function darktheme(btn,[data-dark-background],[data-dark-element]) {
    export default function darktheme(btn,btnimg,classDarkBack,classDarkEl) {

        
        const $modedark_back=document.querySelectorAll("[data-dark-background]"),
        $modedark_elem=document.querySelectorAll("[data-dark-element]")
        

        // console.log($modedark_back,$modedark_elem)

        const darkMode = () =>
        {
            $modedark_back.forEach(el => el.classList.add(classDarkBack));
            $modedark_elem.forEach(el => el.classList.add(classDarkEl));
            ls.setItem("theme","dark") 
        }    
        const lighMode = () =>{
            $modedark_back.forEach(el => el.classList.remove(classDarkBack));
            $modedark_elem.forEach(el => el.classList.remove(classDarkEl));
            ls.setItem("theme","light")
        }    
    
        d.addEventListener("click",(e)=>{
           
            // if(e.target.matches(btn))
            

            if(e.target.matches(btn)||e.target.matches(btnimg)){
                e.preventDefault();
                // console.log(`si paso el click de matches`)
      
                $modedark_back.forEach((el)=>{el.classList.toggle(classDarkBack)})
      
                $modedark_elem.forEach((el)=>{el.classList.toggle(classDarkEl)})
                conta++;
      
                if(conta==1)
                {
                  ls.setItem("theme","dark")
                }else{
                  conta==0
                  ls.setItem("theme","light")
                }
                
            }
        })
       
        d.addEventListener("DOMContentLoaded",(e)=>{
           
                if (ls.getItem("theme") === null) {
                    ls.setItem("theme","light")
                    conta=0;
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