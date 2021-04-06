//Создать объект  phone с информацией о телефоне. Он должен содержать свойства: название бренда, модель телефона, выключен телефон или нет (boolean). 

let phone = {
  brand: "iphone",
  model: 11,
  power: true,
  batteryPower: 90,
  getBatteryPower: function(num) {
    return `Ваша зарядка ${this.batteryPower}%`;
  },
  call: function(name) {
    return `я звоню ${name}`;
  },
  isOn: function() {
    if (this.power === true) {
    return "телефон включен";
  } else {
    return "телефон выключен";
   }
  },
  switch: function() {
    if (this.power === true){
      return this.power = false;
    } else {
      return this.power = true;
    }
   }
  }



