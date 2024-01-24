import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, FileInput, FileInputContainer, FileInputIcon, Form, ModalContent, ModalOverlay, PostButton, TextArea } from "../../styles/posting";

const Posting=({details,user})=>{
    const [message,setMessage]=useState("")
    const [image,setImage]=useState("")


    const uploadPhoto = async (e) => {
        const files = e.target.files
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
            data.append("photos", files[i])
        }
        try {
            const response = await axios.post("https://banao-hjcv.onrender.com/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
        })
        const { data: filenames } = response
        setImage(filenames)
        } catch (error) {
            console.log("Error uploading photo", error)
        }
    }

    const handleSubmit=async(e)=>{
        if(details){
            try {
                const response=await axios.put(`https://banao-hjcv.onrender.com/updatePost/:${details}`,{message,image})
                console.log(response.data)
                await fetchPostData()
            } catch (error) {
                console.log("Error updateing the user",error)
            }
        }else{
            const data={
                    message:message,
                    image:image,
                    userId: user.userId,
                    name: user.name,
                    email: user.email
                }
            try {
                const response=await axios.post('https://banao-hjcv.onrender.com/post',data)
                console.log(response.data)
            } catch (error) {
                console.log("Error sending the data",error)
            }
        }
    }

    const fetchPostData=async()=>{
        if(details){
            console.log(true)
            try {
                const response=await axios.get(`https://banao-hjcv.onrender.com/getPost/:${details}`)
                console.log("Fetched data:", response.data);
                setMessage(response.data.message)
                setImage(response.data.image)
            } catch (error) {
                console.log("Error getting the user",error)
            }
        }
    }

    useEffect(()=>{
        fetchPostData()
    },[details])

    useEffect(()=>{
        console.log(user)
    },[])

    return(
        <ModalOverlay>
            <ModalContent>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <TextArea value={message} placeholder="What's happening" onChange={(e) => setMessage(e.target.value)}/>
                        <FileInputContainer>
                            <FileInputIcon icon={faImage} />
                            <FileInput type="file" accept="image/*" onChange={uploadPhoto}/>
                            {image && <img src={`http://localhost:4000/uploads/${image}`} alt="Selected Image" style={{paddingBottom:"5px"}}/>}
                        </FileInputContainer>
                        <PostButton type="submit">Post</PostButton>
                    </Form>
                </Card>
            </ModalContent>
    </ModalOverlay>
    )
}

export default Posting