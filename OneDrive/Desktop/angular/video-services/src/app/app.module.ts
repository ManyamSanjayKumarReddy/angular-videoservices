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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
