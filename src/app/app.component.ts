import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modal';

  tags: string[] = [];
  selectedTag: string
  linkImage: string;
  linkImage2: string;
  linkImage3: string;

  statusCode: string;
  mostrar: boolean = false;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getTags()
    .subscribe(tags => {
      this.tags = tags;
    });
  }

  consultar() {
    this.linkImage = 'https://http.dog/' + Number(this.statusCode)+'.jpg';
  }
  consultar2(){
    this.linkImage2 = 'https://http.cat/' + Number(this.statusCode);
  }
  consultar3(){
    this.linkImage3 = 'https://cataas.com/cat/' + this.selectedTag;
  }
}
