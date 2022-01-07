const algorithms = [
    {
        name: "Fibonacci",
        to: "fibonacci",
        code: 
`int fibonacci_it(int n){
    int a=1, b=1,i=2;
    while(i++ < n){
        a+=b;
        b=a-b;
    }
    return a;
}`
    },
    {
        name: "Generowanie kluczy RSA",
        to: "gen-rsa"
    },
    {
        name: "Minimum",
        to: "minimum"
    },
    {
        name: "Maksimum",
        to: "maksimum"
    },
    {
        name: "Schemat hornera",
        to: "schemat-hornera"
    },
]

export function getAlgorithms() {
    return algorithms;
  }