import React, { useState, useEffect } from 'react'
import axios from 'axios';
import API_URL from '../../config';

export default function Navigator() {

    const [width, setwidth] = useState("0");

    const [data, setData] = useState([]);
    useEffect(() => {
      if(sessionStorage.getItem("lang")==="french"){
          axios
            .get(`${API_URL}/navigator-frenches`)
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
            .get(`${API_URL}/navigators`)
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
        paddingLeft:"4%",
        paddingTop:"10%",
        paddingBottom:"13%"
      };

    return (
        <>
        {data.map((item) => ( 
        <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-6" style={mystyle}>
                        <h1 className="font-weight-bold" style={{fontSize:"49px"}}>{item.heading}</h1>
                        <br/>
                        <p className="text-monospace">{item.txt1}</p>
                    </div>
                    <div className="col-sm-6">
                    <img src={`/${item.img1.name}`} className="img-fluid"/>
                    </div>
                </div>  
            </div>
        ))}
        </>
    )
}
