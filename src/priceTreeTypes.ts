export class PricingTreeSKU {
    Brand: string;
    SKU: string;
    CL: number;
    ABV: number;
    Import_Origin: string;
    Ex_Works: number;
    Duty: number;
    RRP: number;
  
    constructor(
      Brand: string,
      SKU: string,
      CL: number,
      ABV: number,
      Import_Origin: string,
      Ex_Works: number,
      Duty: number,
      RRP: number,

    ) {
      this.Brand = Brand;
      this.SKU = SKU;
      this.CL = CL;
      this.ABV = ABV;
      this.Import_Origin = Import_Origin;
      this.Ex_Works = Ex_Works;
      this.Duty = Duty;
      this.RRP = RRP;
    }
  }
  
 