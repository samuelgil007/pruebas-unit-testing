
import Client  from '../interfaces/Client'
import  Car  from '../interfaces/Car'


const newCar: Car = {
    plate: 'KSS666',
    color: 'verde',
    brand: 'Ferrari',
    price: 200000
}

const newClient: Client = {
    email: 'aaa@gmail.com',
    phone: '1234555',
    address: 'Calle 420',
    city: 'Medallo',
    nit: '123456789',
    money: 300000000
}
export function validatePlate(plate: string): boolean {

    return plate.length === 6
}

export function validateMoney(money: number): boolean {

    if (money > 0) {

        console.log('Puede hacer una compra')
        return true
    }


    console.log('No puede hacer una compra')
    return false

}


export function buyCar(money: number, price: number): number {

    if( money > 0 && money >= price ) {
        console.log('Puede hacer una compra')
          money = money-price;

    }

    return money
}


