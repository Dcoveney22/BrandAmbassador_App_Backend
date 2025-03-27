// /Make super class?? With NULL properties.

export class BrandSKU {
  Brand: string;
  SKU: string;
  CL: number;
  ABV: number;
  Ex_Works: number;
  Wholesale: number;
  On_Trade: number;
  RRP: number;
  Product_Code: string;

  constructor(
    Brand: string,
    SKU: string,
    CL: number,
    ABV: number,
    Ex_Works: number,
    Wholesale: number,
    On_Trade: number,
    RRP: number,
    Product_Code: string,
  ) {
    this.Brand = Brand;
    this.SKU = SKU;
    this.CL = CL;
    this.ABV = ABV;
    this.Ex_Works = Ex_Works;
    this.Wholesale = Wholesale;
    this.On_Trade = On_Trade;
    this.RRP = RRP;
    this.Product_Code = Product_Code;
  }
}
