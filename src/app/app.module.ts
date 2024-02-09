import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UsersComponent } from './components/users/users.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      'angular-firebase'
    ),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp({"projectId":"fir-9e793","appId":"1:666552832086:web:7d094f1c5e3b76731c2bf7","databaseURL":"https://fir-9e793-default-rtdb.firebaseio.com","storageBucket":"fir-9e793.appspot.com","apiKey":"AIzaSyDU3X7HY-1C3Yv62valuWGwsBw8DYANyMI","authDomain":"fir-9e793.firebaseapp.com","messagingSenderId":"666552832086","measurementId":"G-4K1PHJ4201"})),
    provideDatabase(() => getDatabase()),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
