import React, { useId } from 'react'

function InputBox({
  label,
  amount,onAmountchange,
  onCurrencychange,
  currencyOptions=[],
  selectCurrency='usd',
  amountDisable=false,
  currencyDisable=false,
  className='',
}) {
      const inputId=useId()

  return (
    <div className={`g-white p-3 rounded-lg text-sm flex ${className}`}>

        <div className='w-1/2'>
          <label htmlFor={inputId} className='text-black/100 mb-2 inline-block'>{label}</label>
          <input type="number"  min='1'   id={inputId}
          className='outline-none w-full bg-transparent py-1.5'
          value={amount}
          placeholder='Amount'
          disabled={amountDisable}
          onChange={(e)=>{
            onAmountchange && onAmountchange(Number(e.target.value)) // amount can be null so for that && is put and the value received may be string so convert it to number.
          }}
          />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
          <p className="text-blue-900  mb-2 w-full">Currency Type</p>
          <select  
          className='rounded-lg px-1 py-1 bg-gray-50 cursor-pointer outline-none'
          value={selectCurrency}
          onChange={(e)=>onCurrencychange && onCurrencychange(e.target.value)}
          disabled={currencyDisable}
          >
            { currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>
            ))}
              </select>
          </div>          
    </div>
  );
}

export default InputBox;