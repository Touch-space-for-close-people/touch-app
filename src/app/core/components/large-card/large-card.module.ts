import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeCardComponent } from 'src/app/core/components/large-card/large-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LargeCardComponent],
  exports: [
    LargeCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class LargeCardModule { }
