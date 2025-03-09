export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      marketingBudgetSheet: {
        Row: {
          Amazon_Marketing: string | null
          Brand: string | null
          Consumer_Shows: string | null
          Digital_Marketing: string | null
          Incidentals: number | null
          On_Trade_Activations: number | null
          On_Trade_Entertainment: string | null
          On_Trade_Listing_Fee: number | null
          On_Trade_Staff_Incentives: number | null
          Other_Retail_Activations: number | null
          Photography: string | null
          POS_Budget: string | null
          PR: string | null
          Retail_Activations: number | null
          Total: number | null
          Trade_Shows: number | null
          Wholesale_Activations: number | null
        }
        Insert: {
          Amazon_Marketing?: string | null
          Brand?: string | null
          Consumer_Shows?: string | null
          Digital_Marketing?: string | null
          Incidentals?: number | null
          On_Trade_Activations?: number | null
          On_Trade_Entertainment?: string | null
          On_Trade_Listing_Fee?: number | null
          On_Trade_Staff_Incentives?: number | null
          Other_Retail_Activations?: number | null
          Photography?: string | null
          POS_Budget?: string | null
          PR?: string | null
          Retail_Activations?: number | null
          Total?: number | null
          Trade_Shows?: number | null
          Wholesale_Activations?: number | null
        }
        Update: {
          Amazon_Marketing?: string | null
          Brand?: string | null
          Consumer_Shows?: string | null
          Digital_Marketing?: string | null
          Incidentals?: number | null
          On_Trade_Activations?: number | null
          On_Trade_Entertainment?: string | null
          On_Trade_Listing_Fee?: number | null
          On_Trade_Staff_Incentives?: number | null
          Other_Retail_Activations?: number | null
          Photography?: string | null
          POS_Budget?: string | null
          PR?: string | null
          Retail_Activations?: number | null
          Total?: number | null
          Trade_Shows?: number | null
          Wholesale_Activations?: number | null
        }
        Relationships: []
      }
      stockSheet: {
        Row: {
          ABV: number | null
          Brand: string | null
          CL: number | null
          Ex_Works: number | null
          On_Trade: number | null
          RRP: number | null
          SKU: string | null
          Wholesale: number | null
        }
        Insert: {
          ABV?: number | null
          Brand?: string | null
          CL?: number | null
          Ex_Works?: number | null
          On_Trade?: number | null
          RRP?: number | null
          SKU?: string | null
          Wholesale?: number | null
        }
        Update: {
          ABV?: number | null
          Brand?: string | null
          CL?: number | null
          Ex_Works?: number | null
          On_Trade?: number | null
          RRP?: number | null
          SKU?: string | null
          Wholesale?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
