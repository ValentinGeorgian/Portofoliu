import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { PriorityComponentComponent } from './priority-component/priority-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeProjectService } from './home-project.service';
import { GameComponentComponent } from './game-component/game-component.component';
import { Game1componentComponent } from './game1component/game1component.component';
import { Game2componentComponent } from './game2component/game2component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipeProductsComponentPipe } from './pipe-products-component.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TasksComponentComponent } from './tasks-component/tasks-component.component';
import { PipeNameTaskComponentPipe } from './pipe-name-task-component.pipe';
import { TableComponentComponent } from './table-component/table-component.component';
import { PipeTablePricePipe } from './pipe-table-price.pipe';
import { ClickOutsideModule } from 'ng-click-outside';
import { PipeProductTablePipe } from './pipe-product-table.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponentComponent,
    LoginFormComponentComponent,
    TodocomponentComponent,
    TimerComponentComponent,
    PriorityComponentComponent,
    MainComponentComponent,
    SettingsComponentComponent,
    FormComponentComponent,
    GameComponentComponent,
    Game1componentComponent,
    Game2componentComponent,
    ProductsComponentComponent,
    PipeProductsComponentPipe,
    TasksComponentComponent,
    PipeNameTaskComponentPipe,
    TableComponentComponent,
    PipeTablePricePipe,
    PipeProductTablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DragDropModule,
    ClickOutsideModule,
    BrowserAnimationsModule
  ],
  providers: [
    HomeProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
