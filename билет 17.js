let bi = [1, 2, -3, 4, -5, 6, 7, -8, 9, -10, 11, 12, 13, 14, -15, 16, 17, 18];
let s = 10;
let p = 15;

let count_negative = 0;
let product_positive = 1;

for (let i = 0; i < bi.length; i++) {
    if (bi[i] < 0) {
        count_negative++;
    } else if (bi[i] > 0) {
        product_positive *= bi[i];
    }
}

if (product_positive > s || product_positive > p) {
    console.log("Произведение положительных элементов больше значения:", product_positive);
}

if (count_negative > 0) {
    console.log("Количество отрицательных элементов:", count_negative);
}

if (Math.abs(product_positive - s) > Math.abs(product_positive - p)) {
    console.log("Значение", p, "больше чем", s, "на", Math.abs(product_positive - p));
} else {
    console.log("Значение", s, "больше чем", p, "на", Math.abs(product_positive - s));
}
