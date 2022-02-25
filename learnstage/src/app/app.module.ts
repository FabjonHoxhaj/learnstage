import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { AsideTagsComponent } from './aside-tags/aside-tags.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { HashtagComponent } from './hashtag/hashtag.component';
import { HashtagButtonComponent } from './hashtag-button/hashtag-button.component';
import { HttpClientModule } from '@angular/common/http';
import { HashtagMaterialsComponent } from './hashtag-materials/hashtag-materials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    AsideTagsComponent,
    FooterComponent,
    LogoComponent,
    DatenschutzComponent,
    ImpressumComponent,
    HomeComponent,
    ContactFormComponent,
    HashtagComponent,
    HashtagButtonComponent,
    HashtagMaterialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
