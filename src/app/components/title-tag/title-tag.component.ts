import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-tag',
  templateUrl: './title-tag.component.html',
  styleUrls: ['./title-tag.component.css']
})
export class TitleTagComponent implements OnInit{
@Input()
  TitleDescription:string = ""

  @Input()
  title:string = ""

  @Input()
  text:string = ""

  constructor () {}
  
  ngOnInit(): void {
    
  }

}
