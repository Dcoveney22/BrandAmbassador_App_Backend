///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { BrandSKU } from './skuTypes'

const supabaseUrl = 'https://slmvuradrpbxzgbzrmaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXZ1cmFkcnBieHpnYnpybWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDkzNDksImV4cCI6MjA1NzAyNTM0OX0.nAsoXdMjTRBnvmO5wJnEAhDC1EfJ-g6s0ToaEmDhNp0'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

class DataFinder {
    firstDataArray: BrandSKU[] = [];
public async findData(){
    let data = await supabase
  .from('stockSheet')
  .select('*')
  this.firstDataArray.push(new BrandSKU(
    data.Brand, 
    data.SKU, 
    data.CL, 
    data.ABV, 
    data.Ex_Works, 
    data.Wholesale, 
    data.On_Trade, 
    data.RRP
)
);
    console.log(this.firstDataArray);
          }
        }
    const dataFinder = new DataFinder()
    dataFinder.findData()