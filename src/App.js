import React from 'react';
import Navbar from "../src/Components/Navbar";
import NavOptions from './Components/NavOptions';
import PreNavbar from './Components/PreNavbar';
import Slider from './Components/Slider';
import data from "./Data/data.json";
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ProductReviews from './Components/ProductReviews';
import Videos from './Components/Videos';
import Banner from './Components/Banner';
import Footer from './Components/Footer';


const App = () => {        
  return (
    <BrowserRouter>
    <PreNavbar/>
    <Navbar/>
    <Routes>
    <Route exact path='/miPhones'
     element={<NavOptions miPhones={data.miPhones} />}>
     </Route>
     <Route exact path='/redmiPhones'
     element={<NavOptions redmiPhones={data.redmiPhones} />}>
     </Route>
    <Route exact path='/tv'
     element={<NavOptions tv={data.tv} />}>
     </Route>
     <Route exact path='/laptops'
     element={<NavOptions laptop={data.laptop} />}>
     </Route>
     <Route exact path='/filters&lifestyle'
     element={<NavOptions FilterandLifestyle={data.fitnessAndLifeStyle} />}>
     </Route>
     <Route exact path='/homeproduct'
     element={<NavOptions home={data.home} />}>
     </Route>
     <Route exact path='/audio'
     element={<NavOptions audio={data.audio} />}>
     </Route>
     <Route exact path='/accessories'
     element={<NavOptions accessories={data.accessories} />}>
     </Route>
    </Routes>

    <Slider data={data.banner}/>
    <Offers data={data.offer}/>
    <Heading title="STAR PRODUCTS"/>
    <StarProduct data={data.starProduct}/>
    <Heading title="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
    <Routes>
    <Route exact path="/music" 
            element={<HotAccessories music={data.hotAccessories.music}
            musicCover={data.hotAccessoriesCover.music} />}
            >
            </Route>
    <Route exact path="/smartDevices" 
            element={<HotAccessories smartDevice={data.hotAccessories.smartDevice}
            smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}
            >
            </Route>        
    <Route exact path="/homeproducts" 
            element={<HotAccessories home={data.hotAccessories.home}
            homeCover={data.hotAccessoriesCover.home} />}
            >
            </Route>
    <Route exact path="/lifestyle" 
            element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle}
            lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}
            >
            </Route>   
    <Route exact path="/mobileAccessories" 
            element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}
            mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}
            >
            </Route>            
    </Routes>

    <Heading title="PRODUCT REVIEWS"/>
    <ProductReviews ProductReviews={data.productReviews}/>
    <Heading title="VIDEOS" />
    <Videos Videos={data.videos}/>
    <Heading title="IN THE PRESS" />
    <Banner data={data.banner}/>
    <Footer footer={data.footer}/>
    </BrowserRouter>

    
  )
}

export default App