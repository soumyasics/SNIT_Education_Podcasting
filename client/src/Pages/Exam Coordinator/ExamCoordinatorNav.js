import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assest/Logo (1).png";
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
function ExamCoordinatorNav() {

    const navigate=useNavigate();

    const handleviewreq = () => {
        navigate("/examcoordinateviewrequest")
    }

    const handleviewall = () => {
        navigate("/examcoordinateviewall")
    }
  return (
    <div>
        <Navbar>
            <Container>
                <img className="footerimg" src={logo} alt="img"></img>
                <Navbar.Collapse className="justify-content-end">
                    <Link
                        to="/examcoordinatehome"
                        className="examcoordinate-nav-home"
                        >
                        <b>Home</b>
                    </Link>
                    <Dropdown className='ms-5'>
                        <Dropdown.Toggle variant="white" style={{border:'none'}} className="examcoordinate-nav-home">
                            <b>Exam</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={handleviewreq}>View Request</Dropdown.Item>
                            <Dropdown.Item onClick={handleviewall}>View All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default ExamCoordinatorNav
