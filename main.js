module.exports = {
  taxCalculator: function(money) {
    if(money <= 10) {
      return money * 0.1
    }
    if(money <= 20) {
      return 1 + ((money - 10) * 0.07)
    }
    if(money <= 30) {
      return 1.7 + ((money - 20) * 0.05)
    }
    if(money > 30) {
      return 2.2 + ((money - 30) * 0.03)
    }
  }
};
