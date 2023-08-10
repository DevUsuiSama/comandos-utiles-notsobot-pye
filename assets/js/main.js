/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

async function main() {
  const E_LIST_1 = document.getElementById("lista-1");
  const E_LIST_2 = document.getElementById("lista-2");
  const E_LIST_3 = document.getElementById("lista-3");
  const COMANDOS = await leerJson();

  COMANDOS.NotSoBot.forEach((item) => {
    E_LIST_1.appendChild(crearItem(item));
  });

  COMANDOS.PyEBot.forEach((item) => {
    E_LIST_2.appendChild(crearItem(item));
  });

  COMANDOS.Compiler.forEach((item) => {
    E_LIST_3.appendChild(crearItem(item));
  });
}

window.onload = main;
