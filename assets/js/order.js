
const listOrderAPI = "http://localhost:3000/listOrder";

const getListOrder = async (api) => {
    const reponse = await fetch(api);
    const data = await reponse.json();
    return data
}

const renderListOrder = async () => {
    const data = await getListOrder(listOrderAPI);
    let htmls = "";
    data.map((user) => {
            htmls += `
                <tr class="order">
                    <td>${user.info.id}</td>
                    <td>${user.info.nameUser}</td>
                    <td>${user.info.time}</td>
                    <td>
                        ${user.info.totalQuantity}
                        <p class="detail-order-user" onclick="btnOpenDetail(${user.id})">chi tiết</p>
                    </td>
                    <td>${user.info.totalPrice}</td>
                    <td><i class="btn-trash ti-trash" onclick="btnDeleteOrder(${user.id})"></i></td>
                </tr>
            `
            user.product.map((item) => {
                    htmls += `
                        <tr class="body-details item${user.id}">
                            <td><img src="${item.img}" alt="ảnh sản phẩm" class="img-product"></td>
                            <td>${item.nameProduct}</td>
                            <td>${item.price}</td>
                            <td>${item.quantity}</td>
                            <td>${item.quantity * item.price}</td>
                        </tr>
                    `
            })
    })

    document.querySelector(".list-order").innerHTML = htmls;
   
}

const createOrder = async (data) => {
    try {
        const reponse = await fetch(listOrderAPI, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        let order = reponse.json();
        return order;
    } catch (err) {
        alert(err);
    }
}

const deleteOrder = async (id) => {
    try {
        const reponse = await fetch(listOrderAPI + "/" + id, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        let order = reponse.json();
        return order;
    } catch (err) {
        alert(err);
    }
}

const btnDeleteOrder = async(id) => {
    const data = await getListOrder(listOrderAPI);
    console.log(data)
    const dataLocal = getDataLocal(keyLocalStorageListSP)
    console.log(dataLocal)
    data.map((user) => {
        user.product.map((item) => {
            dataLocal.map((itemLocal) => {
                if(item.nameProduct === itemLocal.name) {
                    itemLocal.quantity = itemLocal.quantity + item.quantity
                }
            })
        })
    })
    setDataLocal(keyLocalStorageListSP, dataLocal)
    deleteOrder(id);
}

function btnOpenDetail(id) {
    const detailsBlock = document.querySelectorAll(".item" + id)
    detailsBlock.forEach((item) => {
        item.classList.add("openDetail")
    })
}
