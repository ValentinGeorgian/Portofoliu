import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { TodocomponentComponent } from './todocomponent/todocomponent.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { PriorityComponentComponent } from './priority-component/priority-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { GameComponentComponent } from './game-component/game-component.component';
import { Game1componentComponent } from './game1component/game1component.component';
import { Game2componentComponent } from './game2component/game2component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { TasksComponentComponent } from './tasks-component/tasks-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  { path: 'registerFormComponent', component: RegisterFormComponentComponent },
  { path: 'logInFormComponent', component: LoginFormComponentComponent },
  { path: 'toDoComponent', component: TodocomponentComponent },
  { path: 'timerComponent', component: TimerComponentComponent },
  { path: 'priorityComponent', component: PriorityComponentComponent },
  { path: 'mainComponent', component: MainComponentComponent },
  { path: 'settingsComponent', component: SettingsComponentComponent },
  { path: 'formComponent', component: FormComponentComponent },
  { path: 'gameComponent', component: GameComponentComponent },
  { path: 'game1Component', component: Game1componentComponent },
  { path: 'game2Component', component: Game2componentComponent },
  { path: 'productsComponent', component: ProductsComponentComponent},
  { path: 'tasksComponent', component: TasksComponentComponent},
  { path: 'tableComponent', component: TableComponentComponent},
  { path: '', redirectTo: 'mainComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
