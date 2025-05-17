///fetchDATA
import { createClient } from "@supabase/supabase-js";
import { PricingTreeSKU } from "./priceTreeTypes";
import "dotenv/config";
import { z } from "zod";

const supabaseUrl = "https://jmfqpoqnmgkkqqxcywzi.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export class PriceTreeDataFinder {
  public async findPriceTreeData() {
    const { data, error } = await supabase.from("priceTreeData").select("*");
    //   console.log(data);
    if (error) {
      console.log("there was an error");
    }
    if (data) {
      const priceTree = data.map(
        (ref) =>
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
      );
      return priceTree;
      //  console.log(priceTree);
    }
  }

  public async postPriceTreeData(data: PricingTreeSKU) {
    return await supabase.from("priceTreeData").insert(data);
  }
  // console.log(data);
}
