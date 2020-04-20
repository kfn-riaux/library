import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [TitleComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent, HeaderComponent]
})
export class SharedModule { }
