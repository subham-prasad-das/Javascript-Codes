

let arr = ["10", "20", "30", "40", "55"]

let brr = arr.filter((value) => {
    return (value % 10 == 0)
})

console.log(brr)