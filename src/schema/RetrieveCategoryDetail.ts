export namespace RetrieveCategoryDetail {

    export interface ListingFeeTier {
        MinimumTierPrice: number;
        FixedFee: number;
    }

    export interface Fees {
        Feature: number;
        Homepage: number;
        Listing: number;
        ListingFeeTiers: ListingFeeTier[];
        Branding: number;
    }

    export interface Option {
        Value: string;
        Display: string;
    }

    export interface Range {
        Lower: string;
        Upper: string;
    }

    export interface Attribute {
        Name: string;
        DisplayName: string;
        Value?: any;
        Type: number;
        MaxStringLength: number;
        IsRequiredForSell?: boolean;
        Options: Option[];
        Range: Range;
    }

    export interface EmbeddedContentOption {
        Value: string;
    }

    export interface Response {
        CategoryId: number;
        Name: string;
        Path: string;
        CanListAuctions: boolean;
        CanListClassifieds: boolean;
        CanRelist: boolean;
        DefaultDuration: number;
        AllowedDurations: number[];
        Fees: Fees;
        FreePhotoCount: number;
        MaximumPhotoCount: number;
        Attributes: Attribute[];
        EmbeddedContentOptions: EmbeddedContentOption[];
    }
}