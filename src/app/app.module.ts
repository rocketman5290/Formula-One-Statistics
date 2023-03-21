import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DriverListComponent } from './components/driver-list/driver-list.component'
import { HttpClientModule } from '@angular/common/http';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { ConstructorListComponent } from './components/constructor-list/constructor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    CircuitListComponent,
    ConstructorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
