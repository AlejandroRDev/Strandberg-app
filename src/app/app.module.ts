import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ImageComponent } from './shared/components/image/image.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { GalleryComponent } from './features/home/components/gallery/gallery.component';
import { DarkmodeComponent } from './features/home/components/darkmode/darkmode.component';
import { FooterComponent } from './features/home/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageComponent,
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    DarkmodeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
