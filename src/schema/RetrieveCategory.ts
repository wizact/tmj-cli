export namespace RetrieveCategory {
    export interface Category {
        Name: string;
        Number: string;
        Path: string;
        Count: number;
        IsRestricted: boolean;
        HasLegalNotice: boolean;
        HasClassifieds: boolean;
    }

    export interface Subcategory extends Category {
        Subcategories: Subcategory[];
    }

    export interface Response extends Category {
        Subcategories: Subcategory[];
    }
}