var bandera=false
var bandera1=false
const nombre=document.getElementById('nombre') /*nombre jugador */
const personas=[] /*acá guardo el nombre del jugador*/
var puntos=0 /*acá guardo los puntos del jugador*/
var puntospc=0 /*acá guardo los puntos de la pc*/
const registrar=document.getElementById('anadir') /** botón para añadir el nombre del jugador a la lista de nombres*/
const mostrarnombres=document.getElementById('mNombres')/** botón para mostrar nombre del jugador*/
const mostrarPuntos=document.getElementById('mPuntos') /*botón para mostrar los puntos del jugador y de la pc*/
const azar1=document.getElementById('jugar1') /*el botón que acciona el azar del jugador 1 */
const azar2=document.getElementById('pcjugar') /*el botón que acciona el azar de la pc */
let random1=Math.floor(Math.random() * 3);
let random2=Math.floor(Math.random() * 3);
var suma=0
registrar.addEventListener('click',()=>{
    let name=nombre.value
    if(name==''){
        alert('Hay campos vacios')
    }else{
        personas.push({nombre:name})
        nombre.value=''
    }})
azar1.addEventListener('click',()=>{
    bandera=true
    random1=Math.floor(Math.random() * 3);
    if(random1==0){
        alert("piedra")
    }else if (random1==1){
        alert("papel")
    }else if (random1==2){
        alert("tijera")
    }
})
azar2.addEventListener('click',()=>{
    bandera1=true
    random2=Math.floor(Math.random() * 3);
    if(random2==0){
        alert("piedra")
    }else if (random2==1){
        alert("papel")
    }else if (random2==2){
        alert("tijera")
    }
    if (bandera==true && bandera1==true && random1==0 && random2==2){
        alert(`el jugador gana un punto`)
        puntos+=1
    }else if(bandera==true && bandera1==true && random1==0 && random2==1){
        alert(`la pc gana un punto`)
        puntospc+=1
    }else if(bandera==true && bandera1==true && random1==2 && random2==1){
        alert(`el jugador gana un punto`)
        puntos+=1
    }else if(bandera==true && bandera1==true && random1==2 && random2==0){
        alert(`la pc gana un punto`)
        puntospc+=1
    }else if(bandera==true && bandera1==true && random1==1 && random2==0){
        alert(`el jugador gana un punto`)
        puntos+=1
    }else if(bandera==true && bandera1==true && random1==1 && random2==2){
        alert(`la pc gana un punto`)
        puntospc+=1
    }else if(bandera==true && bandera1==true && random1==random2){
        alert('empate')
    }
})

mostrarnombres.addEventListener('click',function(){
    let contenido=''
    contenido=`<table><th>Nombre jugador</th><table><th>`
    let nombres=personas.map(persona=>persona.nombre)
    nombres.forEach(nombre=>{
        contenido+=`<tr><td>${nombre}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})
mostrarPuntos.addEventListener('click',function(){
    let contenido=''
    contenido=`<table><th>Puntos jugador</th><table><th>`
    contenido+=`<tr><td>${puntos}</td></tr>`
    contenido+=`<th>Puntos pc</th>`
    contenido+=`<tr><td>${puntospc}</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

