import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  dateAppConfig:any = [];
  arrayAppConfig:any = [];
  widthButtonFromJson:string = "";
  heightButtonFromJson:string = "";
  alignTextFromJson:string = "";
  colorHrefButtonsFromJson:string = "";
  textDecorationFromJson:string = "";
  paddingAllFromJson:string = "";
  valCurrentDate:any = [];
  pathSettingsComponent:string = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    

    this.httpClient.get("assets/appConfig.json").subscribe(data=>{

      setInterval(()=>{

        let currentDate:any = new Date();
        this.valCurrentDate = currentDate;
      },100);
      
      this.dateAppConfig = data;

      this.arrayAppConfig = this.dateAppConfig.element;

      this.widthButtonFromJson = this.dateAppConfig.width;

      this.heightButtonFromJson = this.dateAppConfig.height;

      this.alignTextFromJson = this.dateAppConfig.align_buttons;

      this.colorHrefButtonsFromJson = this.dateAppConfig.colorHrefButtons;

      this.textDecorationFromJson = this.dateAppConfig.text_decoration;

      this.paddingAllFromJson = this.dateAppConfig.padding;

      this.pathSettingsComponent = this.dateAppConfig.pathSettings;


     
      
    })
  }

}
