///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { BrandSKU } from './skuTypes'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)



export class ProductDataFinder {
    // firstDataArray: BrandSKU[] = [];
    // data: BrandSKU[] = []
 public async findData(){
    const { data, error } = await supabase
  .from('stockSheet')
  .select('*')
  // console.log(data);
  if (error) {
    console.log("there was an error");    
  }
  if (data) {
    const productList = data.map(ref => 
      new BrandSKU(
      ref.Brand, 
      ref.SKU, 
      ref.CL, 
      ref.ABV, 
      ref.Ex_Works, 
      ref.Wholesale, 
      ref.On_Trade, 
      ref.RRP,
      ref.Product_Code
    )
  )
  return productList
  //  console.log(productList);
   
  }
 
    // console.log(this.firstDataArray);
          }
        }
    const dataFinder = new ProductDataFinder()
    dataFinder.findData()
    
