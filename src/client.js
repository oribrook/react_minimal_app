export async function fetchPrice(setFunc) {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const resJ = await res.json()    
    const price = resJ.bpi.USD.rate_float
    
    if (setFunc !== NaN){        
        setFunc(price)
    }

    return price
    
    
    
}