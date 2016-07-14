export namespace RetrieveJobCategory {
    interface Category {
        Name: string;
        Code: string;
    }

    export interface JobCategory extends Category {
        SubCategories: Category[];
    }
}