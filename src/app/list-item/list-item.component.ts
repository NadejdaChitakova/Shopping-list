import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks : any[] = ['buy new clothes','go to bed early', 'make coffee']; 
  
}
