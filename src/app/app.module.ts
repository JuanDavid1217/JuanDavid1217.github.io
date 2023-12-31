import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HeaderServices } from './services/header.service';
import { HttpClientModule } from "@angular/common/http";
import { WorkExperienceService } from './services/work-experience.service';
import { GeneralService } from './services/general.service';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillsComponent,
    CertificatesComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeaderServices,
              WorkExperienceService,
              GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
