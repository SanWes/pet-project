import React, {useState} from 'react';

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [picLink, setPicLink] = useState("");



    return (
        <div className = "container">
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {(e)=>setName(e.target.value)} type="text" name="" id="" className="form-control" />
                    {name.length < 3 || name.length > 20?
                    <p className="text-danger">Name of pet must be between 3-20 characters</p>:
                    ""
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input onChange = {(e)=>setType(e.target.value)}type="text" name="" id="" className="form-control" />
                </div>
                {type.length <1?<p className="text-danger">Type is required</p>:""}
                <div className="form-group">
                    <label htmlFor="">Service Requested:</label>
                    {service.length <1?<p className="text-danger">Please Select a Service</p>:""}
                    <select onChange = {(e)=>setService(e.target.value)}name="" id="" className= "form-select">
                        {/* <optgroup label="Services">
                            <option>Please select a service</option>
                        </optgroup> */}
                        {/* <option disabled="true" value="">Please Select a Service</option> */}
                        <option style={{display:"none"}}>Please Select One Service</option>
                        <option value="Regular Grooming (Shampoo wash + haircut)">Regular Grooming (Shampoo wash + haircut)</option>
                        <option value="Regular Grooming Plus (Shampoo wash + haircut + nails/claws clipping)">Regular Grooming Plus (Shampoo wash + haircut + nails/claws clipping)</option>
                        <option value="My pet lives better than you (Regular Grooming Plus + massage + day care + hair bow/bow tie)">My pet lives better than you (Regular Grooming Plus + massage + day care + hair bow/bow tie)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Select appointment date</label>
                    <input onChange = {(e)=>setDate(e.target.value)}type="date" name="" id=""  className= "form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Picture Link:</label>
                    <input onChange = {(e)=>setPicLink(e.target.value)} type="text" name="" id="" className= "form-control"/>
                </div>
                <input type="submit" value="Reserve Appointment!" className= "btn btn-success mt-3"/>
            </form>

            <hr />
            <h3>Your Pet's info:</h3>
            <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Service: {service}</p>
                <p>Date: {date}</p>
                <p>Picture: <img src={picLink} alt="" width = "300px"/></p>

            </div>
        </div>
    );
};


export default PetForm;