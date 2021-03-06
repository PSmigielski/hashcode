const code = {
    fibonacci:[
        {
            name: "iteracyjnie",
            snippets: [
                {
                    lang: "cpp",
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
                    lang: "python",
                    code: 
`def fibonacci_it(n):
    a=1
    b=1
    i=2
    while i < n:
        a+=b;
        b=a-b;
        i+=1
    return a`
                }

            ]
        },
        {
            name: "rekurencyjnie",
            snippets: [
                {
                    lang:"cpp",
                    code:
`int fibonacci_rek(int n){
    return n < 3 ? 1 : fibonacci_rek(n-1) + fibonacci_rek(n-2);
}`
                },
                {
                    lang:"python",
                    code:
`def fibonacci_rek(n):
    return 1 if n < 3 else fibonacci_rek(n - 1) + fibonacci_rek(n - 2)`
                }  
            ]
        }
    ],
    perfectNumber:{
            name: "iteracyjnie",
            snippets: [
                {
                    lang: "cpp",
                    code: 
`bool doskonala(int n)
{
    int i = 1, sum = 0;
    while (i < n)
    {
        if (n % i == 0)
            sum += i;
        i++;
    }
    return n == sum;
}`
                },
                {
                    lang: "python",
                    code: 
`def doskonala(n):
    i = 1 
    sum = 0
    while i < n:
        if n % i == 0:
            sum += i
        i+=1
    return n == sum`
                }
            ]
    },
    nwd:[
        {
            name: "iteracyjnie optymalny",
            snippets:[
                {
                    lang: "cpp",
                    code: 
`int nwd_it_o(int a, int b){
    while(b != 0){
        int r=a%b;
        a=b;
        b=r;
    }
    return a;
}`
                },
                {
                    lang:"python",
                    code:
`def nwd_it_o(a, b):
    while b != 0:
        r=a%b
        a=b
        b=r
    return a`
                }
            ]
        },
        {
            name: "rekurencyjnie optymalny",
            snippets:[
                {
                    lang:"cpp",
                    code: 
`int nwd_rek_o(int a, int b){
    return b != 0 ? nwd_rek_o(b, a%b) : a;
}`
                },
                {
                    lang:"python",
                    code:
`def nwd_rek_o(a, b):
    return nwd_rek_o(b, a%b) if b != 0 else a`
                }
            ]
        },
        {
            name:"iteracyjnie nieoptymalny",
            snippets:[
                {
                    lang: "cpp",
                    code:
`int nwd_it_n(int a, int b){
    if(b != 0)
        while(a != b)
            if(a > b)
                a-=b;
            else 
                b-=a;
    return a;
}`
                },
                {
                    lang: "python",
                    code:
`def nwd_it_n(a, b):
    if b != 0:
        while a != b:
            if a > b:
                a-=b
            else: 
                b-=a
    return a`
                }
            ]
        },
        {
            name: "rekurencyjnie nieoptymalny",
            snippets:[
                {
                    lang: "cpp",
                    code:
`int nwd_rek_n(int a, int b){
    if(b != 0){
        if(a != b){
            if(a > b){
                return nwd_rek_n(a-b, b);
            }else{
                return nwd_rek_n(a , b-a);
            }
        }
    }
    return a;
}`
                },
                {
                    lang:"python",
                    code:
`def nwd_rek_n(a, b):
    if b != 0:
        if a != b:
            if a > b:
                return nwd_rek_n(a-b, b)
            else:
                return nwd_rek_n(a, b-a)
    return a`
                }
            ]
        }
    ],
    sumOfNumbers:[
        {
            snippets: {
                lang: "cpp",
                code:
`int suma(int liczba){
    int wynik=0;
    do{
        wynik=wynik+liczba%10;
        liczba=liczba/10;
    }   
    while(liczba!=0);
    return wynik;
}`
            }
        }
    ],
    power:[
        {
            name:"pot??gowanie normalne",
            snippets:[
                {
                    lang: "cpp",
                    code: 
`/*
p - podstawa pot??gi 
n - wyk??adnik pot??gi
*/
int pow_klasyczne(int p, int n){
    int pow = 1;
    for (int i = n; i > 0; i--)
        pow *= p;
    return pow;
}`
                },
                {
                    lang: "python",
                    code:
`# p - podstawa pot??gi 
# n - wyk??adnik pot??gi
def pow_klasyczne(p, n):
    pow = 1
    i = n
    while i > 0:
        pow *= p
        i-=1
    return pow`
                }
            ]
        },
        {
            name: "pot??gowanie szybkie",
            snippets: [
                {
                    lang: "cpp",
                    code: 
`/*
p - podstawa pot??gi 
n - wyk??adnik pot??gi
*/
int pow_szybkie(int p, int n){
    int w = 1;
    while (n > 0)
    {
        if (n % 2 == 1)
            w *= p;
        p *= p;
        n /= 2;
    }
    return w;
}`
                },
                {
                    lang: "python",
                    code: 
`# p - podstawa pot??gi 
# n - wyk??adnik pot??gi
def pow_szybkie(p, n):
    w = 1
    while n > 0:
        if (n % 2 == 1):
            w *= p
        p *= p
        n //= 2
    return w`
                }
            ]
        }
    ],
    primeNumber: [
        {
            name: "optymalny",
            snippets: [
                {
                    lang: "cpp",
                    code: 
`bool pierwsza_o(int n){
    if(n < 2) return false;
    for(int i = 2; i*i<=n; i++)
        if(n%i == 0)
            return false;
    return true;
}`
                },
                {
                    lang: "python",
                    code: 
`def pierwsza_o(n):
    if n < 2:
        return False
    i=2
    while i**2 <= n:
        if n % i == 0:
            return False
        i+=1
    return True`
                }
            ]
        }, 
        {
            name: "nieoptymalny",
            snippets: [
                {
                    lang:"cpp",
                    code: 
`bool pierwsza_n(int n){
    if(n < 2) return false;
    for(int i = 2; i<n; i++)
        if(n%i == 0)
            return false;
    return true;
}`
                },
                {
                    lang:"python",
                    code: 
`def pierwsza_n(n):
    if n < 2:
        return False;
    i=2    
    while i < n:
        if n % i == 0:
            return False
        i+=1; 
    return True`
                }
            ]
        }
    ],
    palindrome: [
        {
            name: "palindrome",
            snippets:
`bool palindrome(string word){
    int length = word.length();
    for(int i=0;i < length ;i++){
        if(word[i] != word[length-i-1]){
          return false;
          break;
        }
    }
    return true;
}`
        }
    ],
    primeFactors: [
        {
            name: "czynniki pierwsze",
            snippets:
`void rozklad(int n){
    for(int i=2;i<=n;i++){
        if(n%i==0){
            cout<<i<<endl;
            n=n/i;
            i--;
        }
    }
}`
        }
    ],
    hornerScheme: [
        {
            name: "iteracyjnie",
            snippets: [
                {
                    lang:"cpp",
                    code: 
`/*
st - stopie?? swielomianu;
x - wsp????czynnik wielomianu;
w[] - wsp????czynniki wielomianu;
*/
int horner_it(int st, int x, int W[]){
    int wynik = W[0];
    for (int k = 1; k <= st; k++)
        wynik = wynik * x + W[k];
    return wynik;
}`
                },
                {
                    lang: "python",
                    code:
`# st - stopie?? swielomianu;
# x - wsp????czynnik wielomianu;
# W[] - wsp????czynniki wielomianu;
def horner_it(st, x, W):
    wynik = W[0]
    k = 1
    while k <= st:
        wynik = wynik * x + W[k]
        k+=1
    return wynik`
                }
            ]
        },
        {
            name: "rekurencyjnie",
            snippets: [
                {
                    lang:"cpp",
                    code:
`/*
st - stopie?? swielomianu;
x - wsp????czynnik wielomianu;
w[] - wsp????czynniki wielomianu;
*/
int horner_rek(int st, int x, int W[]){
    if (st == 0)
        return W[0];
    return x * horner_rek(st - 1, x, W) + W[st];
}`
                },
                {
                    lang:"python",
                    code:
`# st - stopie?? swielomianu;
# x - wsp????czynnik wielomianu;
# w[] - wsp????czynniki wielomianu;
def horner_rek(st, x, W):
    if st == 0:
        return W[0]
    return x * horner_rek(st - 1, x, W) + W[st]`
                }
            ]
        }
    ],
    factorial: [
        {
            name: "silnia iteracyjnie",
            snippets: [
                    {
                        lang: "cpp",
                        code: 
`int silnia_it(int n){
    if(n < 2) return 1;
    int s=1;
    while(0 < n){
        s=s*n;
        n--;
    }
    return s;
}`
                        
                    },
                    {
                        lang: "python",
                        code: 
`def silnia_it(n):
    if n < 2:
        return 1
    s=1
    while 0 < n:
        s*=n
        n-=1
    return s`
                    }
                ]
        },
        {
            name: "silnia rekurencyjnie",
            snippets: [
                {
                    lang: "cpp",
                    code:
`int silnia_rek(int n){
    return n < 2 ? 1 : n*silnia_rek(n-1);
}`
                },
                {
                    lang: "python",
                    code: 
`def silnia_rek(n):
    return 1 if n < 2 else n * silnia_rek(n - 1);`
                }
            ]
        }
    ],
    numberSystemChange: [
        {
            name: "z systemu p na dziesi??tny",
            snippets: [
                {
                    lang: "cpp",
                    code: 
`/*
n - liczba naturalna w systemie p
p - podstawa systemu dla liczby n w zakresie od 2 do 9
l - liczba cyfr w n
*/
int p_na_dzies(int n, int p, int l){
    int sum = 0;
    int i = 1;
    int *numbers = new int[l];
    do {
        numbers[i - 1] = n % 10;
        n /= 10;
        i++;
    } while (n);
    for (int i = 0; i < l; i++)
        sum += numbers[i] * pow_szybkie(p, i);
    delete[] numbers;
    return sum;
}`
                },
                {
                    lang: "python",
                    code:
`# n - liczba naturalna w systemie p
# p - podstawa systemu dla liczby n w zakresie od 2 do 9
def p_na_dzies(n, p):
    sum = 0
    numbers = [];
    while True:
        if n == 0:
            break;
        numbers.append(n % 10);
        n //= 10
    i = 0
    while i < numbers.__len__():
        sum += numbers[i] * pow_szybkie(p, i)
        i+=1
    return sum`
                }
            ]
        },
        {
            name: "z dziesi??tnego na system p",
            snippets: [
                {
                    lang: "cpp",
                    code:
`/*
a - liczba w systemie dziesi??tnym
p - podstawa systemu liczbowego od 2 do 9
*/
string dzies_na_p(int a, int p){
    string wyn = "", tmp = "";
    while (a)
    {
        wyn += char(a % p + 48); //48 to w ASCII "0"
        a /= p;
    }
    for (int l = wyn.length(); l > 0; l--)
        tmp += wyn[l - 1];
    return tmp;
}`
                },
                {
                    lang: "python",
                    code:
`# a - liczba w systemie dziesi??tnym
# p - podstawa systemu liczbowego od 2 do 9
def dzies_na_p(a, p):
    wyn = ""
    tmp = ""
    while a:
        wyn += str(a%p)
        a //= p
    l = wyn.__len__()
    while l > 0:
        tmp += wyn[l-1]
        l-=1
    return tmp`
                }
            ]
        }
    ]
}
const pages = [
    {
        name:"Podstawowe Informacje",
        to:"basic-info",
        data:[
            {
                header:"Czym jest algorytm?",
                text:"Algorytm to sko??czony ci??g jasno zdefiniowanych czynno??ci koniecznych do wykonania pewnego rodzaju zada??, spos??b post??powania prowadz??cy do rozwi??zania problemu. Mo??na go przedstawi?? za pomoc?? schematu blokowego, listy krok??w lub za pomoc?? j??zyka programowania."
            },
            {
                header:"Kiedy algorytm jest poprawny?",
                text: "Algorytm jest poprawny je??li dla ka??dego dowolnego zestawu danych zgodnych ze specyfikacj?? algorytmu spe??nione s?? warunki:",
                list: [
                    "Jest sko??czony",
                    "zwraca wyniki zgodne ze specyfikacj??",
                    "jest dobrze okre??lony",
                    "jest uniwersalny"
                ]
            },
            {
                header:"Co to z??o??ono???? obliczeniowa algorytmu?",
                text: "Z??o??ono???? obliczeniowa algorytmu okre??la liczb?? zasob??w komputerowych potrzebnych do wykonania tego zadania. typy z??o??ono??ci:",
                list: [
                    "optymistyczna",
                    "pesymistyczna",
                    "oczekiwana"
                ]
            },
            {
                text:"Z??o??ono???? obliczeniowa mo??na podzieli?? na z??o??ono???? czasow?? i z??o??ono???? pami??ciow??",
            },
            {
                text:"Z??o??ono???? czasowa:",
                list:[
                    "Obejmuje czas dzia??ania algorytmu",
                    "Niezale??na od komputera i j??zyka programowania",
                    "mierzona liczb?? operacji dominuj??cych",
                    "zale??na od danych wej??ciowych"
                ]
            },
            {
                header:"Co to operacja dominuj??ca",
                text: "Operacja dominuj??ca to operacja charakterystyczna dla danego algorytmu, na og???? zajmuj??ca w nim najwi??cej czasu."
            }
        ]
    },
    {
        name: "Ci??g Fibonacciego",
        to: "fibonacci",
        data: [
            {
                header: "Ci??g Fibbonaciego",
                text: "Ci??g Fibonacciego ??? ci??g liczb naturalnych okre??lony rekurencyjnie w spos??b nast??puj??cy: Pierwszy wyraz jest r??wny 0, drugi jest r??wny 1, ka??dy nast??pny jest sum?? dw??ch poprzednich."
            },
            {
                header: "Algorytm iteracyjny",
                snippets: [
                    {
                        lang: code.fibonacci[0].snippets[0].lang,
                        code: code.fibonacci[0].snippets[0].code
                    },
                    {
                        lang: code.fibonacci[0].snippets[1].lang,
                        code: code.fibonacci[0].snippets[1].code                     
                    }
                ]
            },
            {
                header: "Algorytm rekurencyjny",
                snippets: [
                    {
                        lang: code.fibonacci[1].snippets[0].lang,
                        code: code.fibonacci[1].snippets[0].code
                    },
                    {
                        lang: code.fibonacci[1].snippets[1].lang,
                        code: code.fibonacci[1].snippets[1].code                     
                    }
                ]
            }             
        ]
    },
    {
        name: "Liczba Doskona??a",
        to: "liczba-doskonala",
        data: [
            {
                header: "Liczba doskona??a",
                text: "Liczba doskona??a - to taka liczba naturalna, kt??ra jest r??wna sumie wszystkich swoich podzielnik??w, mniejszych od tej liczby.",
                snippets: [
                    {
                        lang: code.perfectNumber.snippets[0].lang,
                        code: code.perfectNumber.snippets[0].code,
                    },
                    {
                        lang: code.perfectNumber.snippets[1].lang,
                        code: code.perfectNumber.snippets[1].code,
                    }
                ]
            }
        ]
    },
    {
        name: "Najwi??kszy wsp??lny dzielnik",
        to: "nwd",
        data: [
            {
                header: "Najwi??kszy Wsp??lny Dzielnik",
                text: "Najwi??kszy wsp??lny dzielnik to dla danych dw??ch (lub wi??cej) liczb ca??kowitych najwi??ksza liczba naturalna dziel??ca ka??d?? z nich. Poj??cie to ma wiele uog??lnie??, kt??re przedstawiono w dalszej cz????ci artyku??u. Najwi??kszy wsp??lny dzielnik liczb a i b zapisuje si?? zwykle nwd(a, b). Dwie liczby nazywa si?? wzgl??dnie pierwszymi, je??eli ich najwi??kszym wsp??lnym dzielnikiem jest 1 ??? na przyk??ad wzgl??dnie pierwsze s?? 9 i 28. Poj??cie najwi??kszego wsp??lnego dzielnika wykorzystuje si?? podczas redukcji u??amk??w do postaci nieskracalnej (to znaczy takiej, w kt??rej licznik i mianownik s?? wzgl??dnie pierwsze).",
            },
            {
                header: "Algorytm iteracyjnie optymalny",
                snippets: [
                    {
                        lang: code.nwd[0].snippets[0].lang,
                        code: code.nwd[0].snippets[0].code
                    },
                    {
                        lang: code.nwd[0].snippets[1].lang,
                        code: code.nwd[0].snippets[1].code
                    },
                ]
            },
            {
                header: "Algorytm rekurencyjnie optymalny",
                snippets: [
                    {
                        lang: code.nwd[1].snippets[0].lang,
                        code: code.nwd[1].snippets[0].code
                    },
                    {
                        lang: code.nwd[1].snippets[1].lang,
                        code: code.nwd[1].snippets[1].code
                    },
                ]
            },
            {
                header: "Algorytm iteracyjnie nieoptymalny",
                snippets: [
                    {
                        lang: code.nwd[2].snippets[0].lang,
                        code: code.nwd[2].snippets[0].code
                    },
                    {
                        lang: code.nwd[2].snippets[1].lang,
                        code: code.nwd[2].snippets[1].code
                    },
                ]
            },
            {
                header: "Algorytm rekurencyjnie nieoptymalny",
                snippets: [
                    {
                        lang: code.nwd[3].snippets[0].lang,
                        code: code.nwd[3].snippets[0].code
                    },
                    {
                        lang: code.nwd[3].snippets[1].lang,
                        code: code.nwd[3].snippets[1].code
                    },
                ]
            }
        ]
    },
    {
        name: "Suma cyfr w liczbie",
        to: "suma-cyfr-w-liczbie",
        data: [
            {
                header: "Algorytm licz??cy sum?? cyfr w liczbie",
                snippets: code.sumOfNumbers[0].snippets.code
            },
        ]
    },
    {
        name: "Pot??gowanie",
        to: "potegowanie",
        data: [
            {
                header: "Pot??gowanie",
                text: "Pot??gowanie to dzia??anie dwuargumentowe b??d??ce uog??lnieniem wielokrotnego mno??enia elementu przez siebie. Pot??gowany element nazywa si?? podstaw??, za?? liczba czynnik??w w mno??eniu, zapisywana zwykle w indeksie g??rnym po prawej stronie podstawy, nosi nazw?? wyk??adnika. Wynik pot??gowania to pot??ga elementu. "
            },
            {
                header: "Algorytm pot??gowania",
                snippets: [
                    {
                        lang:code.power[0].snippets[0].lang,
                        code:code.power[0].snippets[0].code
                    },
                    {
                        lang:code.power[0].snippets[1].lang,
                        code:code.power[0].snippets[1].code
                    }
                ],
            },
            {
                header: "Algorytm pot??gowania szybkiego",
                snippets: [
                    {
                        lang:code.power[1].snippets[0].lang,
                        code:code.power[1].snippets[0].code
                    },
                    {
                        lang:code.power[1].snippets[1].lang,
                        code:code.power[1].snippets[1].code
                    }
                ],
            }
        ]
    },
    {
        name: "Liczba pierwsza",
        to: "liczba_pierwsza",
        data: [
            {
                header: "Liczba pierwsza",
                text: "Liczba pierwsza to liczba naturalna wi??ksza od 1, kt??ra ma dok??adnie dwa dzielniki naturalne: jedynk?? i siebie sam??."
            },
            {
                header: "Algorytm optymalny",
                snippets:[
                    {
                        lang: code.primeNumber[0].snippets[0].lang,
                        code: code.primeNumber[0].snippets[0].code
                    },
                    {
                        lang: code.primeNumber[0].snippets[1].lang,
                        code: code.primeNumber[0].snippets[1].code
                    }
                ]
            },
            {
                header: "Algorytm nieoptymalny",
                snippets:[
                    {
                        lang: code.primeNumber[1].snippets[0].lang,
                        code: code.primeNumber[1].snippets[0].code
                    },
                    {
                        lang: code.primeNumber[1].snippets[1].lang,
                        code: code.primeNumber[1].snippets[1].code
                    }
                ]
            }
        ]
    },
    {
        name: "Palindrom",
        to: "palindrom",
        data:[
            {
                header: "Algorytm na Palindrom",
                snippets: code.palindrome[0].snippets
            }
        ]
    },
    {
        name: "Rozk??ad na czynniki pierwsze",
        to: "rozklad",
        data: [
            {
                header: "Algorytm rozk??adaj??cy liczb?? na czynniki pierwsze",
                snippets: code.primeFactors[0].snippets
            }
        ]
    },
    {
        name: "Schemat hornera",
        to: "schemat-hornera",
        data: [
            {
                header: "Schemat hornera",
                text: "Schemat Hornera ??? spos??b obliczania warto??ci wielomianu dla danej warto??ci argumentu wykorzystuj??cy minimaln?? liczb?? mno??e??, jest to r??wnie?? algorytm dzielenia wielomianu W (x)  przez dwumian x ??? c. "
            },
            {
                header: "Algorytm iteracyjny",
                snippets: [
                    {
                        lang: code.hornerScheme[0].snippets[0].lang,
                        code: code.hornerScheme[0].snippets[0].code
                    },
                    {
                        lang: code.hornerScheme[0].snippets[1].lang,
                        code: code.hornerScheme[0].snippets[1].code
                    }
                ]
            },
            {
                header: "Algorytm rekurencyjny",
                snippets: [
                    {
                        lang: code.hornerScheme[1].snippets[0].lang,
                        code: code.hornerScheme[1].snippets[0].code
                    },
                    {
                        lang: code.hornerScheme[1].snippets[1].lang,
                        code: code.hornerScheme[1].snippets[1].code
                    }
                ]
            }
        ]
    },
    {
        name: "Silnia",
        to: "silnia",
        data: [
            {
                header: "Silnia",
                text: " Silnia liczby naturalnej n to iloczyn kolejnych liczb naturalnych od 1 do n. Silni?? liczby naturalnej n oznaczamy symbolem n!."
            },
            {
                header: "Algorytm iteracyjny",
                snippets: [
                    {
                        lang: code.factorial[0].snippets[0].lang,
                        code: code.factorial[0].snippets[0].code
                    },
                    {
                        lang: code.factorial[0].snippets[1].lang,
                        code: code.factorial[0].snippets[1].code
                    }
                ]
            },
            {
                header: "Algorytm rekurencyjny",
                snippets: [
                    {
                        lang: code.factorial[1].snippets[0].lang,
                        code: code.factorial[1].snippets[0].code
                    },
                    {
                        lang: code.factorial[1].snippets[1].lang,
                        code: code.factorial[1].snippets[1].code
                    }
                ]
            }
        ]
    },
    {
        name: "Zamiana system??w liczbowych",
        to: "zamiana-systemow-liczbowych",
        data: [
            {
                header: "Algorytm zaminieniaj??cy z systemu p na dziesi??tny",
                snippets: [
                    {
                        lang:code.numberSystemChange[0].snippets[0].lang, 
                        code:code.numberSystemChange[0].snippets[0].code
                    },
                    {
                        lang:code.numberSystemChange[0].snippets[1].lang, 
                        code:code.numberSystemChange[0].snippets[1].code
                    }
                ]
            },
            {
                header: "Algorytm zaminieniaj??cy z dziesi??tnego na system p",
                snippets: [
                    {
                        lang:code.numberSystemChange[1].snippets[0].lang, 
                        code:code.numberSystemChange[1].snippets[0].code
                    },
                    {
                        lang:code.numberSystemChange[1].snippets[1].lang, 
                        code:code.numberSystemChange[1].snippets[1].code
                    }
                ]
            }
        ]
    }
]
export function getPages() {
    return pages;
  }