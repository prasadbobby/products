import React from 'react';
import data from './data/data.json';







export default function productdetails(props) {


        let info=data.products[props.location.data.id]
        console.log(info.name)
        console.log(info.Highlights);

    return (
         <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={info.img} alt="profile Icon" style={{width:"30%"}}/>
                        <h4>{info.name}</h4>
                        <h4 className="text-secondary">{info.price}</h4>
                      
                    </div>
                </div>
            </div>

            {/* details part*/ }

            <div className="col-lg-8 m-2">
                <div className="card shadow" >
                    <div className="card-body">
                        <h2>Product details:</h2>
                        <hr />
                        <h2>Highlights</h2>
                        <ul class="list-group">
                            
                            {info.Highlights.map(element => (
                                <l1 class="list-group-item" >{element}</l1>
                            ))}
                        </ul>
                        <h2>Specifications</h2>
                        <ul class="list-group">
                            
                            {info.specifications.map(element => (
                                <l1 class="list-group-item" >{element}</l1>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}