import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  // atributos / propriedades da classe
  // property binding (propriedade vinculada)
  lista: any;


  constructor() {
    // montar o array json lista
    this.lista = [
      {
        "name": "Pokémon Yellow",
        "icon": "bicycle-outline"
      },
      {
        "name": "Mega Man X",
        "icon": "bug-outline"
      },
      {
        "name": "Donkey Kong",
        "icon": "cloud-upload-outline"
      },
      {
        "name": "The Legend of Zelda",
        "icon": "bus-outline"
      },
      {
        "name": "Super Mario World",
        "icon": "cut"
      }
    ];
  }

  ngOnInit() {
  }

  // método escrever
  escrever(item: string) {
    const nome = item;
    console.log(nome);
  }

  // metodo escreverById (DOM)
  escreverById(id: any) {
    const label = document.getElementById(id).innerHTML;
    console.log(label);
  }

}
