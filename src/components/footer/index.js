import React from 'react';
import instagram from  '../../assests/images/instagram.svg'
import facebook from '../../assests/images/facebook.svg'
import envelop from '../../assests/images/envelop.svg'
import whatsapp from '../../assests/images/whatsapp.svg'

import logo from '../../assests/images/logo.png'
import './index.css'

const Footer = () => {
    return (  

        <>
        <div className=" p-5" style={{width:'98%',margin:'32px auto 8px',borderRadius:'24px',background:'#ffd1da'}}>
      <div className="d-flex justify-content-between align-items-center ">

        <div className="socialMedia   px-5 pt-5" style={{background:'#f8f9fa',borderRadius:'4px',height:'100%'}}>
          <img src={logo} alt="highquickAction" width='260' height='100' />
             <div className="socialMediaLinks px-3 pt-4 text-center" style={{color:"black",fontFamily:'oswald',fontSize:'18px'}}> 
             <p>Follow <span style={{color:'#E80f88'}}>Us:</span> </p>
             <div>
                <ul className="d-flex p-0 justify-content-center m-0">
                    <li style={{'listStyle':'none'}}><img src={instagram}  alt="social-medai"/></li>
                    <li><img src={whatsapp} width='40' height='40'  alt="social-medai"/></li>
                    <li><img src={facebook} width='40' height='40'  alt="social-medai"/></li>
                    <li><img src={envelop} width='40' height='40'  alt="social-medai"/></li>
                </ul>
             </div>
             <p className="my-5 text-center" style={{fontFamily:'oswald',fontSize:'22px',color:'#E80f88',margin:'0'}}>Shopping Different with us</p>
             </div>
             </div>
        <div className="form d-flex flex-column px-5" style={{gap:'12px'}} >
          <input
            type="text"
            id="name"
            name="name"
            className='contactSupportInput'
            placeholder="Enter your Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            className='contactSupportInput'

            placeholder="Enter your email"
          />
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            className='contactSupportInput'

            placeholder="Enter you Phone "
          />
          <textarea
            id="message"
            name="message"
            placeholder=" Enter your Message "
          />
          <button type="submit" style={{background:"#fba1b7",borderRadius:'8px',fontFamily:'lato'}}>Submit</button>
        </div>
      </div>
    </div>
  
        <div style={{width:'98%',height:'50px',textAlign:'center',background:'#fba1b7',color:'white',lineHeight:'50px',margin:'0 auto 8px',borderRadius:'24px'}}>
           <p> All Right reserved  Design by <span style={{color:'#E80f88'}}>Mostafa Dbagh</span></p>
        </div>
        </>
    );
}
 
export default Footer;