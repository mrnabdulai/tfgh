import axios from "axios";
import React, {useEffect} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./MemberRow.css";
function MemberRow({
    id,
  firstName,
  lastName,
  dob,
  gender,
  bloodType,
  contact,
  region,
  nationality,
  numberOfTimesVisited,
  hasNHIS,
}) {

    const deleteMember = (id) =>{
        axios.delete(`https://desolate-caverns-10306.herokuapp.com/members/${id}`).then(res => {
            console.log(res)
            history.go(0)

        }).catch(err=> {
            console.log(err)
        })
    } 

    const history = useHistory();


    const editMember  = (id) =>{
        history.push(`/edit-member/${id}`)
        
    }

  
  return (
    <tr className='member__row' style={{ textAlign: "center" }}>
      <img src='/profile.jpg' alt='' />
      <td onClick={(e)=> {history.push(`/members/${id}`)}}>{firstName + lastName}</td>
      <td>{dob}</td>
      <td>{gender}</td>
      <td>{numberOfTimesVisited}</td>
      <td>{hasNHIS}</td>
      <td>
        <button className="edit" onClick={(e)=> editMember(id)}>Edit</button>
        <button className="delete" onClick={(e)=> {deleteMember(id)}}>delete</button>
      </td>
    </tr>
  );
}

export default MemberRow;
