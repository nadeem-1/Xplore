import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from'@angular/material/grid-list';
import {MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { StickyNavModule } from 'ng2-sticky-nav';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { BlogComponent } from './blog/blog.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
//
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NewsComponent } from './news/news.component';
import { SportComponent } from './sport/sport.component';
import { TechComponent } from './tech/tech.component';
import { ScienceComponent } from './science/science.component';
import { LivenewsComponent } from './livenews/livenews.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    BlogComponent,
    PostDetailComponent,
    NewsComponent,
    SportComponent,
    TechComponent,
    ScienceComponent,
    LivenewsComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule ,
    MatGridListModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    HttpClientModule,
    MatSidenavModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressBarModule,
    StickyNavModule ,WavesModule, ButtonsModule, IconsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
