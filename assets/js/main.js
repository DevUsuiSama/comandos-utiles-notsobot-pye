/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

function main() {
  let eList = document.getElementById("lista");

  LISTA_DE_COMANDOS.forEach((item) => {
    let eItem = document.createElement("li");

    eItem.classList.add("font-orbitron");
    eItem.classList.add("item");
    eItem.onclick = copiarTexto;
    eItem.textContent = item;

    eList.appendChild(eItem);
  });
}
