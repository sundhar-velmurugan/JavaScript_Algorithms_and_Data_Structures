function telephoneCheck(str) {
    let regex = RegExp(/^(1(\s)?(\(\d{3}\)|\d{3})?|\(\d{3}\)|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/)
    return regex.test(str)
}
  
console.log(telephoneCheck("5555555555"))