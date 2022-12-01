import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import line from '../Images/myline.png';

import './GetStarted.css'
const schema=yup.object().shape({
  email:yup.string().email().required(),

})
const GetStarted = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const submitForm=(data)=>{
    console.log(data);
  }
  return (
    <> 
    <section>
     <div className=" Form-Validation" style={{marginBottom:"100px"}}>
     <h3 className='blue' ><a href='/'> <img className='logo' style={{height:"45px", width:"fit-content"}} src='
https://assets.calendly.com/assets/authentication/media/logo-f885ef95906ef15bb6fb.png' alt=""  /> </a></h3>

     <br></br>  
<p className='Free'>Sign up with Calendly for free</p> <br></br>
<div className="inputs">
<div className="between">
<form className="Animation"onSubmit={handleSubmit(submitForm)} >
<h5 className='EmailStarted'>Enter your email to get started.</h5>
<input className='EmailAddress'  type="text" name="email" placeholder="email address" {...register ('email')}/>
 {errors.email && <p className='EmailFirst'>Email must be present.</p>}
 <br/>  <br/> 
<input className='GetStarted' type="submit" id="Get Started"/>

{/* <button className='GetStarted' style={{padding:"15px",width:"500px",borderRadius:"50px",backgroundColor:"rgb(0,105,255",color:"white",fontWeight:"700"}} type="button" class="btn btn-primary btn-lg">Get Started</button> */}

  <br/><br/>        

             <div className="myline"> <img src={line} alt="/" style={{width:"500px"}} /></div><br/> 
             
  <div className="Google">
<button className='GoogleButton' onClick={GetStarted}><a href='/'> <img className='logo' style={{height:"22px", width:"fit-content"}} src='
https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=""  /> </a><p>Sign up with Google</p></button> <br/><br></br>

  </div>

  <div className="Microsoft">
<button className='MicrosoftButton' onClick={GetStarted}><a href='/'> <img className='logo' style={{height:"22px", width:"fit-content"}} src='
https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' alt=""  /> </a> <p> Sign up with Microsoft</p></button>

</div> 
<br></br>
<div className='Already'>Already have an account? <div className='Login'>Log in </div></div>


</form>
</div>

</div>  
          <br/>
        <div id="6">
          <label className='blue'>English </label><br/>
          <select className='opi' id='language'>
                        <option disabled selected value="--">English</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                        <option value="español">español</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Português">Português(Brasile)</option>
                      
            </select>
                  
        </div>

</div>
</section>
    </>
  )
}

export default GetStarted




















// Google Authotication


// import React from 'react'
// import { GoogleLoginButton } from "react-router-dom";
// import {LoginSocialGoogle} from "react-router-dom";
// const GetStarted = () => {
//   return (
//     <div>
//       <LoginSocialGoogle
//         client_id={"50886578141-a359sso55hvcsp36ojtdt65sagsn5399.apps.googleusercontent.com"}
        
//         scope="openid profile email"
//         discoveryDocs="claims_supported"
//         access_type="offline"
//         onResolve={({ provider, data }) => {
//           console.log(provider, data);
//         }}
//         onReject={(err) => {
//           console.log(err);
//         }}
//       >
//         <GoogleLoginButton />
//       </LoginSocialGoogle>
//     </div>
//   )
// }

// export default GetStarted





// import React from 'react';
// import '../Components/GetStarted.css';
// import orline from '../Images/or.png';
// import googleicon from '../Images/googleicon.png';
// import microsofticon from '../Images/windowsicon.png';

// const GetStarted = () => {
//   return (
//     <>
  //   <section className='mainbody'>
  //   <form className='formbody' class="card" style={{width:"600px",paddingTop:"50px",marginLeft:"30%",marginBottom:"40px",borderRadius:"25px"}}>
  //       <p style={{color:"black",marginRight:"320px",fontWeight:"bold"}}>Enter your email to get started</p>
  //   <div className="mb-3">
      
  //     <input style={{padding:"15px",width:"580px",marginLeft:"8px",borderRadius:"50px"}}
  //       type="email"
  //       className="form-control"
  //       id="exampleInputEmail1"
  //       aria-describedby="emailHelp" placeholder='   email address'
  //     />
  //     <br />
  //     <button style={{padding:"15px",width:"580px",borderRadius:"50px"}} type="button" class="btn btn-primary btn-lg">Get Started</button>
  //   </div>
  //   <div className="orimg"> <img src={orline} alt="" /></div>
    
  //   <button style={{padding:"15px",width:"580px",marginLeft:"8px",borderRadius:"50px"}} type="button" class="btn btn-outline-dark btn-lg"> <img style={{width:"30px",paddingBottom:"4px"}} src={googleicon} alt="" /> Sign up with Google</button> <br />
  //   <button style={{padding:"15px",marginLeft:"8px",width:"580px",borderRadius:"50px"}} type="button" class="btn btn-outline-dark btn-lg"><img style={{width:"25px",paddingBottom:"4.5px",paddingRight:"4px"}} src={microsofticon} alt="" /> Sign up with Microsoft</button>
  //   <br />
  //   <p style={{marginRight:"310px"}}>Already have an account? <a style={{textDecoration:"none"}} href='/login'>Log in</a></p>
  // </form>
  //   </section>
//     </>
//   )
// }

// export default GetStarted;
