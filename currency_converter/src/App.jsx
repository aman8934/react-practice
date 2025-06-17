import { useState,useEffect } from 'react'
import { InputBox } from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import './App.css'
function App() {
      const [amount,setAmount]=useState('')
      const [from,setFrom]=useState('usd')
      const [to ,setTo] =useState('inr')
      const [convertedAmount,setConvertedAmount] =useState('')
      const currencyInfo_From =usecurrencyinfo(from)
       const currencyInfo_To =usecurrencyinfo(to)
      const options_From =Object.keys(currencyInfo_From || {})
      const options_To =Object.keys(currencyInfo_To || {})
     const swap = () => {
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount);
  setConvertedAmount(amount);
};
useEffect(() => {
  if (!currencyInfo_From || !currencyInfo_From[to]) return;
   
  const result = Number(amount) * currencyInfo_From[to];
setConvertedAmount(result.toString());
}, [from, to, amount, currencyInfo_From]);

        const convert = () => {
          setConvertedAmount(amount*currencyInfo_From[to])
        }
        // console.log(currencyInfo_From[to])
      
  return (
        <div
            className="w-screen h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="flex w-full  h-[500px] gap-10">
                <div className="w-1/2 h-full border border-gray-100 rounded-lg overflow-hidden">
                 <img className="h-full w-full ml-auto object-cover rounded-lg" src="https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg" alt="" /></div>
            
                <div className="w-1/2 h-full border mr-auto border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30 flex items-center justify-center">
               
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount === 0 || amount === '0' ? '' : amount}
                                currencyOptions={options_From}
                                oncurrencychange={(currency) => setFrom(currency)}
                                selectcurrency={from}
                                onAmountchange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount === 0 || convertedAmount === '0' ? '' : convertedAmount}
                                currencyOptions={options_To}
                                oncurrencychange={(currency) => setTo(currency)}
                                selectcurrency={to}
                                amountdisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert  {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
                
                        
            </div>
        </div>
    );
}

export default App
