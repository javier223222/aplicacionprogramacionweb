
const iconfith=document.getElementById("playfith")
const icongonegirl=document.getElementById("pleygone")
const fithclub=document.getElementById("fithclub")
const nimic=document.getElementById("nimic")
const gonegril=document.getElementById("gonegril")
const voyage=document.getElementById("voyage")
const nimicbuton=document.getElementById("nimicbuton")
const voyagebut=document.getElementById("voyagebut")
const annete=document.getElementById("annete")
const anneteid=document.getElementById("anneteid")
const paris=document.getElementById("paris")
const parisbutton=document.getElementById("parisbutton")
const n2046=document.getElementById("2046")
const button20=document.getElementById("button20")
const tiempos=document.getElementById("tiempos")
const buttontiempos=document.getElementById("buttontiempos")
const thehand=document.getElementById("thehand")
const buttonhand=document.getElementById("buttonhand")
const chungking=document.getElementById("chungking")
const chungkingexpress=document.getElementById("chungkingexpress")
const parasama=document.getElementById("parasama")
const buttonparasama=document.getElementById("buttonparasama")
const belladedia=document.getElementById("belladedia")
const belladediabutton=document.getElementById("belladediabutton")
const nochedehallowen=document.getElementById("nochedehallowen")
const halloweenbutton=document.getElementById("halloweenbutton")

// gonegril.addEventListener("mouseover",()=>{
//     icongonegirl.classList.remove("hidden")
// })
// gonegril.addEventListener("mouseout",()=>{
//     icongonegirl.classList.add("hidden")
// })
if(fithclub){
    fithclub.addEventListener("mouseover",()=>{
        iconfith.classList.remove("hidden")
    })
    
    fithclub.addEventListener("mouseout",()=>{
        iconfith.classList.add("hidden")
    })
}

nimic.addEventListener("mouseover",()=>{
    nimicbuton.classList.remove("hidden")
})

nimic.addEventListener("mouseout",()=>{
    nimicbuton.classList.add("hidden")
})
voyage.addEventListener("mouseover",()=>{
    voyagebut.classList.remove("hidden")
})

voyage.addEventListener("mouseout",()=>{
    voyagebut.classList.add("hidden")
})
annete.addEventListener("mouseover",()=>{
    anneteid.classList.remove("hidden")
})

annete.addEventListener("mouseout",()=>{
    anneteid.classList.add("hidden")
})
paris.addEventListener("mouseover",()=>{
    parisbutton.classList.remove("hidden")
})

paris.addEventListener("mouseout",()=>{
    parisbutton.classList.add("hidden")
})
n2046.addEventListener("mouseover",()=>{
   button20.classList.remove("hidden")
})

n2046.addEventListener("mouseout",()=>{
  button20.classList.add("hidden")
})
tiempos.addEventListener("mouseover",()=>{
    buttontiempos.classList.remove("hidden")
 })
 
 tiempos.addEventListener("mouseout",()=>{
   buttontiempos.classList.add("hidden")
 })
 thehand.addEventListener("mouseover",()=>{
    buttonhand.classList.remove("hidden")
 })
 
 thehand.addEventListener("mouseout",()=>{
   buttonhand.classList.add("hidden")
 })
 chungking.addEventListener("mouseover",()=>{
     chungkingexpress.classList.remove("hidden")
 })
 
 chungking.addEventListener("mouseout",()=>{
    chungkingexpress.classList.add("hidden")
 })
 
 
 parasama.addEventListener("mouseover",()=>{
    buttonparasama.classList.remove("hidden")
})

parasama.addEventListener("mouseout",()=>{
   buttonparasama.classList.add("hidden")
})
 
belladedia.addEventListener("mouseover",()=>{
    belladediabutton.classList.remove("hidden")
})

belladedia.addEventListener("mouseout",()=>{
   belladediabutton.classList.add("hidden")
})
nochedehallowen.addEventListener("mouseover",()=>{
    halloweenbutton.classList.remove("hidden")
})

nochedehallowen.addEventListener("mouseout",()=>{
   halloweenbutton.classList.add("hidden")
})

const getmovies=async () =>{
    const response= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1",{
        headers:{
            'Authorization': 'Bearer ACCESS_TOKEN' ,
            'Accept': 'application/json'
        }
    })
    const movies=await response.json()

    return movies

}



window.addEventListener("load",()=>{
    getmovies().then(x=>{
        let allmvovies="";
        const principalmovies=document.getElementById("principalmovies")
             x.results.map(j=>allmvovies+=`<div class='col-lg-5 col-xl-5  col-md-1 col'>
             
             <img id="nimic"   src="https://image.tmdb.org/t/p/w500/${j.poster_path}" >
            <p class="apicons text-center">${j.title}</p>
             </div>`)
             
             principalmovies.innerHTML=allmvovies
    })
    loadinformation()
    loadfocoscannes()
    loadpalmas()

  
    

})
  

document.getElementById("changespage").addEventListener("click",()=>{
   window.location.href="./pages/index.html"
})

document.getElementById("addsama").addEventListener("click",()=>{
    
     const arraymo=  JSON.parse(localStorage.getItem("mylist"))

     console.log(arraymo.find(x=>x.tittle=="PARA SAMA"))
    
     if(arraymo.find(x=>x.tittle=="PARA SAMA")){
        alert("ya esta agregado")
        document.getElementById("addsama").classList.add("hidden")
     }else{
        arraymo.push(new Movies("PARA SAMA","Waad Al-Khateab, Edward Watts REINO unid..","./assets/parsama.webp"))
        localStorage.setItem("mylist",JSON.stringify(arraymo))
        document.getElementById("addsama").classList.add("hidden")
     }
    
     document.getElementById("checksamma").classList.remove("hidden")
})
document.getElementById("checksamma").addEventListener("click",()=>{
    let arraymo=  JSON.parse(localStorage.getItem("mylist"))
   arraymo= arraymo.filter(x=>x.tittle!="PARA SAMA")
   localStorage.setItem("mylist",arraymo)
   document.getElementById("checksamma").classList.add("hidden")
   document.getElementById("addsama").classList.remove("hidden")
    
})
document.getElementById("addtiemposmodern").addEventListener("click",()=>{
    const arraymo=  JSON.parse(localStorage.getItem("mylist"))
    console.log(arraymo.find(x=>x.tittle=="PARA SAMA"))
   
    if(arraymo.find(x=>x.tittle=="TIEMPOS MODERNOS")){
       alert("ya esta agregado")
       document.getElementById("addtiemposmodern").classList.add("hidden")
    }else{
       arraymo.push(new Movies("TIEMPOS MODERNOS","Charlie Chaplin Estados Unidos ","./assets/tiemposmodernos.webp"))
       localStorage.setItem("mylist",JSON.stringify(arraymo))
       document.getElementById("addtiemposmodern").classList.add("hidden")
    }
   
    document.getElementById("checkmoder").classList.remove("hidden")
})
document.getElementById("checkmoder").addEventListener("click",()=>{
   let arraymo=  JSON.parse(localStorage.getItem("mylist"))
  arraymo= arraymo.filter(x=>x.tittle!="TIEMPOS MODERNOS")
  localStorage.setItem("mylist",arraymo)
  document.getElementById("checkmoder").classList.add("hidden")
  document.getElementById("addtiemposmodern").classList.remove("hidden")
   
})


document.getElementById("addbellodedia").addEventListener("click",()=>{
    const arraymo=  JSON.parse(localStorage.getItem("mylist"))
    console.log(arraymo.find(x=>x.tittle=="PARA SAMA"))
   
    if(arraymo.find(x=>x.tittle=="BELLA DE DÍA")){
       alert("ya esta agregado")
       document.getElementById("addbellodedia").classList.add("hidden")
    }else{
       arraymo.push(new Movies("BELLA DE DÍA","BELLA DE DÍA ","./assets/belladeldiatine.webp"))
       localStorage.setItem("mylist",JSON.stringify(arraymo))
       document.getElementById("addbellodedia").classList.add("hidden")
    }
   
    document.getElementById("checkbellodia").classList.remove("hidden")
})
document.getElementById("checkbellodia").addEventListener("click",()=>{
   let arraymo=  JSON.parse(localStorage.getItem("mylist"))
  arraymo= arraymo.filter(x=>x.tittle!="BELLA DE DÍA")
  localStorage.setItem("mylist",arraymo)
  document.getElementById("checkbellodia").classList.add("hidden")
  document.getElementById("addbellodedi").classList.remove("hidden")
   
})
document.getElementById("addnochedehallowen").addEventListener("click",()=>{
    const arraymo=  JSON.parse(localStorage.getItem("mylist"))
    console.log(arraymo.find(x=>x.tittle=="PARA SAMA"))
   
    if(arraymo.find(x=>x.tittle=="LA NOCHE DE HALLOWEEN")){
       alert("ya esta agregado")
       document.getElementById("addnochedehallowen").classList.add("hidden")
    }else{
       arraymo.push(new Movies("LA NOCHE DE HALLOWEEN","John Carpenter Estados Unidos ","./assets/nochedehallowen.webp"))
       localStorage.setItem("mylist",JSON.stringify(arraymo))
       document.getElementById("addnochedehallowen").classList.add("hidden")
    }
   
    document.getElementById("checkhallowen").classList.remove("hidden")
})
document.getElementById("checkhallowen").addEventListener("click",()=>{
   let arraymo=  JSON.parse(localStorage.getItem("mylist"))
  arraymo= arraymo.filter(x=>x.tittle!="LA NOCHE DE HALLOWEEN")
  localStorage.setItem("mylist",arraymo)
  document.getElementById("checkhallowen").classList.add("hidden")
  document.getElementById("checkhallowen").classList.remove("hidden")
   
})
const loadinformation=()=>{
  
  const movies=[]
 
  movies.push(new Movies("EL CLUB DE LA PELEA","DAVID FINCHER ESTADOS UNIDOS 1999","./assets/cludelapelea.webp"))
  movies.push(new Movies("PERDIDA","DAVID FINCHER ESTADOS UNIDOS 2014 ","./assets/perdida.webp"))
 let elements= movies.map((x,i)=>
    
     ` <div class="d-flex flex-column ">

    <img id="fithclub" src="${x.img}" height="192">
    <div  class=" descriptionmovie position-relative flex-column d-flex align-items-start justify-content-start">
      <h3 >${x.tittle}</h3>
      <span>${x.director}</span>
      <span id="playfith" class=" hidden moveplay material-symbols-outlined">
        play_circle
        </span>
    </div>
  </div> `


 
  
  )
 
 
 elements.map(x=>{
    document.getElementById("elemetsdavificher").innerHTML+=x
 })
  console.log(elements)
}

const loadfocoscannes=()=>{
    const movies=[]
    movies.push(new Movies("EO","Jerzy Skolimowski Polonia 2022","./assets/eo.webp"))
    movies.push(new Movies("ÉRASE UNA VEZ EN AMÉRICA","Sergio Leone Estados Unidos 1984","./assets/eraunavezenamerica.webp"))
    movies.push(new Movies("LA VIDA DE CALABACÍN ","Claude Barras Suiza 2016","./assets/calabacin.webp"))
    movies.push(new Movies("MELANCOLÍA","Lars von Trier Dinamarca 2011","./assets/melancolia.webp"))
    const elements= movies.map(x=>
         `
         <div class="d-flex flex-column ">
         <img src="${x.img}" width="342.5" height="192">
         <div class=" descriptionmovie position-relative flex-column d-flex align-items-start justify-content-start">
           <h3 >${x.tittle}</h3>
           <span>${x.director}</span>
         </div>
       </div>
         `
        )

    elements.map(x=>{
        document.getElementById("fococannes").innerHTML+=x
    })    

  }

const loadpalmas=()=>{
    const movies=[]
    movies.push(new Movies("BELLA DE DÍA","Luis Buñuel Francia","./assets/belladeldiatine.webp"))
    movies.push(new Movies("IN THE MOOD FOR LOVE","Wong Kar Wai Hong Kong 2000","./assets/inthemood.webp"))
    movies.push(new Movies("UNA HISTORIA VERDADERA","David Lynch  Estados Unidos 1999","./assets/unahistoriaverdadera.webp"))
    movies.push(new Movies("HASTA SIEMPRE, HIJO MÍO",">Wang Xiaoshuai China 2019","./assets/hastasiemprehijomiio.webp"))
    const elements= movies.map(x=>
         `
         <div class="d-flex flex-column ">
         <img src="${x.img}" width="342.5" height="192">
         <div class=" descriptionmovie position-relative flex-column d-flex align-items-start justify-content-start">
           <h3 >${x.tittle}</h3>
           <span>${x.director}</span>
         </div>
       </div>
         `
        )

    elements.map(x=>{
        document.getElementById("leonespalmasor").innerHTML+=x
    }) 
} 
const loadtendencia=()=>{
    const movies=[]
    movies.push(new Movies("EL ODIO","Mathieu Kassovitz Francia 1995","/assets/elodio.webp"))
    movies.push(new Movies("","Wong Kar Wai Hong Kong 2000","./assets/inthemood.webp"))
    movies.push(new Movies("UNA HISTORIA VERDADERA","David Lynch  Estados Unidos 1999","./assets/unahistoriaverdadera.webp"))
    movies.push(new Movies("HASTA SIEMPRE, HIJO MÍO",">Wang Xiaoshuai China 2019","./assets/hastasiemprehijomiio.webp"))
    const elements= movies.map(x=>
         `
         <div class="d-flex flex-column ">
         <img src="${x.img}" width="342.5" height="192">
         <div class=" descriptionmovie position-relative flex-column d-flex align-items-start justify-content-start">
           <h3 >${x.tittle}</h3>
           <span>${x.director}</span>
         </div>
       </div>
         `
        )

    elements.map(x=>{
        document.getElementById("tendeciamovies").innerHTML+=x
    }) 
}
class Movies{
    constructor(tittle,director,img){
     this.tittle=tittle,
     this.director=director,
     this.img=img
    }

   gettittle(){
    return this.tittle
   }
   getdirector(){
    return this.director
   }

   getimg(){
    return this.img
   }

    
}
