import { useEffect, useState } from "react"
import Loading from "./component/Loading"

function CoinTracker(){
  const [loading, setLoading] = useState(true)
  const [coins, setCoin] = useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoin(json.slice(20))
      setLoading(false)
    })
  },[])
  console.log(coins)
  return (
    <div>
      <h1>Coin Tracker</h1><br/>
      { loading ? <Loading/> : 
        <select>
          {coins.map((data,i) => (<option key={i}>{data.name} [price: {(data.quotes.USD.ath_price).toFixed(3)}]</option>))}
        </select>
      }
    </div>
  )
}

export default CoinTracker