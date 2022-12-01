import React from 'react'
import './Individuals.css'
import { Link} from 'react-router-dom';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


// for slider
// import HeroSlider, { Slide} from 'hero-slider';
// const pic12 = "https://images.ctfassets.net/k0lk9kiuza3o/2FyDcXPje4Z34uR9g4KIaH/f2b8c6998ebf3c74c6e496b7d4c25166/Calendly-customized-branding.png?w=1181&h=926&q=50&fm=webp";
// const pic  ="https://images.ctfassets.net/k0lk9kiuza3o/2FyDcXPje4Z34uR9g4KIaH/f2b8c6998ebf3c74c6e496b7d4c25166/Calendly-customized-branding.png?w=1181&h=926&q=50&fm=webp";     
// const pic2 ="https://images.ctfassets.net/k0lk9kiuza3o/2FyDcXPje4Z34uR9g4KIaH/f2b8c6998ebf3c74c6e496b7d4c25166/Calendly-customized-branding.png?w=1181&h=926&q=50&fm=webp";

import pic12 from '../Images/pic12.JPG';
import pic from '../Images/pic.JPG';
import pic2 from '../Images/pic2.JPG';


const Individuals = () => {
  return (


  <section className='top1'>
    <div className='oneline'>
    <div className='left1'>
         
         {/* Image 1 */}
       
      <div><h1 className='big'>The genius way to work better </h1>
         
      </div>

       <div className='para_Signup'>
     <p className='para'>Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.</p> 
     </div> 

  <div className="SignUp">
<Link to="/getstarted"  >  
<button className='SignupButton' onClick={Individuals}><p className='style1'>Sign up for free</p></button>
    </Link>
  </div>


     </div>
         <div className='Img'> <img className='Img1'src='
https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?w=1472&h=1232&q=50&fm=webp' alt=""  /> 
</div>
        </div>


           {/* Image 2 */}

           <div className='SecondImg'>
           <img className='Img2' src="https://images.ctfassets.net/k0lk9kiuza3o/4igqbRz7kziAIipMxrpzSn/cd8a5278fda0b2ce622c6ad6c2f722b7/Individuals_Page.png?w=1470&h=1210&q=50&fm=webp" alt="/" />
          
             <div className='secondHalf'>

            <div >
            <h6 className='secondBlue'>THE CALENDLY BOOKING LINK</h6>
            </div>  
            
            <div ><h2 className='booking'>Save time with your own personalized booking links</h2> 
            </div>

            <div >
            <p className='para2'>Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone’s time.</p>
            </div>

            <div className="getYour">
            <Link to="/getstarted"  >  
<button className='Getback' onClick={Individuals}><p>Get Your Link</p>

</button> 
</Link>
  </div>
            </div>

            </div>





     {/* Imgage 3 */}
       
            <div className='oneline3'>
       <div className='left2'>

       
      <div><h6 className='blue3'>A CURATED CALENDAR </h6>   
      </div>


      <div ><h2 className='efficiently
'>Book up efficiently</h2> 
            </div>

       <div className='paraWhen'>
     <p className='para3'>When invitees select a meeting slot from your schedule, they only see the times you’re available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.</p> 
    
     </div>
     
     <div><h3 className='Arrow1'>Learn more ⭢</h3></div>
  
        </div>
    
     <div className='ThirdImg'>
             <img className='img3' src="https://images.ctfassets.net/k0lk9kiuza3o/5vhSCmOfTG8ByGSTZiggcw/7c024b62e0421989e268bee66315ae2c/Calendly-Stay-in-Context.png?w=1140&h=940&q=50&fm=webp" alt="/"/>


             
            </div>
        </div>



        {/* Image 4 */}


        <div className='SecondImg'>
           <img className='Img2' src="https://images.ctfassets.net/k0lk9kiuza3o/4VfIvpAjtQ0KxDLJzcNoGB/3fddd7c61713dcd58723cfe3fc2ba6c2/Calendly-Improve-Attendance.png?w=1140&h=930&q=50&fm=webp" alt="/" />
          
             <div className='secondHalf'>

            <div >
            <h6 className='secondBlue'>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
            </div>  
            
            <div ><h2 className='booking'>Work like you have a personal assistant</h2> 
            </div>

            <div >
            <p className='para2'>Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.</p>
            </div>

        
            <div><h3 className='Arrow1'>Learn more ⭢</h3></div>

            </div>

            </div>


            {/* Image 5 */}
            <div className='oneline3'>
    <div className='left2'>

       
      <div><h6 className='blue3'>COLLECT PAYMENTS </h6>   
      </div>


      <div ><h2 className='efficiently
'>Erase billing hassles</h2> 
            </div>

       <div className='paraWhen'>
     <p className='para3'>Stripe and PayPal integrations enable your clients to submit payment as soon as they schedule a meeting. You get paid on time, every time, without dealing with bills or invoices.</p> 
     </div>
     
        <div><h3 className='Arrow1'>Learn more ⭢</h3></div>
  
 
     </div>
     <div className='ThirdImg'>
             <img className='img3' src="https://images.ctfassets.net/k0lk9kiuza3o/7uPSssDvEoeAqpvJonZ9ZP/f599af0836e6902e11528fb49569c5da/Calendly-Collect-Payments.png?w=1159&h=959&q=50&fm=webp" alt="/"/>

            </div>
        </div>



        {/* Image 6 */}
       
       <div className='plane1'>
        <div className='SecondImg'>
           <img className='Img2' src="https://images.ctfassets.net/k0lk9kiuza3o/7dAOGwsgnRjDgfFvLzJTgj/851a9a4c76d6416db169143b46b9d656/Calendly-clients__1_.png?w=1140&h=930&q=50&fm=webp" alt="/" />
          
             <div className='secondHalf'>

            <div >
            <h6 className='secondBlue'>SCHEDULING AT SCALE</h6>
            </div>  
            
            <div ><h2 className='booking'>Retain more clients</h2> 
            </div>

            <div >
            <p className='para2'>Happy clients are long-term clients. With Calendly, prospects can schedule with you instantly so no one slips through the cracks, and everything about your interaction is personal, professional, and respectful of their time.</p>
            </div>

        
           

            </div>
            </div>
           </div> 

            {/* Box  1 */}

            <div className='boxCenter'>
      <div><h1 className='big2'>Do more with our integrations</h1>
         
         </div>


         <div className='BigPara'>
     <p className='para4'>Smart scheduling will change the way you – and your tools – work</p> 
     </div>


     <div className="Button_box">
     <div><button className='view_all' src='/' alt="/"><p>View all</p></button> </div>
     <div><button className='Start_For_free' src='/' alt="/"><p>Start for free</p></button> </div>
  </div>
           
         </div>




         {/* HOW IT WORKs */}


            <div >
            <h6 className='HOW'>HOW IT WORKS</h6>
            </div> 

            <div ><h2 className='See'>See Calendly in action</h2> 
            </div>
        
            <div className='boxPara'>
     <p className='With'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p> 
     </div>

               

               {/* FEATURES slider */}

               <div >
            <h6 className='FEATURES'>FEATURES</h6>
            </div>


            
            <div ><h2 className='Favorite'>Favorite features and capabilities</h2> 
            </div>




            {/* bootstrap code */}
            <div className="pic1"> <img src={ pic12} alt="/" style={{width:"50%"}} /></div>
            <div className="pic2"> <img src={pic} alt="/" style={{width:"50%"}} /></div>
            <div className="pic3"> <img src={pic2} alt="/" style={{width:"50%"}} /></div>

            {/* <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlider={1}
            onBeforeChange={(previousSlide,nextSlide) => 
            console.log("onBeforeChange",previousSlide,nextSlide)}
            onChange={nextSlide =>console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
            style= {{
              backgroundColor:"red (0.0.0.33)"
            }}
            settings={{
              slidingDuration:250,
              slidingDelay:100,
              shouldAutoplay:true,
              shouldDisplayButton:true,
              autoplayDuration:5000,
              height:"100vh"
            }}
            >
              <Slide
                background= {{
                  backgroundImage:pic12,
                  backgroundAttachment:"fixed"
                }}
              />
              <Slide
                background= {{
                  backgroundImage:pic,
                  backgroundAttachment:"fixed"
                }}
              />
              <Slide
                background= {{
                  backgroundImage:pic2,
                  backgroundAttachment:"fixed"
                }}
              />
              

            </HeroSlider> */}



            {/* <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="false"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://images.ctfassets.net/k0lk9kiuza3o/2FyDcXPje4Z34uR9g4KIaH/f2b8c6998ebf3c74c6e496b7d4c25166/Calendly-customized-branding.png?w=1181&h=926&q=50&fm=webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.pcmag.com/imagery/articles/03M0w7NHlxuW2bMW4OeIx9u-17.fit_lim.size_1050x.png" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://lh6.googleusercontent.com/qzyKdU1fhkcdWDJSoQoOFmeOA0cMPNagvB9AYIB8PKE6bYpZX1aNjns2XsyfYCBVhQ5vQtp9ZFMJuIhiBVY29nV_LOYm43KRLHiGe3FIo-vedrib-ogWATY8I-ULfyXmgYO1lwFR" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}





      {/*  Box2 */}

      {/* <div className='Box2'> <img className='box'src='
https://images.ctfassets.net/k0lk9kiuza3o/41lq28noewrKzn6B9AXh1I/636e53047ab81e34ee6862ff822448f5/Calendly_CTA_bg__1_.png' alt=""  /> 
</div> */}

<div className='Box2'>

<div><h2 className='big-size'>Find just-right plans for individuals and small teams</h2></div>

<div className="plans">

<button className='See_our_plans'><p className='style1'>See our plans</p></button>  
  </div>


</div>
      





                      {/* SOLUTIONS */}

                      <div >
            <h6 className='SOLUTIONS'>SOLUTIONS</h6>
            </div> 

            <div ><h2 className='right'>The right Calendly for the work you do</h2> 
            </div>

            
            {/* card */}
             {/* <div cardName></div> */}

<div className='bg_card'>

{/* display flex for div */}
<div  className='display_flex'>

            <div className="card" >
  <img src="https://images.ctfassets.net/k0lk9kiuza3o/5ledlZLIfg5Ufl5aV7mP43/f4e9ff1c8e56ac1c9ce6416114c4b522/Calendly-Reps.png?w=1480&h=832&q=50&fm=webp" className="card-img-top" alt="..." height={"160px"} />
  <div className="card-body">
    <h5 className="card-title">Sales</h5>
    <p className="card-text">
     Get to your best leads faster
    </p>
  </div>
  
  <div className="card-body">
    <a href="https://calendly.com/solutions/sales" alt="/" className="card-link">
      Learn more →
    </a>
  </div>
</div>


{/* card2 */}

<div className="card" >
  <img src="https://images.ctfassets.net/k0lk9kiuza3o/2CHdvyXqFe8FfVLRvlEtwP/431464dd95b0b51a773a3082b5a3b432/Recruiting.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="..." height={"160px"} />
  <div className="card-body">
    <h5 className="card-title">Recruiting</h5>
    <p className="card-text">
     Less emailing,more interview
    </p>
  </div>
  
  <div className="card-body">
    <a href="https://calendly.com/solutions/recruiting" alt="/" className="card-link">
      Learn more →
    </a>
  </div>
</div>


{/* card 3 */}

<div className="card" >
  <img src="https://images.ctfassets.net/k0lk9kiuza3o/4L2IHsOUMgTUjPxcUbzoyz/2111a84d62f23ade75054f48bdeda0b2/Customer_Success.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="..." height={"160px"} />
  <div className="card-body">
    <h5 className="card-title">Customer Success</h5>
    <p className="card-text">
     Content with customers matters
    </p>
  </div>
  
  <div className="card-body">
    <a href="https://calendly.com/solutions/customer-success" alt="/" className="card-link">
      Learn more →
    </a>
  </div>
</div>


{/* card 4 */}


<div className="card" >
  <img src="https://images.ctfassets.net/k0lk9kiuza3o/Zrdp4mX39AA8cXWx4J41s/1fba6102b32f86275c89e15c84ceab55/Education.jpg?w=1920&h=1081&q=50&fm=webp" className="card-img-top" alt="..." height={"160px"} />
  <div className="card-body">
    <h5 className="card-title">Education</h5>
    <p className="card-text">
    Boost student success
    </p>
  </div>
  
  <div className="card-body">
    <a href="https://calendly.com/solutions/education" alt="/" className="card-link">
      Learn more →
    </a>
  </div>
</div>
</div>
</div>


      {/* Try Calendly free */}

      <div className='bg_last'>

      <div><h1 className='big_word_last'>Try Calendly free</h1> 
         </div>

         <div className='BigPara'>
     <p className='para4'>After your 14-day trial of our Teams plan, enjoy the Free version of Calendly – forever.</p> 
     </div>

     <div className="SignUp">
<Link to="/getstarted"  >  
<button className='SignupButton' onClick={Individuals}><p className='style1'>Sign up for free</p></button>
    </Link>
  </div>

  <div className='BigPara'>
     <p className='para4'>To inquire about our Enterprise plans, click </p> 
     <div className='Blue_link'><p>  here .</p></div>
     </div>


</div>
        </section> 







  )
}

export default Individuals
