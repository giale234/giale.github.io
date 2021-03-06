import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css'],
})
export class KhachhangComponent implements OnInit {
  hoten:string = '';
  solanthue: string = "";
  id:string='';
  public khachhang: any;
  public totalKhachHang = 0;
  constructor(
    private serverHttp: ProductService,
    private router: Router,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.serverHttp.getTotalKhachHang().subscribe((data) => {
      this.totalKhachHang = data.length
    });
  }
  private loadData() {
    this.serverHttp.getKhachHang().subscribe((data) => {
      console.log('khachhang', data);
      this.khachhang = data;
    });
  }
  public AddKhachHang() {
    this.router.navigate(['add-khachhang']);
  }

  public delKhachHang(khachhangId: any) {
    console.log('khachhang', khachhangId);
    this.serverHttp.delKhachHang(khachhangId).subscribe((data) => {
      console.log('delete', data);
      this.loadData();
    });
  }

  public editKhachHang(khachhangId: any) {
    this.router.navigate(['edit-khachhang', khachhangId]);
  }
}
