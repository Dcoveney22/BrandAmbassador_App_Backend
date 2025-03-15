import express, { Request, Response } from "express";
import env from "dotenv";
import cors from "cors";
import { ProductDataFinder } from "./getProductData";
import { testdata } from "./getMarketingData";


  const dataFinder = new ProductDataFinder()
    let data = dataFinder.findData()
    //  console.log(data)



env.config();

const port = 3000;
const app = express();
app.use(express.json());

const options: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(options));

app.get("/stockSheet", (req: Request, res: Response) => {
  setTimeout(() => { 
    
    res.json( { testdata, data }) ;
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  
});
