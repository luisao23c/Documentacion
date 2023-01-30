let array_imgs = null;
let cont_imgs = 0;
let preview = null;
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
    cont_imgs ++;
    let input = document.createElement("input");
    input.type = "file";
    input.id = "preview" + cont_imgs;
    input.class = "selected";
     array_imgs = document.querySelectorAll('.selected');
    container.appendChild(input);
    input = document.createElement("img");
    input.id = "img" + cont_imgs;
    input.src ="#";
    input.alt= "tu imagen";
    container.appendChild(input);
        setTimeout(function(){
        preview = document.getElementById("preview" + cont_imgs);
        showPreview();
    }, 5000);
    
     container.appendChild(document.createElement("br"));
});
function showPreview(){
        const [file] = preview.files
        document.getElementById("img" + cont_imgs).src = URL.createObjectURL(file);
}

