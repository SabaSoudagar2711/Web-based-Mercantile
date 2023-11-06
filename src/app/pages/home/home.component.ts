import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


const ROWS_HEIGHT: { [id: number]: number } = { 1: 200, 3: 235, 4: 250 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  
 
  


  
    
  }

