import React from 'react'
import './LandingCar.css'
import bgcar from '../../Assets/Img/img_car.png'
import { NavbarDefault } from '../../Assets/Component/Navbar/NavbarDefault'
import { Container } from 'react-bootstrap'

export const LandingCar = () => {
  return (
    <div className='backgroundpage'>
    <NavbarDefault />
      <div className='isi'>
        <text className='text'>
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        </text>
        {/* <button type="button" class="btn btn-success">Mulai Sewa Mobil</button> */}


        <img className='bg-car' src={bgcar} />

      </div>

    </div>
  )
}
