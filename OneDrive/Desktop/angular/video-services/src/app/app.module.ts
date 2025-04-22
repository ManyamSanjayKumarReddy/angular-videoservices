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
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
