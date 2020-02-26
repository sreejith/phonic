import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 3rd party lib
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { FilterResultsPipe } from './pipes/filter-results.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterResultsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
