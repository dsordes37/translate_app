import { Component, OnInit} from '@angular/core';
import { TranslateApiService } from 'src/app/services/translate-api.service';
import { translationModel } from 'src/app/models/translationModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'translate_app';
  text:string='';
  translation?:translationModel;

  fromLang:string='en';
  toLang:string='pt-br';
  
  

  constructor(private service:TranslateApiService){
  }

  ngOnInit(){
    
  }

  getText(valor:string){
    this.translate(this.fromLang, this.toLang, valor)
    
  }


  translate(fromLang:string, toLang:string, textToTranslate:string){
    if(textToTranslate===''){
      this.text=''
    }else{
      this.text='carregando...'
      this.service.getTranslation(fromLang, toLang, textToTranslate).subscribe({
        next:(response)=>{
          this.translation={
            responseData:{
              translatedText:response.responseData.translatedText
            }
          }
          this.text=this.translation.responseData.translatedText
        },
        error:()=>console.log('not found')
      })}
  }

  

  


}
