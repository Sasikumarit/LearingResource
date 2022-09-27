import React,{useState } from 'react'

import './UserRegistration.css'
import loginimage from '../asset/download.png'

const UserRegistration = () =>{
const [userregisterdata,setUserRegisterdata]=useState({dataShow:false,name:"",age:"",dob:"",gender:"",address:"",city:"",state:"",pincode:"",iagree:false});

const onChangeHandler=(event)=>{
  console.log("event",event)
  let {id,value}=event.target;
 
  if(id==='iagree'){
    value=!userregisterdata.iagree
  }
  setUserRegisterdata({...userregisterdata,[id]:value})
}
const onSubmitHandler=()=>{
  setUserRegisterdata({...userregisterdata,dataShow:!userregisterdata.dataShow})
}
const onClearHandler=()=>{
  setUserRegisterdata({dataShow:false,name:"",age:"",dob:"",gender:"",address:"",city:"",state:"",pincode:"",iagree:false})
}

 return(<div>
 <h1>Sample Program</h1>

 <div>
   <a href="home.html">Home</a>

   <table id="Regitrationtable">
     <tr className="tablerow">
       <td>
         <img src={loginimage} style={{ width: 50, height: 50 }} alt="regitrationimage"/>
       </td>
       <td>Registration</td>
     </tr>
     <tr className="tablerow">
       <td className="tablecolumn">Name</td>
       <td>
         <input type="text" id="name" className="ipcontrol" onChange={onChangeHandler} value={userregisterdata.name}/>
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">Age</td>
       <td>
         <input type="number" id="age" className="ipcontrol" onChange={onChangeHandler}value={userregisterdata.age}/>
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">DOB</td>
       <td>
         <input type="date" className="ipcontrol" id="dob" onChange={onChangeHandler} value={userregisterdata.dob}/>{" "}
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">Gender</td>

       <td>
         <input type="radio" id='gender' name='gender' value='male'checked={userregisterdata.gender==='male'?true:false} onChange={onChangeHandler}/>
         <label>Male</label>
         <input type="radio" id='gender'  name='gender' value='female' checked={userregisterdata.gender==='female'?true:false} onChange={onChangeHandler}/>
         <label>Female</label>
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">Address</td>
       <td>
         <textarea className="ipcontrol" id="address" onChange={onChangeHandler} value={userregisterdata.address}></textarea>
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">City</td>

       <td>
         <select className="ipcontrol" id='city' onChange={onChangeHandler} value={userregisterdata.city}>
           <option> Mettupalyam</option>
           <option> Coimbatore</option>
         </select>
       </td>
     </tr>
     <tr className="tablerow">
       <td className="tablecolumn">State</td>

       <td>
         <select className="ipcontrol" id="state" onChange={onChangeHandler} value={userregisterdata.state}>
           <option> TN</option>
           <option> KN</option>
         </select>
       </td>
     </tr>
     <tr className="tablerow">
       <td className="tablecolumn">Pincode</td>
       <td>
         <input type="number" className="ipcontrol" id='pincode' onChange={onChangeHandler} value={userregisterdata.pincode}/>
       </td>
     </tr>

     <tr className="tablerow">
       <td className="tablecolumn">Attachment</td>
       <td>
         <input type="file" className="ipcontrol" />
       </td>
     </tr>
     <tr className="tablerow">
       <td>
         <input type="checkbox" id='iagree' checked={userregisterdata.iagree} value={userregisterdata.iagree} onChange={onChangeHandler} /> I agree
       </td>
     </tr>

     <tr className="tablerow">
       <td>
         <button
           className="btnsubmit"
           onClick={onSubmitHandler}
         >
           Submit
         </button>
       </td>
       <td>
         <button className="btnclear" onClick={onClearHandler}>Clear</button>
       </td>
       <td>
         <button className="btncancel">Cancel</button>
       </td>
     </tr>
   </table>
 </div>
        {userregisterdata.dataShow ?JSON.stringify(userregisterdata):null}
    </div>)
}

export default UserRegistration