import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'translate_app';
  texto?:string
 

  constructor(){
  }

  ngOnInit(){
    this.texto=''
  }

  receber(valor:string){
    this.texto=valor
  }
}
