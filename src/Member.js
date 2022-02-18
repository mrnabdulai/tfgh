import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import './Member.css'
function Member() {
  const [member, setMember] = useState({});
  // /members/:memberId
  const location = useLocation;

  console.log(location.name);
  let { memberId } = useParams();

  console.log(memberId);

  useEffect(() => {
    axios
      .get(`https://desolate-caverns-10306.herokuapp.com/${memberId}`)
      .then((result) => {
        console.log(result);
        setMember(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const {
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
  } = member;
  return (
    <div className='member'>
    <img src="/profile.jpg" alt="" />
      <div className='member__field'>
        <p>First Name</p>
        <p>{firstName}</p>
      </div>

      <div className='member__field'>
        <p>Last Name</p>
        <p>{lastName}</p>
      </div>

      <div className='member__field'>
        <p>Date of Birth</p>
        <p>{dob}</p>
      </div>

      <div className='member__field'>
        <p>Gender</p>
        <p>{gender}</p>
      </div>

      <div className='member__field'>
        <p>Blood Type</p>
        <p>{bloodType}</p>
      </div>

      <div className='member__field'>
        <p>Contact</p>
        <p>{contact}</p>
      </div>

      
      <div className='member__field'>
        <p>Region</p>
        <p>{region}</p>
      </div>

      
      <div className='member__field'>
        <p>Has NHIS</p>
        <p>{hasNHIS}</p>
      </div>

      
      <div className='member__field'>
        <p>Nationality</p>
        <p>{nationality}</p>
      </div>

      <div className='member__field'>
        <p>Number of Visits</p>
        <p>{numberOfTimesVisited}</p>
      </div>
      <button>Edit</button>
    </div>
  );
}

export default Member;
