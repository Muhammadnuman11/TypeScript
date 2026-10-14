
interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}   

export function ChaiCard({ name, price, isSpecial = false } : ChaiCardProps) {
    return (
        <article>
            <h2>{name}</h2>
            {isSpecial && <span>Special ⭐️</span>}
            <p>Price: {price}</p>
        </article>
    )
}