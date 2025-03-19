import express, { Request, Response } from "express";
import env from "dotenv";
import cors from "cors";
import { ProductDataFinder } from "./getProductData";
import { MarketingDataFinder } from "./getMarketingData";


  // const dataFinder = new ProductDataFinder()
  //   let data = dataFinder.findData()
    //  console.log(data)
const dataFinder = new ProductDataFinder()
const marketingFinder = new MarketingDataFinder()


env.config();

const port = 3000;
const app = express();
app.use(express.json());

const options: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(options));

app.get("/stockSheet", async (req: Request, res: Response) => { 
  const data = await dataFinder.findData()
  setTimeout(() => { 
    res.json( data ) ;
  }, 3000);
});

app.get("/marketingSheet", async (req: Request, res: Response) => {
  
  const data = await marketingFinder.findMarketingData()
  setTimeout(() => { 
    res.json({ data }) ;
  }, 3000);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  
});
