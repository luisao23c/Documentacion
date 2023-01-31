let array_img = [];
let img = null;
let cont_imgs = 0;
let preview = null;
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
    if(cont_imgs > 0){
        if(img.src == "http://127.0.0.1:5500/index.html#")
        {
            return alert("No se agrego una imagen por favor ingresera para poder agregar mas imagenes");
        }
    }
    cont_imgs ++;
    let div_button = document.createElement("div");
    div_button.classList.add("col-3");
    div_button.classList.add("offset-3");
    container.appendChild(div_button);
    let div_description = document.createElement("div");
    div_description.classList.add("col-3");
    container.appendChild(div_description);
    img = document.createElement("img");
    img.id = "img" + cont_imgs;
    img.src ="#";
    img.alt= "tu imagen";
    div_button.appendChild(img);
    div_button.appendChild(document.createElement("br"));
     input = document.createElement("input");
    input.type = "file";
    input.id = "preview" + cont_imgs;
    input.onchange= function() {showPreview()};
    div_button.appendChild(input);
    input = document.createElement("input");
    input.placeholder = "Ingresa una descripción";
    input.type = "text";
    div_description.appendChild(input);
    container.appendChild(document.createElement("br"));
});
function showPreview(){   
    preview = document.getElementById("preview" + cont_imgs);
        const [file] = preview.files
        document.getElementById("img" + cont_imgs).src = URL.createObjectURL(file);
}

