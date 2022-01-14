import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    var Logo = require('../assets/client/logo.png')

  return (
    <header style={{marginTop: "50px"}}>
      <MDBNavbar expand='lg' light bgColor='black' className='text-light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse justify-between' id='navbarExample01'>
              <div style={{color: 'white', fontSize: '30px'}}>
                  <img src={Logo} style={{width: '300px', fontSize: '30px'}}/>
              </div>
            <MDBNavbarNav right className='mb-2 mb-lg-0' style={{justifyContent: 'flex-end'}}>
              <MDBNavbarItem active className='mt-0 me-4'>
                <MDBNavbarLink aria-current='page' href='#' className='text-light fs-5'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mt-0 me-3'>
                <MDBNavbarLink href='#' className='text-light fs-5'>About</MDBNavbarLink>
              </MDBNavbarItem >
               <MDBNavbarItem className='mt-0 me-3'>
                <MDBNavbarLink href='#' className='text-light fs-5'>Our Story</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mt-0 me-3'>
                <MDBNavbarLink href='#' className='text-light fs-5'>Service</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mt-0 me-4'>
                <MDBNavbarLink href='#' className='text-light fs-5'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}