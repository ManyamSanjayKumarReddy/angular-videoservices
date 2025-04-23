import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { DeleteItemsComponent } from './delete-items/delete-items.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { TempvarComponent } from './tempvar/tempvar.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComponent,
    ParentComponent,
    GreetingsPipePipe,
    DeleteItemsComponent,
    AppSizerComponent,
    TempvarComponent,
    DirectivesComponent,
    HighlightDirective,
    FirstComponent,
    SecondComponent,
    NotfoundComponent,
    ChildAComponent,
    ChildBComponent,
    FormsDemoComponent,
    ReactiveFormsComponent,
    HttpclientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
