import React, { useState, useEffect } from 'react'
import axios from 'axios';
import API_URL from '../../config';

export default function Navigator() {

    const [width, setwidth] = useState("0");

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get(`${API_URL}/our-service-navigator-frenches`)
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
              .get(`${API_URL}/our-service-navigators`)
              .then(res => {
                //console.log(res)
                setData(res.data)
              })
              .catch(err => {
                console.log(err)
              })
          } 
      },[])

    const mystyle = {
        //paddingLeft:"4%",
        paddingTop:"4%",
        paddingBottom:"13%"
      };

    return (
        <>
        {data.map((item) => ( 
        <div className="container-fluid bg-light">
                <div className="row bg-white border">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-5" style={mystyle}>
                        <h1 className="font-weight-bold" style={{fontSize:"49px"}}>{item.heading}</h1>
                        <br/>
                        <h3 >{item.txt1}</h3>
                    </div>
                    <div className="col-sm-5">
                    <img src={`/${item.img1.name}`} className="img-fluid"/>
                    </div>
                    <div className="col-sm-1">
                    </div>
                </div>  
            </div>
        ))}
        </>
    )
}
