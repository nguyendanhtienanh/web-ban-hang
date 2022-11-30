
// Bài 3

function getListProduct() {
    const data = getDataLocal(keyLocalStorageListSP)
    let listProduct ="";
    data.map((item) => {
        listProduct += `
            <div class="item" id="${item.id}">
                <img src="${item.img}" alt="ảnh sản phẩm" class="imageItem">
                <p class="description">${item.name}</p>
                <div class="price-quantity">
                    <p class="price">Giá: ${item.price}</p>
                    <p class="quantity">Số lượng: ${item.quantity}</p>
                </div>
                <input type="button" onClick="addSP(${item.id}, 1, ${item.quantity})" value="Thêm vào giỏ" class="add-item-btn">
            </div>
        `
    });
    document.querySelector(".listItem").innerHTML = listProduct;
}

//Bài 4

function CartObject (idCart, quantityCart) {
    this.id = idCart,
    this.quantity = quantityCart
}

function addSP(id, quantity, max) {
    let arr = localStorage.getItem(keyLocalStorageItemCart)
    if(arr) {
        arr = JSON.parse(arr)
    } else {
        arr = []
    }

    const checkId = arr.find((item) => item.id === id)
    if(!checkId) {
        arr.push(new CartObject(id, quantity));
        alert("Đã thêm sản phẩm vào giỏ hàng!");
    } else {
        arr.map((item) => {
            if(item.id === id && item.quantity < max) {     
                const quantityCart = item.quantity += 1;
                alert("Đã thêm sản phẩm vào giỏ hàng!");
                return (quantityCart)
            }
            if(item.id === id && item.quantity == max) {
                alert("Sản phẩm đã hết hàng!")
            }
        })
    }
    localStorage.setItem(keyLocalStorageItemCart, JSON.stringify(arr))
}