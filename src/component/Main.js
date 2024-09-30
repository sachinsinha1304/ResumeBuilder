import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import User from './User'
import './../css/Main.css'
import Education from './Education'
import Experience from './Experience'
import Review from './Review'
import Skills from './Skills'

function Main() {
    const [details, setDetails] = useState({
        name:'',
        email:'',
        contact:'',
        address:'',
        city:'',
        pincode:'',
        state:'',
        intro:'',
        education : [],
        experience: [],
        certificate: [],
        skills: []
    })
    const [page, setPage] = useState(1)
    let html

    useEffect(()=>{
        console.log(page)
        if (page === 5){
            setPage(page-1)
            alert("this is the last page")
        }
    }, [page])
    if (page === 1){
        html = <User details={details} setDetails={setDetails} />
    }
    else if (page === 2){
        html = <Education details={details} setDetails={setDetails} />
    }
    else if (page === 3){
        html = <Experience details={details} setDetails={setDetails}/>
    }
    else if(page === 4){
        html = <Skills details={details} setDetails={setDetails}/>
    }
    else if (page === 5){
        html = <Review details={details} />
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className='container container-box-style'>
                <form>
                    {html}
                    <div>
                        <button onClick={() =>setPage(page+1)} className="btn btn-primary next" type="button">Next</button>
                        <button onClick={() =>setPage(page-1)} className="btn btn-primary back" type="button">Back</button>
                    </div>
                </form>
                
            </div>
            
        </React.Fragment>
    )
}

export default Main