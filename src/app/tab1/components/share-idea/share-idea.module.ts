import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareIdeaComponent } from 'src/app/tab1/components/share-idea/share-idea.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ShareIdeaComponent],
  exports: [
    ShareIdeaComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class ShareIdeaModule { }
