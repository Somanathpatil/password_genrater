import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*-+={}[]`~"

    for(let i=1 ; i <= array.length; i++){
      let char = Math.floor(Math.random()* str.length + 1)

      pass = str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
   
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6   my-8 bg-gray-500 text-orange-500'>
        <h1 className='text-white text-center my-3  '>Password Generator</h1>
          <div className='flex shadow rounded-lg mb-4 bg-white overflow-hidden'>
            <input type="text"
            value={password}
            placeholder='password'
            className='outline-none w-full py-1 px-3'
            readOnly
            />

            <button
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            >copy</button>

          </div>

            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              />
              <label>Length:{length}</label>
              </div>
            </div>

      </div>
    </>
  )
}

export default App
