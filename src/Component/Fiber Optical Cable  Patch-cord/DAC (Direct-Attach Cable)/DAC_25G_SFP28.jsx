import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Fiber Optical Cable/DAC/25G_SFPS.jpg'

// import TransceiverBlock from '../../img/products/10SFP+/Transciever.jpg';
import pinassisment from '../../../img/products/Fiber Optical Cable/DAC/pinAssisment.jpg';
import machdimenssion from '../../../img/products/Fiber Optical Cable/DAC/25G_SFPS_mechDimenssion.png';


import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import { TiTickOutline } from 'react-icons/ti';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const DAC_25G_SFP28 = () => {

    let PartNumber = "NXODAC-25G-SPSP-Pxx-xx ";
    let productName = "25G SFP28 Direct Attach Cable (DAC) Hot Pluggable, Twinax Copper Cables, Passive 0.5~5M";

    const [name, setName] = useState("");
    const [mobNumber, setmobNumber] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userMessage, setuserMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s6yscqg', 'template_nnkudli', form.current, 'ctLMl35oWO-hYo21q')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent :)");
                document.getElementById('successMsg').style.top = "0px";

                setName("");
                setmobNumber("");
                setuserEmail("");
                setuserMessage("");

            }, (error) => {
                console.log(error.text);
            });
    };


    const hidePop = () => {
        document.getElementById("successMsg").style.top = "-100%";
    }

    return (
        <>
            <Navbar />

            <div className='product-struct'>
                <div className='productImgLightBox'>

                    <div className='LightBox'>

                        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                            <img src={productImg1} className='img-main' alt="product-40GLoobBack" />

                        </div>

                        <p className='text-center' style={{ color: "gray", fontWeight: "200", fontSize: "15px", marginBottom: "0px" }}>Click to open expanded view</p>

                        <div className="d-flex justify-content-center">
                            <Gallery>


                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                            </Gallery>
                        </div>


                        <div className="d-flex justify-content-center flex-wrap cart-btn">
                            <Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{ marginBottom: "5px" }} /> Request a Quote</Link>
                        </div>

                    </div>

                </div>

                <div className='product-content'>
                    <h4>
                        {productName}
                    </h4>

                    <div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
                        <p>Part Number</p>

                        <p className='sell-text'>{PartNumber}</p>
                    </div>

                    <div className='sub-content d-flex justify-content-start'>
                        <p style={{ fontWeight: "500" }}><LiaWarehouseSolid />  In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
                        <p style={{ fontWeight: "500" }}><MdSecurity /> Test Support </p>
                    </div>

                    <h5>Features</h5>

<p className='listFeture'>Compliant with IEEE802.3by 25GBASE-CR</p>
<p className='listFeture'>Compliant with SFF-8402 SFP28 and SFF-8432 MSA</p>
<p className='listFeture'>Support 1G~25G Ethernet</p>
<p className='listFeture'>Support 1G/2G/4G/8G/16G Fiber Channel</p>
<p className='listFeture'>Support InfiniBand SDR, DDR, QDR, FDR, EDR</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>2-wire interface for management</p>
<p className='listFeture'>Single +3.3V power supply</p>
<p className='listFeture'>Link distance up to 5m</p>
<p className='listFeture'>Enhanced EMI / EMC performance</p>
<p className='listFeture'>RoHS Compliant</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'> 1000BASE ~  25GBASE Ethernet</p>
                      <p className='listFeture'> 1G/2G/4G/8G/16G Fiber Channel</p>
                       <p className='listFeture'> InfiniBand SDR, DDR, QDR, FDR-10, FDR, EDR</p>
                       <p className='listFeture'>Data Center & Storage</p>
                       <p className='listFeture'> Datacom / Telecom Switch & Router</p>


                </div>

            </div>

            <div className='container pt-lg-5  pb-lg-5'>
                <div className='resp-overflow'>
                    <div className='d-flex justify-content-center'>
                        <ul className="navs nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
                            </li>



                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu2">Product Specifications</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu3">Recommended Operating Conditions</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} SFP28 Copper Twinax Direct Attach Cables (DAC) are cost- effective and energy- saving I/O solutions for 25GBASE Ethernet applications. The SFP28 DAC are suitable for very short distances within racks and across adjacent racks. The Passive
DAC has no signal amplification and offer cable lengths reach 0.5m to 5m.


                            </p>
                        </div>
                    </div>

                    <div id="menu1" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Absolute Maximum Ratings</h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th>Symbol</th>
                                            <th>Min.</th>
                                            <th>Max.</th>
                                            <th>Unit</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Storage Temperature</td>
                                            <td>TST</td>
                                            <td>-40</td>
                                            <td>+85</td>
                                            <td>°C</td>
                                        </tr>

                                        <tr>
                                            <td>Storage Relative Humidity</td>
                                            <td>RH</td>
                                            <td>5</td>
                                            <td>95</td>
                                            <td>%</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>-0.5</td>
                                            <td>+3.6</td>
                                            <td>V</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Product Specifications</h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th>Symbol</th>
                                            <th>Min.</th>
                                            <th>Typ.</th>
                                            <th>Max.</th>
                                            <th>Unit</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Protocols Supported</td>
                                            <td>Ethernet 1Gb ~ 25Gb <hr/> Fiber Channel 1G/2G/4G/8G/16GFC <hr/> InfiniBand SDR, DDR, QDR, FDR, EDR</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>



                                        <tr>
                                            <td>Differential Insertion Loss @12.89GHz</td>
                                            <td>SDD21(Max.)</td>
                                            <td>30AWG 1m <hr/> 30/28AWG 3m <hr/> 26AWG 3m <hr/> 26AWG 5m</td>
                                            <td>10.5 <hr/> 21.5 <hr/> 16.5 <hr/> 22.0</td>
                                            <td></td>
                                            <td>dB</td>
                                        </tr>

                                        <tr>
                                            <td>Impedance</td>
                                            <td>Zin</td>
                                            <td>85</td>
                                            <td>100</td>
                                            <td>115</td>
                                            <td>Ohm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Recommended Operating Conditions</h2>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min.</th>
          <th>Typ.</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Case Operating Temperature</td>
          <td>TOP</td>
          <td>-20</td>
          <td>-</td>
          <td>+75</td>
          <td>°C</td>
        </tr>


        <tr>
          <td>Supply Voltage</td>
          <td>VCC</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Current, per SFP28</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>30</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Power Consumption, per SFP28</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>0.1</td>
          <td>W</td>
        </tr>

        <tr>
          <td>Operating Date Rate</td>
          <td>DR</td>
          <td>1.0625</td>
          <td>25.78</td>
          <td></td>
          <td>Gb/s</td>
        </tr>

        <tr>
          <td>Minimum Cable Bending Radius</td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td>mm</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
 </div>
                </div>
            </div>

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={TransceiverBlock} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div> */}

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Pin Assignment</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>



            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Mechanical Dimensions</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={machdimenssion} className='sectionImg2_2' alt="Transceiver Block Diagram" />
                </div>

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Enquire Now</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <form ref={form} onSubmit={sendEmail}>

                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <label>Your Product Part Number</label>
                                        <input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly />
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <label>Your Product Name</label>
                                        <input type='text' className='form-control mt-2 mb-2' value={productName} name="productname" readOnly />

                                    </div>
                                </div>

                                <input type='text' className='form-control mt-2 mb-2' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' name="user_name" required />
                                <div className='row'>
                                    <div className='col-6'>
                                        <input type='number' className='form-control mt-2 mb-2' value={mobNumber} onChange={(e) => setmobNumber(e.target.value)} placeholder='Enter Your Mobile Number' name="mobileno" required />
                                    </div>
                                    <div className='col-6'>
                                        <input type='email' className='form-control mt-2 mb-2' value={userEmail} onChange={(e) => setuserEmail(e.target.value)} placeholder='Enter Your Email' name="email" required />

                                    </div>
                                </div>

                                <textarea rows="2" cols='2' className='form-control' value={userMessage} onChange={(e) => setuserMessage(e.target.value)} placeholder='Enter Your Message' name='message' required></textarea>
                                <input type='submit' className='btn btn-danger mt-2' value="Send" style={{ width: "200px" }} />
                            </form>
                        </div>



                    </div>
                </div>

                <div className="message-sent" id="successMsg">

                    <div className="card-message">

                        <div className="d-flex justify-content-center">
                            <TiTickOutline className="messagetick-mark" />
                        </div>

                        <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services.
                            Your inquiry is valuable to us, and our team shall get back to you soon.</p>

                        <div className="d-flex justify-content-center pt-5 pb-1">
                            <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default DAC_25G_SFP28;