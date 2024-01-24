import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentDetails, CommentForm, CommentItem, CommentSection, StyledParagraph } from "../../styles/comment";

const Comments=({details})=>{
    const [message,setMessage]=useState("")
    const [comments,setComments]=useState("")
    const [madeBy,setMadeBy]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const data={
                message:message,
                postId:details,
                postedBy:madeBy
            }
            const response=await axios.post('https://banao-hjcv.onrender.com/comment',data)
            await getComments()
        } catch (error) {
            console.log("Error sending the comment",error)
        }
    }

    const getComments=async()=>{
        try {
            const response = await axios.get('https://banao-hjcv.onrender.com/getComments', {
                params: {
                    postId: details
                }
            })
            setComments(response.data)
            console.log(response.data)
        } catch (error) {
            console.log("Error getting comments",error)
        }
    }

    const getUserForComment=async()=>{
        try {
            const response=await axios.get('https://banao-hjcv.onrender.com/getCurrentUserByToken')
            setMadeBy(response.data.name)
        } catch (error) {
            console.log("Error getting the user",error)
        }
    }

    useEffect(()=>{
        getUserForComment()
        getComments()
    },[])

    return(
        <CommentSection>
            <CommentForm onSubmit={handleSubmit}>
                <textarea onChange={(e)=>setMessage(e.target.value)}/>
                <button type="Submit">Add</button>
                <p>{details.postId}</p>
            </CommentForm>

            <div>
                {comments && comments.map((item,index)=>{
                    return(
                        <CommentItem key={index}>
                            <StyledParagraph>{item.postedBy}: {item.message}</StyledParagraph>
                            <CommentDetails>Time: {item.createdAt}</CommentDetails>
                        </CommentItem>
                    )
                })}
            </div>
        </CommentSection>
    )
}

export default Comments
