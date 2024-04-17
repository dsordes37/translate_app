import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { langs } from 'src/data/langs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnChanges{

  @Input() text:string='';

  @Input() toLang:any;

  @Output() newToLang= new EventEmitter

  @Output() switch=new EventEmitter

  
  langList=langs;

  //del=this.langList.shift();

  lang1=this.langList[1];
  lang2=this.langList[2];
  lang3=this.langList[3];

  btStatus:boolean[]=[false, true, false]

  listVisible=false

  

  constructor() {
    
  }

  ngOnInit(): void {
    this.select_lang(this.toLang)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.select_lang(this.toLang)
  }
  

  getSource(){
    let source:any=document.querySelector('#outputText');
    return source
  }

  copyText(){
    const source=this.getSource()
    navigator.clipboard.writeText(source.value)
  }

  select_lang(id:any){
    if(id=='1'){
      this.btStatus=[true, false, false]
    }else if(id=='2'){
      this.btStatus=[false, true, false]
    }else{
      this.btStatus=[false, false, true]
      this.lang3=this.langList[id]
    }

    //this.newToLang.emit(this.langList[id].id)
  }

  emitLang(id:any){
    this.newToLang.emit(this.langList[id].id)
  }

  switchLang(){
    this.switch.emit()
  }


  showAndHideList(){
    if(this.listVisible){
      this.listVisible=false
    }else{
      this.listVisible=true
    }
  }

  

  
  
}
