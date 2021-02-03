import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Header from './common/Header';
import Navigator from './components/howitworks/Navigator';
import Services from './components/howitworks/Services';
import ServicesEven2 from './components/howitworks/ServicesEven2';
import ServicesEven4 from './components/howitworks/ServicesEven4';
import ServicesOdd from './components/howitworks/ServicesOdd';
import Footer from './common/Footer';
import API_URL from './config';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function HowItWorks(props) {

  const [data, setData] = useState([]);
  const [dataOdd, setDataOdd] = useState([]);

  useEffect(() => {
    if(sessionStorage.getItem("lang")==="french"){
        axios
          .get(`${API_URL}/service-odd-3-frenches`)
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
          .get(`${API_URL}/service-odd-3-s`)
          .then(res => {
            //console.log(res)
            setData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      } 
  },[])

  useEffect(() => {
    if(sessionStorage.getItem("lang")==="french"){
        axios
          .get(`${API_URL}/service-odd-5-frenches`)
          .then(res => {
            //console.log(res)
            setDataOdd(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
      else{
        axios
          .get(`${API_URL}/service-odd-5-s`)
          .then(res => {
            //console.log(res)
            setDataOdd(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      } 
  },[])
  //console.log(">>>>>>"+data);
  //console.log(">>>>>>"+detailsEven);
  //console.log(">>>>>>"+detailsOdd);
    return (
        <>

            <Header/>
            <Navigator/>
            <Services 
            number="1"
            
            />
            
            <ServicesEven2 
            number="2"
            />

            <ServicesOdd 
            number="3" 
            data={data}
            />
            
            <ServicesEven4 
            number="4"
            />
            
            <ServicesOdd 
            number="5" 
            data={dataOdd}
            />

            <Footer/>            
        </>
    )
}
