import { useState } from 'react'
import UsecurrencyInfo from './CustomHooks/Currencyinfo'
import { InputBox } from './Components'

function App() {
  
  const [amount, setAmount] = useState(1)
  const [to,SetTo]=useState('inr')
  const[from,SetFrom]=useState('usd')
  const [convertedAmount,SetConvertedAmount]=useState(85.77337671)

  const currencyinfo=UsecurrencyInfo(from)

  const options=Object.keys(currencyinfo)

  const swap=()=>{
    SetFrom(to)
    SetTo(from)
    SetConvertedAmount(amount)
    setAmount(convertedAmount)
  } 
    const convert=()=>{
      SetConvertedAmount(amount*currencyinfo[to])
    }

  return (
      <div
          className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage:`url(https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600)`,
                }}
      >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

                <form 
                onSubmit={(e)=>{
                  e.preventDefault()
                  convert()
                }}
                >
                  <div className='w-full mb-1'>
                  <InputBox
                  label='From'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencychange={(currency)=>{
                    SetFrom(currency) 
                    setAmount(1)
                  }}
                  onAmountchange={(value)=> {if(value>=1) setAmount(value)}}
                  selectCurrency={from}
                  />
                  </div>
                  <div className="relative w-full h-0.5">
                    <button
                    type='button'
                    className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                    onClick={swap}
                    >Swap</button>
                  </div>

                  <div className="w-full mt-1 mb-4">
                  <InputBox
                  label='To'
                  amount={convertedAmount}      
                  currencyOptions={options}
                  onCurrencychange={(currency)=>{SetTo(currency)
                    setConvertedAmount(1)
                  }}
                  selectCurrency={to}
                  amountDisable
                  />
                  </div>
                  <button type="submit"
                  className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                  >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                </form>
        </div>
        </div>
      </div>


  );
}

export default App;
