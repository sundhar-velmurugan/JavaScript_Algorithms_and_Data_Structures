function checkCashRegister(price, cash, cid) {
    let denom = [
        { name: 'ONE HUNDRED', value: 100.00},
        { name: 'TWENTY', value: 20.00},
        { name: 'TEN', value: 10.00},
        { name: 'FIVE', value: 5.00},
        { name: 'ONE', value: 1.00},
        { name: 'QUARTER', value: 0.25},
        { name: 'DIME', value: 0.10},
        { name: 'NICKEL', value: 0.05},
        { name: 'PENNY', value: 0.01}
    ]

    let computeTotalCid = (register)=>{
        let obj = {total: 0}
        for (let i=0, len=register.length; i<len; i++){
            obj.total+=register[i][1]
            obj[register[i][0]] = register[i][1]
        }
        obj.total = parseFloat(obj.total.toFixed(2))
        return obj
    }

    let myCash = computeTotalCid(cid)
    let change = cash-price

    if(myCash.total<change){
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }
    if(myCash.total === change){
        return {
            status: "CLOSED",
            change: cid
        }
    }
    let ch = []
    for(let i=0, len=denom.length; i<len; i++){
        let denomValue = 0
        while(myCash[denom[i].name]>0 && denom[i].value<=change){
            change = parseFloat((change-denom[i].value).toFixed(2))
            myCash[denom[i].name] -= denom[i].value
            denomValue += denom[i].value
        }
        if(denomValue>0){
            ch.push([denom[i].name, denomValue])
        }
    }

    if(ch.length<1 || change>0){
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }

    return {
        status: "OPEN",
        change: ch
    }

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))