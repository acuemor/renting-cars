export class Car {
  public brand: string;
  public model: string;
  public price: number;
  public imgPath: string;
  public description: string;

  constructor(brand: string, model: string, desc: string, img: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.description = desc;
    this.imgPath = img;
    this.price = price;
  }
}
