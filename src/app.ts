import express, { Request, Response } from "express";
import env from "dotenv";
import cors from "cors";
import { ProductDataFinder } from "./getProductData";
import { MarketingDataFinder } from "./getMarketingData";
import { PriceTreeDataFinder } from "./getPriceTreeData";
import { z } from "zod";
import { log } from "node:console";

// const dataFinder = new ProductDataFinder()
//   let data = dataFinder.findData()
//  console.log(data)
const dataFinder = new ProductDataFinder();
const marketingFinder = new MarketingDataFinder();
const priceTreeFinder = new PriceTreeDataFinder();

env.config();

const port = 3000;
const app = express();
app.use(express.json());

const options: cors.CorsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(options));

app.get("/stockSheet", async (req: Request, res: Response) => {
  const data = await dataFinder.findData();
  setTimeout(() => {
    res.json(data);
  }, 3000);
});

app.get("/marketingSheet", async (req: Request, res: Response) => {
  const data = await marketingFinder.findMarketingData();
  setTimeout(() => {
    res.json(data);
  }, 3000);
});

const valueSchema = z.object({
  Brand: z
    .string({
      invalid_type_error: "The brand name must be a string",
    })
    .min(1, { message: "The brand name is mandatory" }),
  SKU: z
    .string({ invalid_type_error: "The SKU name must be a string" })
    .min(1, { message: "The SKU name is mandatory" }),

  CL: z
    .number({ invalid_type_error: "The size must be a number" })
    .min(1, { message: "The size is mandatory" }),
  ABV: z
    .number({ invalid_type_error: "The ABV must be a number" })
    .min(1, { message: "The ABV is mandatory" }),

  Duty: z
    .number({ invalid_type_error: "The Duty must be a number" })
    .min(1, { message: "The Duty is mandatory" }),

  Import_Origin: z
    .string({
      invalid_type_error: "The Origin of Import name must be a string",
    })
    .min(1, { message: "The Origin of Import is mandatory" }),

  Ex_Works: z
    .number({ invalid_type_error: "The Ex_Works must be a number" })
    .min(1, { message: "The Ex_Works is mandatory" }),

  RRP: z
    .number({ invalid_type_error: "The RRP must be a number" })
    .min(1, { message: "The RRP is mandatory" }),
});

// ZOD - SCHEMA - Send response if issues - https://eagerworks.com/blog/zod-for-backend-data-validation
app.post("/priceTreeData", async (req: Request, res: Response) => {
  try {
    const validated = await valueSchema.parseAsync(req.body);
    priceTreeFinder.postPriceTreeData(validated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json(error);
      console.log(error.issues);
    }
  }

  // const dataBaseResponse = await priceTreeFinder.postPriceTreeData(req.body);

  // res.json(dataBaseResponse);
});

app.get("/savedProductData", async (req: Request, res: Response) => {
  const data = await priceTreeFinder.findPriceTreeData();
  setTimeout(() => {
    res.json(data);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
