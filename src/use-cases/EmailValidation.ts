import {Client} from '../interfaces/Client'

const newClient: Client = {
    email: 'aaa@gmail.com',
    phone: '1234555',
    address: 'Calle 420',
    city: 'Medallo',
    nit: '123456789',
    money: 300000000
}

const regex: RegExp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
export function validateEmail(email: string): boolean {
    
    console.log(email)
    let result= regex.test(email)
    return  result 
}