import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaInfoPageComponent } from './pages/ta-info-page/ta-info-page.component';
import { NavigationBarComponent } from './widgets/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ProfessorViewComponent } from './widgets/professor-view/professor-view.component';
import { PolicyPageComponent } from './pages/policy-page/policy-page.component';

const appRoutes: Routes = [
  { path: 'index.html', component: HomePageComponent },
  { path: 'ta-information', component: TaInfoPageComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'policies', component: PolicyPageComponent },
  {
    path: '',
    redirectTo: '/index.html',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaInfoPageComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    ScheduleComponent,
    ProfessorViewComponent,
    PolicyPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
