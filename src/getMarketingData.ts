///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { MarketingBudget } from './marketingTypes'

const supabaseUrl = 'https://slmvuradrpbxzgbzrmaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbXZ1cmFkcnBieHpnYnpybWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0NDkzNDksImV4cCI6MjA1NzAyNTM0OX0.nAsoXdMjTRBnvmO5wJnEAhDC1EfJ-g6s0ToaEmDhNp0'
// const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// export const testdata = [{
//   name: "John",
//   Age: "23"
// }]

export class MarketingDataFinder {
    // firstDataArray: BrandSKU[] = [];
    // data: BrandSKU[] = []
public async findMarketingData(){
    const { data, error } = await supabase
  .from('marketingBudgetSheet')
  .select('*')
//   console.log(data);
  if (error) {
    console.log("there was an error");    
  }
  if (data) {
    const budgets = data.map(ref => 
      new MarketingBudget(
      ref.Brand, 
      ref.Trade_Shows, 
      ref.Consumer_Shows, 
      ref.Digital_Marketing, 
      ref.Photography, 
      ref.PR, 
      ref.Wholesale_Activations, 
      ref.Retail_Activations,
      ref.Other_Retail_Activations,
      ref.Amazon_Marketing,
      ref.POS_Budget,
      ref.On_Trade_Activations,
      ref.On_Trade_Listing_Fee,
      ref.On_Trade_Staff_Incentives,
      ref.On_Trade_Entertainment,
      ref.Incidentals,
      ref.Total,
    )
  )
  return budgets
  //  console.log(budgets);
   
  }
    // console.log(this.firstDataArray);
          }
        }
    const dataFinder = new MarketingDataFinder()
    dataFinder.findMarketingData()
    