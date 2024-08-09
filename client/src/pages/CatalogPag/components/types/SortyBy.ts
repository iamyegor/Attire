export default class SortBy {
    private constructor(
        public readonly value: string,
        public readonly searchParam: string,
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
}
