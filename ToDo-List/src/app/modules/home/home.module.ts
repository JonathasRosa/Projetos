import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
