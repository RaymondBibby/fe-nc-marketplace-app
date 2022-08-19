const CheckOutSummary = ({basket}) => {
    console.log(basket)
    let basketTotal = 0
    basket.forEach((item) => {
       return basketTotal += item.price 
    })
return <div>PRICE OF ALL GOODIES!: £{basketTotal} <summary></summary></div>
}

export default CheckOutSummary