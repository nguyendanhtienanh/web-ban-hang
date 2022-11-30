function cart() {
    showProduct();
    handlTotal();
}

function getByIdSP() {
    const data = getDataLocal(keyLocalStorageListSP)
    const dataCart = getDataLocal(keyLocalStorageItemCart)
    const listProduct = [];
    dataCart.forEach((itemCart) => {
        data.forEach((item) => {
            if(itemCart.id === item.id) {
                listProduct.push(
                    {
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        price: item.price,
                        quantity: itemCart.quantity,
                        total: item.price*itemCart.quantity,
                        max: item.quantity
                    }
                )
            }
        })
    })
    return listProduct
}

function showProduct() {
    const listProduct = getByIdSP();
    let showProduct = "";
    listProduct.map((product) => {
        showProduct += `
            <tr>
                <td><img src="${product.img}" alt="ảnh sản phẩm" class="img-product"></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <div class="quantity-product">
                        <button class="btn-quantity down" onclick="btnDownItem(${product.id})">-</button>
                        <p class="count-quantity">${product.quantity}</p>
                        <button class="btn-quantity up" onclick="btnUpItem(${product.id}, ${product.max})">+</button>
                    </div>
                </td>
                <td>${product.total}</td>
                <td><i class="btn-trash ti-trash" onclick="btnDeleteItem(${product.id})"></i></td>
            </tr>
        `
    })
    document.querySelector(".body-product").innerHTML = showProduct;
}

function handlTotal() {
    const listProduct = getByIdSP();
    let total = [];
    listProduct.map((product) => {
        total.push({
            quantity: product.quantity,
            price: product.total
        })
    })

    const totalProduct = total.reduce((total, product) => {
        return total + product.quantity
    }, 0)

    const totalPrice = total.reduce((total, product) => {
        return total + product.price
    }, 0)

    let showTotal = `
        <p class="total-product">Tổng số lượng sản phẩm: ${totalProduct}</p>
        <p class="total-price">Thành tiền: ${totalPrice}</p>
         <div class="btn-buy">
            <button class="buy-btn" onclick="hanldBtnBuy()">Mua</button>
            <button class="history-btn">Sản phẩm đã mua</button>
        </div>
    `
    document.querySelector(".total-item").innerHTML = showTotal;
}

function btnDeleteItem(id) {
    const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
    let newData = dataCart.filter(i => i.id !== id)
    localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(newData))
    showProduct();
    handlTotal();
}

function btnUpItem(id, max) {
    const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
    dataCart.map((item) => {
        if(item.id === id && item.quantity < max) {
            item.quantity += 1;
            localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
        } 
        else if(item.id === id && item.quantity >= max) {
            localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
            alert("Sản phẩm đã hết hàng!")
        }

    })
    showProduct();
    handlTotal();
}

function btnDownItem(id) {
    const dataCart = JSON.parse(localStorage.getItem(keyLocalStorageItemCart))
    dataCart.map((item) => {
        if(item.id === id && item.quantity >= 1) {
            item.quantity -= 1;
            localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(dataCart))
            
        }
        if(item.id === id && item.quantity < 1) {   
            let newData = dataCart.filter(i => i.id !== id)
            alert("Đã xóa sản phẩm khỏi giỏ hàng!")
            localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(newData))
        }
    })
    showProduct();
    handlTotal();
}