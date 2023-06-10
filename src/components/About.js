import React from 'react'
import '../css/About.css'
import Footer from './footer'

function About() {
    
  return (
    <div>
        <div className='About'>
          <div className="about-section">
              <img src="https://freerangestock.com/sample/141966/beautiful-woman-with-clear-skin-with-copyspace.jpg" alt="About Page Image" className="about-image" />
          <div className="text-overlay">
            {/* <h1>Discover <br/>About US</h1> */}
            <p>Discover About US</p>
          </div>
          </div>
          {/* <div className='head'>
            <h2 className='heading'><i>Discover <br/>About US</i></h2>
            <p>What we bring to the table</p>
          </div> */}
          <div className='container'>
            <div className='content'>
              <div className='welcome-about'>
                <p id='about-title'>Welcome To Zildai Beauty Parlour</p>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRLjXO1NRvk57zOlZ5YjHvZ0XdbPnWWw9-w&usqp=CAU' alt='Beauty guru logo'/>
              </div>
              <div className='description-about'>
                <p>"Our Saloon is dedicated to providing the highest leve of hair and skin care services in a comfortable and relaxed manner" </p>
                <p>Our team of experienced stylists specialize in avariety of cuttin-edge techniques and styles to help you acieve the look you desire.</p>
                <p>Zildai Beauty parlour is a top-notch nail salon,hair salon, facials and spa in Nairobi, Kenyatta Avenue.<br/> Our nail and spa salon is the most affordable and professional. We focus on customer safety, needs, and satisfaction.</p>
            <p>We want you to experience our chic, welcoming, and comfortable med spa offering a variety of services. So much more than eyelash services, we provide beautiful experiences delivered under the care of our physicians, nurses, and estheticians.</p>
              </div>
              </div>
              <div className='content4'>
              <div className='welcome-about'>
              </div>
              <div className='second-description-about'>
                <p>There are several reasons why our beaty parlour is considered</p>
                <h2>THE BEST IN THE CITY</h2>
              </div>
              </div>
            <div className='content2'>
              <div>
                <img src='https://i2-prod.dailyrecord.co.uk/incoming/article14973392.ece/ALTERNATES/s615/0_JS180251312.jpg'/>
              </div>
              <div className='photo'>
                <img src='https://urbanbeautyleeds.co.uk/wp-content/uploads/2022/05/Screen-Shot-2022-05-11-at-14.26.19.png'/>
              </div>
            </div>
            <p className='P-outside'>zildai Beauty Parlour is the largest in the world with over 50 Member countries and over 1million individual members.</p>
            <p className='P-outside'>The Prestige awards is a flagship event organized by PBA. <br/> The event attracts beauty industry proffessionals globally with exhibitors showcasting latest products and trends, as well as seminars and conferences for education and networking.</p>
            <div className='content3'>
              <div className='photo'>
                <img src='https://st4.depositphotos.com/1023771/40232/i/450/depositphotos_402326922-stock-photo-make-beauty-concept-attractive-beautician.jpg' alt='Experienced Beauticians'/>
              </div>
              <div>
                <h2>EXPERIENCED STYLIST</h2>
                <p>Our Parlour is staffed with highly skilled and experienced stylists who are well-versed in the latest hair trends, make-up and treatment techniques.<br/>
                They are passionate about there craft and dedicated to providing the best possible service to our clients.</p>
              </div>
            </div>
            <div className='content3'>
              <div>
                <h2>QUALITY PRODUCTS</h2>
                <p>We use only the best hair, nail and facial care products to ensure our client's are left looking and feeling  healthy and radiant.<br/>
                Our beauticians and stylists are well-trained in the use of tese products and recommend the right ones for each individual client.</p>
              </div>
              <div className='photo'>
                <img src='https://www.careerguide.com/career/wp-content/uploads/2021/07/Feature_5_Skills_Every_Beautician_Should_Brush_Up_On_900x650.jpg' alt='Quality Products'/>
              </div>
            </div>
            <div className='content3'>
              <div className='photo'>
                <img src='https://www.rd.com/wp-content/uploads/2017/04/ft-Grooming-Treatments-Every-Man-Should-Be-Getting.jpg' alt='Attention to Detail'/>
              </div>
              <div>
                <h2>ATTENTION TO DETAIL</h2>
                <p>We take the time to listen to our clients' need and preferences, and tailor our services to meet their individua requirements.<br/>
                We pay close attention to detail and strive to deliver te perfect look every time.</p>
              </div>
            </div>
            <div className='content3'>
              <div>
                <h2>RELAXED AND WELCOMING ATMOSPHERE</h2>
                <p>We want our clients to feel relaxed and comfortable while in our salon.<br/>
                We have created a warm and welcoming atmosphere where everyone feels at home.</p>
              </div>
              <div className='photo'>
                <img src='https://hashtag.net.au/images/sampledata/parks/landscape/calm.jpg' alt='Salon Atmosphere'/>
              </div>
            </div>
          </div>
            <button className='button'><a href="/services">Book Appointment Now</a></button>          
          </div>
      {/* <div>
        <Footer/>
      </div> */}
      </div>
          
  )
}

export default About