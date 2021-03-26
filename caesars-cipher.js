function rot13(str) {
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?. "
  var rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM!?. "

  var alphaArr = [...alpha]
  var rot13Arr = [...rot13]

  var newStr = [...str]
  var finalStr = []

  for (var i=0; i < str.length; i++){
    for (var j=0; j < alphaArr.length; j++){
      if (newStr[i] === alphaArr[j]){
        finalStr.push(rot13Arr[j])
      }

    }
  }
  console.log(finalStr)
  return finalStr.join("")
}

rot13("SERR CVMMN!");