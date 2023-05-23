function calcAreaGrade(area) {
    if (area === "A") return 2;
    if (area === "B") return 1;
    if (area === "C") return 0.5;
    return 0;
}
function calcTypeGrade(type) {
    if (type === "1") return 2;
    if (type === "2") return 1.5;
    if (type === "3") return 1;
    return 0;
}

function Animation() {
    var benchmark = document.getElementById("benchmarkInput").value * 1;
    var subject1 = document.getElementById("subject1Input").value * 1;
    var subject2 = document.getElementById("subject2Input").value * 1;
    var subject3 = document.getElementById("subject3Input").value * 1;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;

    // điểm khu vực
    var AreaGraden = calcAreaGrade(areaVal);
    // điểm đối tượng
    var TypeGraden = calcTypeGrade(typeVal);
    var total;
    total = subject1 + subject2 + subject3 + AreaGraden + TypeGraden
    if (total <= benchmark && subject1 != 0, subject2 != 0, subject3 != 0) {
        xeploai = "Đậu";
    } else {
        xeploai = "Rớt";

    }
    console.log(total);
    document.getElementById("Ketqua").innerHTML = total + xeploai;



}
document.getElementById("btnTinh").onclick = Animation;

// bài 2
document.getElementById("btnTinh2").onclick = function () {
    var name = document.getElementById("nameInput");
    var Electricity = document.getElementById("ElectricityInput").value;
    var tong 
    
    var khaibaoten  =""

    if (Electricity <= 50) {
        tong = 50 * 500;
    }
    else if (Electricity <= 100) {
        tong = 50 * 500 + (Electricity - 50) * 650;
    }
    else if (Electricity <= 200) {
        tong = (50 * 500) + (50 * 650) + (Electricity - 100) * 850;
    }
    else if (Electricity <= 350) {
        tong = (50 * 500) + (50 * 650) + (100 * 850)(Electricity - 200) * 1100;
    }
    else {
        tong = (50 * 500) + (50 * 650) + (100 * 850) + (200 * 1100)(Electricity - 350) * 1300;
    }
    document.getElementById('Ketqua2').innerHTML = "họ tên :" + khaibaoten + ";" + "tổng tiền" + ":" + tong
        ;


}
// bài 3
document.getElementById("btnTinh3").onclick = function () {
    var Lastname = document.getElementById("LastnameInput")
    var thunhap =+document.getElementById("thunhapInput").value
    var people = document.getElementById("peopleInput").value
    var tonghop
    //bảng giá thu nhập chịu thuế
    if ( thunhap <= 60e+6) {
        tonghop = (thunhap  - 4e+6 - people * 1600000)*0.05
    }
    else if ( thunhap <= 120e+6) {
        tonghop = (thunhap - 4e+6 - people * 1600000)* 0.1

    } else if ( thunhap <= 210e+6) {
        tonghop =( thunhap - 4e+6  - people * 1600000)* 0.15
    }
    else if ( thunhap <= 384e+6) {
        tonghop = (thunhap - 4e+6  - people * 1600000)* 0.2
    } else if ( thunhap <= 624e+6) {
        tonghop = (thunhap - 4e+6  - people * 1600000)* 0.25
    } else if ( thunhap <= 960e+6) {
        tonghop = (thunhap - 4e+6 - people * 1600000) * 0.3
    } else if (thunhap > 960e+6) {
        tonghop = (thunhap - 4e+6  - people * 1600000)* 0.35
    }
    
    console.log(tonghop);
    document.getElementById("Ketqua3").innerHTML = tonghop.toLocaleString();
}



