
export class MarketingBudget{
Brand: string;
Trade_Shows: number;
Consumer_Shows: number;
Digital_Marketing: number;
Photography: number;
PR: number;
Wholesale_Activations: number;
Retail_Activations: number;
Other_Retail_Activations: number;
Amazon_Marketing: number;
POS_Budget: number;
On_Trade_Activations: number;
On_Trade_Listing_Fee: number;
On_Trade_Staff_Incentives: number;
On_Trade_Entertainment: number;
Incidentals: number;
Total: number;

    constructor(
        Brand: string,
        Trade_Shows: number,
        Consumer_Shows: number,
        Digital_Marketing: number,
        Photography: number,
        PR: number,
        Wholesale_Activations: number,
        Retail_Activations: number,
        Other_Retail_Activations: number,
        Amazon_Marketing: number,
        POS_Budget: number,
        On_Trade_Activations: number,
        On_Trade_Listing_Fee: number,
        On_Trade_Staff_Incentives: number,
        On_Trade_Entertainment: number,
        Incidentals: number,
        Total: number,
        
        
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