let array_imgs = [];
let cont_imgs = 0;
let preview = null;
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
    let input = document.createElement("input");
    input.type = "file";
    input.id = "preview" + cont_img;
    container.appendChild(input);
    input = document.createElement("img");
    input.id = "img";
    input.src ="#";
    input.alt= "tu imagen";
    container.appendChild(input);
     setTimeout(function(){
        preview = document.getElementById("preview");
        showPreview();
    }, 2000);
  
     container.appendChild(document.createElement("br"));
});
function showPreview(){
        const [file] = preview.files
            document.getElementById("img").src = URL.createObjectURL(file);
}

