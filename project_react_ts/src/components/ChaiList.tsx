import type { Chai } from "../types";
import { ChaiCard } from "./ChaiCard";

interface ChaiListProp {
    items: Chai[]
}

export const ChaiList = ({ items }: ChaiListProp) => {
    return (
        <div className="">
            {items.map((chae, i) => (
                <ChaiCard key={i} name={chae.name} price = {chae.price} />
            ))}
        </div>
    );
}