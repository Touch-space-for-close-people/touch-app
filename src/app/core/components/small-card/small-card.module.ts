import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from 'src/app/core/components/small-card/small-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SmallCardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SmallCardComponent,
  ],
})
export class SmallCardModule { }
