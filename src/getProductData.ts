///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { BrandSKU } from './skuTypes'

const supabaseUrl = 'https://slmvuradrpbxzgbzrmaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXZ1cmFkcnBieHpnYnpybWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDkzNDksImV4cCI6MjA1NzAyNTM0OX0.nAsoXdMjTRBnvmO5wJnEAhDC1EfJ-g6s0ToaEmDhNp0'
// const supabaseKey = process.env.SUPABASE_KEY
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
      ref.RRP
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
    
