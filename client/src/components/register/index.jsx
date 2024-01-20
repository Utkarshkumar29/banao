import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, FormHeading, Input, LoginLink, RegisterContainer, RegisterWrapper, StyledButton } from "../../styles/register";
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";

const Register=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatch,setPasswordMatch]=useState(false)
    const [isFocused,setIsFocused]=useState(false)
    const [redirect,setRedirect]=useState(false)
    const [image, setImage] = useState(null)

    const handleInputFocus=()=>{
        setIsFocused(true)
        setPasswordMatch(true)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            name,
            email,
            password,
            image
        }
        try {
            const response=await axios.post('/register',data)
            const result=response.data
            setRedirect(true)
            console.log(result)
        } catch (error) {
            console.log("Error sending the data to the server:",error)
        }
    }

    const uploadPhoto = async (e) => {
        const files = e.target.files
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
            data.append("photos", files[i])
        }
        try {
            const response = await axios.post("/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
        })
        const { data: filenames } = response
        setImage(filenames)
        } catch (error) {
            console.log("Error uploading photo", error)
        }
    }

    useEffect(() => {
        if(isFocused){
            if(password!==confirmPassword){
                document.getElementById('confirmPassword').style.borderColor="red"
            }else if(password===confirmPassword){
                document.getElementById('confirmPassword').style.borderColor="green"
                setPasswordMatch(false)
            }
        }
    },[confirmPassword,isFocused,password])

    if(redirect){
        return <Navigate to='/home'/>
    }

    return(
        <RegisterContainer>
            <RegisterWrapper>
                <Form onSubmit={handleSubmit}>
                    <FormHeading>Register Form</FormHeading>
                    <Input placeholder="Enter your username" type="text" onChange={(e)=>setName(e.target.value)}/>
                    <Input placeholder="Enter your email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input id="password" placeholder="Enter your password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Input id="confirmPassword" placeholder="Confirm your password" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} onFocus={handleInputFocus}/>
                    {passwordMatch&&(
                        <ErrorMessage>Password doesn't match</ErrorMessage>
                    )}
                    <Input type="file" accept="image/*" onChange={uploadPhoto}/>
                    {image && <img src={`http://localhost:4000/uploads/${image}`} alt="Selected Image" style={{paddingBottom:"5px"}}/>}
                    <StyledButton type="Submit">Register</StyledButton>
                    <LoginLink>
                        <p>Already have a Account?</p>
                        <Link to='/login' style={{textDecoration:"none"}}><p>Click Here</p></Link>
                    </LoginLink>
                </Form>
            </RegisterWrapper>
        </RegisterContainer>
    )
}

export default Register
