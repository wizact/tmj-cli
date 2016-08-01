export namespace RetrieveWatchlist {

    export interface Attribute {
        Name: string;
        DisplayName: string;
        Value: string;
        EncodedValue: string;
    }

    export interface Branding {
        LargeSquareLogo: string;
        LargeWideLogo: string;
    }

    export interface List {
        ListingId: number;
        Title: string;
        Category: string;
        StartDate: Date;
        EndDate: Date;
        MaxBidAmount: number;
        AsAt: Date;
        CategoryPath: string;
        PictureHref: string;
        PhotoId: number;
        HasPayNow: boolean;
        IsNew: boolean;
        RegionId: number;
        Region: string;
        Suburb: string;
        Note: string;
        NoteId: number;
        NoteDate: Date;
        CategoryName: string;
        Attributes: Attribute[];
        Subtitle: string;
        IsOnWatchList: boolean;
        HasAppliedForJob: boolean;
        JobApplicationDate: Date;
        Branding: Branding;
    }

    export interface RetrieveWatchlist {
        TotalCount: number;
        Page: number;
        PageSize: number;
        List: List[];
    }

}

