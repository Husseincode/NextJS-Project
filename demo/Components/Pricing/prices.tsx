type pricesProps = {
    baseFare: number,
    costPerMinute: number,
    costPerMile: number,
    bookingFee: number,
    surgePricing: number,
    tolls: number,
    miscellaneous: number
}

export const prices: pricesProps = {
    baseFare: 200, //assumed && static
    costPerMinute: 70, //assumed && static
    costPerMile: 100, //assumed && static
    bookingFee: 100, //assumed && static
    surgePricing: 50, //assumed && dynamic
    tolls: 30, //assumed && variable
    miscellaneous: 50 //assumed && variable
}