/*
 * Created on Fri Jul 07 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

class LectorDeArchivoJSON {
  /**
   * @param {string} dir
   */
  constructor(dir) {
    this.dir = dir;
  }

  /** 
   * @returns {object}
   */
  async leer() {
    const RES = await fetch(this.dir);
    const COMANDOS = await RES.json();
    return COMANDOS;
  }
}