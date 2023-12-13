import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';
import logoIcon from './img/logo/NXO LOGO.png'; 


import { IoMdArrowDropright } from 'react-icons/io';


// import AutocompleteSearchBox from './AutocompleteSearchBox';


const Navbar = () => {

    const OpenCloseMenu = () => {
        document.getElementById('mobile_Setting').classList.toggle("openmenu");

    }



    return (
        <>
            {/* <div className='top-header'>
                <div className='header-start'>
                    <p>Fast shipping to India</p>
                </div>

                <div className='header-end'>
                    <a href='tel:+918041622171'><MdOutlineSupportAgent style={{ fontSize: "15px", marginRight: "5px", marginBottom: "5px" }} />8041622171</a>
                </div>

            </div> */}

            <nav className='nav-strap'>
                <div className='navlogo pt-1 pb-1'>
                    <Link to="/" className='linkdecor-disable'>
                        {/* <img src={logoIcon} alt='img-not-found' /> */}
                        <h3>Nx<span style={{color:"rgb(55 93 147)"}}>Optics </span></h3>
                    </Link>
                </div>

                <div className='nav-item-links'>
                    <ul className='link-item'>
                        <li className='item-dropdown-hov'><Link to="/" className='nolink-dec'>Home</Link></li>
                        <li className='item-dropdown-hov dropdown'> Products
                            <ul className='drop-item drop-hov'>
                                <li className='drop-link'><IoMdArrowDropright className="arrow-icon" /> Transceiver
                                    <ul className='hover-inner-links'>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1.25G SFP
                                            <ul className='lastdrop'>
                                                <Link to="/SFP_1_25G_DWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G SFP DWDM</li></Link>
                                                <Link to="/SFP_CWDM_1_25G_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G SFP CWDM</li></Link>
                                                <Link to="/Products_SFP_1_25G_BIDI" className='nolink-dec'><li className='lastdrop-items'> 1.25G SFP BIDI</li></Link>
                                                <Link to="/SFP_Dual_1_25_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G SFP DUAL</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 2.5G SFP
                                            <ul className='lastdrop'>
                                                <Link to="/Products_SFP_CWDM" className='nolink-dec'><li className='lastdrop-items'> 2.5G SFP CWDM</li></Link>
                                                <Link to="/SFP_BIDI_Products" className='nolink-dec'><li className='lastdrop-items'> 2.5G SFP BIDI</li></Link>
                                                <Link to="/Products_2point5_Dual" className='nolink-dec'><li className='lastdrop-items'> 2.5G SFP DUAL</li></Link>
                                                <Link to="/SFP_DWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 2.5G SFP DWDM</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 10G SFP+
                                            <ul className='lastdrop'>
                                                <Link to="/Tunable_10G_SFP_DWDM" className='nolink-dec'><li className='lastdrop-items'>  SFP+ DWDM Tunable</li></Link>
                                                <Link to="/Products_DWDM_10G_SFP" className='nolink-dec'><li className='lastdrop-items'>  10G SFP+ DWDM</li></Link>
                                                {/* <Link to="/Products_CWDM_10G_SFP" className='nolink-dec'><li className='lastdrop-items'>  2.5G SFP DUAL</li></Link> */}
                                                <Link to="/SFP_PLUS_BIDI_Products" className='nolink-dec'><li className='lastdrop-items'>  10G SFP+ BIDI</li></Link>
                                                <Link to="/Products_Dual_10G_SFP " className='nolink-dec'><li className='lastdrop-items'>  10G SFP+ DUAL</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 10G XFP
                                            <ul className='lastdrop'>
                                                <Link to="/XFP_DWDM_Tunable" className='nolink-dec'><li className='lastdrop-items'> 10G XFP DWDM Tunable</li></Link>
                                                <Link to="/XFP_DWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 10G XFP DWDM</li></Link>
                                                <Link to="/XFP_CWDM_Products" className='nolink-dec'><li className='lastdrop-items'>10G XFP CWDM</li></Link>
                                                <Link to="/XFP_BIDI_Products" className='nolink-dec'><li className='lastdrop-items'>10G XFP BIDI</li></Link>
                                                <Link to="/XFP_DUAL_Products" className='nolink-dec'><li className='lastdrop-items'>10G XFP DUAL</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 25G SFP28
                                            <ul className='lastdrop'>
                                                <Link to="/SFP28_SR_Products" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 SR</li></Link>
                                                <Link to="/SFP28_BIDI_Products" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 BIDI</li></Link>
                                                <Link to="/SFP28_25G_CWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 CWDM</li></Link>
                                                <Link to="/SFP28_LR_25G_Projects" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 LR</li></Link>
                                                <Link to="/SFP28_25G__LWDM_products" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 LWDM</li></Link>
                                                <Link to="/SFP28_25G_DWDM" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 DWDM</li></Link>
                                                <Link to="/SFP28_25G_SW" className='nolink-dec'><li className='lastdrop-items'> 32GFC SFP28 SW</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1.25G CSFP
                                            <ul className='lastdrop'>
                                                <Link to="/Dual_Bidi_LC_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G CSFP Dual Bidi LC</li></Link>
                                            </ul>
                                        </li>

                                        {/* <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1.25G GBIC
                                            <ul className='lastdrop'>
                                                <Link to="/SFP_1_25G_DWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G GBIC SC</li></Link>
                                            </ul>
                                        </li> */}

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 40G QSFP+
                                            <ul className='lastdrop'>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'> QSFP+ 40G-SR4</li></Link>
                                                <Link to="/Product_40G_eSR4" className='nolink-dec'><li className='lastdrop-items'> QSFP+ 40G-eSR4</li></Link>
                                                <Link to="/Product_40G_SRBD" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-SRBD</li></Link>
                                                <Link to="/IR4_40G" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-IR4</li></Link>
                                                <Link to="/Products_40G_LR4" className='nolink-dec'><li className='lastdrop-items'> QSFP+ 40G-LR4</li></Link>
                                                <Link to="/Product_40G_ER4" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-ER4</li></Link>
                                                <Link to="/SWDM4_40G" className='nolink-dec'><li className='lastdrop-items'> QSFP+ 40G-SWDM4</li></Link>
                                                <Link to="/Product_40G_ZR4" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-ZR4</li></Link>
                                                <Link to="/PSM4_IR_40G" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-PSM4-IR</li></Link>
                                                <Link to="/PSM4_LR_40G" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G-PSM4-LR</li></Link>
                                            </ul>

                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 100G CFP CFP2 CFP4
                                            <ul className='lastdrop'>
                                                <Link to="/Product_CFP1" className='nolink-dec'><li className='lastdrop-items'>100G CFP</li></Link>
                                                <Link to="/CFP2_Products_100G" className='nolink-dec'><li className='lastdrop-items'>100G CFP2</li></Link>
                                                <Link to="/Product_CFP4" className='nolink-dec'><li className='lastdrop-items'>100G CFP4</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 100G QSFP28
                                            <ul className='lastdrop'>

                                                <Link to="/Product_QSFP28_100G_SR4" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-SR4</li></Link>
                                                <Link to="/Product_QSFP28_100G_SRBD" className='nolink-dec'><li className='lastdrop-items'> QSFP28-100G-SRBD</li></Link>
                                                <Link to="/ESR4_100G" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-eSR4</li></Link>
                                                <Link to="/PSM4_Ethernet_100G" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-PSM4</li></Link>
                                                {/* <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-DR1/FR1/LR1</li></Link> */}
                                                <Link to="/LR4_100G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-LR4</li></Link>
                                                <Link to="/ER4_100G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-ER4</li></Link>
                                                <Link to="/ZR4_100G" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-ZR4</li></Link>
                                                <Link to="/CWDM4_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-CWDM4</li></Link>
                                                <Link to="/BIDI_4WDM_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-BIDI-4WDM-20</li></Link>
                                                <Link to="/BIDI_10_to_40_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-BIDI-10/20/30/40</li></Link>
                                                <Link to="/QSPF28_adaptor" className='nolink-dec'><li className='lastdrop-items'>QSFP28 to SFP28 Adapter</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 200G QSFP56 
                                            <ul className='lastdrop'>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>200G QSFP-DD SR8</li></Link>
                                                <Link to="/G200_QSFP56_SR4" className='nolink-dec'><li className='lastdrop-items'>200G QSFP56 SR4</li></Link>
                                                <Link to="/G200_QSFP_DD_ER4" className='nolink-dec'><li className='lastdrop-items'>200G QSFP-DD ER4 </li></Link>
                                                <Link to="/G200QSFP_DD_LR4" className='nolink-dec'><li className='lastdrop-items'>200G QSFP-DD LR4</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 400G QSFP
                                            <ul className='lastdrop'>
                                                <Link to="/400G-QSPF/QSFP_SR8/" className='nolink-dec'><li className='lastdrop-items'>400G QSFP SR8</li></Link>
                                                <Link to="/400G-QSPF/QSFP-DD-DR4/" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD DR4</li></Link>
                                                <Link to="/400G-QSPF/QSFP-DD-FR4/" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD FR4</li></Link>
                                                <Link to="/400G-QSPF/QSFP-DD-LR4/" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD LR4</li></Link>
                                                <Link to="/400G-QSPF/QSFP-DD-EDR4/" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD EDR4</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> RJ45 Copper Series
                                            <ul className='lastdrop'>
                                                <Link to="/SFP_100Tx_Products" className='nolink-dec'><li className='lastdrop-items'>SFP-100TX</li></Link>
                                                <Link to="/SFP_1000T_Products" className='nolink-dec'><li className='lastdrop-items'>SFP-1000T</li></Link>
                                                <Link to="/Projects_SFP_10G" className='nolink-dec'><li className='lastdrop-items'>SFP+ 10G-T</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> Loop Back Series
                                            <ul className='lastdrop'>
                                                <Link to="/10G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>SFP+ 10G Loopback</li></Link>
                                                <Link to="/25G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>SFP28 25G Loopback</li></Link>
                                                <Link to="/100G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>QSFP28 100G Loopback</li></Link>
                                                <Link to="/200G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>QSFP56 200G Loopback</li></Link>
                                                <Link to="/400G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>QSFP-DD 400G Loopback</li></Link>
                                                <Link to="/40G-Loopback-Product" className='nolink-dec'><li className='lastdrop-items'>QSFP+ 40G Loopback</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> PON SFP SFP+
                                            <ul className='lastdrop'>
                                                <Link to="/Products_10G_XG_XGS_PON" className='nolink-dec'><li className='lastdrop-items'>10G XG/XGS PON</li></Link>
                                                <Link to="/EPON_Products" className='nolink-dec'><li className='lastdrop-items'>10G EPON</li></Link>
                                                <Link to="/GPON_SFP_Products" className='nolink-dec'><li className='lastdrop-items'>2.5G GPON SFP</li></Link>
                                                <Link to="/EPON_SFP_Products" className='nolink-dec'><li className='lastdrop-items'>1.25G EPON SFP</li></Link>
                                                <Link to="/SFF_2X5_Products" className='nolink-dec'><li className='lastdrop-items'>125M/1.25G 2X5 SFF</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 4G SFP
                                            <ul className='lastdrop'>
                                                <Link to="/Products_4G_SFP" className='nolink-dec'><li className='lastdrop-items'>4.25G SFP DUAL</li></Link>
                                            </ul>

                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 6G SFP+
                                            <ul className='lastdrop'>
                                                <Link to="/Products_6G_SFP" className='nolink-dec'><li className='lastdrop-items'>6G SFP+ DUAL</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 8GFC SFP+
                                            <ul className='lastdrop'>
                                                <Link to="/SFP_PLUS_DUAL_Products" className='nolink-dec'><li className='lastdrop-items'>8GFC SFP+ DUAL</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 10G Xenpak
                                            <ul className='lastdrop'>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>10G XENPAK DUAL</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>10G XENPAK CWDM</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>10G XENPAK DWDM</li></Link>
                                            </ul></li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 16GFC SFP+( 14.025G )
                                            <ul className='lastdrop'>
                                                <Link to="/Product_16GFC_SFP" className='nolink-dec'><li className='lastdrop-items'>16GFC SFP+ SW</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 2X5 SFF
                                            <ul className='lastdrop'>
                                                <Link to="/SFF_2X5_Products" className='nolink-dec'><li className='lastdrop-items'>125M/1.25G 2X5 SFF</li></Link>
                                            </ul>
                                        </li>
                                        {/* <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1X9
                                            <ul className='lastdrop'>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>1.25G 1X9 BIDI</li></Link>
                                                <Link to="/Dual_1X9_Products" className='nolink-dec'><li className='lastdrop-items'>1.25G 1X9 DUAL</li></Link>
                                                <Link to="/CWDM_1X9_Products" className='nolink-dec'><li className='lastdrop-items'>125/155M 1X9 CWDM</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>125/155M 1X9 BIDI</li></Link>
                                                <Link to="/Ultra_row_1X9_DC" className='nolink-dec'><li className='lastdrop-items'>Ultra-Low Data-Rate 1X9 DC~10Mbps </li></Link>
                                                <Link to="/Dual_125_155M_1X9" className='nolink-dec'><li className='lastdrop-items'>Dual_125_155M_1X9</li></Link>

                                            </ul>
                                        </li> */}
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 125M 155M SFP
                                            <ul className='lastdrop'>
                                                <Link to="/DWDM_SFP_115M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP DWDM</li></Link>
                                                <Link to="/CWDW_SFP_155M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP CWDM</li></Link>
                                                <Link to="/BIDI_155M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP BIDI</li></Link>
                                                <Link to="/Products_Dual_SFP_155M" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP DUAL</li></Link>
                                                {/* <Link to="/Products_622M_SFP_BIDI" className='nolink-dec'><li className='lastdrop-items'>622M SFP BIDI</li></Link>
                                                <Link to="/Products_622M_SFP_Dual" className='nolink-dec'><li className='lastdrop-items'>622M SFP DUAL</li></Link> */}

                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 622M SF
                                            <ul className='lastdrop'>
                                                <Link to="/Products_622M_SFP_BIDI" className='nolink-dec'><li className='lastdrop-items'>622M SFP BIDI</li></Link>
                                                <Link to="/Products_622M_SFP_Dual" className='nolink-dec'><li className='lastdrop-items'>622M SFP DUAL</li></Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className='drop-link2'><IoMdArrowDropright className="arrow-icon" /> Optical Cables / Patch Cords
                                    <ul className='hover-inner-links2'>
                                        <li className='inner-linkers1'><IoMdArrowDropright className="arrow-icon" /> AOC (Active Optical Cable)
                                            <ul className='drop-linkers-items1'>
                                                <Link to="/AOC_SPSP" className='nolink-dec'><li className='lastdrop-items'> 10G SFP+ AOC</li></Link>
                                                <Link to="/AOC_SFP28_25G" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 AOC</li></Link>
                                                <Link to="/Products_40G_QSFP" className='nolink-dec'><li className='lastdrop-items'> 40G QSFP+ AOC</li></Link>
                                                <Link to="/Products_100G_QSFP28" className='nolink-dec'><li className='lastdrop-items'>100G QSFP28 AOC</li></Link>
                                                <Link to="/Products_200G_QSFP56" className='nolink-dec'><li className='lastdrop-items'> 200G QSFP56 AOC</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers2'><IoMdArrowDropright className="arrow-icon" /> DAC (Direct-Attach Cable)
                                            <ul className='drop-linkers-items2'>
                                                <Link to="/DAC_10G_SFPS" className='nolink-dec'><li className='lastdrop-items'> 10G SFP+ DAC</li></Link>
                                                <Link to="/DAC_25G_SFP28" className='nolink-dec'><li className='lastdrop-items'> 25G SFP28 DAC</li></Link>
                                                <Link to="/DAC_40G_QSFP_Products" className='nolink-dec'><li className='lastdrop-items'> 40G QSFP+ DAC</li></Link>
                                                <Link to="/DAC_100G_QSFP_Products" className='nolink-dec'><li className='lastdrop-items'>100G QSFP28 DAC</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers3'><IoMdArrowDropright className="arrow-icon" /> Indoor Patch-cord Cable
                                            <ul className='drop-linkers-items3'>
                                                <Link to="/Armored_Breakout_Cable" className='nolink-dec'><li className='lastdrop-items'> Armored Breakout Cable</li></Link>
                                                <Link to="/Breakout_Cable" className='nolink-dec'><li className='lastdrop-items'> Breakout Cable</li></Link>
                                                <Link to="/Mini_Distribution_Cable" className='nolink-dec'><li className='lastdrop-items'> Mini Distribution Cable</li></Link>
                                                <Link to="/General_Patch_Cord" className='nolink-dec'><li className='lastdrop-items'>General Patch-cord</li></Link>
                                                <Link to="/Energy_Chain_Cable" className='nolink-dec'><li className='lastdrop-items'>Energy Chain Cable</li></Link>
                                                <Link to="/High_Strength_And_Suppleness" className='nolink-dec'><li className='lastdrop-items'>High Strength and <br />Suppleness Patch-cord</li></Link>
                                            </ul>
                                        </li>

                                        <li className='inner-linkers4'><IoMdArrowDropright className="arrow-icon" /> Outdoor Patch-cord Cable
                                            <ul className='drop-linkers-items4'>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'> Armored Patch-cord / Armored Breakout Cable</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'> FTTA Waterproof Cable for Mobile Base Station</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'> Military Tactical Waterproof Cable</li></Link>
                                            </ul>
                                        </li>


                                        <li className='inner-linkers5'><IoMdArrowDropright className="arrow-icon" /> MPO Patch-cord Cassette

                                            <ul className='drop-linkers-items5'>
                                                <Link to="/MPO_PatchCord" className='nolink-dec'><li className='lastdrop-items'> MPO PatchCord</li></Link>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className='drop-link5 item-drop'><IoMdArrowDropright className="arrow-icon" /> Switches
                                  <ul className='sub-dropdown'>
<li className='sub-drops'><IoMdArrowDropright className="arrow-icon" /> Telecom Switches
<ul className='inner-item'>
    <li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> L2 Eathernet Switches
    <ul className='inner-menu-sub-items'>

    <li className='sub-item-list'><IoMdArrowDropright className="arrow-icon" /> 10G Ethernet Switches
    <ul className='forth-inner-menu-sub-items'>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208SE '><li className='forth-sub-item-list'>XGS-1208SE</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208M'><li className='forth-sub-item-list'>XGS-1208M</li></Link>

    </ul>
    </li>

    <li className='sub-item-list'><IoMdArrowDropright className="arrow-icon" /> Carrier Switches
    <ul className='forth-inner-menu-sub-items'>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4424A'><li className='forth-sub-item-list'>MSW-4424A</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4424C'><li className='forth-sub-item-list'>MSW-4424C</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4428X'><li className='forth-sub-item-list'>MSW-4428X</li></Link>

    </ul>
    </li>
    <li className='sub-item-list'><IoMdArrowDropright className="arrow-icon" /> Access Switches
    <ul className='forth-inner-menu-sub-items'>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208SE '><li className='forth-sub-item-list'>XGS-1208SE</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208M'><li className='forth-sub-item-list'>XGS-1208M</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4448CM'><li className='forth-sub-item-list'>GSW-4448CM</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4424CM'><li className='forth-sub-item-list'>GSW-4424CM</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-3424M1A'><li className='forth-sub-item-list'>GSW-3424M1A</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4208CM'><li className='forth-sub-item-list'>GSW-4208CM</li></Link>

    </ul>
    </li>
    <li className='sub-item-list'><IoMdArrowDropright className="arrow-icon" /> NID & EDD Switches
    <ul className='forth-inner-menu-sub-items'>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-202'><li className='forth-sub-item-list'>MSW-202</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-202A'><li className='forth-sub-item-list'>MSW-202A</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-404'><li className='forth-sub-item-list'>MSW-404</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-4204'><li className='forth-sub-item-list'>MSW-4204</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-4204S'><li className='forth-sub-item-list'>MSW-4204S</li></Link>

    </ul>
    </li>
    <li className='sub-item-list'><IoMdArrowDropright className="arrow-icon" /> CPE Switches
    <ul className='forth-inner-menu-sub-items'>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/FSW-2104 '><li className='forth-sub-item-list'>FSW-2104</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-1005MS'><li className='forth-sub-item-list'>GSW-1005MS</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2008MS'><li className='forth-sub-item-list'>GSW-2008MS</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2020C7'><li className='forth-sub-item-list'>GSW-2020C7</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2020P'><li className='forth-sub-item-list'>GSW-2020P</li></Link>
<Link className='linkdecor-disable' to='/Telecom_Switches/L2_Eternet_Switches/CPE Switches/QSW-4204M'><li className='forth-sub-item-list'>QSW-4204M</li></Link>

    </ul>
    </li>
    </ul>
    </li>

    
    <li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> POE Switches
       <ul className='inner-menu-sub-items'>
   <Link to="/Telecom_Switches/POE_Switches/GSW3208MP_1" className='linkdecor-disable'><li className='sub-item-list'>GSW3208MP-1</li></Link> 
   <Link to="/Telecom_Switches/POE_Switches/PMC_100PD" className='linkdecor-disable'> <li className='sub-item-list'>PMC-100PD</li></Link>
   <Link to="/Telecom_Switches/POE_Switches/INJ_G90" className='linkdecor-disable'><li className='sub-item-list'>INJ-G90</li></Link> 
   <Link to="/Telecom_Switches/POE_Switches/INJ_G30" className='linkdecor-disable'> <li className='sub-item-list'>INJ-G30</li></Link>
    <Link to="/Telecom_Switches/POE_Switches/GSW_3424MP" className='linkdecor-disable'><li className='sub-item-list'>GSW-3424MP</li></Link>
    <Link to="/Telecom_Switches/POE_Switches/GSW_4424MP" className='linkdecor-disable'><li className='sub-item-list'>GSW-4424MP</li></Link>
    <Link to="/Telecom_Switches/POE_Switches/PMC_1000S" className='linkdecor-disable'><li className='sub-item-list'>PMC-1000S</li></Link>
    </ul>
    </li>
 
</ul>

</li>
<li className='sub-drops'><IoMdArrowDropright className="arrow-icon" /> Industrial Switches
<ul className='inner-item'>

<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> E-Mark Certified Ethernet Switch
<ul className='inner-menu-sub-items'>

<Link to="/Industrial_Switches/EMark/IVS802GT" className='linkdecor-disable'><li className='sub-item-list'>IVS-802GT</li></Link>
<Link to="/Industrial_Switches/EMark/IVS_802GT_8PH24" className='linkdecor-disable'><li className='sub-item-list'>IVS-802GT-8PH24</li></Link>
<Link to="/Industrial_Switches/EMark/IVS_G802T" className='linkdecor-disable'><li className='sub-item-list'>IVS-G802T</li></Link>
<Link to="/Industrial_Switches/EMark/IVS_G802T_8PH24" className='linkdecor-disable'><li className='sub-item-list'>IVS-G802T-8PH24</li></Link>

</ul>
</li>
<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> IEC 61850-3 Switch
<ul className='inner-menu-sub-items'>
<Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_803GSM" className='linkdecor-disable'><li className='sub-item-list'>IPS-803GSM</li></Link> 
<Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_G803SM" className='linkdecor-disable'><li className='sub-item-list'>IPS-G803SM</li></Link> 
<Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_G2404SM_8C" className='linkdecor-disable'><li className='sub-item-list'>IPS-G2404SM-8C</li></Link> 
                                            </ul>
</li>
<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> SyncE Switch
<ul className='inner-menu-sub-items'>
<Link to="/Industrial_Switches/SyncE_Switch/IGS_1608SM_SE_IGS_804SM_SE" className='linkdecor-disable'><li className='sub-item-list'>IGS-1608SM-SE_IGS-804SM-SE</li></Link>
<Link to="/Industrial_Switches/SyncE_Switch/IGS_1608SM_SE_8PH" className='linkdecor-disable'> <li className='sub-item-list'>IGS-1608SM-SE-8PH</li></Link>  
 </ul>

</li>
<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> PoE Switch
<ul className='inner-menu-sub-items'>
<Link to="/Industrial_Switches/POE_Switches/IFS_1602GS_8PH_IFS_802GS_8PH" className='linkdecor-disable'><li className='sub-item-list'>IFS-1602GS-8PH, <br />IFS-802GS-8PH</li></Link>
<Link to="/Industrial_Switches/POE_Switches/IFS_1608GSM_16PH_1G_2_5G_IFS_1608GSM_8PH" className='linkdecor-disable'> <li className='sub-item-list'>IFS-1608GSM16PH, <br />IFS-1608GSM-8PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IFS_402CGS_4PH" className='linkdecor-disable'><li className='sub-item-list'>IFS-402CGS-4PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IFS_402CGSW_4PH" className='linkdecor-disable'><li className='sub-item-list'>IFS-402CGSW-4PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IFS_402GSM_4PU" className='linkdecor-disable'> <li className='sub-item-list'>IFS-402GSM-4PU</li></Link>
<Link to="/Industrial_Switches/POE_Switches/IFS_803GSM_8PH24_IFS_402GSM_4PH24" className='linkdecor-disable'><li className='sub-item-list'>IFS-803GSM-8PH24, <br />IFS-402GSM-4PH24</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IGS_1608SM_16PH_IGS1608SM_8PH_IGS803SM_8PH" className='linkdecor-disable'><li className='sub-item-list'>IGS-1608SM-16PH,<br /> IGS-1608SM-8PH, <br /> IGS⁺803SM-8PH</li></Link>
  <Link to="/Industrial_Switches/POE_Switches/IGS_402CS_4PH" className='linkdecor-disable'><li className='sub-item-list'>IGS-402CS-4PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IGS_402CSW_4PH" className='linkdecor-disable'><li className='sub-item-list'>IGS-402CSW-4PH</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IQS_402XSM_4PH" className='linkdecor-disable'><li className='sub-item-list'>IE-IQS-402XSM-4PH</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IFS_402GSW_4PB" className='linkdecor-disable'><li className='sub-item-list'>IFS-402GSW-4PB</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IFS_PLUS_803GSM_8PH" className='linkdecor-disable'><li className='sub-item-list'>IFS-plus-803GSM-8PH</li></Link>
  <Link to="/Industrial_Switches/POE_Switches/IGS_402S_4PH24" className='linkdecor-disable'><li className='sub-item-list'>IGS-402S-4PH24</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IGS_402SM_4PU" className='linkdecor-disable'><li className='sub-item-list'>IGS-402SM-4PU</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IGS_402SW_4PB" className='linkdecor-disable'><li className='sub-item-list'>IGS-402SW-4PB</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IGS_600_4PH24__IGS_402F_4PH24" className='linkdecor-disable'><li className='sub-item-list'>IGS-600-4PH24<br/>IGS-402F-4PH24</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IGS_800C_8PH" className='linkdecor-disable'><li className='sub-item-list'>IGS-800C-8PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IGS_803SM_8PH24__IGS_402SM_4PH24" className='linkdecor-disable'><li className='sub-item-list'>IGS-803SM-8PH24 <br/>IGS-402SM-4PH24</li></Link> 
  <Link to="/Industrial_Switches/POE_Switches/IGS_1604XSM_16PH" className='linkdecor-disable'><li className='sub-item-list'>IGS-1604XSM-16PH</li></Link> 
 <Link to="/Industrial_Switches/POE_Switches/IGS_plus_402SM_4PH24" className='linkdecor-disable'><li className='sub-item-list'>IGS-plus-402SM-4PH24</li></Link> 
                                            
                                            </ul>
</li>
<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> Celluar Router
<ul className='inner-menu-sub-items'>
<Link to="/Industrial_Switches/Celluar_Router/ICR-4103" className='linkdecor-disable'><li className='sub-item-list'>ICR-4103</li></Link>
<Link to="/Industrial_Switches/Celluar_Router/ICR-GW404" className='linkdecor-disable'><li className='sub-item-list'>ICR-GW404</li></Link>
<Link to="/Industrial_Switches/Celluar_Router/ICR-W401" className='linkdecor-disable'><li className='sub-item-list'>ICR-W401</li></Link>
<Link to="/Industrial_Switches/Celluar_Router/ICR-W402" className='linkdecor-disable'><li className='sub-item-list'>ICR-W402</li></Link>
<Link to="/Industrial_Switches/Celluar_Router/ICR-W403" className='linkdecor-disable'><li className='sub-item-list'>ICR-W403</li></Link>
<Link to="/Industrial_Switches/Celluar_Router/ICR_W405_ICR_405" className='linkdecor-disable'><li className='sub-item-list'>ICR-W405_&_ICR-405</li></Link>
</ul>
</li>
<li className='inner-menus'><IoMdArrowDropright className="arrow-icon" /> Rackmount Switches
<ul className='inner-menu-sub-items'>
<Link to="/Industrial_Switches/Rackmount Switches/ICS_G24S4X__ICS_G24S2X" className='linkdecor-disable'><li className='sub-item-list'>ICS-G24S4X<br/>ICS-G24S2X</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/ICS_G24044X_24PH_AA" className='linkdecor-disable'><li className='sub-item-list'>ICS-G24044X-24PH-AA</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/ICS_GS24044X__ICS_G24044X__ICS_G4804X" className='linkdecor-disable'><li className='sub-item-list'>ICS-GS24044X<br/>ICS-G24044X<br/>ICS-G4804X</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/ICS_G24044X_24PH" className='linkdecor-disable'><li className='sub-item-list'>IE-ICS-G24044X-24PH</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IGS_2408SM_24PH" className='linkdecor-disable'><li className='sub-item-list'>IE-IGS-2408SM-24PH</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IGR_2408SM_24PH" className='linkdecor-disable'><li className='sub-item-list'>IGR-2408SM-24PH</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IGR_S2804GTM__IGR_2408SM__IGR_4804SM" className='linkdecor-disable'><li className='sub-item-list'>IGR-S2804GTM<br/>IGR-2408SM<br/>IGR-4804SM</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IGS_2408SM_24PH_AA" className='linkdecor-disable'><li className='sub-item-list'>IGS-2408SM-24PH-AA</li></Link>
 <Link to="/Industrial_Switches/Rackmount Switches/IGS_S2804GTM__IGS_2408SM__IGS_4804SM" className='linkdecor-disable'><li className='sub-item-list'>IGS-S2804GTM<br/>IGS-2408SM<br/>IGS-4804SM</li></Link>
 <Link to="/Industrial_Switches/Rackmount Switches/IGS_S2804TM" className='linkdecor-disable'><li className='sub-item-list'>IGS-S2804TM</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IXR_G24044X_24PH" className='linkdecor-disable'><li className='sub-item-list'>IXR-G24044X-24PH</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IXR_GS24044X__IXR_G24044X__IXR_G4804X" className='linkdecor-disable'><li className='sub-item-list'>IXR-GS24044X<br/>IXR-G24044X<br/>IXR-G4804X</li></Link>
<Link to="/Industrial_Switches/Rackmount Switches/IXR_MG2404XS" className='linkdecor-disable'><li className='sub-item-list'>IXR-MG2404XS</li></Link>
                                            
                                            </ul>
</li>
</ul>
</li>
                                  </ul>
                                </li>

                                <Link to='/NetworkSecurity' className='nolink-dec'><li className='drop-link'>Network & Security</li></Link>
                                <Link to='/ServerStorage' className='nolink-dec'><li className='drop-link'>Server & Storage</li></Link>
                            </ul>
                        </li>

                        {/* <li className='item-dropdown-hov'><Link to="/" className='nolink-dec'>Services</Link></li> */}
                        <li className='item-dropdown-hov'><Link to="/AboutUs" className='nolink-dec'>About Us</Link></li>
                        <li className='item-dropdown-hov'><a href='#contact' className='nolink-dec'>Contact</a></li>
                    </ul>
                </div>

              

                <div className='only-mobile'>
                    <AiOutlineMenu className='nav-icons only-small' />
                </div>

                <div className='navlogo pt-1 pb-1'>
                    <Link to="/" className='linkdecor-disable'>
                        <img src={logoIcon} alt='img-not-found' />
                        {/* <h3>NX<span style={{color:"gray"}}>Optics .</span></h3> */}
                    </Link>
                </div>



                {/* <AutocompleteSearchBox/> */}

            </nav>




        </>
    )
}

export default Navbar;