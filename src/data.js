const algorithms = [
    {
        name: "Fibbonacci",
        to: "fibbonacci",
        code: 
`bool pierwsza_o(int n){
    if(n < 2)
        return false;
    for(int i = 2; i*i<=n; i++)
        if(n%i == 0)
            return false;
    return true;
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