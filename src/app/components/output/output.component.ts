import { Component, OnInit, Input} from '@angular/core';
import { TranslateApiService } from 'src/app/services/translate-api.service';
import { translationModel } from 'src/app/models/translationModel';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() text:string='hello, how are you';

  @Input() fromLang:string='en';

  @Input() toLang:string='fr'

  translation?:translationModel

  translatedText:string=''

//mexendo aqui
  constructor(private service:TranslateApiService) {
    
  }

  ngOnInit(): void {
    this.translate(this.fromLang, this.toLang, this.text)
  }

  translate(fromLang:string, toLang:string, inputText:string){
    this.service.getTranslation(fromLang, toLang, inputText).subscribe({
      next:(response)=>{
        this.translation={
          responseData:{
            translatedText:response.responseData.translatedText
          }
        }

        
        this.translatedText=this.translation?.responseData.translatedText||'ola'
      },
      error: ()=>console.log('not found')

    })
    
  }

  vai(){
    console.log('pode ir')
  }
}
