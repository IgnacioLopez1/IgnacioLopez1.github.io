let querty = document.querySelector('.buscador');
let buscar = document.getElementById('buscar');


buscar.addEventListener('click',() =>{
   let url = 'https://www.google.com/search?q=' + querty.value;
   window.open(url, '_self')
})

querty.addEventListener('keypress' , (e) =>{
  if(e.key == 'Enter'){
    let url = 'https://www.google.com/search?q=' + querty.value;
    window.open(url, '_self')
  }
})

let dark = document.querySelector('.boton-luna');
let foto = document.querySelector('.luna');
let botones = document.querySelector('.botones');
let boton2 = document.getElementById('boton');
let contenedor = document.querySelector('.contenedor');
  
  e = true;
  console.log(e);


dark.addEventListener('click' , () =>{
    if(e == true){
    document.body.style.backgroundColor = "#111111";
    botones.classList.add("d");
    boton2.classList.add("d");
    contenedor.classList.add("b-oscuro");
    querty.classList.add("letraBlanca")
    foto.src = "recursos/foto"+2+".png";
    e = false;

    console.log(e);
    

    }else{
        document.body.style.backgroundColor = "white";
        foto.src = "recursos/foto"+1+".png";
        botones.classList.remove("d");
        boton2.classList.remove("d");
        contenedor.classList.remove("b-oscuro");
        querty.classList.remove("letraBlanca");
        e = true;
        console.log(e);
        
    }
})