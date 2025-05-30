// import './components/image.css'
import React from 'react'
function Image(props) {
  console.log(props.username)
  return (
    <>
    <h1>{props.username}</h1>

    <img src="https://imgs.search.brave.com/1_VXHIhIUPnw6XQCmbCTEZ_pHpg7VCoX74b5grw-jiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vc2JPUFJV/YU1fLWNRMDhmMXpS/OFIxbEZLcWlDWm5S/bWhwRGFCVXZleXQx/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG1WMC9jM2x6ZEdG/MGFXTXVZMjl0L0x6/STRNemd3TVRJM0wz/SXYvYVd3dk1HVmlN/VGt5THpVNC9OalUx/TlRjM01ERXZhV3hm/L05qQXdlRFl3TUM0/MU9EWTEvTlRVM056/QXhYMmR1YjJFdS9h/bkJu" alt="logo" />
   
   
     </>
  )
}

export default Image
