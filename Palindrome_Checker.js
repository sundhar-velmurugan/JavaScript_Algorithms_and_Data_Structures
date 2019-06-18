function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  let start = 0
  let end = str.length-1

  while(start<=end){
    if(str[start]!==str[end]){
      return false
    }
    start+=1
    end-=1
  }

  return true
}

console.log(palindrome("2_A3*3#A2"))