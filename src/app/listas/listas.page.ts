import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // método escrever
  escrever(item: string) {
    const nome = item;
    console.log(nome);
  }

  // metodo escreverById (DOM)
  escreverById(id: any) {
    const label = document.getElementById(id).textContent;
    console.log(label);
  }

}
