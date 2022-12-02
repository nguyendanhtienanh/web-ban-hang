
const listOrderAPI = "http://localhost:3000/listOrder";

const getListOrder = async (api) => {
    const reponse = await fetch(api);
    const data = await reponse.json();
    return data
}

const renderListOrder = async () => {
    const data = await getListOrder(listOrderAPI);
    console.log(data)
    const infoUser = data.map((user) => user.info)
    console.log(infoUser)
    const productUser = data.map((user) => user.product)
    console.log(productUser)
    const listBlock = document.querySelector(".list-order");

    let htmls = "";
    data.map(() => {
        infoUser.map((info) => {
            productUser.map((product) => {
                htmls += `
                    <tr class="order">
                        <td>${info.id}</td>
                        <td>${info.nameUser}</td>
                        <td>${info.time}</td>
                        <td>${product.quantity}</td>
                        <td>${product.total}</td>
                        <td><i class="btn-trash ti-trash"></i></td>
                    </tr>
                    <tr class="details">
                        <td>Ảnh</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá tiền</td>
                        <td>Số lượng sản phẩm</td>
                        <td>Thành tiền</td>
                    </tr>
                        <tr class="details">
                        <td><img src="${product.img}" alt="ảnh sản phẩm" class="img-product"></td>
                        <td>${product.nameProduct}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>
                        <td>${product.quantity * product.price}</td>
                    </tr>
                `
            })
        })
    })
    listBlock.innerHTML = htmls;
}

renderListOrder()

 
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
    } catch(err) {
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
   } catch(err) {
        alert(err);
   }
}