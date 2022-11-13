import { useEffect } from "react"
import { useState } from "react"
import Table from "./Table"
import Style from "./Form.module.css"

const Form = () => {
    const [firstName , setFirstName] = useState(" ")
    const [data , setData] = useState([])
    const [lastName,setLastName] = useState("") 
    const [number,setNumber] = useState("")
    const [date,setDate] = useState("")
    const [State,setState] = useState("")
    // const [newData , setNewData] = useState("")

    
    const submitData = (e)=>{
        e.preventDefault()
        setData( [...data , {fname: firstName , lname: lastName , contact: number , Date : date , State: State}])
        
    localStorage.setItem(
        "items",
        JSON.stringify([...data , {fname: firstName , lname: lastName , contact: number , Date : date , State: State}])
    )
    }
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("items"))
        if(data){
            setData(data)
        }
    },[])

    const handleClick = (i)=>{
        const newData = [...data];
        newData.splice(i , 1);
        setData(newData);

        localStorage.setItem("items", JSON.stringify([...newData]));
    }

  return (
    <div>
        <form id={Style.form} onSubmit={submitData}>
            <input onChange={(e)=>setFirstName(e.target.value) } type="text" placeholder='Enter Your Name'/> <br />
            <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Last Name'/><br />
            <input onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='Enter the Mobile number'/><br />
            <input onChange={(e)=>setDate(e.target.value)} type="date" /><br />
            <label> Select State:</label> <select name="State" id="states"
            onChange={(e)=>setState(e.target.value)}
            >
                <option value="Maharashtra" placeholder="Select-Your-State"> Maharashtra</option>
                <option value="Goa"> Goa</option>
            </select><br />
            < input id={Style.submit} type="submit" value="Submit" />
        </form>
        

<table id={Style.table}>
        <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Date</th>
                <th>State</th>
                </tr>
        </thead>
        {
            data.map((item, i)=>{
                return <Table key={i} fname= {item.fname} handleClick = {handleClick} lname= {item.lname} index= {i} cont = {item.contact} date = {item.Date} state= {item.State}/>
            })
        }   
        </table> 
        
    </div>


  )
}

export default Form