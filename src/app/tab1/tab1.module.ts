import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { IdeaModalModule } from 'src/app/tab1/components/idea-modal/idea-modal.module';
import { ShareIdeaModule } from 'src/app/tab1/components/share-idea/share-idea.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    IdeaModalModule,
    ShareIdeaModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
