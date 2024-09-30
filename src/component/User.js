import React from 'react'

function User({details, setDetails}) {

    
  return (
    <React.Fragment>
        <h1 className="container-heading">User Information</h1>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            <input type="text" className="form-control"  name='name' onChange={(e)=>setDetails({...details, name:e.target.value})} value={details.name} />
            </div>
        </div>
        <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="email" onChange={(e)=>setDetails({...details, email:e.target.value})} value={details.email} />
            </div>
        </div>
        <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Contact No.</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="contact" onChange={(e)=>setDetails({...details, contact:e.target.value})} value={details.contact} />
            </div>
        </div>
        <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="addresss" onChange={(e)=>setDetails({...details, address:e.target.value})} value={details.address} />
            </div>
        </div>
        <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">City</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="city" onChange={(e)=>setDetails({...details, city:e.target.value})} value={details.city}  />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">pincode</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="pincode" onChange={(e)=>setDetails({...details, pincode:e.target.value})} value={details.pincode}  />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">State</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="state" onChange={(e)=>setDetails({...details, state:e.target.value})} value={details.state}  />
            </div>
        </div>
        <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Introduction</label>
            <div className="col-sm-10">
            <textarea className="form-control" rows='5' name="intro" onChange={(e)=>setDetails({...details, intro:e.target.value})} value={details.intro}  />
            </div>
        </div>
    </React.Fragment>
  )
}

export default React.memo(User)