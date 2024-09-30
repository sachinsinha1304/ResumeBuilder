import React, {useState, useEffect} from 'react'
import Certificate from './Certificate'


function Skills({details, setDetails}) {
    const [skill, setSkill] = useState([])
    let skillList = [
        {
            id: 1,
            name:'c',
            check:false
        },
        {
            id: 2,
            name:'c++',
            check: false
        },
        {
            id: 3,
            name:'python',
            check:false
        },
        {
            id: 4,
            name:'javascript',
            check: false
        },
        {
            id: 5,
            name:'mySQL',
            check:false
        },
        {
            id: 6,
            name:'Postgres',
            check: false
        },
        {
            id: 7,
            name:'oracle',
            check:false
        },
        {
            id: 8,
            name:'Typescript',
            check: false
        },
        {
            id: 9,
            name:'react',
            check:false
        },
        {
            id: 10,
            name:'angular',
            check: false
        },
        {
            id: 11,
            name:'Django',
            check:false
        },
        {
            id: 12,
            name:'Springboot',
            check: false
        },
        {
            id: 13,
            name:'Machine Learning',
            check:false
        },
        {
            id: 14,
            name:'NLP',
            check: false
        },
        {
            id: 15,
            name:'Deep Learning',
            check:false
        },
        {
            id: 16,
            name:'.NET',
            check: false
        }
    ]
    const addSkillToState = (e,name, index)=>{
        skillList[index-1].check = e.target.checked
        
    }

    let optionList = skillList.map((ele)=>
        <li className='col-4' key={ele.id}>
            <input className=" form-check-input" type="checkbox" value={ele.name} name="selected_assets" onChange={(e)=>addSkillToState(e,ele.name, ele.id)} />
            <label className="form-check-label" >{ele.name}</label>
        </li>)

    const submitSkills = ()=>{
        let arr = skillList.filter((ele)=>{
            if (ele.check === true){
                return true
            }
        })
        console.log(arr)
        setDetails({...details, skills:arr})
    }
    return (
        <React.Fragment>
            <div>
                <h1 className='container-heading'>Technical Skills</h1>
                
                <ul className="row">
                    {optionList}
                </ul>
                <button type='button' className='btn btn-primary' onClick={submitSkills}>Add Skills</button>
            </div>
            <Certificate details={details} setDetails={setDetails}/>
            
        </React.Fragment>
    )
}

export default Skills