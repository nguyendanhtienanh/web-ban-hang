
// Bài 1
const listData = [
    {
        id: 1,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 1',
        price: 1000,
        quantity: 9
    },
    {
        id: 2,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 2',
        price: 2000,
        quantity: 5
    },
    {
        id: 3,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 3',
        price: 5000,
        quantity: 7
    },
    {
        id: 4,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 4',
        price: 7000,
        quantity: 2
    },
    {
        id: 5,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 5',
        price: 72000,
        quantity: 2
    },
    {
        id: 6,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 6',
        price: 70030,
        quantity: 2
    },
    {
        id: 7,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 7',
        price: 70040,
        quantity: 2
    },
    {
        id: 8,
        img:'https://ressmedia.com/wp-content/uploads/2021/07/ANH-4-26.jpg',
        name: 'giay 8',
        price: 70050,
        quantity: 2
    }
];

const keyLocalStorageListSP = "DANHSACHSP";
const keyLocalStorageItemCart = "DANHSACHItemCart";

// Bài 2
function savaData (key, value) {
    if(typeof listData === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

savaData(keyLocalStorageListSP, listData)

// Bài 3
function getDataLocal (key) {
    let data = localStorage.getItem(key)
    if(typeof data === 'object') {
        return data;
    } 
    else {
        data =  JSON.parse(data);
    }
    return data
}

