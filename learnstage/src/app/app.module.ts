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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { StarDirective } from './star.directive';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HamburgerTagComponent } from './hamburger-tag/hamburger-tag.component';
import { TagStudentsComponent } from './tag-students/tag-students.component';
import { MyTagsComponent } from './my-tags/my-tags.component';

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
    HashtagMaterialsComponent,
    StarDirective,
    StarRatingComponent,
    HamburgerTagComponent,
    TagStudentsComponent,
    MyTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
