import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'account', loadChildren: () => import('./features/account.module').then(m => m.AccountModule)},
  {path: 'student', loadChildren: () => import('./features/student.module').then(m => m.StudentModule)},
  {path: 'achievement', loadChildren: () => import('./features/achievement.module').then(m => m.AchievementModule)}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
