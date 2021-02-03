import React, { useState, useEffect } from 'react'
import axios from 'axios';
import API_URL from '../../config';


export default function Navigator2() {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get(`${API_URL}/our-service-navigator-2-frenches`)
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
              .get(`${API_URL}/our-service-navigator-2-s`)
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

    const bgColor = {
        backgroundColor:"#593ecc"
      };
    return (
        <>
        {data.map((item) => (
        <div key={item.id}>
        <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6 text-center">
                        <br/>
                        <br/>
                        <br/>
                        <p className="font-weight-bold text-black" style={{fontSize:"41px"}}>{item.heading}</p>
                        <p className="text-monospace">{item.txt1}</p>
                        <p className="text-monospace">{item.txt2}</p>
                        <img src={`/${item.img1.name}`} className="img-fluid"/>
                        <br/>
                        <br/>
                        <p className="text-monospace">{item.txt3}</p>
                        <br/>
                        <h5 className="font-weight-bolder">{item.txt4}</h5>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>  
        </div>
            
        </div>
        ))}
        </>
    )
}
