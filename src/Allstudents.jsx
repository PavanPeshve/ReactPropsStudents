import React from 'react'

const Allstudents = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center", width:"100%", tableLayout:"fixed", borderCollapse:"collapse"}}>
            <tr>
                <th>StudentName</th>
                <th>RollNo</th>
                <th>overAllPercentage</th>
                <th>passORfail</th>
                <th>studentPhoto</th>
            </tr>
            {data.map((x)=>{
                return <tr>
                   <td>{x.studentName}</td>
                   <td>{x.rollNo}</td>
                   <td>{x.overAllPercentage}</td>
                   <td>{x.passORfail}</td>
                   <td> <img src={x.studentPhoto}  style={{height:"50px", width:"50px"}}/> </td>      
                </tr>
            })}
        </table>
    </div>
  )
}

export default Allstudents