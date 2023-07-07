/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

async function main() {
  let eList = document.getElementById("lista");
  const COMANDOS = await leerJson();

  COMANDOS.PyE.forEach((item) => {
    let eItem = document.createElement("li");

    eItem.classList.add("font-orbitron");
    eItem.classList.add("item");
    eItem.setAttribute("title", "copiar texto");
    eItem.onclick = copiarTexto;
    eItem.textContent = item;

    eList.appendChild(eItem);
  });
}

window.onload = main;