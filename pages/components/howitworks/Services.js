import React, { useState, useEffect} from 'react'
import axios from 'axios';
import API_URL from '../../config';

export default function Services(props) {

    const [data, setData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("lang")==="french"){
            axios
              .get(`${API_URL}/service-odd-frenches`)
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
              .get(`${API_URL}/serviceodds`)
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
        paddingLeft:"10%",
        paddingTop:"8%",
        paddingBottom:"10%"
      };

    const listyle = {
        color:"pink",
        fontSize:"46px"
    }

    const pstyle = {
        color:"black",
        fontSize:"20px"
    }
    return (
        <>
        {data.map((item) => (
        <div className="container-fluid bg-white" key={item.id}>
                <div className="row" style={mystyle}>
                    <div className="col-sm-6">
                    <h1 >{props.number}.{item.heading}</h1>
                    <br/><br/><br/><br/>
                    <img src={`/${item.img1.name}`} className="img-fluid"/>
                    </div>
                    <div className="col-sm-5" style={{paddingTop:"21%"}}>
                        <ul>
                            <li style={listyle}><p style={pstyle}>{item.txt1}</p></li>
                            <li style={listyle}><p style={pstyle}>{item.txt2}</p></li>
                            <li style={listyle}><p style={pstyle}>{item.txt3}</p></li>
                        </ul>
                    </div>
                </div>  
            </div>
        ))}
        </>
    )
}
