import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LeftSidemenuComponent } from './maincomponents/left-sidemenu/left-sidemenu.component';
import { PageHeaderComponent } from './maincomponents/page-header/page-header.component';
import { FooterComponent } from './maincomponents/footer/footer.component';
import { ChatSidebarContainerComponent } from './maincomponents/chat-sidebar-container/chat-sidebar-container.component';
import { StudentsModule } from './students/students.module';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidemenuComponent,
    PageHeaderComponent,
    FooterComponent,
    ChatSidebarContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    StudentsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
