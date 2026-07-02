
const boton = document.getElementById("btnGenerar");
const paleta = document.getElementById("paleta");
const cantidad = document.getElementById("cantidad");
const toast = document.getElementById("toast");


boton.addEventListener("click", generarPaleta);



generarPaleta();




function generarPaleta() {

    

    paleta.innerHTML = "";

    let total = Number(cantidad.value);

    let coloresGuardados = [];



    for (let i = 0; i < total; i++) {

        let color = generarColor();

        coloresGuardados.push(color);


        let tarjeta = document.createElement("div");

        tarjeta.classList.add("color");

        tarjeta.style.backgroundColor = color;

        tarjeta.setAttribute("tabindex", "0");


        let codigo = document.createElement("p");

        codigo.textContent = color;

        tarjeta.appendChild(codigo);

        tarjeta.addEventListener("click", function () {

            navigator.clipboard.writeText(color);

            mostrarToast();

        });


        paleta.appendChild(tarjeta);

    }


    localStorage.setItem("paleta", JSON.stringify(coloresGuardados));

}

function generarColor() {

    let letras = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        color += letras[Math.floor(Math.random() * 16)];

    }

    return color;

}


// -----------------------------
// Mostrar Toast
// -----------------------------

function mostrarToast() {

    toast.classList.add("mostrar");

    setTimeout(function () {

        toast.classList.remove("mostrar");

    }, 1500);

}