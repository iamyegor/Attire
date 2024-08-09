export default class Type {
    private constructor(
        public readonly name: string,
        public readonly path: string,
    ) {}

    static readonly Men = new Type("Мужчинам", "men");
    static readonly Women = new Type("Женщинам", "women");
    static readonly New = new Type("Новинки", "new");

    static values(): Type[] {
        return [Type.Men, Type.Women, Type.New];
    }

    toString(): string {
        return this.name;
    }

    public isMen(): boolean {
        return this === Type.Men;
    }

    public isWomen(): boolean {
        return this === Type.Women;
    }

    public isNew(): boolean {
        return this === Type.New;
    }

    static createBasedOnPath(path: string): Type {
        const type = Type.values().find((t) => path.startsWith(t.path));
        if (!type) {
            throw new Error(`Type with path "${path}" not found.`);
        }
        return type;
    }
}
