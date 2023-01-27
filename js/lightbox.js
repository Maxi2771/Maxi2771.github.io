const imagenes = document.querySelector('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight =document.querySelector('.imagen-light')
const Moon1 = document.querySelector('.Moon');


imagenes.forEach(imagenes =>{
    imagen.addEventListener('click', ()=>{

        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        Moon1.style.opacity ='1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    Moon1.style.opacity ='0'
}