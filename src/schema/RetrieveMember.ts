export namespace RetrieveMember {

    export interface Member {
        MemberId: number;
        Nickname: string;
        DateAddressVerified: Date;
        DateJoined: Date;
        UniqueNegative: number;
        UniquePositive: number;
        FeedbackCount: number;
        IsAddressVerified: boolean;
        Suburb: string;
        IsDealer: boolean;
        IsAuthenticated: boolean;
        IsInTrade: boolean;
        ImportChargesMayApply: boolean;
    }

    export interface RetrieveMember {
        FirstName: string;
        Occupation: string;
        Biography: string;
        Quote: string;
        Photo: string;
        IsEnabled: boolean;
        DateRemoved: Date;
        Member: Member;
        FavouriteId: number;
    }
}