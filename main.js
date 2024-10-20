var hari;
var jam;
var mockedDate = new Date();

function tb(tanggal) { //tb(2024-10-27)
    mockedDate = new Date(tanggal); 
    appload();
}

function ambilHari() {
    var date = mockedDate || new Date;
    const days = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
    hari = days[date.getDay()];
}

function ambilJam() {
    const h = mockedDate.getHours();
    const m = mockedDate.getMinutes();
    jam = h.toString() + ":" + m.toString();
}

function appload() {
    ambilHari()
    document.getElementById("pembukuan").innerHTML = window.localStorage.getItem("pembukuan");
    totalPengeluaran = parseInt(window.localStorage.getItem("totalPe") || 0);
    document.getElementById("tp").innerHTML = "TOTAL MINGGU INI " + totalPengeluaran;

    if(document.getElementById("pembukuan").innerHTML === "") {
        document.getElementById("pembukuan").innerHTML = "<hr><b>" + hari + " | " + mockedDate.getDate() + "-" + mockedDate.getMonth() +"-"+ mockedDate.getFullYear() + "</b>";
        localStorage.setItem("pembukuan", document.getElementById("pembukuan").innerHTML)
    }
}

function pengeluaran() {
    ambilHari();
    ambilJam();

    var ju = document.getElementById("ju").value;
    var k = document.getElementById("k").value;

    if (ju !== "" || k !== "") {
        if (k === "r(data)") {
            window.localStorage.removeItem("pembukuan");
            window.localStorage.removeItem("totalPe");
        } else {
            document.getElementById("pembukuan").innerHTML = "<li>" + hari + " " + jam + " | " + k + " | " + ju + "</li>" + localStorage.getItem("pembukuan");
            window.localStorage.setItem("pembukuan", document.getElementById("pembukuan").innerHTML);

            totalPengeluaran = parseInt(totalPengeluaran) + parseInt(ju);
            window.localStorage.setItem("totalPe", totalPengeluaran);
        }
    }
    window.location.href = "index.html";
}
