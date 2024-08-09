export default class SortBy {
    private constructor(
        public readonly value: string,
        public readonly searchParamValue: string,
    ) {}

    static readonly Popular = new SortBy("Популярные", "popular");
    static readonly New = new SortBy("Новинки", "new");
    static readonly Cheaper = new SortBy("Дешевле", "cheaper");
    static readonly MoreExpensive = new SortBy("Дороже", "more_expensive");

    static values(): SortBy[] {
        return [SortBy.Popular, SortBy.New, SortBy.Cheaper, SortBy.MoreExpensive];
    }

    toString(): string {
        return this.value;
    }

    static createBasedOnSearchParamValue(searchParamValue: string | null) {
        return SortBy.values().find((s) => s.searchParamValue === searchParamValue);
    }
}
