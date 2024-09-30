import React from 'react'

function Experience({details,setDetails}) {
    const updateExperience = (e, idx)=>{
        let arr = details.experience
        arr[idx]['value'][e.target.name] = e.target.value
        setDetails({...details, experience:arr})

    }

    const removeField = (idx)=>{
        let arr = details.experience
        arr.splice(idx,1)
        setDetails({...details, experience:arr})
    }

    let html = details.experience.map((ele, idx)=>
        <div className='box-individual-item' key={idx}>
            <button type='button' onClick={()=>removeField(idx)} className='btn btn-danger'>Remove</button>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Employer's Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control"  name='name' onChange={(e)=>updateExperience(e, idx)} value={ele['value'].name} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Position</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" name='position' onChange={(e)=>updateExperience(e,idx)} value={ele.value.position} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Start Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='startDate' onChange={(e)=>updateExperience(e, idx)} value={ele.value.startDate} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">End Year</label>
                <div className="col-sm-10">
                <input type="datetime-local" className="form-control" name='endDate' onChange={(e)=>updateExperience(e, idx)} value={ele.value.endDate} />
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">Role</label>
                <div className="col-sm-10">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" name='role' onChange={(e)=>updateExperience(e, idx)} value={ele.value.role}></textarea>
                </div>
            </div>
        </div>
        
    )
    const add = ()=>{
        let arr = details.experience
        setDetails({...details, experience:[...arr, {
            id:arr.length,
            value:{}
        }]})
    }
    return (
        <div>
            <h1 className='container-heading'>Experience</h1>
            {html}
            <div className='notification'>
                <span> <i> Please Click on New Button to add new Fields</i></span>
                <button onClick={add} className="btn btn-primary back" type="button">New</button>
            </div>
        </div>
    )
}

export default Experience