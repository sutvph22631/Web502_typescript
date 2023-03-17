
const app= document.querySelector("body")
// number

const so:number []=[1,2,3 ];
//string
const chu:string[]=["a","b","v"]

const so1:number[][]=[[1,2,3],[4,5,6]]
//tuples
const tuple:[string,string,number]=["minh","luong",1]
console.log(tuple);

//enum

enum STATUS{PEN=100,BIEN,PHAT}
const TRANGTHAI:STATUS=STATUS.PEN
console.log(TRANGTHAI);
enum CODE{HAT,NHAY,MUA}


// Object declaration
// Object literal
const sinhvien: {name: string, age: number, homeTown?: string} = {
    name: "Nam Cuong",
    age: 20,
    // homeTown: "Van Con"
}

const sinhvien2: {name: string, age: number, homeTown?: string} = {
    name: "Thành",
    age: 20,
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}} = {
    
// }

// const book2: 

interface Book {
    authors: Author[],
    book_cover?: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller
}
// Interface
interface Author {
    id: number,
    name: string,
    slug: string
}
// Type aliases
type Seller = {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number
}

// Example
enum ROLE {STAFF, MANAGER, USER}

// // Properties
// interface User {
//     username: string,
//     password: string,
//     email: string,
    
// }
// // Methods
// interface User {
//     login: () => void,
//     logout: () => void
// }


// interface Admin extends User {
//     role: ROLE.MANAGER | ROLE.STAFF
// }

// type User = {
//     username: string,
//     password: string,
//     email: string,
//     login: () => void,
//     logout: () => void,
// }

// type Admin = User & {
//     role: ROLE.MANAGER | ROLE.STAFF
// }