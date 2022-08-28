import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeCardModule } from 'src/app/core/components/large-card/large-card.module';
import { SmallCardModule } from 'src/app/core/components/small-card/small-card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LargeCardModule,
    SmallCardModule
  ]
})
export class CoreModule { }
