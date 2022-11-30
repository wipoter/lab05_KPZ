import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from '../shared/components/achievement/achievement.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AchievementService } from 'src/app/shared/services/achievement.service';

const routes: Routes = [
  {path: '', component: AchievementComponent}
]

@NgModule({
  declarations: [
    AchievementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AchievementService]
})
export class AchievementModule { }
