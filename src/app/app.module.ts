import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Local components
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './side-nav/nav.component';
import { TopNavComponent } from './top-nav/topnav.component';
//Local Modules
import { DataDialogModule } from './data-dialog/datadialog.module';

//Primeng Styling
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

//FontAwesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,MapComponent,NavComponent, TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    AngularFontAwesomeModule,
    PanelMenuModule,
    MenubarModule,
    DataDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
