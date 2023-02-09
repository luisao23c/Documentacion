let array_img = null;
let img_documents = null;
let img = null;
let cont_imgs = 0;
let img_description = null;
let preview = null;
let test = null;
let div_document_preview = document.createElement('div');
div_document_preview.classList.add("col-6");
let add = document.getElementById("add");
let div_row = document.createElement("div");
div_row.classList.add("row");
let div_col1 = document.createElement("div");
let div_col2 = document.createElement("div");
div_col1.classList.add("target_card_position");
div_row.appendChild(div_col1);
div_row.appendChild(div_col2);
div_col2.classList.add("col-6");
div_col1.classList.add("col-6");
add.addEventListener("click", (e) => {
  test = document.querySelectorAll(".selectable");
  if (cont_imgs > 0) {
    if (
      img.src ==
      "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg"
    ) {
      return alert(
        "No se agrego una imagen por favor ingresera para poder agregar mas imagenes"
      );
    }
    if (
      img.src ==
      "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg"
    ) {
      return alert(
        "No se agrego una imagen por favor ingresera para poder agregar mas imagenes"
      );
    }
  }
  cont_imgs++;
  if (cont_imgs > 1) {
    input.classList.add("desaparecer");
  }
  let div_button = document.createElement("div");
  div_button.classList.add("target_card");
  div_button.style.width = "18rem";
  container.appendChild(div_row);
  img = document.createElement("img");
  img.id = "img" + cont_imgs;
  img.alt = "#";
  img.src =
    "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg";
  div_button.appendChild(img);
  div_button.appendChild(document.createElement("br"));
  input = document.createElement("input");
  input.type = "file";
  input.id = "preview" + cont_imgs;
  input.classList.add("selectable");
  input.onchange = function () {
    showPreview();
  };
  div_button.appendChild(input);
  div_button.appendChild(document.createElement("br"));
  input_text = document.createElement("input");
  input_text.id = "preview_text" + cont_imgs;
  input_text.placeholder = "Ingresa una descripción";
  input_text.type = "text";
  div_button.appendChild(input_text);
  div_col1.appendChild(div_button);

});
function showPreview() {
  preview = document.getElementById("preview" + cont_imgs);
  const [file] = preview.files;
  document.getElementById("img" + cont_imgs).src = URL.createObjectURL(file);
  array_img = URL.createObjectURL(file);
  showPreview_document();
}
function showPreview_document() {
    let div_card = document.createElement("div");
    
    div_card.classList.add("custom-btn");
    div_card.classList.add("btn-12");
    div_card.classList.add("position");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    img_description = document.getElementById("preview_text" + cont_imgs).value;
    div_col1.innerHTML = " ";
    img = document.createElement("img");
    img.id = "img" + cont_imgs;
    img.alt = img_description;
    img.src = array_img;
    span1.innerHTML = img_description;
    span2.appendChild(img);
    div_card.appendChild(span1);
    div_card.appendChild(span2);
    div_col2.appendChild(div_card);
    
}
function document_content(img, description) {
    object = {
        img : img,
        description : description,
    }
    img_documents.push(object);
}