import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // props?
  @Input() ahmet: Product | undefined;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
