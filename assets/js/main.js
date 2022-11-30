
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

// function getListProduct() {
//     const data = getDataLocal(keyLocalStorageListSP)
//     let listProduct ="";
//     data.map((item) => {
//         listProduct += `
//             <div class="item" id="${item.id}">
//                 <img src="${item.img}" alt="ảnh sản phẩm" class="imageItem">
//                 <p class="description">${item.name}</p>
//                 <div class="price-quantity">
//                     <p class="price">Giá: ${item.price}</p>
//                     <p class="quantity">Số lượng: ${item.quantity}</p>
//                 </div>
//                 <input type="button" onClick="addSP(${item.id}, 1, ${item.quantity})" value="Thêm vào giỏ" class="add-item-btn">
//             </div>
//         `
//     });
//     document.querySelector(".listItem").innerHTML = listProduct;
// }

// //Bài 4

// function CartObject (idCart, quantityCart) {
//     this.id = idCart,
//     this.quantity = quantityCart
// }

// function addSP(id, quantity, max) {
//     let arr = localStorage.getItem(keyLocalStorageItemCart)
//     if(arr) {
//         arr = JSON.parse(arr)
//     } else {
//         arr = []
//     }

//     const checkID = arr.find((item) => item.id === id)
//     if(!checkID) {
//         arr.push(new CartObject(id, quantity));
//         alert("Đã thêm sản phẩm vào giỏ hàng!");
//     } else {
//         arr.map((item) => {
//             if(item.id === id && item.quantity < max) {     
//                 const quantityCart = item.quantity += 1;
//                 alert("Đã thêm sản phẩm vào giỏ hàng!");
//                 return (quantityCart)
//             }
//             if(item.id === id && item.quantity == max) {
//                 alert("Sản phẩm đã hết hàng!")
//             }
//         })
//     }
//     localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(arr))
// }

// function btnDeleteItem(id) {
//     const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
//     let newData = dataCart.filter(i => i.id !== id)
//     console.log(newData)
//     localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(newData))
//     showProduct();
//     handlTotal();
// }

// function btnUpItem(id, max) {
//     const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
//     dataCart.map((item) => {
//         if(item.id === id && item.quantity < max) {
//             item.quantity += 1;
//             localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
//         } 
//         else if(item.id === id && item.quantity >= max) {
//             localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
//             alert("Sản phẩm đã hết hàng!")
//         }

//     })
//     showProduct();
//     handlTotal();
// }

// function btnDownItem(id) {
//     const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
//     dataCart.map((item) => {
//         if(item.id === id && item.quantity >= 1) {
//             item.quantity -= 1;
//             localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
            
//         }
//         if(item.id === id && item.quantity < 1) {   
//             let newData = dataCart.filter(i => i.id !== id)
//             alert("Đã xóa sản phẩm khỏi giỏ hàng!")
//             localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(newData))
//         }
//     })
//     showProduct();
//     handlTotal();
// }

// localStorage.removeItem(keyLocalStorageItemCart)

//Bài 6

// function cart() {
//     showProduct();
//     handlTotal();
// }

// function getByIdSP() {
//     const data = getDataLocal(keyLocalStorageListSP)
//     const dataCart = getDataLocal(keyLocalStorageItemCart)
//     const listProduct = [];
//     dataCart.forEach((itemCart) => {
//         data.forEach((item) => {
//             if(itemCart.id === item.id) {
//                 listProduct.push(
//                     {
//                         id: item.id,
//                         img: item.img,
//                         name: item.name,
//                         price: item.price,
//                         quantity: itemCart.quantity,
//                         total: item.price*itemCart.quantity,
//                         max: item.quantity
//                     }
//                 )
//             }
//         })
//     })
//     return listProduct
// }

// function showProduct() {
//     const listProduct = getByIdSP();
//     let showProduct = "";
//     listProduct.map((product) => {
//         showProduct += `
//             <tr>
//                 <td><img src="${product.img}" alt="ảnh sản phẩm" class="img-product"></td>
//                 <td>${product.name}</td>
//                 <td>${product.price}</td>
//                 <td>
//                     <div class="quantity-product">
//                         <button class="btn-quantity down" onclick="btnDownItem(${product.id})">-</button>
//                         <p class="count-quantity">${product.quantity}</p>
//                         <button class="btn-quantity up" onclick="btnUpItem(${product.id}, ${product.max})">+</button>
//                     </div>
//                 </td>
//                 <td>${product.total}</td>
//                 <td><i class="btn-trash ti-trash" onclick="btnDeleteItem(${product.id})"></i></td>
//             </tr>
//         `
//     })
//     document.querySelector(".body-product").innerHTML = showProduct;
// }

// function handlTotal() {
//     const listProduct = getByIdSP();
//     let total = [];
//     listProduct.map((product) => {
//         total.push({
//             quantity: product.quantity,
//             price: product.total
//         })
//     })

//     const totalProduct = total.reduce((total, product) => {
//         return total + product.quantity
//     }, 0)

//     const totalPrice = total.reduce((total, product) => {
//         return total + product.price
//     }, 0)

//     let showTotal = `
//         <p class="total-product">Tổng số lượng sản phẩm: ${totalProduct}</p>
//         <p class="total-price">Thành tiền: ${totalPrice}</p>
//          <div class="btn-buy">
//             <button class="buy-btn" onclick="hanldBtnBuy()">Mua</button>
//             <button class="history-btn">Sản phẩm đã mua</button>
//         </div>
//     `
//     document.querySelector(".total-item").innerHTML = showTotal;
//     // if(listProduct == []) {
//     //     document.querySelector(".total-item").innerHTML = ""
//     // }
// }

// //Bài 7
// function hanldBtnBuy() {
//     document.querySelector(".table-buy").classList.add("openFromBuy")
//     getProvince();
// }

// function hanldBtnExitBuy() {
//     document.querySelector(".table-buy").classList.remove("openFromBuy")
// }

//Bài 8

// const provinceAPI = "https://provinces.open-api.vn/api/";

// async function getAPI(api) {
//     let reponse = await fetch(api);
//     let data = await reponse.json();
//     return data
// }

// //Bài 9

// function renderDataAPI(data, id, name) {
//     let addOption = `<option value=''>Chọn ${name}</option>`;
//     data.map((item) => {
//         addOption += `
//             <option value="${item.code}" class="infoP">${item.name}</option>
//         `
//     })
//     document.querySelector("." + id).innerHTML = addOption;
// }

// async function getProvince() {
//     let data = await getAPI(provinceAPI);
//     const data1 = [];
//     const data2 = [];
//     renderDataAPI(data, "province", "Tỉnh")
//     renderDataAPI(data1, "district", "Huyện")
//     renderDataAPI(data2, "ward", "Xã")
// }

// //Bài 9
// async function getDistrictsByProvinceID() {
//     const codeProvince = document.querySelector(".province");
//     const APIDistricts = provinceAPI + "p/" + codeProvince.value + "?depth=2";
//     let data = await getAPI(APIDistricts);
//     let dataDistricts = [];
//     dataDistricts = data.districts; 
//     renderDataAPI(dataDistricts, "district", "Huyện");
//     let dataWard = [];
//     renderDataAPI(dataWard, "ward", "Xã")
// }

// async function getWardsByDistrictsID() {
//     const codeDistrict = document.querySelector(".district");
//     const APIWard = provinceAPI + "d/" + codeDistrict.value + "?depth=2";
//     let data = await getAPI(APIWard);
//     let dataWard = [];
//     dataWard = data.wards;
//     renderDataAPI(dataWard, "ward", "Xã")
// }

//Bài 10 

function createRandomId() {
    let random = Math.random()* 10000000000
    function numberRandom () {
        let number = Math.round(random);
        console.log(number)
        return number;
    }
    return numberRandom();
}

//Bài 11

function getInfoUser() {
    let firstName = document.querySelector(".first-name").value
    let lastName = document.querySelector(".last-name").value
    let name = `${firstName} ${lastName}`

    let address = document.querySelector(".addressUser").value
    let listProvince = document.querySelector(".province");
    let province = listProvince.options[listProvince.selectedIndex].text;
    let listDistrict = document.querySelector(".district");
    let district = listDistrict.options[listDistrict.selectedIndex].text;
    let listWard = document.querySelector(".ward");
    let ward = listWard.options[listWard.selectedIndex].text;

    let addressUser = `${address}, ${ward}, ${district}, ${province}`
    let infoUser = [];
    infoUser.push({ 
        nameUser: name,
        addressUser: addressUser
    })
    console.log(infoUser)
}

function getProductUser() {
    const dataCart = getDataLocal(keyLocalStorageItemCart)
    const data = getDataLocal(keyLocalStorageListSP)
    let productUser = [];
    dataCart.map((product) => {
        data.map((item) => {
            if(product.id === item.id) {
                productUser.push({
                    name: item.name,
                    price: item.price,
                    quantity: product.quantity,
                    total: item.price*product.quantity
                })
            }
        })
    })
    console.log(productUser)
    return productUser;
}


