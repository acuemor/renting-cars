import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [
    new Car('Mazda', 'CX5', 'Suv Segmento C', 'https://es.cdn.mazda.media/fdcba893bc5b4c24b253fc3564cba340/c2968e23252347e39352661760a1b858.png?48ed9d', 29350),
    new Car('Mazda', 'CX3', 'Suv Segmento B', 'https://es.cdn.mazda.media/e5885461c1e24da782ec4e4f55dafcb5/8e25318ae22b40809b3c0e7fde911c1f.png?4b0196', 27300),
    new Car('Mazda', 'CX30', 'Suv Híbrido', 'https://es.cdn.mazda.media/07f43afd77b34498a63146339bceb8ff/13f1963876af4a9694b57571683e644d.png?4a4edc', 27575),
    new Car('Mazda', 'MX30', 'Suv Eléctrico', 'https://es.cdn.mazda.media/9819a84f718d40548aa6b3ffe1c27d53/f8f35878f36e49789938d165daf15f07.png?4991a7', 34375),
    new Car('Mazda', '6', 'Turismo Wagon', 'https://es.cdn.mazda.media/6797c27a20fe44c9ad443350016d50aa/7f8816d7fd4045bb97b270c731e5294a.png?4987d2', 32500),
    new Car('Mazda', '2', 'Turismo Segmento B', 'https://es.cdn.mazda.media/ec99086bbb4140a5b08c2b4a11b36e9f/8c53252ccef04fc891ae1a4bbd85fe08.png?496696', 21500),
    new Car('Mazda', '3', 'Turismo Segmento C', 'https://es.cdn.mazda.media/b0a8ea20b7c9486a909d475cc4969a15/add99ce2c03340889c65786c5656cd54.png?4a2205', 23500),
    new Car('Mazda', '2', 'Turismo Descapotable', 'https://es.cdn.mazda.media/0a2bec3b9d9448eda3ff8f45882a0972/908534686bae40ac867ec3e19b14f2ad.png?49430e', 28025)
  ];

  @Input() searchText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
