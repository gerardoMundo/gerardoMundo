const fibonacci = (num) => {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i <= num; i++) {
        if(num === arr.length) return arr;
       
       arr[i] = arr[i-2] + arr[i - 1];
    }
    
    
    // [1, 1, 2, 3, 5, 8, 13]
}

const secuencia = fibonacci(6);
console.log(secuencia);
