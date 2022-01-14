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
            name:"potęgowanie normalne",
            snippets:[
                {
                    lang: "cpp",
                    code: 
`/*
p - podstawa potęgi 
n - wykładnik potęgi
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
`# p - podstawa potęgi 
# n - wykładnik potęgi
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
            name: "potęgowanie szybkie",
            snippets: [
                {
                    lang: "cpp",
                    code: 
`/*
p - podstawa potęgi 
n - wykładnik potęgi
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
`# p - podstawa potęgi 
# n - wykładnik potęgi
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
st - stopień swielomianu;
x - współczynnik wielomianu;
w[] - współczynniki wielomianu;
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
`# st - stopień swielomianu;
# x - współczynnik wielomianu;
# W[] - współczynniki wielomianu;
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
st - stopień swielomianu;
x - współczynnik wielomianu;
w[] - współczynniki wielomianu;
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
`# st - stopień swielomianu;
# x - współczynnik wielomianu;
# w[] - współczynniki wielomianu;
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
            name: "z systemu p na dziesiętny",
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
            name: "z dziesiętnego na system p",
            snippets: [
                {
                    lang: "cpp",
                    code:
`/*
a - liczba w systemie dziesiętnym
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
`# a - liczba w systemie dziesiętnym
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
                text:"Algorytm to skończony ciąg jasno zdefiniowanych czynności koniecznych do wykonania pewnego rodzaju zadań, sposób postępowania prowadzący do rozwiązania problemu. Można go przedstawić za pomocą schematu blokowego, listy kroków lub za pomocą języka programowania."
            },
            {
                header:"Kiedy algorytm jest poprawny?",
                text: "Algorytm jest poprawny jeśli dla każdego dowolnego zestawu danych zgodnych ze specyfikacją algorytmu spełnione są warunki:",
                list: [
                    "Jest skończony",
                    "zwraca wyniki zgodne ze specyfikacją",
                    "jest dobrze określony",
                    "jest uniwersalny"
                ]
            },
            {
                header:"Co to złożoność obliczeniowa algorytmu?",
                text: "Złożoność obliczeniowa algorytmu określa liczbę zasobów komputerowych potrzebnych do wykonania tego zadania. typy złożoności:",
                list: [
                    "optymistyczna",
                    "pesymistyczna",
                    "oczekiwana"
                ]
            },
            {
                text:"Złożoność obliczeniowa można podzielić na złożoność czasową i złożoność pamięciową",
            },
            {
                text:"Złożoność czasowa:",
                list:[
                    "Obejmuje czas działania algorytmu",
                    "Niezależna od komputera i języka programowania",
                    "mierzona liczbą operacji dominujących",
                    "zależna od danych wejściowych"
                ]
            },
            {
                header:"Co to operacja dominująca",
                text: "Operacja dominująca to operacja charakterystyczna dla danego algorytmu, na ogół zajmująca w nim najwięcej czasu."
            }
        ]
    },
    {
        name: "Ciąg Fibonacciego",
        to: "fibonacci",
        data: [
            {
                header: "Ciąg Fibbonaciego",
                text: "Ciąg Fibonacciego – ciąg liczb naturalnych określony rekurencyjnie w sposób następujący: Pierwszy wyraz jest równy 0, drugi jest równy 1, każdy następny jest sumą dwóch poprzednich."
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
        name: "Liczba Doskonała",
        to: "liczba-doskonala",
        data: [
            {
                header: "Liczba doskonała",
                text: "Liczba doskonała - to taka liczba naturalna, która jest równa sumie wszystkich swoich podzielników, mniejszych od tej liczby.",
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
        name: "Największy wspólny dzielnik",
        to: "nwd",
        data: [
            {
                header: "Największy Wspólny Dzielnik",
                text: "Największy wspólny dzielnik to dla danych dwóch (lub więcej) liczb całkowitych największa liczba naturalna dzieląca każdą z nich. Pojęcie to ma wiele uogólnień, które przedstawiono w dalszej części artykułu. Największy wspólny dzielnik liczb a i b zapisuje się zwykle nwd(a, b). Dwie liczby nazywa się względnie pierwszymi, jeżeli ich największym wspólnym dzielnikiem jest 1 – na przykład względnie pierwsze są 9 i 28. Pojęcie największego wspólnego dzielnika wykorzystuje się podczas redukcji ułamków do postaci nieskracalnej (to znaczy takiej, w której licznik i mianownik są względnie pierwsze).",
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
                header: "Algorytm liczący sumę cyfr w liczbie",
                snippets: code.sumOfNumbers[0].snippets.code
            },
        ]
    },
    {
        name: "Potęgowanie",
        to: "potegowanie",
        data: [
            {
                header: "Potęgowanie",
                text: "Potęgowanie to działanie dwuargumentowe będące uogólnieniem wielokrotnego mnożenia elementu przez siebie. Potęgowany element nazywa się podstawą, zaś liczba czynników w mnożeniu, zapisywana zwykle w indeksie górnym po prawej stronie podstawy, nosi nazwę wykładnika. Wynik potęgowania to potęga elementu. "
            },
            {
                header: "Algorytm potęgowania",
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
                header: "Algorytm potęgowania szybkiego",
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
        to: "liczba pierwsza",
        data: [
            {
                header: "Liczba pierwsza",
                text: "Liczba pierwsza to liczba naturalna większa od 1, która ma dokładnie dwa dzielniki naturalne: jedynkę i siebie samą."
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
        name: "Rozkład na czynniki pierwsze",
        to: "rozklad",
        data: [
            {
                header: "Algorytm rozkładający liczbę na czynniki pierwsze",
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
                text: "Schemat Hornera – sposób obliczania wartości wielomianu dla danej wartości argumentu wykorzystujący minimalną liczbę mnożeń, jest to również algorytm dzielenia wielomianu W (x)  przez dwumian x − c. "
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
                text: " Silnia liczby naturalnej n to iloczyn kolejnych liczb naturalnych od 1 do n. Silnię liczby naturalnej n oznaczamy symbolem n!."
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
        name: "Zamiana systemów liczbowych",
        to: "zamiana-systemow-liczbowych",
        data: [
            {
                header: "Algorytm zaminieniający z systemu p na dziesiętny",
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
                header: "Algorytm zaminieniający z dziesiętnego na system p",
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