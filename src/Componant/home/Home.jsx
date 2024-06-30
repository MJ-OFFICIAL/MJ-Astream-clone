import React from 'react'
import './Home.css'
import Hero from '../hero/Hero'
import about_img from '../../assets/about_img.jpg'
import Service_card from './home_services/Service_card'
import card_1  from '../../assets/card_1.png'
import card_2  from '../../assets/card_2.png'
import card_3  from '../../assets/card_3.png'
import card_4  from '../../assets/card_4.png'
import card_5  from '../../assets/card_5.png'
import card_6  from '../../assets/card_6.png'
import card_7  from '../../assets/card_7.png'
import card_8  from '../../assets/card_8.png'
 
const Home = () => {
  
  return (
    <>
    <div className="home">
        
    </div>
    <Hero/>
    <div className="about">
        <div className="about-text">
            <h1>About Us:</h1>
            <h3>Elevate Your Online Experience with Our Web Services!</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, vitae sed aperiam, vel magni odio officiis commodi repudiandae quasi veritatis quidem obcaecati. Repellat consequatur laborum dolores reiciendis ipsa quo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam est inventore, ad voluptate suscipit impedit molestias veritatis alias quia aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a reiciendis commodi, illo dicta tempora dolorem possimus itaque at provident! totam?</p>
        </div>
        <div className="about-img">
            <img src={about_img} alt="" />
        </div>

    </div>
        <div className="home_services">
          <Service_card text="Website Designing Services" icon={card_1} />
          <Service_card text="App Development Services" icon={card_2} />
          <Service_card text="Website Maintenance services" icon={card_3} />
          <Service_card text="Digital Marketing Services" icon={card_4} />
          <Service_card text="Hosting Services" icon={card_5} />
          <Service_card text="Domain Services" icon={card_6} />
          {/* <Service_card text="Graphic Designing services" icon={card_7} />
          <Service_card text="E-Commerce Services" icon={card_8} /> */}
        </div>
    </>
  )
}

export default Home
