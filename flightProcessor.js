const Flight = require('./Flight')

// Ketika terima FPL dari AFTN
const flt1 = new Flight('GIA123', 'B734', 'Garuda Indonesia', 360, 5000)
const flt2 = new Flight('LNI6969', 'B739', 'Singa Angop', 340, 8000)

flt1.on('FLIGHT_ACTIVE', (pesan) => {
  console.log(pesan.msg)
})

flt2.on('FLIGHT_ACTIVE', (pesan) => {
  console.log(pesan.msg)
})