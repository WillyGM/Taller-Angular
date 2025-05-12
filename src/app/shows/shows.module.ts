import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './shows-list/shows-list.component'; 

@NgModule({
  declarations: [ShowListComponent],  
  imports: [CommonModule],              
  exports: [ShowListComponent]          
})
export class ShowsModule { }
