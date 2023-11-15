/*
 * Created on Thu Aug 10 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

class Lista {
  /**
   * @param {string[]} listaDeID
   */
  constructor(listaDeID) {
    this.listaDeID = [];
    listaDeID.forEach((id) => {
      this.listaDeID.push(document.getElementById(id));
    });
  }

  /**
   * @param {number} id
   * @param {string} texto
   * @returns {HTMLLIElement}
   */
  agregar(id, texto) {
    switch (id) {
      case 1:
        this.listaDeID[0].appendChild(new Item(texto));
        break;
      case 2:
        this.listaDeID[1].appendChild(new Item(texto));
        break;
      case 3:
        this.listaDeID[2].appendChild(new Item(texto));
        break;
      default:
        console.error("No capoeira, no podes ingresar un id que no exista en selección de casos.");
        break;
    }
  }
}
