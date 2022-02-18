import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import Axios from "axios";
import './NewMember.css'
function EditMember() {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [dob, setDob] = useState('')
const [gender, setGender] = useState('')
const [bloodType, setBloodType] = useState('')
const [contact, setContact] = useState('')
const [region, setRegion] = useState('')
const [nationality, setNationality] = useState('')
const [numberOfTimesVisited, setNumberOfTimesVisited ]= useState('')
const [ hasNHIS, setHasNHIS] = useState('')



const [member, setMember] = useState({});
  // /members/:memberId

  let { memberId } = useParams();

  console.log(memberId);

  useEffect(() => {
    axios
      .get(`https://desolate-caverns-10306.herokuapp.com/members/${memberId}`)
      .then((result) => {
        console.log(result);
        setFirstName(result.data.firstName)
        setLastName(result.data.lastName)
        setDob(result.data.dob)
        setGender(result.data.gender)
        setBloodType(result.data.bloodType)
        setContact(result.data.contact)
        setRegion(result.data.region)
        setNationality(result.data.nationality)
        setNumberOfTimesVisited(result.data.numberOfTimesVisited)
        setHasNHIS(result.data.hasNHIS)
        // setMember(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



    const history = useHistory()
  const addMember = (e) => {
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const dob = e.target.dob.value;
    const gender = e.target.gender.value;
    const bloodType = e.target.bloodType.value;
    const contact = e.target.contact.value;
    const region = e.target.region.value;
    const nationality = e.target.nationality.value;
    const numberOfTimesVisited = e.target.numberOfTimesVisited.value;
    e.preventDefault();

    // console.log({
    //     firstName,
    //     lastName,
    //     dob,
    //     gender,
    //     bloodType,
    //     contact,
    //     region,
    //     nationality,
    //     numberOfTimesVisited,
    //      hasNHIS
    // })

    // if(nhisCheckboxRef.current.checked){
    //     console.log('hurray')
    // }
    // else{
    //     console.log('holla')
    // }
    const hasNHIS = nhisCheckboxRef.current.checked ? "Y" : "N";

    // console.log(hasNHIS)

    Axios.put(`https://desolate-caverns-10306.herokuapp.com/members/edit/${memberId}`, {
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
    })
      .then((result) => {
        console.log(result);
        if(result.status == 201){
            alert("User edited");
            history.goBack()
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch('http://localhost:9000/').then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })
  };
  const formRef = useRef();
  const nhisCheckboxRef = useRef();
  return (
    <div className="newMember__form">
      <form 
        ref={formRef}
        onSubmit={(e) => {
          addMember(e);
        }}
        id='new_member_form'
      >
        <div className='input__field'>
          <label htmlFor=''>First Name</label>
          <input type='text' name='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Last Name</label>
          <input type='text' name='lastName'  value={lastName} onChange={(e)=> setLastName(e.target.value)} />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Date of Birth</label>
          <input type='date' name='dob'  value={dob} onChange={(e)=> setDob(e.target.value)} />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Gender</label>
          <select name='gender'  value={gender} onChange={(e)=> setGender(e.target.value)} >
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Blood type</label>
          <select name='bloodType'  value={bloodType} onChange={(e)=> setBloodType(e.target.value)}>
            <option value='O'>O</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='AB'>AB</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Contact</label>
          <input type='text' name='contact'  value={contact} onChange={(e)=> setContact(e.target.value)} />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Has NHIS</label>
          <input ref={nhisCheckboxRef} type='checkbox'   value={hasNHIS} onChange={(e)=> setHasNHIS(e.target.value)}/>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Region</label>
          <select name='region'  value={region} onChange={(e)=> setRegion(e.target.value)}>
            <option value='Northern'>Northern</option>
            <option value='Ashanti'>Ashanti</option>
            <option value='Greater Accra'>Greater Accra</option>
            <option value='Central'>Central</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Nationality</label>
          <input type='text' name='nationality'  value={nationality} onChange={(e)=> setNationality(e.target.value)} />
        </div>

        <div className='input__field'>
          <label htmlFor=''>No. Visited</label>
          <input type='number' name='numberOfTimesVisited'  value={numberOfTimesVisited} onChange={(e)=> setNumberOfTimesVisited(e.target.value)}/>
        </div>
        <button type='submit'>EditMember</button>
      </form>
    </div>
  );
}

export default EditMember;
