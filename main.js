var hari;
var jam;

function appload() {
    document.getElementById("pembukuan").innerHTML = window.localStorage.getItem("pembukuan");
    totalPengeluaran = parseInt(window.localStorage.getItem("totalPe") || 0);
    document.getElementById("tp").innerHTML = "TOTAL MINGGU INI " + totalPengeluaran;
}

function ambilHari() {
    const dayName = (date, locale) =>
        date.toLocaleDateString(locale, { weekday: 'long' });

    switch (dayName(new Date())) {
        case "Sunday":
            hari = "MINGGU"
            break;
        case "Monday":
            hari = "SENIN"
            break;
        case "Tuesday":
            hari = "SELASA"
            break;
        case "Wednesday":
            hari = "RABU"
            break;
        case "Thursday":
            hari = "KAMIS"
            break;
        case "Friday":
            hari = "JUMAT"
            break;
        case "Saturday":
            hari = "SABTU"
            break;
    }
}

function ambilJam() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    jam = h.toString() +":"+ m.toString()
}

function pengeluaran() {
    ambilHari()
    ambilJam()

    var ju = document.getElementById("ju").value
    var k = document.getElementById("k").value

    if(ju !== "" || k !== "") {
        if(k === "r(data)") {
            window.localStorage.removeItem("pembukuan");
            window.localStorage.removeItem("totalPe");
        }
        else {
            document.getElementById("pembukuan").innerHTML += "<li>"+ hari +" "+jam+" | " + k + " | " + ju + "</li>"
            window.localStorage.setItem("pembukuan", document.getElementById("pembukuan").innerHTML)

            totalPengeluaran = parseInt(totalPengeluaran) + parseInt(ju);
            window.localStorage.setItem("totalPe", totalPengeluaran);
        }
    }
    window.location.href = "index.html";
}