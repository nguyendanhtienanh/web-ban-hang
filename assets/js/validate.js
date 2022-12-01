function validate() {
    checkName();
    checkEmail();
    checkPhone();
    checkProvinceDistrictWard();
    checkAddress();
    if(checkName() && checkEmail() && checkPhone() && checkProvinceDistrictWard() && checkAddress()) {
        return true
    } else return false
}

function checkValidate() {
    const firstname = document.querySelector(".first-name").value
    const lastname = document.querySelector(".last-name").value
    const mail = document.querySelector(".email").value
    const phone = document.querySelector(".phone").value
    const address = document.querySelector(".addressUser").value
    let province = document.querySelector(".province").value
    let district = document.querySelector(".district").value
    let ward = document.querySelector(".ward").value

    const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const checkEmail = regexEmail.test(mail);
    const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    const checkPhone = regexPhone.test(phone);
    

    if(firstname != [] && lastname != []) {
        document.querySelector(".warning-name").classList.remove("open");
    }

    if(!checkEmail && mail != []) {
        document.querySelector(".warning-mail").textContent = "Địa chỉ email không hợp lệ!";
        document.querySelector(".email").focus();
    }
    else if(checkEmail == true && mail != []) {
        document.querySelector(".warning-mail").classList.remove("open");
    }

    if(!checkPhone && phone != []) {
        document.querySelector(".warning-phone").textContent = "Số điện thoại không hợp lệ!";
        document.querySelector(".phone").focus();
    }
    else if(checkPhone == true && phone != []) {
        document.querySelector(".warning-phone").classList.remove("open");
    }

    if(address != []) {
        document.querySelector(".warning-address").classList.remove("open");
    } 

    if(province != [] ) {
        document.querySelector(".warning-province").classList.remove("open");
    } 
    if(district != []) {
        document.querySelector(".warning-district").classList.remove("open");
    }
    if(ward != []) {
        document.querySelector(".warning-ward").classList.remove("open");
    }
}


function checkName() {
    const firstName = document.querySelector(".first-name");
    const lastName = document.querySelector(".last-name");

    if(firstName.value === "") {
        document.querySelector(".warning-name").classList.add("open");
        document.querySelector(".first-name").focus();
        return false
    }
    if(lastName.value === "") {
        document.querySelector(".warning-name").classList.add("open");
        document.querySelector(".last-name").focus();
        return false
    }
    return true;
}

function checkEmail() {
    const email = document.querySelector(".email");
    const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const checkEmail = regexEmail.test(email.value);
    if(email.value === "") {
        document.querySelector(".warning-mail").classList.add("open");
        document.querySelector(".email").focus();
        return false;
    }
    else if(!checkEmail) {
        document.querySelector(".warning-mail").classList.add("open");
        document.querySelector(".warning-mail").textContent = "Địa chỉ email không hợp lệ!";
        document.querySelector(".email").focus();
        return false;
    }
    return true
}

function checkPhone() {
    const phone = document.querySelector(".phone");
    const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    const checkPhone = regexPhone.test(phone.value);
    if(phone.value ==="") {
        document.querySelector(".warning-phone").classList.add("open");
        document.querySelector(".phone").focus();
        return false;
    }
    else if(!checkPhone) {
        document.querySelector(".warning-phone").classList.add("open");
        document.querySelector(".warning-phone").textContent = "Số điện thoại của bạn không đúng!";
        document.querySelector(".phone").focus();
        return false
    }
    return true
}

function checkAddress() {
    const address = document.querySelector(".addressUser");
    if(address.value ==="") {
        document.querySelector(".warning-address").classList.add("open");
        document.querySelector(".addressUser").focus();
        return false;   
    }
    return true
}

function checkProvinceDistrictWard() {
    let province = document.querySelector(".province")
    let district = document.querySelector(".district")
    let ward = document.querySelector(".ward")

    if(province.value === "" && district.value === "" && ward.value === "") {
        document.querySelector(".warning-province").classList.add("open");
        document.querySelector(".warning-district").classList.add("open");
        document.querySelector(".warning-ward").classList.add("open");
        return false;
    }
    
    else if(district.value === "" && ward.value === "") {
        document.querySelector(".warning-district").classList.add("open");
        document.querySelector(".warning-ward").classList.add("open");
        return false;
    }

    else if(ward.value === "") {
        document.querySelector(".warning-ward").classList.add("open");
        return false;
    }
    return true
}

//Bài 11
function createRandomId() {
    let random = Math.random()* 10000000000
    function numberRandom () {
        let number = Math.round(random);
        return number;
    }
    return numberRandom();
}


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
    return infoUser;
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
    return productUser;
}

function getToday() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const today = `${day}/${month}/${year}`
    return today;
}

function Order(id, day, info, product) {
    this.id = id,
    this.day = day,
    this.info = info,
    this.product = product
}

function getOrder() {
    const infoUser = getInfoUser();
    const productUser = getProductUser();
    const id = createRandomId();
    const today = getToday();
    let order = [];
    order = new Order(id, today, infoUser, productUser)
    if(confirm("Xác nhận đặt hàng?") === true) {
        return order
    }
}


function checkOrder() {
    if(!validate()){
        return;
    }
    else {
        console.log(getOrder())
    }
}
