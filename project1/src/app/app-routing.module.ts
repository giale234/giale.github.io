import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKhachHangComponent } from './add-khach-hang/add-khach-hang.component';
import { EditKhachHangComponent } from './edit-khach-hang/edit-khach-hang.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { TrangchuComponent } from './trangchu/trangchu.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'trangchu'},
  {path:'trangchu', component:TrangchuComponent},
  {path:'khachhang', component: KhachhangComponent},
  {path: 'add-khachhang', component: AddKhachHangComponent},
  {path: 'edit-khachhang/:id', component: EditKhachHangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
