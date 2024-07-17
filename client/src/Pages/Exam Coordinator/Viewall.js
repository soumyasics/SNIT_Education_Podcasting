import React from 'react'
import { useNavigate } from 'react-router-dom';
import image1 from '../../Assest/Group 2151.png'
function Viewall() {

    const navigate=useNavigate();
    const handlevq = () => {
        navigate("/examcoordinateviewallquestion")
    }
  return (
    <div className='container'>
        <div className='row  me-5 mt-5 text-center view-request-div pt-4'>
            <div className='col-2'>
                Profile
            </div>
            <div className='col-2'>
                Name
            </div>
            <div className='col-2'>
                Phone Number
            </div>
            <div className='col-2'>
                Email
            </div>
            <div className='col-2'>
                Technology
            </div>
            <div className='col-2'>
                View Request
            </div>
        </div>
        <div className='row  mt-5 text-center view-request-div '>
            <div className='col-2 pt-2'>
                <img src={image1} className='view-request-img'/>
            </div>
            <div className='col-2 pt-4'>
                Ahana Malik
            </div>
            <div className='col-2 pt-4'>
                9087654321
            </div>
            <div className='col-2 pt-4'>
               ahanamalik@gmail.com
            </div>
            <div className='col-2 pt-4'>
                python
            </div>
            <div className='col-2 pt-4'>
                <button className='view-request-vqbtn'onClick={handlevq} > VQ</button>
            </div>
        </div>
    </div>
  )
}

export default Viewall
