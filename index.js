let array_img = [];
let img = null;
let cont_imgs = 0;
let preview = null;
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
    if(cont_imgs > 0){
        if(img.src == "http://127.0.0.1:5500/#")
        {
            return alert("No se agrego una imagen por favor ingresera para poder agregar mas imagenes");
        }
    }
    cont_imgs ++;
     input = document.createElement("input");
    input.type = "file";
    input.id = "preview" + cont_imgs;
    
    input.onchange= function() {showPreview()};
    input.class = "boton-standar-rw:hover";
    button.appendChild(input);
    img = document.createElement("img");
    img.id = "img" + cont_imgs;
    img.src ="#";
    img.alt= "tu imagen";
    imagen.appendChild(img);
    container.appendChild(document.createElement("br"));
    input = document.createElement("input");
    input.placeholder = "Ingresa una descripción";
    input.type = "text";
    description.appendChild(input);

});
function showPreview(){   
    preview = document.getElementById("preview" + cont_imgs);
        const [file] = preview.files
        document.getElementById("img" + cont_imgs).src = URL.createObjectURL(file);
}

