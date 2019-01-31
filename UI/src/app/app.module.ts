import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { Lab1Component } from './modules/lab1/lab1.component';
import { Lab2Component } from './modules/lab2/lab2.component';
import { Lab3Component } from './modules/lab3/lab3.component';
import { Lab4Component } from './modules/lab4/lab4.component';



const appRoutes: Routes = [
  { path: 'lab1', component: Lab1Component, data: { title: 'Lab1' } },
  { path: 'lab2', component: Lab2Component, data: { title: 'Lab2' }  },
  { path: 'lab3', component: Lab3Component, data: { title: 'Lab3' }  },
  { path: 'lab4', component: Lab4Component, data: { title: 'Lab4' }  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    Lab4Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes,{
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
