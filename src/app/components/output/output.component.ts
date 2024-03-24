import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() text:string='';

  @Input() fromLang:string='en';

  @Input() toLang:string='fr';


  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  getSource(){
    let source:any=document.querySelector('#outputText');
    return source
  }

  copyText(){
    const source=this.getSource()
    navigator.clipboard.writeText(source.value)
  }
  
}
