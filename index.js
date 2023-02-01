let array_img = [];
let img = null;
let cont_imgs = 0;
let preview = null;
let test = null;
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
     test = document.querySelectorAll('.selectable');
    if(cont_imgs > 0){
        if(img.src == "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg")
        {
            return alert("No se agrego una imagen por favor ingresera para poder agregar mas imagenes");
        }
        if(img.src == "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg")
        {
            return alert("No se agrego una imagen por favor ingresera para poder agregar mas imagenes");
        }
    }
    cont_imgs ++;
    if(cont_imgs >1)
    {
        input.classList.add("desaparecer");

    }
    let div_button = document.createElement("div");
    div_button.classList.add("card");
    div_button.style.width = "18rem";
    container.appendChild(div_button);
    img = document.createElement("img");
    img.classList.add("card-img-top");
    img.id = "img" + cont_imgs;
    img.alt ="#";
    img.src= "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg";
    div_button.appendChild(img);
    div_button.appendChild(document.createElement("br"));
     input = document.createElement("input");
    input.type = "file";
    input.id = "preview" + cont_imgs;
    input.classList.add("selectable");
    input.onchange= function() {showPreview()};
    div_button.appendChild(input);
    div_button.appendChild(document.createElement("br"));
    input_text = document.createElement("input");
    input_text.placeholder = "Ingresa una descripción";
    input_text.type = "text";
    div_button.appendChild(input_text);
});
function showPreview(){   
   
    preview = document.getElementById("preview" + cont_imgs);
        const [file] = preview.files
        document.getElementById("img" + cont_imgs).src = URL.createObjectURL(file);
}

