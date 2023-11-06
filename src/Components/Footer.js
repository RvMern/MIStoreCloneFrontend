import React from 'react';
import "../Styles/Prefooter.css";
import "../Styles/footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {FiRefreshCcw,FiFacebook, FiInstagram, FiTwitter, FiYoutube} from "react-icons/fi";
import {MdSecurity,MdNetworkCell} from "react-icons/md";



const Footer = ({footer}) => {
    const footerData = footer;
  return (
    <>
        <div className='preFooter'>
            <div>
                <span className='icon'><FiRefreshCcw/></span>
                <p><b>Hassle-free Replacement</b> <br />
                    10-day Easy Replacement Policy on mi.com
                </p>
            </div>

            <div>
                <span className='icon'><MdSecurity/></span>
                <p><b>100% Secure Payments</b> <br />
                    We Supports Cards, Wallets, EMI and COD
                </p>
            </div>

            <div>
                <span className='icon'><MdNetworkCell/></span>
                <p><b>Vast Service Network</b> <br />
                    1000 MI Service Centers Across 600 Cities
                </p>
            </div>
        </div>

        <div className='preFooter2'>
            <div>
                <p>LET'S STAY IN TOUCH</p>
                <span>Get Updates On Sales Specials And More</span>
            </div>

            <div>
                <div>
                    <input type="email" placeholder='Enter Email Address' />
                    <button>&gt;</button>
                </div>
                <span>Thanks. You're on our email list for special offers.</span>
            </div>

            <div>
                <p>Follow MI</p>
                <span>We want to hear from you !</span>
            </div>

            <div>
                <i><FiFacebook/></i>
                <i><FiInstagram /></i>
                <i><FiTwitter /></i>
                <i><FiYoutube /></i>
            </div>
        </div>



        <div className='footer'>
            <div>
                <h6>SUPPORT</h6>
                {
                    footerData.support.map((item,index)=>{
                        return <a key={index} href={item.url}>{item.name}</a>
                    })
                }
            </div>

            <div>
                <h6>SHOP AND LEARN</h6>  
                {
                    footerData.shopAndLearn.map((item,index)=>{
                        return <a key={index} href={item.url}>{item.name}</a>
                    })
                }
            </div>

            <div>
                <h6>RETAIL STORE</h6>
                {
                    footerData.retailStore.map((item,index)=>{
                        return <a key={index} href={item.url}>{item.name}</a>
                    })
                }
            </div>

            <div>
                <h6>ABOUT</h6>
                {
                    footerData.aboutUS.map((item,index)=>{
                        return <a key={index} href={item.url}>{item.name}</a>
                    })
                }
            </div>

            <div>
                <h6>CONTACT US</h6>
                {
                    footerData.contactUs.map((item,index)=>{
                        return <a key={index} href={item.url}>{item.name}</a>
                    })
                }
            </div> 

            <div>
                <p>Chat with our Virtual AI Bot <br/>
                (24/7 Live Agent Support)</p>
                <button>CHAT NOW</button>
            </div>
        </div>

        <div className='footer-border'>
            <div>Copyright &copy; 2010 - 2021 Xioami. All Rights Reserved</div>
        </div>
    </>
  )
}

export default Footer