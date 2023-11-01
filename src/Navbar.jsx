import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

import { TiBackspaceOutline } from 'react-icons/ti';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdOutlineSupportAgent } from 'react-icons/md';
import logoIcon from './img/logo/navlogo.png';
// import AutocompleteSearchBox from './AutocompleteSearchBox';


const Navbar = () => {

    const OpenCloseMenu = () => {
        document.getElementById('mobile_Setting').classList.toggle("openmenu");

    }

    const allProduct = () => {
        document.getElementById('mobile_Setting_all_product').style.left = "0%";
    }

    const product = () => {
        document.getElementById('mobile_Setting_products').style.left = "0%";
        document.getElementById('mobile_Setting_products').style.zIndex = "1111";
    }

    const cablesCord = () => {
        document.getElementById('mobile_Setting_Cables').style.left = "0%";
        document.getElementById('mobile_Setting_Cables').style.zIndex = "1111";
    }


    const switchsProduct = () => {
        document.getElementById('mobile_Setting_Switchs-1').style.left = "0%";
    }

    const OpenSwirch_1_1 = () => {
        document.getElementById('mobile_Setting_Switchs-1_1').style.left = "0%";

    }

    const OpenSwitchL2 = () => {
        document.getElementById('mobile_Setting_Switchs-1_1_1').style.left = "0%";

    }

    const OpenSwirch_1_2 = () => {
        document.getElementById('mobile_Setting_Switchs-1_2').style.left = "0%";

    }

    const OpenPOESwitch = () => {
        document.getElementById('mobile_Setting_Switchs').style.left = "0%";

    }

    const series1btn = () => {
        document.getElementById('series1').style.left = "0%";
    }

    const series2btn = () => {
        document.getElementById('series2').style.left = "0%";
    }

    const series3btn = () => {
        document.getElementById('series3').style.left = "0%";
    }

    const series4btn = () => {
        document.getElementById('series4').style.left = "0%";
    }

    const series5btn = () => {
        document.getElementById('series5').style.left = "0%";
    }

    const series6btn = () => {
        document.getElementById('series6').style.left = "0%";
    }

    const series7btn = () => {
        document.getElementById('series7').style.left = "0%";
    }

    const series8btn = () => {
        document.getElementById('series8').style.left = "0%";
    }

    const series9btn = () => {
        document.getElementById('series9').style.left = "0%";
    }

    const series10btn = () => {
        document.getElementById('series10').style.left = "0%";
    }

    const series11btn = () => {
        document.getElementById('series11').style.left = "0%";
    }

    const series12btn = () => {
        document.getElementById('series12').style.left = "0%";
    }

    const series13btn = () => {
        document.getElementById('series13').style.left = "0%";
    }

    const series14btn = () => {
        document.getElementById('series14').style.left = "0%";
    }

    const series15btn = () => {
        document.getElementById('series15').style.left = "0%";
    }

    const series16btn = () => {
        document.getElementById('series16').style.left = "0%";
    }

    const series17btn = () => {
        document.getElementById('series17').style.left = "0%";
    }

    const series18btn = () => {
        document.getElementById('series18').style.left = "0%";
    }

    const series19btn = () => {
        document.getElementById('series19').style.left = "0%";
    }

    const series20btn = () => {
        document.getElementById('series20').style.left = "0%";
    }

    const series21btn = () => {
        document.getElementById('series21').style.left = "0%";
    }

    const series22btn = () => {
        document.getElementById('series22').style.left = "0%";
    }

    const series23btn = () => {
        document.getElementById('series23').style.left = "0%";
    }

    const series24btn = () => {
        document.getElementById('series24').style.left = "0%";
    }

    const series25btn = () => {
        document.getElementById('series25').style.left = "0%";
    }

    const series26btn = () => {
        document.getElementById('series26').style.left = "0%";
    }

    const series27btn = () => {
        document.getElementById('series27').style.left = "0%";
    }

    const series28btn = () => {
        document.getElementById('series28').style.left = "0%";
    }

    const series29btn = () => {
        document.getElementById('series29').style.left = "0%";
    }

    const series30btn = () => {
        document.getElementById('series30').style.left = "0%";
    }

    const close_menu = () => {
        document.getElementById('mobile_Setting_all_product').style.left = "-100%";
    }

    const close_menuProducts = () => {
        document.getElementById('mobile_Setting_products').style.left = "-100%";
    }

    const close_menuCables = () => {
        document.getElementById('mobile_Setting_Cables').style.left = "-100%";
    }

    const close_menu1 = () => {
        document.getElementById('series1').style.left = "-100%";
    }

    const close_menu2 = () => {
        document.getElementById('series2').style.left = "-100%";
    }

    const close_menu3 = () => {
        document.getElementById('series3').style.left = "-100%";
    }

    const close_menu4 = () => {
        document.getElementById('series4').style.left = "-100%";
    }

    const close_menu5 = () => {
        document.getElementById('series5').style.left = "-100%";
    }

    const close_menu6 = () => {
        document.getElementById('series6').style.left = "-100%";
    }

    const close_menu7 = () => {
        document.getElementById('series7').style.left = "-100%";
    }

    const close_menu8 = () => {
        document.getElementById('series8').style.left = "-100%";
    }

    const close_menu9 = () => {
        document.getElementById('series9').style.left = "-100%";
    }

    const close_menu10 = () => {
        document.getElementById('series10').style.left = "-100%";
    }

    const close_menu11 = () => {
        document.getElementById('series11').style.left = "-100%";
    }

    const close_menu12 = () => {
        document.getElementById('series12').style.left = "-100%";
    }

    const close_menu13 = () => {
        document.getElementById('series13').style.left = "-100%";
    }

    const close_menu14 = () => {
        document.getElementById('series14').style.left = "-100%";
    }

    const close_menu15 = () => {
        document.getElementById('series15').style.left = "-100%";
    }

    const close_menu16 = () => {
        document.getElementById('series16').style.left = "-100%";
    }

    const close_menu17 = () => {
        document.getElementById('series17').style.left = "-100%";
    }

    const close_menu18 = () => {
        document.getElementById('series18').style.left = "-100%";
    }

    const close_menu19 = () => {
        document.getElementById('series19').style.left = "-100%";
    }

    const close_menu20 = () => {
        document.getElementById('series20').style.left = "-100%";
    }

    const close_menu21 = () => {
        document.getElementById('series21').style.left = "-100%";
    }

    const close_menu22 = () => {
        document.getElementById('series22').style.left = "-100%";
    }

    const close_menu23 = () => {
        document.getElementById('series23').style.left = "-100%";
    }

    const close_menu24 = () => {
        document.getElementById('series24').style.left = "-100%";
    }

    const close_menu25 = () => {
        document.getElementById('series25').style.left = "-100%";
    }

    const close_menu26 = () => {
        document.getElementById('series26').style.left = "-100%";
    }

    const close_menu27 = () => {
        document.getElementById('series27').style.left = "-100%";
    }

    const close_menu28 = () => {
        document.getElementById('series28').style.left = "-100%";
    }

    const close_menu29 = () => {
        document.getElementById('series29').style.left = "-100%";
    }

    const close_menu30 = () => {
        document.getElementById('series30').style.left = "-100%";
    }



    //--------------------------- Switchs Section -------------------------

    const Switchsseries1btn = () => {
        document.getElementById('Switchseries1').style.left = "0%";
    }

    // const Switchsseries2btn =()=>{
    //     document.getElementById('Switchseries2').style.left="0%";
    // }

    // const Switchsseries3btn =()=>{
    //     document.getElementById('Switchseries3').style.left="0%";
    // }

    // const Switchsseries4btn =()=>{
    //     document.getElementById('Switchseries4').style.left="0%";
    // }

    // const Switchsseries5btn =()=>{
    //     document.getElementById('Switchseries5').style.left="0%";
    // }

    // const Switchsseries6btn =()=>{
    //     document.getElementById('Switchseries6').style.left="0%";
    // }

    // const Switchsseries7btn =()=>{
    //     document.getElementById('Switchseries7').style.left="0%";
    // }

    // const Switchsseries8btn =()=>{
    //     document.getElementById('Switchseries8').style.left="0%";
    // }


    //Switch Close Menu
    const Switchclose = () => {
        document.getElementById('mobile_Setting_Switchs').style.left = "-100%";
    }

    const Switchclose1 = () => {
        document.getElementById('mobile_Setting_Switchs-1').style.left = "-100%";
    }

    const Switchclose1_1 = () => {
        document.getElementById('mobile_Setting_Switchs-1_1').style.left = "-100%";

    }

    const Switchclose1_1_1 = () => {
        document.getElementById('mobile_Setting_Switchs-1_1_1').style.left = "-100%";

    }

    const Switchclose1_2 = () => {
        document.getElementById('mobile_Setting_Switchs-1_2').style.left = "-100%";

    }

    const Switchclose_menu1 = () => {
        document.getElementById('Switchseries1').style.left = "-100%";
    }

    const Switchclose_menu2 = () => {
        document.getElementById('Switchseries2').style.left = "-100%";
    }

    const Switchclose_menu3 = () => {
        document.getElementById('Switchseries3').style.left = "-100%";
    }

    const Switchclose_menu4 = () => {
        document.getElementById('Switchseries4').style.left = "-100%";
    }

    const Switchclose_menu5 = () => {
        document.getElementById('Switchseries5').style.left = "-100%";
    }

    const Switchclose_menu6 = () => {
        document.getElementById('Switchseries6').style.left = "-100%";
    }

    const Switchclose_menu7 = () => {
        document.getElementById('Switchseries7').style.left = "-100%";
    }

    const Switchclose_menu8 = () => {
        document.getElementById('Switchseries8').style.left = "-100%";
    }

    // ------------------------------------------------------------------------------------------ 


    return (
        <>
            <div className='top-header'>
                <div className='header-start'>
                    <p>Fast shipping to India</p>
                </div>

                <div className='header-end'>
                    <a href='tel:+918041622171'><MdOutlineSupportAgent style={{ fontSize: "15px", marginRight: "5px", marginBottom: "5px" }} />8041622171</a>
                </div>

            </div>

            <nav className='nav-strap'>
                <div className='navlogo'>
                    <Link to="/">
                        <img src={logoIcon} alt='img-not-found' />
                    </Link>
                </div>

                <div className='nav-item-links'>
                    <ul className='link-item'>
                        <li className='item-dropdown-hov'><Link to="/" className='nolink-dec'>Home</Link></li>
                        <li className='item-dropdown-hov'> Products
                            <ul className='drop-hov'>
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
                                                <Link to="/Products_CWDM_10G_SFP" className='nolink-dec'><li className='lastdrop-items'>  2.5G SFP DUAL</li></Link>
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

                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1.25G GBIC
                                            <ul className='lastdrop'>
                                                <Link to="/SFP_1_25G_DWDM_Products" className='nolink-dec'><li className='lastdrop-items'> 1.25G GBIC SC</li></Link>
                                            </ul>
                                        </li>

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
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-DR1/FR1/LR1</li></Link>
                                                <Link to="/LR4_100G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-LR4</li></Link>
                                                <Link to="/ER4_100G_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-ER4</li></Link>
                                                <Link to="/ZR4_100G" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-ZR4</li></Link>
                                                <Link to="/CWDM4_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-CWDM4</li></Link>
                                                <Link to="/BIDI_4WDM_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-BIDI-4WDM-20</li></Link>
                                                <Link to="/BIDI_10_to_40_Products" className='nolink-dec'><li className='lastdrop-items'>QSFP28-100G-BIDI-10/20/30/40</li></Link>
                                                <Link to="/QSPF28_adaptor" className='nolink-dec'><li className='lastdrop-items'>QSFP28 to SFP28 Adapter</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 200G QSFP56 QSFP-DD
                                            <ul className='lastdrop'>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>200G QSFP-DD SR8</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>200G QSFP56 SR4</li></Link>
                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 400G QSFP-DD OSFP
                                            <ul className='lastdrop'>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G OSFP SR8</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD SR8 PAM4</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD DR4</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD FR4</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD LR4</li></Link>
                                                <Link to="/SR4_40G_Products" className='nolink-dec'><li className='lastdrop-items'>400G QSFP-DD ER4</li></Link>
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
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 1X9
                                            <ul className='lastdrop'>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>1.25G 1X9 BIDI</li></Link>
                                                <Link to="/Dual_1X9_Products" className='nolink-dec'><li className='lastdrop-items'>1.25G 1X9 DUAL</li></Link>
                                                <Link to="/CWDM_1X9_Products" className='nolink-dec'><li className='lastdrop-items'>125/155M 1X9 CWDM</li></Link>
                                                <Link to="/" className='nolink-dec'><li className='lastdrop-items'>125/155M 1X9 BIDI</li></Link>
                                                <Link to="/Ultra_row_1X9_DC" className='nolink-dec'><li className='lastdrop-items'>Ultra-Low Data-Rate 1X9 DC~10Mbps </li></Link>
                                                <Link to="/Dual_125_155M_1X9" className='nolink-dec'><li className='lastdrop-items'>Dual_125_155M_1X9</li></Link>

                                            </ul>
                                        </li>
                                        <li className='inner-linkers'><IoMdArrowDropright className="arrow-icon" /> 125M 155M SFP
                                            <ul className='lastdrop'>
                                                <Link to="/DWDM_SFP_115M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP DWDM</li></Link>
                                                <Link to="/CWDW_SFP_155M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP CWDM</li></Link>
                                                <Link to="/BIDI_155M_Products" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP BIDI</li></Link>
                                                <Link to="/Products_Dual_SFP_155M" className='nolink-dec'><li className='lastdrop-items'>125M/155M SFP DUAL</li></Link>
                                                <Link to="/Products_622M_SFP_BIDI" className='nolink-dec'><li className='lastdrop-items'>622M SFP BIDI</li></Link>
                                                <Link to="/Products_622M_SFP_Dual" className='nolink-dec'><li className='lastdrop-items'>622M SFP DUAL</li></Link>

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


                                <li className='drop-link3'><IoMdArrowDropright className="arrow-icon" /> Telecom Switches
                                    <ul className='hover-inner-links3'>
                                        <li className='tele-inner-linkers1'><IoMdArrowDropright className="arrow-icon" /> L2 Ethernet Switches
                                            <ul className='tele-link1'>
                                                <li className='tele-inner-linke1 tele-drop1'><IoMdArrowDropright className="arrow-icon" />10G Ethernet Switch
                                                    <ul className='tele-sublinkers1 list-item-tele'>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208SE " className='nolink-dec'>
                                                            <li className='lastdrop-items'>XGS-1208SE</li>
                                                        </Link>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208M " className='nolink-dec'>
                                                            <li className='lastdrop-items'>XGS-1208M</li>
                                                        </Link>

                                                    </ul>
                                                </li>
                                                <li className='tele-inner-linke1 tele-drop2'><IoMdArrowDropright className="arrow-icon" />Carrier Switch
                                                    <ul className='tele-sublinkers2 list-item-tele'>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4424A" className='nolink-dec'>
                                                        <li>MSW-4424A</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4424C" className='nolink-dec'>
                                                    <li>MSW-4424C</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/Carrier Ethernet Switch/MSW-4428X" className='nolink-dec'>
                                                    <li>MSW-4428X</li>
                                                    </Link>
                                                    </ul>
                                                </li>
                                                <li className='tele-inner-linke1 tele-drop3'><IoMdArrowDropright className="arrow-icon" />Access Switch
                                                    <ul className='tele-sublinkers3 list-item-tele'>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208SE " className='nolink-dec'>
                                                            <li className='lastdrop-items'>XGS-1208SE</li>
                                                        </Link>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/10G_Eternet_Switches/XGS_1208M " className='nolink-dec'>
                                                            <li className='lastdrop-items'>XGS-1208M</li>
                                                        </Link>
                                                        
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4448CM" className='nolink-dec'>           
                                                        <li>GSW-4448CM</li>
                                                        </Link>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4424CM" className='nolink-dec'>          
                                                        <li>GSW-4424CM</li>
                                                        </Link>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-3424M1A" className='nolink-dec'>          

                                                        <li>GSW-3424M1A</li>
                                                        </Link>
                                                        <Link to="/Telecom_Switches/L2_Eternet_Switches/Access Switch/GSW-4208CM" className='nolink-dec'>          

                                                        <li>GSW-4208CM</li>
                                                        </Link>

                                                    </ul>
                                                </li>
                                                <li className='tele-inner-linke1 tele-drop4'><IoMdArrowDropright className="arrow-icon" />NID and EDD Switch
                                                    <ul className='tele-sublinkers4 list-item-tele'>

                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-202" className='nolink-dec'>          
                                                        <li>MSW-202</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-202A" className='nolink-dec'>          
                                                        <li>MSW-202A</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-404" className='nolink-dec'>          
                                                        <li>MSW-404</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-4204" className='nolink-dec'>          

                                                        <li>MSW-4204</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/NID & EDD switches/MSW-4204S" className='nolink-dec'>          
                                                        <li>MSW-4204S</li>
                                                    </Link>

                                                    </ul>
                                                </li>
                                                <li className='tele-inner-linke1 tele-drop5'><IoMdArrowDropright className="arrow-icon" />CPE Switch
                                                    <ul className='tele-sublinkers5 list-item-tele'>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/FSW-2104" className='nolink-dec'>          
                                                    <li>FSW-2104</li>
                                                    </Link>
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-1005MS" className='nolink-dec'>          

                                                        <li>GSW-1005MS</li>
                                                    </Link>

                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2008MS" className='nolink-dec'>          

                                                        <li>GSW-2008MS</li>
                                                    </Link>    
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2020C7" className='nolink-dec'>          

                                                        <li>GSW-2020C7</li>
                                                    </Link>    
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/GSW-2020P" className='nolink-dec'>          

                                                        <li>GSW-2020P</li>
                                                    </Link>    
                                                    <Link to="/Telecom_Switches/L2_Eternet_Switches/CPE Switches/QSW-4204M" className='nolink-dec'>          

                                                        <li>QSW-4204M</li>
                                                    </Link>    

                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='tele-inner-linkers2'><IoMdArrowDropright className="arrow-icon" /> POE Switch
                                            <ul className='tele-link2'>
                                                <li className='tele-inner-linke2'>GSW3208MP-1</li>
                                                <li className='tele-inner-linke2'>PMC-100PD</li>
                                                <li className='tele-inner-linke2'>INJ-G90</li>
                                                <li className='tele-inner-linke2'>INJ-G30</li>
                                                <li className='tele-inner-linke2'>GSW-3424MP</li>
                                                <li className='tele-inner-linke2'>GSW-4424MP</li>
                                                <li className='tele-inner-linke2'>PMC-1000S</li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>

                                <li className='drop-link4'><IoMdArrowDropright className="arrow-icon" /> Industrial Switches

                                    <ul className='drop-inner-link4'>
                                        <Link to="/" className='nolink-dec'><li className='lastdrop-items indus-link1'><IoMdArrowDropright />E-Mark Certified Ethernet Switch
                                            <ul className='indus-inner-link1 list-item-tele'>
                                                <Link to="/Industrial_Switches/EMark/IVS802GT" className='nolink-dec'><li>IVS-802GT</li></Link>
                                                <Link to="/Industrial_Switches/EMark/IVS_802GT_8PH24" className='nolink-dec'><li>IVS-802GT-8PH24</li></Link>
                                                <Link to="/Industrial_Switches/EMark/IVS_G802T" className='nolink-dec'><li>IVS-G802T</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IVS-G802T-8PH24</li></Link>
                                            </ul>
                                        </li></Link>

                                        <Link to="/" className='nolink-dec'><li className='lastdrop-items indus-link2'><IoMdArrowDropright />IEC 61850-3 Switch
                                            <ul className='indus-inner-link2 list-item-tele'>
                                               <Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_803GSM" className='nolink-dec'><li>IPS-803GSM</li></Link> 
                                               <Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_G803SM" className='nolink-dec'><li>IPS-G803SM</li></Link> 
                                               <Link to="/Industrial_Switches/IEC61850-3_Switch/IPS_G2404SM_8C" className='nolink-dec'><li>IPS-G2404SM-8C</li></Link> 
                                            </ul>
                                        </li></Link>
                                        <Link to="/" className='nolink-dec'><li className='lastdrop-items indus-link3'><IoMdArrowDropright />SyncE Switch
                                            <ul className='indus-inner-link3 list-item-tele'>
                                                <Link to="/Industrial_Switches/SyncE_Switch/IGS_1608SM_SE_IGS_804SM_SE" className='nolink-dec'><li>IGS-1608SM-SE_IGS-804SM-SE</li></Link>
                                             <Link to="/Industrial_Switches/SyncE_Switch/IGS_1608SM_SE_8PH" className='nolink-dec'> <li>IGS-1608SM-SE-8PH</li></Link>  

                                            </ul>
                                        </li></Link>
                                        <Link to="/" className='nolink-dec'>
                                        <li className='lastdrop-items indus-link4'><IoMdArrowDropright />PoE Switch
                                            <ul className='indus-inner-link4 list-item-tele'>
                                                <Link to="/Industrial_Switches/POE_Switches/IFS_1602GS_8PH_IFS_802GS_8PH" className='nolink-dec'><li>IFS-1602GS-8PH, <br />IFS-802GS-8PH</li></Link>
                                                <Link to="/Industrial_Switches/POE_Switches/IFS_1608GSM_16PH_1G_2_5G_IFS_1608GSM_8PH" className='nolink-dec'> <li>IFS-1608GSM16PH, <br />IFS-1608GSM-8PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_402CGS_4PH" className='nolink-dec'><li>IFS-402CGS-4PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_402CGSW_4PH" className='nolink-dec'><li>IFS-402CGSW-4PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_402GSM_4PU" className='nolink-dec'> <li>IFS-402GSM-4PU</li></Link>
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_803GSM_8PH24_IFS_402GSM_4PH24" className='nolink-dec'><li>IFS-803GSM-8PH24, <br />IFS-402GSM-4PH24</li></Link> 
                                                  <Link to="/Industrial_Switches/POE_Switches/IGS_1608SM_16PH_IGS1608SM_8PH_IGS803SM_8PH" className='nolink-dec'><li>IGS-1608SM-16PH,<br /> IGS-1608SM-8PH, <br /> IGS⁺803SM-8PH</li></Link>
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_402CS_4PH" className='nolink-dec'><li>IGS-402CS-4PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_402CSW_4PH" className='nolink-dec'><li>IGS-402CSW-4PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IQS_402XSM_4PH" className='nolink-dec'><li>IE-IQS-402XSM-4PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_402GSW_4PB" className='nolink-dec'><li>IFS-402GSW-4PB</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IFS_PLUS_803GSM_8PH" className='nolink-dec'><li>IFS-plus-803GSM-8PH</li></Link>

                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_402S_4PH24" className='nolink-dec'><li>IGS-402S-4PH24</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_402SM_4PU" className='nolink-dec'><li>IGS-402SM-4PU</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_402SW_4PB" className='nolink-dec'><li>IGS-402SW-4PB</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_600_4PH24__IGS_402F_4PH24" className='nolink-dec'><li>IGS-600-4PH24<br/>IGS-402F-4PH24</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_800C_8PH" className='nolink-dec'><li>IGS-800C-8PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_803SM_8PH24__IGS_402SM_4PH24" className='nolink-dec'><li>IGS-803SM-8PH24 <br/>IGS-402SM-4PH24</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_1604XSM_16PH" className='nolink-dec'><li>IGS-1604XSM-16PH</li></Link> 
                                                 <Link to="/Industrial_Switches/POE_Switches/IGS_plus_402SM_4PH24" className='nolink-dec'><li>IGS-plus-402SM-4PH24</li></Link> 
                                            
                                            </ul>
                                        </li>
                                        </Link>

                                        <Link to="/" className='nolink-dec'>
                                        <li className='lastdrop-items indus-link5'><IoMdArrowDropright />Celluar Router
                                            <ul className='indus-inner-link5 list-item-tele'>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR-4103" className='nolink-dec'><li>ICR-4103</li></Link>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR-GW404" className='nolink-dec'><li>ICR-GW404</li></Link>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR-W401" className='nolink-dec'><li>ICR-W401</li></Link>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR-W402" className='nolink-dec'><li>ICR-W402</li></Link>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR-W403" className='nolink-dec'><li>ICR-W403</li></Link>
                                                <Link to="/Industrial_Switches/Celluar_Router/ICR_W405_ICR_405" className='nolink-dec'><li>ICR-W405_&_ICR-405</li></Link>
                                            
                                            
                                            </ul>
                                        </li>
                                        </Link>

                                        <Link to="/" className='nolink-dec'>
                                        <li className='lastdrop-items indus-link6'><IoMdArrowDropright />Rackmount Switches
                                            <ul className='indus-inner-link6 list-item-tele'>
                                                <Link to="/Industrial_Switches/Rackmount Switches/ICS_G24S4X__ICS_G24S2X" className='nolink-dec'><li>ICS-G24S4X<br/>ICS-G24S2X</li></Link>
                                                <Link to="/Industrial_Switches/Rackmount Switches/ICS_G24044X_24PH_AA" className='nolink-dec'><li>ICS-G24044X-24PH-AA</li></Link>
                                                <Link to="/Industrial_Switches/Rackmount Switches/ICS_GS24044X__ICS_G24044X__ICS_G4804X" className='nolink-dec'><li>ICS-GS24044X<br/>ICS-G24044X<br/>ICS-G4804X</li></Link>
                                                <Link to="/Industrial_Switches/Rackmount Switches/ICS_G24044X_24PH" className='nolink-dec'><li>IE-ICS-G24044X-24PH</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IE-IGS-2408SM-24PH</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IGR-2408SM-24PH</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IGR-S2804GTM<br/>IGR-2408SM<br/>IGR-4804SM</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IGS-2408SM-24PH-AA</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IGS-S2804GTM<br/>IGS-2408SM<br/>IGS-4804SM</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IGS-S2804TM</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IXR-G24044X-24PH</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IXR-GS24044X<br/>IXR-G24044X<br/>IXR-G4804X</li></Link>
                                                <Link to="/" className='nolink-dec'><li>IXR-MG2404XS</li></Link>
                                            
                                            </ul>
                                        </li>
                                        </Link>
                                    </ul>


                                </li>

                                <Link to='/NetworkSecurity' className='nolink-dec'><li className='drop-link'>Network & Security</li></Link>
                                <Link to='/ServerStorage' className='nolink-dec'><li className='drop-link'>Server & Storage</li></Link>
                            </ul>
                        </li>

                        {/* <li className='item-dropdown-hov'><Link to="/" className='nolink-dec'>Services</Link></li> */}
                        <li className='item-dropdown-hov'><Link to="/AboutUs" className='nolink-dec'>About Us</Link></li>
                        <li className='item-dropdown-hov'><Link to="/" className='nolink-dec'>Contact</Link></li>
                    </ul>
                </div>

                <div className='only-mobile'>
                    <AiOutlineMenu className='nav-icons only-small' onClick={OpenCloseMenu} />
                </div>

                {/* <AutocompleteSearchBox/> */}

            </nav>



            <div className='mobile-navbar' id='mobile_Setting'>

                <div className="mobile-navbarcontent">
                    <Link to="/" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Home</p></Link>
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={allProduct}>All Products</p></Link> */}
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={product}>All Products</p></Link>
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={switchsProduct}>Switchs</p></Link> */}
                    <Link to="/AboutUs" style={{ textDecoration: "none" }}><p className='mob-nav-items'>About us</p></Link>
                </div>


                <div className='mobile-nav-all_product' id='mobile_Setting_all_product'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu} />
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series1btn}>LOOPBACK SERIES</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series2btn}>400G QSFP-DD OSFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series3btn}>200G QSFP56 QSFP-DD</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series4btn}>100G CFP CFP2 CFP4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series5btn}>100G QSFP28</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series6btn}>40G QSFP+</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series7btn}>25G SFP28</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series8btn}>16GFC SFP+ ( 14.025G )</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series9btn}>RJ45 Copper Series</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series10btn}>10G X2</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series11btn}>10G Xenpak</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series12btn}>10G XFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series13btn}>8GFC SFP+</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series14btn}>6G SFP+</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series15btn}>4G SFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series16btn}>2.5G SFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series17btn}>1.25G SFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series18btn}>1.25G CSFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series19btn}>1.25G GBIC</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series20btn}>2X5 SFF</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series21btn}>PON SFP   SFP+</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series22btn}>1X9</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series23btn}>125M 155M SFP</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series24btn}>10G SFP+</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series25btn}>622M SFP</p></Link>

                    <h4 className='mob-nav-items'>FIBER OPTICAL CABLE CONTENT</h4>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series26btn}>AOC (Active Optical Cable)</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series27btn}>DAC (Direct-Attach Cable)</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series28btn}>Indoor Patch-cord   Cable</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series29btn}>Outdoor Patch-cord   Cable</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series30btn}>MPO Patch-cord   Cassette</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='mobile_Setting_products'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menuProducts} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={allProduct}>Transceiver</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={cablesCord}>Optical Cables / Path Cord</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={switchsProduct}>Switches</p></Link>
                    <Link to="/NetworkSecurity" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Network And Security</p></Link>
                    <Link to="/ServerStorage" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Server And Storage</p></Link>

                </div>

                {/* Optical Cables / Path Cord */}
                <div className='mobile-nav-all_product' id='mobile_Setting_Cables'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menuCables} />

                    <h4 className='mob-nav-items'>FIBER OPTICAL CABLE CONTENT</h4>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series26btn}>AOC (Active Optical Cable)</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series27btn}>DAC (Direct-Attach Cable)</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series28btn}>Indoor Patch-cord   Cable</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series29btn}>Outdoor Patch-cord   Cable</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={series30btn}>MPO Patch-cord   Cassette</p></Link>

                </div>



                {/* Switchs All menu */}
                <div className='mobile-nav-all_product' id='mobile_Setting_Switchs-1'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose1} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={OpenSwirch_1_1}>Telecom </p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={OpenSwirch_1_2}>Industrial</p></Link>
                </div>


                <div className='mobile-nav-all_product' id='mobile_Setting_Switchs-1_1'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose1_1} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={OpenSwitchL2}>L2 Ethernet Switches  </p></Link>
                </div>


                <div className='mobile-nav-all_product' id='mobile_Setting_Switchs-1_1_1'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose1_1_1} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' >Under L2 Ethernet Switches  </p></Link>
                </div>

                <div className='mobile-nav-all_product' id='mobile_Setting_Switchs-1_2'>


                    <TiBackspaceOutline className='close_icon' onClick={Switchclose1_2} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={OpenPOESwitch}>POE Switches </p></Link>
                </div>

                <div className='mobile-nav-all_product' id='mobile_Setting_Switchs'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose} />

                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries3btn}>Layer 3 Ethernet Switches</p></Link> */}
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' onClick={Switchsseries1btn}>10G Ethernet Switches</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' >Carrier Ethernet Switch</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' >Access Switch</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' >NID & EDD Switch</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items' >CPE Switch</p></Link>
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries2btn}>Gigabit Ethernet Switches</p></Link> */}
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries5btn}>Managed Ethernet Switches</p></Link> */}
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries7btn}>Unmanaged Ethernet Switches</p></Link> */}
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries6btn}>Optical Fiber Bypass Switch</p></Link> */}
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries4btn}>Managed Media Converters</p></Link> */}
                    {/* <Link to="" style={{textDecoration:"none"}}><p className='mob-nav-items' onClick={Switchsseries8btn}>Unmanaged Media Converters</p></Link> */}
                </div>
                {/* ------------------------------------------------------------------------------------------- */}



                {/* Switchs menu inner menu */}
                <div className='mobile-nav-all_product' id='Switchseries1'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu1} />
                    <Link to="/NOX_G24S4X_G24S2X" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-G24S4X & NXO-G24S2X</p></Link>
                    <Link to="/NXO_G24044X_24PH" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-G24044X-24PH</p></Link>
                    <Link to="/NXO_G24044X_24PH_AA" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-G24044X-24PH-AA</p></Link>
                    <Link to="/NXO_GS24044X_NXO_G24044X_NXO_G4804X" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-GS24044X & NXO-G24044X & NXO-G4804X</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries2'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu2} />
                    <Link to="/NXO_2408SM_24PH" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-2408SM-24PH</p></Link>
                    <Link to="/NXO_2408SM_24PH_AA" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-2408SM-24PH-AA</p></Link>
                    <Link to="/NXO_S2408GTM_NXO_2408SM_NXO_4804SM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-S2408GTM & NXO-2408SM & NXO-4804SM</p></Link>
                    <Link to="/NXO_S2804TM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-S2804TM</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries3'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu3} />
                    <Link to="/NXO_2408SM_NXO_4804SM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-2408SM - NXO-4804SM</p></Link>
                    <Link to="/Layer3_NXO_2408SM_24PH" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-2408SM-24PH</p></Link>
                    <Link to="/Layer3_NXO_G24044X_24PH" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-G24044X-24PH</p></Link>
                    <Link to="/Layer3_NXO_G24044X_NXO_G4804X" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-G24044X & NXO-G4804X</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries4'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu4} />

                    <Link to="/NXO_1000MS" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1000MS</p></Link>
                    <Link to="/NXO_1000MS_PH12" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1000MS-PH12</p></Link>
                    <Link to="/NXO_1000WS_PB" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1000WS-PB</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries5'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu5} />

                    <Link to="/NXO_402CGSW" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402CGSW</p></Link>
                    <Link to="/NXO_402CSW" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402CSW</p></Link>
                    <Link to="/NXO_402XSM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402XSM</p></Link>
                    <Link to="/NXO_803SM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-803SM</p></Link>
                    <Link to="/NXO_402GSM_NXO_803GSM_NXO_1604GSM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402GSM & NXO-803GSM & NXO-1604GSM</p></Link>
                    <Link to="/NXO_812SM_NXO_1604SM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-812SM & NXO-1604SM</p></Link>
                    <Link to="/NXO_1604XSM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1604XSM</p></Link>
                    <Link to="/NXO_404SM_NXO_803SM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO+404SM & NXO+803SM</p></Link>
                    <Link to="/NXO_402GSM_NXO_803GSM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO+402GSM & NXO+803GSM</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries6'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu6} />
                    <Link to="/NXO_202" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-202</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries7'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu7} />

                    <Link to="/NXO_402CS" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402CS</p></Link>
                    <Link to="/NXO_402S_NXO_402F" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-402S & NXO-402F</p></Link>
                    <Link to="/NXO_500_NXO_800" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-500 & NXO-800</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='Switchseries8'>
                    <TiBackspaceOutline className='close_icon' onClick={Switchclose_menu8} />

                    <Link to="/NXO_100" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-100</p></Link>
                    <Link to="/NXO_100C" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-100C</p></Link>
                    <Link to="/NXO_100_PH12" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-100-PH12</p></Link>
                    <Link to="/NXO_1000S_PB" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1000S-PB</p></Link>
                    <Link to="/NXO_1001C_NXO_1001CS" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1001C & NXO-1001CS</p></Link>
                    <Link to="/NXO_1001S_PH" style={{ textDecoration: "none" }}><p className='mob-nav-items'>NXO-1001S-PH</p></Link>

                </div>




                <div className='mobile-nav-all_product' id='series1'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu1} />

                    <Link to="/10G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP+ 10G Loopback</p></Link>
                    <Link to="/25G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP28 25G Loopback</p></Link>
                    <Link to="/40G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G Loopback</p></Link>
                    <Link to="/100G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28 100G Loopback</p></Link>
                    <Link to="/200G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP56 200G Loopback</p></Link>
                    <Link to="/400G-Loopback-Product" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP-DD 400G Loopback</p></Link>
                </div>

                <div className='mobile-nav-all_product' id='series2'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu2} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G OSFP SR8</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G QSFP-DD SR8 PAM4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G QSFP-DD DR4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G QSFP-DD FR4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G QSFP-DD LR4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>400G QSFP-DD ER4</p></Link>
                </div>

                <div className='mobile-nav-all_product' id='series3'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu3} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>200G QSFP-DD SR8</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>200G QSFP56 SR4</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series4'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu4} />

                    <Link to="/Product_CFP1" style={{ textDecoration: "none" }}><p className='mob-nav-items'>100G CFP</p></Link>
                    <Link to="/CFP2_Products_100G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>100G CFP2</p></Link>
                    <Link to="/Product_CFP4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>100G CFP4</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series5'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu5} />

                    <Link to="/Product_QSFP28_100G_SR4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-SR4</p></Link>
                    <Link to="/ESR4_100G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-eSR4</p></Link>
                    <Link to="/Product_QSFP28_100G_SRBD" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-SRBD</p></Link>
                    <Link to="/PSM4_Ethernet_100G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-PSM4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-DR1/FR1/LR1</p></Link>
                    <Link to="/LR4_100G_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-LR4</p></Link>
                    <Link to="/ER4_100G_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-ER4</p></Link>
                    <Link to="/ZR4_100G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-ZR4</p></Link>
                    <Link to="/CWDM4_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-CWDM4</p></Link>
                    <Link to="/BIDI_4WDM_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-BIDI-4WDM-20</p></Link>
                    <Link to="/BIDI_10_to_40_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28-100G-BIDI-10 / 20 / 30 / 40</p></Link>
                    <Link to="/QSPF28_adaptor" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP28 to SFP28 Adapter</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series6'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu6} />

                    <Link to="/Product_40G_SR4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-SR4</p></Link>
                    <Link to="/Product_40G_eSR4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-eSR4</p></Link>
                    <Link to="/Product_40G_SRBD" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-SRBD</p></Link>
                    <Link to="/IR4_40G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-IR4</p></Link>
                    <Link to="/Products_40G_LR4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-LR4</p></Link>
                    <Link to="/Product_40G_ER4" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-ER4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-ZR4</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-SWDM4</p></Link>
                    <Link to="/PSM4_IR_40G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-PSM4-IR</p></Link>
                    <Link to="/PSM4_LR_40G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>QSFP+ 40G-PSM4-LR</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series7'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu7} />

                    <Link to="/SFP28_SR_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 SR</p></Link>
                    <Link to="/SFP28_BIDI_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 BIDI</p></Link>
                    <Link to="/SFP28_25G_CWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 CWDM</p></Link>
                    <Link to="/SFP28_LR_25G_Projects" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 LR</p></Link>

                    <Link to="/SFP28_25G__LWDM_products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 LWDM</p></Link>
                    <Link to="/SFP28_25G_DWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 DWDM</p></Link>
                    <Link to="/SFP28_25G_SW" style={{ textDecoration: "none" }}><p className='mob-nav-items'>32GFC SFP28 SW</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series8'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu8} />

                    <Link to="/Product_16GFC_SFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>16GFC SFP+ SW</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series9'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu9} />

                    <Link to="/SFP_100Tx_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP-100TX</p></Link>
                    <Link to="/SFP_1000T_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP-1000T</p></Link>
                    <Link to="/Projects_SFP_10G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP+ 10G-T</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series10'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu10} />

                    <Link to="/X2_DUAL_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G X2 DUAL</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G X2 CWDM</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G X2 DWDM</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series11'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu11} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XENPAK DUAL</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XENPAK CWDM</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XENPAK DWDM</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series12'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu12} />

                    <Link to="/XFP_DWDM_Tunable" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XFP DWDM Tunable</p></Link>
                    <Link to="/10G XFP DWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XFP DWDM</p></Link>
                    <Link to="/XFP_CWDM_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XFP CWDM</p></Link>
                    <Link to="/XFP_BIDI_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XFP BIDI</p></Link>
                    <Link to="/XFP_DUAL_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XFP DUAL</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series13'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu13} />

                    <Link to="/SFP_PLUS_DUAL_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>8GFC SFP+ DUAL</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series14'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu14} />

                    <Link to="/Products_6G_SFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>6G SFP+ DUAL</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series15'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu15} />

                    <Link to="/Products_4G_SFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>4.25G SFP DUAL</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series16'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu16} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>2.5G SFP DWDM</p></Link>
                    <Link to="/Products_SFP_CWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>2.5G SFP CWDM</p></Link>
                    <Link to="/SFP_BIDI_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>2.5G SFP BIDI</p></Link>
                    <Link to="/Products_2point5_Dual" style={{ textDecoration: "none" }}><p className='mob-nav-items'>2.5G SFP DUAL</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series17'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu17} />

                    <Link to="/SFP_1_25G_DWDM_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G SFP DWDM</p></Link>
                    <Link to="/SFP_CWDM_1_25G_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G SFP CWDM</p></Link>
                    <Link to="/Products_SFP_1_25G_BIDI" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G SFP BIDI</p></Link>
                    <Link to="/SFP_Dual_1_25_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G SFP DUAL</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series18'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu18} />

                    <Link to="/Dual_Bidi_LC_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G CSFP Dual Bidi LC</p></Link>
                </div>

                <div className='mobile-nav-all_product' id='series19'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu19} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G GBIC SC</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series20'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu20} />

                    <Link to="/SFF_2X5_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125M/1.25G 2X5 SFF</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series21'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu21} />

                    <Link to="/Products_10G_XG_XGS_PON" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G XG/XGS PON</p></Link>
                    <Link to="/EPON_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G EPON</p></Link>
                    <Link to="/GPON_SFP_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>2.5G GPON SFP</p></Link>
                    <Link to="/EPON_SFP_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G EPON SFP</p></Link>



                </div>

                <div className='mobile-nav-all_product' id='series22'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu22} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G 1X9 BIDI</p></Link>
                    <Link to="/Dual_1X9_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>1.25G 1X9 DUAL</p></Link>
                    <Link to="/CWDM_1X9_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125/155M 1X9 CWDM</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125/155M 1X9 BIDI</p></Link>
                    <Link to="/Ultra_row_1X9_DC" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Ultra-Low Data-Rate 1X9 DC~10Mbps</p></Link>
                    <Link to="/Dual_125_155M_1X9" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125/155M 1X9 DUAL</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series23'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu23} />

                    <Link to="/DWDM_SFP_115M_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125M/155M SFP DWDM</p></Link>
                    <Link to="/125M/155M SFP CWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125M/155M SFP CWDM</p></Link>
                    <Link to="/BIDI_155M_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125M/155M SFP BIDI</p></Link>
                    <Link to="/Products_Dual_SFP_155M" style={{ textDecoration: "none" }}><p className='mob-nav-items'>125M/155M SFP DUAL</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series24'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu24} />

                    <Link to="/Tunable_10G_SFP_DWDM" style={{ textDecoration: "none" }}><p className='mob-nav-items'>SFP+ DWDM Tunable</p></Link>
                    <Link to="/Products_DWDM_10G_SFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G SFP+ DWDM</p></Link>
                    <Link to="/Products_CWDM_10G_SFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G SFP+ CWDM</p></Link>
                    <Link to="/SFP_PLUS_BIDI_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G SFP+ BIDI</p></Link>
                    <Link to="Products_Dual_10G_SFP " style={{ textDecoration: "none" }}><p className='menu-inner-items'>10G SFP+ DUAL</p></Link>

                </div>


                <div className='mobile-nav-all_product' id='series25'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu25} />

                    <Link to="/Products_622M_SFP_BIDI" style={{ textDecoration: "none" }}><p className='mob-nav-items'>622M SFP BIDI</p></Link>
                    <Link to="/Products_622M_SFP_Dual" style={{ textDecoration: "none" }}><p className='mob-nav-items'>622M SFP DUAL</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series26'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu26} />

                    <Link to="/AOC_SPSP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G SFP+ AOC</p></Link>
                    <Link to="/AOC_SFP28_25G" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 AOC</p></Link>
                    <Link to="/Products_40G_QSFP" style={{ textDecoration: "none" }}><p className='mob-nav-items'>40G QSFP+ AOC</p></Link>
                    <Link to="/Products_100G_QSFP28" style={{ textDecoration: "none" }}><p className='mob-nav-items'>100G QSFP28 AOC</p></Link>
                    <Link to="/Products_200G_QSFP56" style={{ textDecoration: "none" }}><p className='mob-nav-items'>200G QSFP56 AOC</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series27'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu27} />

                    <Link to="/DAC_10G_SFPS" style={{ textDecoration: "none" }}><p className='mob-nav-items'>10G SFP+ DAC</p></Link>
                    <Link to="/DAC_25G_SFP28" style={{ textDecoration: "none" }}><p className='mob-nav-items'>25G SFP28 DAC</p></Link>
                    <Link to="/DAC_40G_QSFP_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>40G QSFP+ DAC</p></Link>
                    <Link to="/DAC_100G_QSFP_Products" style={{ textDecoration: "none" }}><p className='mob-nav-items'>100G QSFP28 DAC</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series28'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu28} />

                    <Link to="/Armored_Breakout_Cable" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Armored Breakout Cable</p></Link>
                    <Link to="/Breakout_Cable" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Breakout Cable</p></Link>
                    <Link to="/Mini_Distribution_Cable" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Mini Distribution Cable</p></Link>
                    <Link to="/General_Patch_Cord" style={{ textDecoration: "none" }}><p className='mob-nav-items'>General Patch-cord</p></Link>
                    <Link to="/Energy_Chain_Cable" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Energy Chain Cable</p></Link>
                    <Link to="/High_Strength_And_Suppleness" style={{ textDecoration: "none" }}><p className='mob-nav-items'>High Strength and Suppleness Patch-cord</p></Link>

                </div>

                <div className='mobile-nav-all_product' id='series29'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu29} />

                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Armored Patch-cord / Armored Breakout Cable</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>FTTA Waterproof Cable for Mobile Base Station</p></Link>
                    <Link to="" style={{ textDecoration: "none" }}><p className='mob-nav-items'>Military Tactical Waterproof Cable</p></Link>


                </div>

                <div className='mobile-nav-all_product' id='series30'>
                    <TiBackspaceOutline className='close_icon' onClick={close_menu30} />

                    <Link to="/MPO_PatchCord" style={{ textDecoration: "none" }}><p className='mob-nav-items'>MPO PatchCord</p></Link>



                </div>

            </div>



        </>
    )
}

export default Navbar;