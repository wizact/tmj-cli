export namespace ListingFee {

    export interface List {
        Date: Date;
        Type: number;
        Description: string;
        Credit: number;
        Debit: number;
    }

    export interface FeeItems {
        TotalCount: number;
        Page: number;
        PageSize: number;
        List: List[];
    }

    export interface ValidationError {
        Message: string;
    }

    export interface Response {
        Success: boolean;
        Description: string;
        TotalCost: number;
        FeeItems: FeeItems;
        ValidationErrors: ValidationError[];
    }

}

