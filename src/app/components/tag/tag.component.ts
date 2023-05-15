import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  title:string = ""

  @Input()
  button:string = ""
  
  constructor () {}

  ngOnInit(): void {
    
  }
}
