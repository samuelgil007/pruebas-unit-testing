import Client from '../interfaces/Client'

const newClient: Client = {
    email: 'aaa@gmail.com',
    phone: '1234555',
    address: 'Calle 420',
    city: 'Medallo',
    nit: '123456789',
    money: 300000000
}

export function validateNit(nit: string): boolean {
    console.log(nit.length)
    return nit.length <=9
}