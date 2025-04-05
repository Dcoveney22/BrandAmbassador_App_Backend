///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { MarketingBudget } from './marketingTypes'
import { PricingTreeSKU } from './priceTreeTypes'
import 'dotenv/config'

import dotenv from 'dotenv'
// const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey= process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey)
// dotenv.config()

const supabaseUrl = 'https://jmfqpoqnmgkkqqxcywzi.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY as string
console.log("new", supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey)



export class PriceTreeDataFinder {

public async findPriceTreeData (){
    const { data, error } = await supabase
  .from('priceTreeData')
  .select('*')
//   console.log(data);
  if (error) {
    console.log("there was an error");    
  }
  if (data) {
    const priceTree = data.map(ref => 
      new PricingTreeSKU(
      ref.Brand, 
      ref.SKU, 
      ref.CL, 
      ref.ABV, 
      ref.Import_origin, 
      ref.Ex_Works, 
      ref.Duty,
      ref.RRP
    )
  )
  return priceTree
  //  console.log(priceTree);
   
  }

          }
        }
    const dataFinder = new PriceTreeDataFinder()
    dataFinder.findPriceTreeData()
    