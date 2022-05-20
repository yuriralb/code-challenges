function telephoneCheck(str) {
  str = str.replace(/[ -]/g, '')
  if ((/1?[0-9]{10}|1?^([(][0-9]{3}[)])[0-9]{7}/).test(str)) {
    return true
  }
  return false;
}

console.log(telephoneCheck("555-555-5555"));