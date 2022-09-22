const EventEmitter = require('events').EventEmitter

class Flight extends EventEmitter {
  constructor(acid, aircraft, operator, requestedLevel, eobt) {
    super()
    this.gufi = 'xxx'
    this.acid = acid
    this.eobt = eobt
    this.rfl = requestedLevel
    this.aircraft = aircraft
    this.operator = operator
    this.isActive = false
    this.initialize()
  }

  initialize() {
    // Ambil EOBT
    // Kurangi EOBT dengan waktu sekarang
    const hasil = this.eobt
    // Bikin Timer
    setTimeout(() => {
      this.isActive = true
      this.emit('FLIGHT_ACTIVE', {
        msg: `Flight ${this.acid} has been activated`
      })
    }, hasil)
  }
}

module.exports = Flight
