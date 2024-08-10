interface ProductInfoProps {
    name: string;
    price: number;
}

export default function ProductMainInfo({ name, price }: ProductInfoProps) {
    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-xl text-gray-600">{price} ₽</p>
        </div>
    );
}
