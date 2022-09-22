const Kendaraan = require('./Kendaraan')

const kendaraanAres = new Kendaraan('Fortuner', 4, 'Putih')

console.log(`jumlah roda ${kendaraanAres.nama} adalah`, kendaraanAres.roda)
console.log('warna kendaraanAres adalah', kendaraanAres.warna)

const bajaj = new Kendaraan('Bajaj', 3, 'Biru')

console.log('jumlah roda bajaj adalah', bajaj.roda)
console.log('warna bajaj adalah', bajaj.warna)


kendaraanAres.belokKanan()
kendaraanAres.belokKiri()

console.log('Status arah kendaraanAres adalah', kendaraanAres.belok)

bajaj.belokKiri()
console.log('Status arah bajaj adalah', bajaj.belok)
