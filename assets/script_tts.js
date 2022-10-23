function submit_jwb() {
  var sel = document.getElementById("select-soal").value;
  var jwb = document.getElementById("select-jawaban").value;

  switch (sel) {
    case "1":
      if (jwb == "takjil") {
        document.getElementById("b9k1").style.display = "";
        document.getElementById("b9k2").style.display = "";
        document.getElementById("b9k3").style.display = "";
        document.getElementById("b9k4").style.display = "";
        document.getElementById("b9k5").style.display = "";
        document.getElementById("b9k6").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "4":
      if (jwb == "taraweh") {
        document.getElementById("b6k2").style.display = "";
        document.getElementById("b7k2").style.display = "";
        document.getElementById("b8k2").style.display = "";
        document.getElementById("b9k2").style.display = "";
        document.getElementById("b10k2").style.display = "";
        document.getElementById("b11k2").style.display = "";
        document.getElementById("b12k2").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "2":
      if (jwb == "tadarus") {
        document.getElementById("b6k2").style.display = "";
        document.getElementById("b6k3").style.display = "";
        document.getElementById("b6k4").style.display = "";
        document.getElementById("b6k5").style.display = "";
        document.getElementById("b6k6").style.display = "";
        document.getElementById("b6k7").style.display = "";
        document.getElementById("b6k8").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "3":
      if (jwb == "eidalfitr") {
        document.getElementById("b11k2").style.display = "";
        document.getElementById("b11k3").style.display = "";
        document.getElementById("b11k4").style.display = "";
        document.getElementById("b11k5").style.display = "";
        document.getElementById("b11k6").style.display = "";
        document.getElementById("b11k7").style.display = "";
        document.getElementById("b11k8").style.display = "";
        document.getElementById("b11k9").style.display = "";
        document.getElementById("b11k10").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "5":
      if (jwb == "ramadan") {
        document.getElementById("b1k5").style.display = "";
        document.getElementById("b2k5").style.display = "";
        document.getElementById("b3k5").style.display = "";
        document.getElementById("b4k5").style.display = "";
        document.getElementById("b5k5").style.display = "";
        document.getElementById("b6k5").style.display = "";
        document.getElementById("b7k5").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "6":
      if (jwb == "haus") {
        document.getElementById("b4k7").style.display = "";
        document.getElementById("b5k7").style.display = "";
        document.getElementById("b6k7").style.display = "";
        document.getElementById("b7k7").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    case "7":
      if (jwb == "ngabuburi") {
        document.getElementById("b4k10").style.display = "";
        document.getElementById("b5k10").style.display = "";
        document.getElementById("b6k10").style.display = "";
        document.getElementById("b7k10").style.display = "";
        document.getElementById("b8k10").style.display = "";
        document.getElementById("b9k10").style.display = "";
        document.getElementById("b10k10").style.display = "";
        document.getElementById("b11k10").style.display = "";
        document.getElementById("b12k10").style.display = "";
      } else {
        alert("Jawaban Anda Salah!");
      }
      break;
    default:
      break;
  }
}
