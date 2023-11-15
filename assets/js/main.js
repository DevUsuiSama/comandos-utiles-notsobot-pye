/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

class MainApplication {
  async main() {
    const LECTOR = new LectorDeArchivoJSON("https://devusuisama.github.io/comandos-utiles-pye/assets/json/comandos.json");
    const COMANDOS = await LECTOR.leer();
    const LISTA = new Lista(["lista-1", "lista-2", "lista-3"]);

    COMANDOS.NotSoBot.forEach((item) => {
      LISTA.agregar(1, item);
    });

    COMANDOS.PyEBot.forEach((item) => {
      LISTA.agregar(2, item);
    });

    COMANDOS.Compiler.forEach((item) => {
      LISTA.agregar(3, item);
    });
  }
}

const APP = new MainApplication;

window.onload = APP.main;
