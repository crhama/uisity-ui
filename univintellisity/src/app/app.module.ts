import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidemenuComponent } from './maincomponents/left-sidemenu/left-sidemenu.component';
import { PageHeaderComponent } from './maincomponents/page-header/page-header.component';
import { FooterComponent } from './maincomponents/footer/footer.component';
import { ChatSidebarContainerComponent } from './maincomponents/chat-sidebar-container/chat-sidebar-container.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
