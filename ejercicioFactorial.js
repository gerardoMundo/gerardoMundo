let acc = 1;

for(var i = 1; i<=10; i++) {
    let resultado = acc *= i;
}

while (i<=10) {
    i++;
    let resultado = acc *= i;
}

while (i<=10) {
    i++;
    let resultado = acc *= i;
    if(i = 10) break;
}