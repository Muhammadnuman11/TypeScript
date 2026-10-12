function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Chai type is ${kind}`;
    }
    return `Chai order number: ${kind}`;
}

function servingChai(msg?: string) {
    if (msg) {
        return `Serving Chai ${msg}`;
    }
    return `Serving Default Chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small"){
        return `Ordering a small Chai`;
    }
    if (size === "medium") {
        return `Ordering a medium Chai`;
    }
    if (size === "large") {
        return `Ordering a large Chai`;
    }
    return `Ordering a Chai with size ${size}`; 
}