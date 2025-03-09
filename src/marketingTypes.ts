
export class MarketingBudget{
Brand: string | null;
Trade_Shows: number | null;
Consumer_Shows: number | null;
Digital_Marketing: number | null;
Photography: number | null;
PR: number | null;
Wholesale_Activations: number | null
Retail_Activations: number | null;
Other_Retail_Activations: number | null;
Amazon_Marketing: number | null;
POS_Budget: number | null;
On_Trade_Activations: number | null;
On_Trade_Listing_Fee: number | null;
On_Trade_Staff_Incentives: number | null;
On_Trade_Entertainment: number | null;
Incidentals: number | null;
Total: number | null;

    constructor(
        Brand: string | null,
        Trade_Shows: number | null,
        Consumer_Shows: number | null,
        Digital_Marketing: number | null,
        Photography: number | null,
        PR: number | null,
        Wholesale_Activations: number | null,
        Retail_Activations: number | null,
        Other_Retail_Activations: number | null,
        Amazon_Marketing: number | null,
        POS_Budget: number | null,
        On_Trade_Activations: number | null,
        On_Trade_Listing_Fee: number | null,
        On_Trade_Staff_Incentives: number | null,
        On_Trade_Entertainment: number | null,
        Incidentals: number | null,
        Total: number | null,
        
        
    ){
        this.Brand = Brand
        this.Trade_Shows = Trade_Shows
        this.Consumer_Shows = Consumer_Shows
        this.Digital_Marketing = Digital_Marketing
        this.Photography = Photography
        this.PR = PR
        this.Wholesale_Activations = Wholesale_Activations
        this.Retail_Activations = Retail_Activations
        this.Other_Retail_Activations = Other_Retail_Activations
        this.Amazon_Marketing = Amazon_Marketing
        this.POS_Budget = POS_Budget
        this.On_Trade_Activations = On_Trade_Activations
        this.On_Trade_Listing_Fee = On_Trade_Listing_Fee
        this.On_Trade_Staff_Incentives = On_Trade_Staff_Incentives
        this.On_Trade_Entertainment = On_Trade_Entertainment
        this.Incidentals = Incidentals    
        this.Total = Total
    }
}