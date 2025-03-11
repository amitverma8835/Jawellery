import React from 'react'
import NavBar from '../NavBar/Nav'
import HeroSection from '../HeroSection/Hero'
import Footer from '../Footer/Footer'
import Products from '../Products/Products'

function Home() {
        return (
<>

                <div style={{height:"100vh"}}>
                        <NavBar />
                        <HeroSection />
                </div>
                
                <div>
                        <Products/>
                </div>

                <div>
                         <Footer />
                </div>

</>

        )
}

export default Home
