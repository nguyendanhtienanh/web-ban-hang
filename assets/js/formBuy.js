function hanldBtnBuy() {
    document.querySelector(".table-buy").classList.add("openFromBuy")
    getProvince();
}

function hanldBtnExitBuy() {
    document.querySelector(".table-buy").classList.remove("openFromBuy")
}

const provinceAPI = "https://provinces.open-api.vn/api/";

async function getAPI(api) {
    let reponse = await fetch(api);
    let data = await reponse.json();
    return data
}

function renderDataAPI(data, id, name) {
    let addOption = `<option value=''>Chọn ${name}</option>`;
    if(data == []) {
        return addOption
    }
    else {
        data.map((item) => {
            addOption += `
                <option value="${item.code}" class="infoP">${item.name}</option>
            `
        })
    }
    document.querySelector("." + id).innerHTML = addOption;
}

async function getProvince() {
    let data = await getAPI(provinceAPI);
    const none = [];
    renderDataAPI(data, "province", "Tỉnh")
    renderDataAPI(none, "district", "Huyện")    
    renderDataAPI(none,"ward", "Xã")
}

//Bài 9
async function getDistrictsByProvinceID() {
    const codeProvince = document.querySelector(".province").value
    let dataWard = [];
    if(codeProvince == "") {
        renderDataAPI(dataWard, "district", "Huyện")    
        renderDataAPI(dataWard, "ward", "Xã")
    }
    else {
        const APIDistricts = provinceAPI + "p/" + codeProvince + "?depth=2";
        let data = await getAPI(APIDistricts);
        let dataDistricts = [];
        dataDistricts = data.districts; 
        renderDataAPI(dataDistricts, "district", "Huyện");
        renderDataAPI(dataWard, "ward", "Xã")
    }
}

async function getWardsByDistrictsID() {
    const codeDistrict = document.querySelector(".district").value;
    const datanull = [];
    if(codeDistrict == "") {   
        renderDataAPI(datanull, "ward", "Xã")
    }
    else {
        const APIWard = provinceAPI + "d/" + codeDistrict + "?depth=2";
        let data = await getAPI(APIWard);
        let dataWard = [];
        dataWard = data.wards;
        renderDataAPI(dataWard, "ward", "Xã")
    }
}