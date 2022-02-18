import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MemberRow from "./MemberRow";
import "./Members.css";

function Members() {
  const [members, setMembers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://desolate-caverns-10306.herokuapp.com/members")
      .then((result) => {
        console.log(result.data);   
        setMembers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='members__table'>
      <div style={{width:"100%", textAlign: 'center', marginBottom:"30px"}}>
        <button
        className="add_btn"
          onClick={() => {
            history.push("/new-member");
          }}
        >
          Add new Member
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>No.Visited</th>
            <th>NHIS available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(
            ({_id,
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
            }, index) => (
              <MemberRow
              key={index}
                firstName={firstName}
                lastName={lastName}
                dob={dob}
                gender={gender}
                bloodType={bloodType}
                contact={contact}
                region={region}
                nationality={nationality}
                numberOfTimesVisited={numberOfTimesVisited}
                hasNHIS={hasNHIS}
                id={_id}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Members;
