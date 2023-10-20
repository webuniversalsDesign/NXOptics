import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import serverImg from '../img/storagesecurity.png';
import { AiFillStar } from 'react-icons/ai';
import { IoMdAnalytics } from 'react-icons/io';
import { PiVirtualRealityFill } from 'react-icons/pi';

import {BsDatabaseFillGear, BsDatabaseFillLock} from 'react-icons/bs'

import workshopImg from '../img/storageServer.jpg';


const ServerStorage = () => {
    return (
        <>
            <Navbar />
            <div className='leave-navbar'>

                <div className='about-bg'>
                    <div className='heading-banner'>
                        <h1>Server And Storage</h1>
                        <p>When you can measure, you can manage</p>
                    </div>
                </div>


                <div className='container pt-lg-4 pt-1 mt-lg-4 mt-1  pb-1'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src={serverImg} className='section-img' alt='img-not-found' />
                        </div>

                        <div className='col-md-7'>
                            <div className='section-content'>

                                <h2>Server Platform Solutions</h2>

                                <p>Server consolidation refers to the reduction in quantities of the physical
                                    locations where various servers have been installed, the total number of servers,
                                    the number of management touch points or the software licenses. Often companies are
                                    not able to consolidate their numerous servers, placed in different physical locations,
                                    on their own and they either need assistance or prefer outsourcing for these server
                                    consolidation services. This is where our professional expertise comes in handy.</p>

                                <p>We have relevant expertise and experience - and provide valuable server
                                    consolidation services to various industries around the world. We understand
                                    the varying complexities and needs of companies within different industries.
                                    Therefore, our services are molded according to the specific needs and requirements
                                    of the company. Due to the level of experience our team possesses, we design and
                                    implement efficient server consolidations for companies that help them in improving operations
                                    of business processes and get you the following advantages:</p>

                                <ul>
                                    <div className='row'>

                                        <div className='col-lg-4 col-6 px-2'>
                                            <li><AiFillStar /> Reduced IT costs</li>
                                            <li><AiFillStar /> Backup & Recovery</li>
                                        </div>

                                        <div className='col-lg-4 col-6 px-2'>
                                            <li><AiFillStar /> Single Point of Control</li>
                                            <li><AiFillStar /> Increase Server Utilization</li>

                                        </div>

                                        <div className='col-lg-4 col-12 px-2'>
                                            <li><AiFillStar /> Speed up the provisioning process by 50% - 70%</li>
                                        </div>
                                    </div>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-black'>
                    <div className='container'>
                        <div className='row pt-3 pb-2 pb-lg-4'>
                            <div className='col-lg-5'>
                                <img src={workshopImg} className='line-img' alt='img-not-found'/>
                            </div>
                            <div className='col-lg-7'>
                                <div className='section-content pt-5'>
<h5 style={{ color: "white" }} className='pt-2'>Storage Solutions</h5>

                                    <p style={{ color: "white" }}>Our solutions enable customers meet all of their Storage support needs. Our Storage solutions are designed to
                                     optimize performance, remove complexity, and balance growth - all of these are key facets, 
                                     factoring in the data explosion we've observed over the past few years. Why spend time managing
                                      data when your priorities are organizational growth and customer support? Let the best of breed 
                                      Storage experts at Netware resolve all issues often associated with tedious,
                                        time taking data management, so you can concentrate on core business initiatives.</p>

<h5 style={{ color: "white" }} className='pt-2'>Benefites Of Our Services</h5>
                                        <div className='row flex-wrap pt-lg-1 pb-lg-1 pt-2 pb-4'>

<div className='col-md-6 col-12 pt-2 pb-2'>
<div className='service-info d-flex align-items-center flex-wrap'>
<PiVirtualRealityFill style={{ color: "white",fontSize:"20px",marginTop:"4px" }} /> <p>Virtual Servers</p>
</div>
</div>


<div className='col-md-6 col-12 pt-2 pb-2'>
    <div className='service-info d-flex align-items-center flex-wrap'>
<BsDatabaseFillGear style={{ color: "white",fontSize:"20px",marginTop:"4px" }} /> <p>Consolidated remote and backup access</p>
</div>
</div>


<div className='col-md-6 col-12 pt-2 pb-2'>
   <div className='service-info d-flex align-items-center flex-wrap'>
<BsDatabaseFillLock style={{ color: "white",fontSize:"20px",marginTop:"4px" }} /> <p>Effective security and storage of data</p>
</div> 
</div>


<div className='col-md-6 col-12 pt-2 pb-2'>
    <div className='service-info d-flex align-items-center flex-wrap'>
<IoMdAnalytics style={{ color: "white",fontSize:"20px",marginTop:"4px" }} /> <p>Real time analytics</p>
</div>
</div>

                                        </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

<div className='bg-blue'>
     <div className='container pt-5 pb-5'>
                    <h4 className='text-center'>Netware solutions provides a huge array of server platform solutions for business requirements.</h4>
                </div>
</div>
               
            </div>

            <Footer />

        </>
    )
}

export default ServerStorage;

