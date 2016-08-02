export namespace RetrieveMemberSummary {

    export interface MemberProfile {
        Occupation: string;
        Biography: string;
        Quote: string;
        Photo: string;
    }

    export interface RetrieveMemberSummary {
        WatchListCount: number;
        SellingCount: number;
        SoldCount: number;
        UnsoldCount: number;
        PositiveFeedback: number;
        NegativeFeedback: number;
        TotalFeedback: number;
        MemberId: number;
        Nickname: string;
        DateJoined: Date;
        DateAddressVerified: Date;
        IsAddressVerified: boolean;
        Balance: number;
        PayNowBalance: number;
        FirstName: string;
        LastName: string;
        FixedPriceOffers: number;
        Email: string;
        ClosestLocality: string;
        ClosestDistrict: string;
        IsAuthenticated: boolean;
        AutoBillingEnabled: boolean;
        IsTopSeller: boolean;
        IsPropertyAgent: boolean;
        IsRentalAgent: boolean;
        IsJobAgent: boolean;
        CreditCardType: string;
        CreditCardLastFourDigits: string;
        CreditCardExpiryMonth: number;
        CreditCardExpiryYear: number;
        RecentSearchesEnabled: boolean;
        HighVolumeListingCount: number;
        HighVolumeThreshold: number;
        MemberProfile: MemberProfile;
        ExternalTrackingToken: string;
        MobilePhoneNumber: string;
    }

}

