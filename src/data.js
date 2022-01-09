const algorithms = [
    {
        name: "Fibonacci",
        to: "fibonacci",
        data: [
            {
                header: "fibonacci iteracyjnie",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repellendus iure alias quibusdam nisi iste deserunt debitis. Dicta distinctio officia eaque nisi atque dolore, animi recusandae necessitatibus aliquid deserunt. Eveniet sint quasi quam dolorem doloribus incidunt, alias fugit, praesentium ratione repellat, rem nemo iste in suscipit recusandae natus. Explicabo consectetur quidem eligendi corrupti neque ad saepe minus porro eos. Numquam molestias aut atque qui magni fuga voluptatibus sit",
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
            }            
        ]
    },
    {
        name: "Generowanie kluczy RSA",
        to: "gen-rsa",
        data: [
            {
                header: "fibonacci iteracyjnie",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repellendus iure alias quibusdam nisi iste deserunt debitis. Dicta distinctio officia eaque nisi atque dolore, animi recusandae necessitatibus aliquid deserunt. Eveniet sint quasi quam dolorem doloribus incidunt, alias fugit, praesentium ratione repellat, rem nemo iste in suscipit recusandae natus. Explicabo consectetur quidem eligendi corrupti neque ad saepe minus porro eos. Numquam molestias aut atque qui magni fuga voluptatibus sit",
                snippets: 
`int fibonacci_it(int n){
    int a=1, b=1,i=2;
    while(i++ < n){
        a+=b;
        b=a-b;
    }
    return a;
}`

            },           
        ]
    },
    {
        name: "Minimum",
        to: "minimum",
        data: [
            {
                header: "fibonacci iteracyjnie",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repellendus iure alias quibusdam nisi iste deserunt debitis. Dicta distinctio officia eaque nisi atque dolore, animi recusandae necessitatibus aliquid deserunt. Eveniet sint quasi quam dolorem doloribus incidunt, alias fugit, praesentium ratione repellat, rem nemo iste in suscipit recusandae natus. Explicabo consectetur quidem eligendi corrupti neque ad saepe minus porro eos. Numquam molestias aut atque qui magni fuga voluptatibus sit",
                snippets: 
`int fibonacci_it(int n){
    int a=1, b=1,i=2;
    while(i++ < n){
        a+=b;
        b=a-b;
    }
    return a;
}`

            },           
        ]
    },
    {
        name: "Maksimum",
        to: "maksimum",
        data: [
            {
                header: "fibonacci iteracyjnie",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repellendus iure alias quibusdam nisi iste deserunt debitis. Dicta distinctio officia eaque nisi atque dolore, animi recusandae necessitatibus aliquid deserunt. Eveniet sint quasi quam dolorem doloribus incidunt, alias fugit, praesentium ratione repellat, rem nemo iste in suscipit recusandae natus. Explicabo consectetur quidem eligendi corrupti neque ad saepe minus porro eos. Numquam molestias aut atque qui magni fuga voluptatibus sit",
                snippets: 
`int fibonacci_it(int n){
    int a=1, b=1,i=2;
    while(i++ < n){
        a+=b;
        b=a-b;
    }
    return a;
}`

            },           
        ]
    },
    {
        name: "Schemat hornera",
        to: "schemat-hornera",
        data: [
            {
                header: "fibonacci iteracyjnie",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa repellendus iure alias quibusdam nisi iste deserunt debitis. Dicta distinctio officia eaque nisi atque dolore, animi recusandae necessitatibus aliquid deserunt. Eveniet sint quasi quam dolorem doloribus incidunt, alias fugit, praesentium ratione repellat, rem nemo iste in suscipit recusandae natus. Explicabo consectetur quidem eligendi corrupti neque ad saepe minus porro eos. Numquam molestias aut atque qui magni fuga voluptatibus sit",
                snippets: 
`int fibonacci_it(int n){
    int a=1, b=1,i=2;
    while(i++ < n){
        a+=b;
        b=a-b;
    }
    return a;
}`

            },           
        ]
    },
]

export function getAlgorithms() {
    return algorithms;
  }