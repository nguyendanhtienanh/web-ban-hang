function validate() {
    checkAddress();
    checkProvinceDistrictWard();
    checkPhone();
    checkEmail();
    checkName();
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
    else document.querySelector(".warning-name").classList.remove("open");   
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
    else document.querySelector(".warning-mail").classList.remove("open");
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
    }
    else document.querySelector(".warning-phone").classList.remove("open");
}

function checkAddress() {
    const address = document.querySelector(".addressUser");
    const regexPhone = /^[a-zA-Z0-9]*$/;
    const checkAddress = regexPhone.test(address.value);
    if(address.value ==="") {
        document.querySelector(".warning-address").classList.add("open");
        document.querySelector(".addressUser").focus();
        return false;   
    }
    else if(!checkAddress) {
        document.querySelector(".warning-address").classList.add("open");
        document.querySelector(".warning-address").textContent = "Địa chỉ của bạn không đúng!";
        document.querySelector(".address").focus();
    }
    else document.querySelector(".warning-address").classList.remove("open");
}

function checkProvinceDistrictWard() {
    let province = document.querySelector(".province")
    let district = document.querySelector(".district")
    let ward = document.querySelector(".ward")

    if(province.value === "") {
        document.querySelector(".warning-province").classList.add("open");
    } else document.querySelector(".warning-province").classList.remove("open");

    if(district.value === "") {
        document.querySelector(".warning-district").classList.add("open");
    } else document.querySelector(".warning-district").classList.remove("open");

    if(ward.value === "") {
        document.querySelector(".warning-ward").classList.add("open");
    } else document.querySelector(".warning-ward").classList.remove("open");
}