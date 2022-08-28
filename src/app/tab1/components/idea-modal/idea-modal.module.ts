import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaModalComponent } from 'src/app/tab1/components/idea-modal/idea-modal.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { SmallCardModule } from 'src/app/core/components/small-card/small-card.module';
import { LargeCardModule } from 'src/app/core/components/large-card/large-card.module';



@NgModule({
  declarations: [IdeaModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    SmallCardModule,
    LargeCardModule,
  ],
  exports: [
    IdeaModalComponent,
  ],
})
export class IdeaModalModule { }
