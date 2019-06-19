function convertToRoman(num) {
    num = num.toString()
    let map = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }
    let generateOnes = (n)=>{
        if(n==="1" || n==="5"){
            return map[n]
        }
        else if(n<4){
            return map["1"].repeat(Number(n))
        }
        else if(n==="4"){
            return map["1"].concat(map["5"])
        }
        else if(n==="9"){
            return map["1"].concat(map["10"])
        }
        else if (n>5){
            return map["5"].concat(map["1"].repeat(Number(n-5)))
        }
        //for '0'
        else{
            return ""
        }
    }
    let generateTens = (n)=>{
        if(n==="1" || n==="5"){
            return map[n.concat("0")]
        }
        else if(n<4){
            return map["10"].repeat(Number(n))
        }
        else if(n==="4"){
            return map["10"].concat(map["50"])
        }
        else if(n==="9"){
            return map["10"].concat(map["100"])
        }
        else if (n>5){
            return map["50"].concat(map["10"].repeat(Number(n-5)))
        }
        else{
            return ""
        }
    }
    let generateHundreds = (n)=>{
        if(n==="1" || n==="5"){
            return map[n.concat("00")]
        }
        else if(n<4){
            return map["100"].repeat(Number(n))
        }
        else if(n==="4"){
            return map["100"].concat(map["500"])
        }
        else if(n==="9"){
            return map["100"].concat(map["1000"])
        }
        else if (n>5){
            return map["500"].concat(map["100"].repeat(Number(n-5)))
        }
        else{
            return ""
        }
    }
    let generateThousands = (n)=>{
        if(n==="1"){
            return map[n.concat("000")]
        }
        else if(n<4){
            return map["1000"].repeat(Number(n))
        }
        return ""
    }
    let result = []
    // [ones, tens, hunderds, thousands]
    num = num.split("").reverse()
    result.push(num[0]?generateOnes(num[0]):"")
    result.push(num[1]?generateTens(num[1]):"")
    result.push(num[2]?generateHundreds(num[2]):"")
    result.push(num[3]?generateThousands(num[3]):"")

    return result.reverse().join("")
}

console.log(convertToRoman(36))