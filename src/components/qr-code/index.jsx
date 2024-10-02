import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodGenerator() {

    const[qrCode,setQRCode]=useState('')
    const[input,setInput]=useState('')
    function hundleQRCode() {
        setQRCode(input)
        setInput('')
    }
    return(
        <div>
            <h3>QR Code Generator</h3>
            <div>
                <input onChange={(e)=>setInput(e.target.value)} type="text" name="QRcode" value={input} placeholder='Enter input for the code'  />
                <button disabled={input && input.trim() !== ''?false:true} type="submit" onClick={()=>hundleQRCode()}>Generate</button>
            </div>
            <div>
                <QRCode
                id='qr-code-value'
                value={qrCode}
                size={400}
                bgColor='white'
                />
            </div>
        </div>
    )
}