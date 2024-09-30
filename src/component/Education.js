import React from 'react'

function Education({details,setDetails}) {
    const updateEducation = (e, idx)=>{
        let arr = details.education
        arr[idx]['value'][e.target.name] = e.target.value
        setDetails({...details, education:arr})

    }

    const removeField = (idx)=>{
        let arr = details.education
        arr.splice(idx,1)
        setDetails({...details, education:arr})
    }

    let html = details.education.map((ele,idx)=>
        <div className='box-individual-item' key={idx}>
            <button type='button' onClick={()=>removeField(idx)} className='btn btn-danger'>Remove</button>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Institution's Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control"  name='name' onChange={(e)=>updateEducation(e, idx)} value={ele['value'].name} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Degree</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name='degree' onChange={(e)=>updateEducation(e, idx)} value={ele['value'].degree} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Start Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='startDate' onChange={(e)=>updateEducation(e, idx)} value={ele['value'].startDate} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">End Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='endDate' onChange={(e)=>updateEducation(e, idx)} value={ele['value'].endDate} />
                </div>
            </div>
        </div>
        
    )
    const add = ()=>{
        let arr = details.education
        setDetails({...details, education:[...arr, {
            id:arr.length,
            value:{}
        }]})
    }
    return (
        <div>
            <h1 className='container-heading'>Education</h1>
            {html}
            <div className='notification'>
                <span> <i> Please Click on New Button to add new Fields</i></span>
                <button onClick={add} className="btn btn-primary back" type="button">New</button>
            </div>
            
        </div>
    )
}

export default Education