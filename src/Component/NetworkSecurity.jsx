import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import networkImg from '../img/Network.png';
import securityImg from '../img/security.png';
import {HiOutlineArrowCircleRight} from 'react-icons/hi';
import {FaBusinessTime} from 'react-icons/fa';
import {RiWirelessChargingFill} from 'react-icons/ri';
import { BsHddNetworkFill, BsPcDisplayHorizontal} from 'react-icons/bs';
import securitysolveImg from '../img/security-solution.jpg';
import workshopImg from '../img/workshop.jpg';

const NetworkSecurity = () => {
  return (
    <>
    <Navbar/>
<div className='leave-navbar'>
    <div className='about-bg'>

<div className='heading-banner'>
<h1>Network & Security</h1>
</div>

</div>

<div className='bg-img pt-3 pb-3'>
    <div className='container'>

<div className='row align-items-center'>

    <div className='col-md-5'>
<img src={networkImg} className='section-img' alt="img-not-found"/>
    </div>

    <div className='col-md-7'>
<div className='section-content'>
        <h2>Networking Solution</h2>
    <p>Our Managed Network Services enable you to maintain control of your network strategy - while our certified networking experts closely monitor day-to-day network operations, manage maintenance, upgrades, and respond to any network interruptions with a super-quick turnaround time.<br/> <br/> Whatever extent and level of network management you require along with the growth of your business, 
we efficiently deliver the highest levels of proactive support - all while you save unnecessary IT hours and needless capital expenses.</p>
</div>
</div>

</div>



</div>
</div>

<div className='container pt-5 pb-5'>
    <div className='row align-items-center'>
        <div className='col-md-7'>
        <div className='section-content'>
               <h2>We design and provide support services to clients existing ITIL or ISO 17799 standards and SLAE's</h2>
            <p >Overview of Bits and BYTE Managed Network Services:</p>
            <ul>
                <li><HiOutlineArrowCircleRight className="list-icons"/> 24 X 7 monitoring, failure response and resolution process</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> 24 X 7 On Call Support & Help Desk Support</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> Onsite technical support</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> Pre-emptive software and firmware upgrades to Servers, Desktops & Network devices</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> Security maintenance & management</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> Liaison with third party warranty providers & ISP's</li>
                <li><HiOutlineArrowCircleRight className="list-icons"/> Weekly & Monthly reporting against SLA with recommended actions to ensure your key IT infrastructure
                 continues to meet or exceed your chosen SLA requirements.</li>
            </ul>








        </div>
         
        </div>

        <div className='col-lg-5'>
            <img src={securityImg} alt="img-not-found"/>
        </div>
    </div>
</div>

<div className='container pt-1 pb-5'>

    <div className='section-content'>
           <h4 className='pb-4'><b>Monitor and be notified of network failures and threats</b></h4>
           <p>In the current scenario, next generation switching and routing solutions really need 
           to be adopted to accommodate the continuously increasing traffic due to the introduction 
           of new broadband services on access networks. Networks are under too high pressure to accommodate
            this increased traffic driven by bandwidth-intensive 
           services and the growing volume of subscriber-driven content being uploaded to the web.</p>

           <p>With its next-generation technology prowess, bits&BYTE helps to maintain service levels by
            preventing the networks from getting overloaded with traffic. bits&BYTE helps the system to
             quickly adapt to traffic patterns that are in constant flux by routing 
           the traffic through the best available option - thus making the networks truly agile and reconfigurable.</p>
    
    <div className='d-flex flex-wrap justify-content-between align-items-center pt-5 pb-5'>

<div className='service-card'>
<div className='d-flex justify-content-center'>
<FaBusinessTime className='service-icon'/>
</div>
<h5 className='service-text text-center'>Managed Services</h5>
</div>

<div className='service-card'>
<div className='d-flex justify-content-center'>
<BsHddNetworkFill className='service-icon'/>
</div>
<h5 className='service-text text-center'>Network Design & Implementation</h5>
</div>

<div className='service-card'>
<div className='d-flex justify-content-center'>
<RiWirelessChargingFill className='service-icon'/>
</div>
<h5 className='service-text text-center'>Wireless Network</h5>
</div>

<div className='service-card'>
<div className='d-flex justify-content-center'>
<BsPcDisplayHorizontal className='service-icon'/>
</div>
<h5 className='service-text text-center'>Monitoring Services</h5>
</div>

</div>

<p>Netware Network Monitoring Services offers a proactive approach when it comes to monitoring 
        the performance of your computer network. Based on pre-agreed conditions, time, or severity of the event,
        bits&BYTE notifies you when you're close to exceeding your thresholds. This unparalled monitoring and reporting
         capability allows you to plan ahead to prevent unscheduled downtimes and increase availability.
          2 hour outage on an 80 user network costs 160 man-hours of lost time and production - the equivalent
           of a man month! Plan ahead and prevent network downtime with Bits and BYTE Network Monitoring Services.</p>
</div>
 
</div>

<div className='container pt-2 pb-5'>
<div className='row'>
    <div className='col-lg-6'>
<img src={securitysolveImg} className='section-img line-img' alt="img-not-found"/>
</div>
<div className='col-md-6'>
<div className='section-content'>
<h4>Security Solution</h4>

<p>Our managed security services eliminate the ongoing critical task of staying updated
 with the most advanced security technologies. Fueled by our technology and business insights 
 into customers just like you, we customize our managed security services to suit them to your 
 business needs. Our managed security services extend your resources to effectively tackle new security threats 
so you can focus on your core business issues and plan your strategic IT initiatives.</p>

<h4>How safe your Network, Web Server and Corporate Data?</h4>

<p>Vulnerability Assessment/Penetration Testing can assist you in security and 
maintain a secure ISO I7799, PCI-DSS or HIPAA compliant network. A Penetration
 Test (Pentest) is a controlled security review conducted by an independent security 
 professional who attempts to break into a client's computer system. A Penetration
  Tester employs the same tools and techniques as real intruders, but a Penetration
   Tester does not damage the systems or attempt to steal information. A Penetration Tester reports on the 
vulnerabilities that were found and recommend the ways that they can be fixed.</p>
</div>

</div>
</div>

</div>

<div className='bg-black mb-5'>
    <div className='container'>
    <div className='row align-items-center'>
         <div className='col-lg-5'>
    <img src={workshopImg} className='line-img'/>
    </div>
    <div className='col-lg-7'>
    <div className='section-content pt-5'>
    <p style={{color:"white"}}>Working as a precursor for a complete Disaster Recovery Plan, a Network Audit is about taking
     stock of all the hardware and software assets of a company. This identifies your IT assets, where
      they are located, who is using them and their configurations. The Network Audit report is essential for
     network documentation and PCI-DSS, FDCC, SOX, HIPAA and GLBA audit compliance.</p>

     <p style={{color:"white"}}><b>Netware is the leading Managed Network Services (MNS) provider that utilizes network auditing to evaluate network assets and benchmarks.</b></p>
<p style={{color:"white"}}>All of Netware engineers are certified by the best-of-breed IT Vendors for network services and IT infrastructure. We are expertly qualified to assess the hardware and software used by a company for their business operations. Netware provides an in-depth report containing a list of all your IT hardware and software complete with their settings, configurations, location, vendors used and the network set-up.</p>
    <p>Netware network audit service analyzes the performance metrics of your network elements in order to identify utilized network elements, benchmark network performance and assess overall network health. We will also make recommendation where necessary in comparison to your current and future needs.</p>
    </div>
    </div>
    </div>
   
    </div>
</div>

<div className='container pt-2 pb-5'>
    <div className='row'>

        <div className='col-md-6 p-1'>
            <div className='security-card'>
                <h5>External Penetration Testing</h5>
                <p>An External Penetration Test or an Infrastructure IP Penetration Test
                 focuses on server penetration testing, router penetration testing, 
                 operating system installation and maintenance. An infrastructure
                  penetration test is performed against your companies nominated 
                  Public IP's across one or more ISP's. These findings will determine
                 how an attacker would use that information to compromise your IT Security.</p>
            </div>
        </div>

        <div className='col-md-6 p-1'>
            <div className='security-card'>
                <h5>Application Security Assessment</h5>
                <p>We will analyze the critical components of a Web-based portal, 
                e-commerce application, or Web platform. Using manual techniques and hundreds
                 of appropriate tools the assessment pinpoints specific vulnerabilities and 
                 identifies underlying problems.</p>
            </div>
        </div>

        <div className='col-md-6 p-1'>
            <div className='security-card'>
                <h5>On-Site Security Assessment</h5>
                <p>Internal on-site penetration testing gives the business the assurance
                 it needs to conduct safely on the internet and with business partners. 
                 Internal assessments use a similar methodology to an external assessment,
                  however the engagement will occur from within the WAN at each logical
                   management zone, physical segment or simply attached to the DMZ.</p>
            </div>
        </div>

        <div className='col-md-6 p-1'>
            <div className='security-card'>
                <h5>On-Site Security Assessment</h5>
                <p>An attacker will visit a site on a periodic basis; see if there is a
                 new way to break into your system. If they find a way, they will leave 
                 a way to get in at a later date. The end result, you will be attacked 
                 and the ferocity is only limited by the skill of the attacker. Current
                  security providers will traditionally perform an assessment for a given 
                  period of time (two weeks) once a year. The problem is that you are safe
                   for that two week period, and then left unprotected for the remaining 50
                    weeks. Our Proactive Penetration Testing monitors changes and alerts you
                     about them on a daily basis!</p>
            </div>
        </div>

    </div>
</div>




</div>
    


      <Footer/>
    </>
  )
}

export default NetworkSecurity;
