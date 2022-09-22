class Kendaraan {
  constructor(nama, roda, warna) {
    this.nama = nama
    this.roda = roda
    this.warna = warna
    this.belok = false
  }

  belokKiri() {
    this.belok = 'kiri'
  }

  belokKanan() {
    this.belok = 'kanan'
  }

  lurus() {
    this.belok = false
  }
}

module.exports = Kendaraan