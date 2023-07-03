
export function calculateSumByCat(products) {
    const sumByCat = [];
    for (const product of products) {
        const { cat, number } = product;
        const parsedNumber = parseFloat(number.replace(/[^0-9.-]+/g, ""));

        if (!sumByCat.hasOwnProperty(cat)) {
            sumByCat[cat] = 0;
        }

        sumByCat[cat] += parsedNumber;
    }
    return Object.entries(sumByCat).map(([name, value]) => ({ name, value }));
}

export function getTotalExpense(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].value;
    }
    return total;
}