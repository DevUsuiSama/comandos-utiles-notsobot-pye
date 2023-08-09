/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

async function leerJson() {
  const RES = await fetch("https://devusuisama.github.io/comandos-utiles-pye/assets/json/comandos.json");
  const COMANDOS = await RES.json();
  return COMANDOS;
}