class Convert {
  constructor(number) {
    this.number = number;
  }

  convertToIDR() {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(this.number);
  }
}

module.exports = Convert;
