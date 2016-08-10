export namespace Listing {

    export interface Range {
        Lower: string;
        Upper: string;
    }

    export interface Option {
        Value: string;
        Display: string;
        Count: number;
    }

    export interface Unit {
        Display: string;
        Multiplier: number;
    }

    export interface Attribute {
        Name: string;
        DisplayName: string;
        Value: string;
        Type: number;
        Range: Range;
        MaxStringLength: number;
        Options: Option[];
        Units: Unit[];
        Unit: string;
        IsRequiredForSell: boolean;
        EncodedValue: string;
        GroupName: string;
        DisplayValue: string;
    }

    export interface Contact {
        FullName: string;
        PhoneNumber: string;
        AlternatePhoneNumber: string;
        EMail: string;
        BrandingImageId: number;
        AgentId: string;
    }

    export interface EmbeddedContent {
        YouTubeVideoKey: string;
    }

    export interface Value {
        Thumbnail: string;
        List: string;
        Medium: string;
        Gallery: string;
        Large: string;
        FullSize: string;
        PlusSize: string;
        PhotoId: number;
        OriginalWidth: number;
        OriginalHeight: number;
    }

    export interface Photo {
        PhotoId: number;
        Value: Value;
    }

    export interface RequestBase {
        Category: string;
        Title: string;
        Description: string[];
        Duration?: number;
        EndDateTime?: Date;
        IsClassified: boolean;
        IsFeatured: boolean;
        PhotoIds?: number[];
        Attributes: Attribute[];
        ExternalReferenceId?: string;
        ReturnListingDetails?: boolean;
        EmbeddedContent: EmbeddedContent;
        IsBranded: boolean;
        ShortDescription: string;
        Photos?: Photo[];
    }

    export interface Request extends RequestBase {
        ListingId?: number;
    }

    export interface Response {
        Success: boolean;
        Description: string;
        ListingId: number;
    }

}

