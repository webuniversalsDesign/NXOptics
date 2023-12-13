import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40G_eSR4/eSR4_1.jpg'

import PinDefinitionImg from '../../img/products/400G-QSPF/QSFP_DD_EDR4-PinDefinition.jpg';
import PinDefinition2Img from '../../img/products/400G-QSPF/QSFP_DD_EDR4-PinDefinition2.jpg';
import ActiveFiberPortImg from '../../img/products/400G-QSPF/QSFP_DD_EDR4-ActiveFiberPort.jpg';
import RecommendedImg from '../../img/products/400G-QSPF/QSFP_DD_EDR4-Recommended-HostBoard.jpg';
import MechinicalDiagramImg from '../../img/products/400G-QSPF/QSFP_DD_EDR4-MechinicalDiagram.jpg';
import CompatibilityImg from '../../img/products/400G-QSPF/3MCD01-Compatibility.jpg';
import ProductionProccessImg from '../../img/products/400G-QSPF/3MCD01-ProductionProccess.jpg';
import PackagingImg from '../../img/products/400G-QSPF/3MCD01-Packaging.jpg';

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const QSFP_DD_EDR4 = () => {

  let productName = "400G-DR4 2km NXOQSFP-DD Transceiver  ";
  let PartNumber = "NXQD3140X-3MCD2  ";

  return (

    <>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>
</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}}/> Enquire Now</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}



</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}

</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>


<div className='container-fluid'>
  <div className='row'>
    <div className='col-12 pb-3'>
      <h5>Features</h5>

      <p className='listFeture'> Compliant with IEEE802.3bs standard: </p>
<p className='listFeture'> 400GAUI-8 electrical interface </p>
<p className='listFeture'> Compliant with IEEE 802.3cu standards: </p>
<p className='listFeture'> 4x 100GBASE-FR1 optical interface </p>
<p className='listFeture'> Compliant with NXOQSFP-DD MSA HW Rev 5. Type 2 housing with MPO-12 connector </p>
<p className='listFeture'> Compliant with NXOQSFP-DD CMIS Rev 4.0 </p>
<p className='listFeture'> Maximum power consumption 10W </p>
<p className='listFeture'> Case operating temperature 0°C to 70°C </p>
<p className='listFeture'> Two wire serial Interface with digital diagnostic monitoring </p>
 <p className='listFeture'> Complies with EU Directive 2011/65/EU
(RoHS compliant) </p>
<p className='listFeture'> Class 1 Laser </p>

      <p className='listFeture'> NXOQSFP-DD MSA compliant </p>

    </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 


    <li className="nav-item">
      <a className="nav-link  active" data-bs-toggle="pill" href="#menu2">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Operating Environments </a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">


    <div id="menu2" className="container tab-pane active"><br/>
    <div className="container mt-3">
    <h2>Absolute Maximum Ratings</h2>
<br/>
<br/>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Max</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Storage Temperature</td>
          <td>TS</td>
          <td>-04</td>
          <td>85</td>
          <td>C</td>
          <td></td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>-0.5</td>
          <td>3.6</td>
          <td>V</td>
          <td></td>

        </tr>

        <tr>
          <td>Relative Humidity (non-condensation)</td>
          <td>RH</td>
          <td>5</td>
          <td>95</td>
          <td>%</td>
          <td></td>

        </tr>
        <tr>
          <td>Control Input Voltage</td>
          <td>VI</td>
          <td>-0.3</td>
          <td>VCC+0.5</td>
          <td>V</td>
          <td></td>

        </tr>

    
      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Recommended Operating Conditions</h2>
  <br/>
  <br/>
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Typ</th>
          <th>Max</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Operating Case Temperature</td>
          <td>TOPR</td>
          <td>0</td>
          <td>-</td>
          <td>70</td>
          <td>C</td>
          <td></td>

        </tr>
  
        <tr>
          <td>Power Supply Voltage</td>
          <td>Vcc</td>
          <td>3.135</td>
          <td>3.3</td>
          <td>3.465</td>
          <td>V</td>
          <td></td>

        </tr>

        <tr>
          <td>Instantaneous peak current at hot plug</td>
          <td>Icc_IP</td>
          <td>-</td>
          <td>-</td>
          <td>4000</td>
          <td>mA</td>
          <td></td>

        </tr>

        <tr>
          <td>Sustained peak current at hot plug</td>
          <td>Icc_SP</td>
          <td>-</td>
          <td>-</td>
          <td>3300</td>
          <td>mA</td>
          <td></td>

        </tr>

        <tr>
          <td>Maximum Power Dissipation</td>
          <td>PD</td>
          <td>-</td>
          <td>-</td>
          <td>10</td>
          <td>W</td>
          <td></td>

        </tr>

        <tr>
          <td>Maximum	Power	Dissipation,	Low  Power Mode</td>
          <td>PDLP</td>
          <td>-</td>
          <td>-</td>
          <td>1.5</td>
          <td>W</td>
          <td></td>

        </tr>

        <tr>
          <td>Signalling Rate per Lane</td>
          <td>SRL</td>
          <td>-</td>
          <td>53.125</td>
          <td>-</td>
          <td>GBd</td>
          <td></td>
        </tr>

        <tr>
          <td>Two Wire Serial Interface Clock Rate</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>400</td>
          <td>kHz</td>
          <td></td>

        </tr>

        <tr>
          <td>Power Supply Noise Tolerance (10Hz	-  10MHz)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>66</td>
          <td>mV</td>
          <td></td>

        </tr>

        <tr>
          <td>Rx Differential Data Output Load</td>
          <td>-</td>
          <td>-</td>
          <td>100</td>
          <td>-</td>
          <td>Ohm</td>
          <td></td>

        </tr>

        <tr>
          <td>Operating Distance</td>
          <td>-</td>
          <td>2</td>
          <td>-</td>
          <td>2000</td>
          <td>m</td>
          <td></td>

        </tr>
      
      </tbody>
    </table>
  </div>
</div>
 </div>
 

  </div>
  
</div>


{/* Optical Interface section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Definitions</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDefinitionImg} className='img-fluid' alt="memorymapImg"/>
</div>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDefinition2Img} className='img-fluid' alt="memorymapImg"/>
</div>
</div>
<br/><br/>
{/* Optical Interface section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Active fiber ports in MPO12 connector on module side</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ActiveFiberPortImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}



{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended NXOQSFP-DD Host Board Schematic</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={RecommendedImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Diagram</h1>


<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={MechinicalDiagramImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Compatibility Test</h1>


<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={CompatibilityImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Product Production Process</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ProductionProccessImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Packaging</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PackagingImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default QSFP_DD_EDR4;