function checkCashRegister(price, cash, cid) {
  var change = cash - price
  let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let cidCopy = [...cid]
  let numOfCurrency = []
  let totalCID = 0
  var changeArr = []
  
  

  var output = {status: "", change: []} //object with status and change key
   for (let i=0; i < cidCopy.length; i++){
     totalCID += cidCopy[i][1]
   }
    
 
   for (let i=0; i < cidCopy.length; i++){ //get the number of each coin / bill in register
   
     numOfCurrency[i] = Math.round(cid[i][1] / values[i])
   }
   console.log(cid)
  
   totalCID = Math.round(100*totalCID)/100 //get the total money in register

    
   if (totalCID === change ){ //if exact change
     output.status = "CLOSED";
     output.change = cid;
     return output
   }

   if (totalCID < change ){
     output.status = "INSUFFICIENT_FUNDS"
     return output
   }


  
  for (var i = cidCopy.length - 1; i > -1; i--){ //starting at the highest value bill (100)
       var rChange = 0
      while (numOfCurrency[i] > 0 && change >= values[i]){
          //keep subtracting from change as long as its greater than the corrsponding value of bill while reducing the amount of that bill by 1 every time
          change -= values[i]
          numOfCurrency[i] -= 1
          //totalCID -= values[i]

          change = Math.round(100*change) / 100

          rChange += Math.round(100*values[i]) / 100



      }

       if (rChange > 0){
         output.status = 'OPEN'
        output.change.push([cidCopy[i][0], rChange])
        changeArr.push([cidCopy[i][0], rChange])

       }
       
       
  }
  
  // check if there is a bill in register that can be used to give change
  if (rChange < change){
    output.status = "INSUFFICIENT_FUNDS"
    output.change = []
    return output
  }

  
  return output;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])