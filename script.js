function hitungTotalBayar() {
  const harga = parseFloat(document.getElementById("harga").value);
  const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
  const isMember = document.getElementById("member").checked;
  let diskon = parseFloat(document.getElementById("diskon").value);

  if (isNaN(diskon)) {
    diskon = 0;
  }

  let totalBayar =
    harga * jumlahTiket - (isMember ? harga * jumlahTiket * (diskon / 100) : 0);

  document.getElementById("totalBayar").value = totalBayar;
}
