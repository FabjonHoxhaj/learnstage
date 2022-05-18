import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { HashtagMaterialsComponent } from './hashtag-materials/hashtag-materials.component';
import { TagStudentsComponent } from './tag-students/tag-students.component';
import { MyTagsComponent } from './my-tags/my-tags.component';

const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
{ path: "imp", component: ImpressumComponent },
{ path: "datenschutz", component: DatenschutzComponent },
{ path: "contact", component: ContactFormComponent },
{ path: "home", component: HomeComponent },
{ path: "materials", component: HashtagMaterialsComponent },
{ path: "hashtag", component: HashtagComponent },
{ path: "tagStudents", component: TagStudentsComponent},
{ path: "myTags", component: MyTagsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
