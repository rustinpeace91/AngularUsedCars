import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars= [
        {
            id:1,
            make: "Toyota",
            model: "AE86",
            year: 1986, 
            miles: 40000,
            price: 4500,
            img: "https://i.imgur.com/WJHb3Kg.jpg"
        },
        {
            id:2,
            make: "Honda",
            model: "Civic",
            year: 1993, 
            miles: 5000,
            price: 5500,
            img: "https://i.imgur.com/3emjkQ6.jpg"
        },
        {
            id:3,
            make: "Chevorlet",
            model: "Impala",
            year: 1964, 
            miles: 5000,
            price: 25000,
            img: "https://i.imgur.com/dahhxbn.jpg"
        },
        {
            id:4,
            make: "Mitsubishi ",
            model: "Eclipse",
            year: 1998, 
            miles: 46000,
            price: 14500,
            img: "https://i.imgur.com/yJhLCkc.jpg"
        },
    
    ];
    return {cars};
  }
}