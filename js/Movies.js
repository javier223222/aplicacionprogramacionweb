
window.addEventListener("load",()=>{
    let array=JSON.parse(localStorage.getItem("mylist"))
   array=array.map(x=>`  <div class="d-flex flex-column ">

   <img  src=".${x.img}" width="342.5" height="192">
   <div class=" descriptionmovie position-relative flex-column d-flex align-items-start justify-content-start">
     <h3 >${x.tittle}</h3>
     <span>${x.director}</span>
   
   </div>
 </div>`) 

 array.map(x=>{
    document.getElementById("mislistas").innerHTML+=x
 })
})