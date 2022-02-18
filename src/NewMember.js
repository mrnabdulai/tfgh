import React, { useRef } from "react";
import {useHistory} from 'react-router-dom'
import Axios from "axios";
import './NewMember.css'
function NewMember() {

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

    Axios.post("https://desolate-caverns-10306.herokuapp.com/add-member", {
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
            alert("New member added");
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
          <input type='text' name='firstName' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Last Name</label>
          <input type='text' name='lastName' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Date of Birth</label>
          <input type='date' name='dob' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Gender</label>
          <select name='gender'>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Blood type</label>
          <select name='bloodType'>
            <option value='O'>O</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='AB'>AB</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Contact</label>
          <input type='text' name='contact' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Has NHIS</label>
          <input ref={nhisCheckboxRef} type='checkbox' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>Region</label>
          <select name='region'>
            <option value='Northern'>Northern</option>
            <option value='Ashanti'>Ashanti</option>
            <option value='Greater Accra'>Greater Accra</option>
            <option value='Central'>Central</option>
          </select>
        </div>

        <div className='input__field'>
          <label htmlFor=''>Nationality</label>
          <input type='text' name='nationality' />
        </div>

        <div className='input__field'>
          <label htmlFor=''>No. Visited</label>
          <input type='number' name='numberOfTimesVisited' />
        </div>
        <button type='submit'>Add Member</button>
      </form>
    </div>
  );
}

export default NewMember;
