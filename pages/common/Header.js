import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Menu from './Menu';
import API_URL from '../config';

export default function Header() {

    const [width, setwidth] = useState("0");

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get(`${API_URL}/header-frenches`)
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          }
          else{
            axios
              .get(`${API_URL}/headers`)
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      },[])

    const openbtn = {
        fontSize: "30px",
        cursor: "pointer",
        backgroundColor: "white",
        color: "black",
        //padding: "10px 15px",
        border: "none"
      }
    
    const sbuttonstyle = {
        border:"1px solid #593ecc",
        //backgroundColor:"#593ecc",
        color:"#593ecc"
    }
      const openMenu = () => {setwidth("350px")}

      const closeNav = () => {setwidth("0")}
    return (
        <>
            <Menu width={width} closeNav={closeNav}/>      
            {data.map((item) => ( 
            <div key={item.id}>
            <div className="container-fluid text-center p-2" style={{backgroundColor:"pink"}}>
                 {item.txt1}
            </div>
            <div className="container-fluid bg-white p-4">
                <div className="row py-2">
                    <div className="col-sm-7">
                    <button style={openbtn} onClick={openMenu}>☰</button>
                    </div>
                    
                    <div className="col-sm-5">
                        <small className="font-weight-bold" style={{color:"#593ecc"}}>
                            {item.txt2}
                        </small>
                    <button type="button" className="btn btn-outline-primary mx-4 ml-5 px-4" style={sbuttonstyle}>{item.btn1}</button>
                    <button type="button" className="btn btn-primary px-4" style={{backgroundColor:"#593ecc"}}>{item.btn2}</button>
                    </div>
                </div>  
            </div>
            </div>
            ))}
        </>
    )
}
