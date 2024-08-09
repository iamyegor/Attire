import SortBy from "@/pages/CatalogPage/components/SortByComponent/types/SortyBy.ts";
import { FilterQueryParams } from "@/pages/CatalogPage/types/FilterQueryParams.ts";

export default interface ProductQueryParams {
    filters: FilterQueryParams;
    sorting: SortBy;
}
