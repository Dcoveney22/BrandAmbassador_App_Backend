///fetchDATA
import { createClient } from '@supabase/supabase-js'
import { MarketingBudget } from './marketingTypes'

const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey= process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

// export const testdata = [{
//   name: "John",
//   Age: "23"x 
// }]

export class MarketingDataFinder {
    // firstDataArray: BrandSKU[] = [];
    // data: BrandSKU[] = []
public async findMarketingData (){
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
    