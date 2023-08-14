import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

function HodRegister() {

   const [formData, setformData] = useState({
        HOD :'',
        staff :'',
        firstname :'',
        lastname :'',
        email :'',
        contact :'',
        department :'',
        username :'',
        password :[],
   })

   const [first, setfirst] = useState([])

   const [radio, setradio] = useState(null)
   

   const handleRadioEmp=(e)=>{
    setradio(e.target.value)
    navigate('/empregister')
   }
   const handleRadioHod=(e)=>{
    setradio(e.target.value)
    navigate('/hodregister')
   }

   console.log(first);
   const onChangeHandler=(event)=>{
    console.log(event.target.value);
    setformData((prev)=>({...prev, [event.target.name] : event.target.value}))
//     setformData((e)=>({
//         ...formData, [event.target.name]:event.target.value
//     }))
   }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setfirst([...first,formData])
        if(formData.firstname === "" ){
            alert('please fill the first name')
        }else if(formData.lastname === ""){
            alert('please fill the last name')
        }else if(formData.email === ""){
            alert('please fill the email correctly')
        }else if(formData.contact === ""){
            alert('please fill the contact number')
        }else if(formData.username === ""){
            alert('please fill the username')
        }else if(formData.password === ""){
            alert('please fill the password')
        }else{
            localStorage.setItem('hoduser',JSON.stringify([...first,formData]))
            setformData({
                HOD :'',
                staff :'',
                firstname :'',
                lastname :'',
                email :'',
                contact :'',
                department :'',
                username :'',
                password :'',})
        }
    }

    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/empregister')
    }

  return (

    <>

            <form onSubmit={handleSubmit}>

                <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

            

                <Box sx={{margin:'0 auto'}}>
                <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>HOD
                            <input type='radio' checked={radio === '1'} onChange={handleRadioHod} size='small'  margin='normal' name='HOD' value={'1'} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>STAFF
                            <input type='radio' checked={radio === '2'} onChange={handleRadioEmp} size='small' placeholder='Enter Last Name' margin='normal' name='staff' value={'2'} sx={{ mb: 2 }} />
                        </FormLabel>
                </Box>     
                    <> <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>First Name
                            <TextField onChange={onChangeHandler} size='small' placeholder='Enter First Name' margin='normal' name='firstname' value={formData.firstname} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Last Name
                            <TextField onChange={onChangeHandler} size='small' placeholder='Enter Last Name' margin='normal' name='lastname' value={formData.lastname} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Email
                                <TextField onChange={onChangeHandler} size='small' placeholder='Enter Email' margin='normal' name='email' value={formData.email} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Contact
                                <TextField onChange={onChangeHandler} size='small' placeholder='Enter your Contact' margin='normal' name='contact' value={formData.contact} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormControl fullWidth>

                                <FormLabel id="demo-simple-select-label">Department</FormLabel>
                                <Select size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ mt: 2, mb: 2 }}>
                                    <MenuItem value={"0"}>Sales</MenuItem>
                                    <MenuItem value={"1"}>Finace</MenuItem>
                                    <MenuItem value={"2"}>Admin</MenuItem>
                                    <MenuItem value={"3"}>Marketing</MenuItem>
                                    <MenuItem value={"4"}>IT</MenuItem>
                                    <MenuItem value={"5"}>Operation</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Username
                                <TextField onChange={onChangeHandler} size='small' placeholder='Enter username' margin='normal' name='username' value={formData.username} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Password
                                <TextField onChange={onChangeHandler} type='password' size='small' placeholder='Enter Password' margin='normal' name='password' value={formData.password} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                    </>

            </Box>
                    <Button type='submit' onClick={handleSubmit} sx={{ mt: 2 }} style={{width:'450px',margin:'0 auto'}}  variant="contained">LOG IN</Button>
                    <Button sx={{ mt: 2 }} onClick={handleClick} style={{width:'450px',margin:'0 auto'}}>SIGN UP</Button>
    </Box>

            </form>



       </>
  )
}

export default HodRegister