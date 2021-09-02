import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Row,Col} from 'react-bootstrap';
import "./card.css"
import Tilt from 'react-tilt'
export default function CardPage({curElem}) {


   const [users,setUsers]=useState([]);
 const getUsers=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
    setUsers(await response.json());

  };
  useEffect(()=>
   {
    getUsers();
   },[]);
  
    return (
      <div className="container-fluid mt-5" >
   
      <div className="row text-center">
        {
        users.map((curElem)=>{
          return(
            <div className="col-10 col-md-4 mt-5">
              <Tilt className="Tilt" options={{ max : 35 }} >
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image"> <img src={curElem.thumbnailUrl} class="rounded" width="155" /></div>
                      <div cl="ml-3 w-100">
                        <h5 class="mb-0 mt-0 textLeft">{curElem.title}</h5><span className="textLeft"></span>
                    
                      </div>
                  </div>
                </div>
              </Tilt>
            </div>
          )
        })
        }
      </div>
    </div>
  
    
    );
  }