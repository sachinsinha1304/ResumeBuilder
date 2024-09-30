import React from 'react'

function Certificate({details,setDetails}) {
    const updateCertificate = (e, idx)=>{
        let arr = details.certificate
        arr[idx]['value'][e.target.name] = e.target.value
        setDetails({...details, certificate:arr})

    }

    const removeField = (idx)=>{
        let arr = details.certificate
        arr.splice(idx,1)
        setDetails({...details, certificate:arr})
    }

    let html = details.certificate.map((ele,idx)=>
        <div className='box-individual-item' key={idx}>
            <button type='button' onClick={()=>removeField(idx)} className='btn btn-danger'>Remove</button>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name='course' onChange={(e)=>updateCertificate(e, idx)} value={ele['value'].course} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Institution's Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control"  name='name' onChange={(e)=>updateCertificate(e, idx)} value={ele['value'].name} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Start Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='startDate' onChange={(e)=>updateCertificate(e, idx)} value={ele['value'].startDate} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">End Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='endDate' onChange={(e)=>updateCertificate(e, idx)} value={ele['value'].endDate} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">URL link</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name='url' onChange={(e)=>updateCertificate(e, idx)} value={ele['value'].url} />
                </div>
            </div>
        </div>
        
    )
    const add = ()=>{
        let arr = details.certificate
        setDetails({...details, certificate:[...arr, {
            id:arr.length,
            value:{}
        }]})
    }
    return (
        <div>
            <h1 className='container-heading'>Certificates</h1>
            {html}
            <div className='notification'>
                <span> <i> Please Click on New Button to add new Fields</i></span>
                <button onClick={add} className="btn btn-primary back" type="button">New</button>
            </div>
        </div>
    )
}

export default Certificate