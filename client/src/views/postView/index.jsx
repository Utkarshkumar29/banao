import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faHeart, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { AddPostButton, CardContainer, Image, ImportantText, Place, PostViewContainer, PostViewWrapper, PostWrapper, PostedBy, StyledFontAwesomeIcon, UserCardContainer, UserEmail, UserName, UserProfileImage, UserText, UserWrapper } from "../../styles/postView";
import Posting from "../../components/posting";
import Comments from "../../components/comments";

const PostView=()=>{
    const [posts,setPosts]=useState([])
    const [userPosts,setUserPosts]=useState([])
    const [addpost,setAddPost]=useState(false)
    const [editPostDetails,setEditPostDetails] = useState(null)
    const [userId,setUserId]=useState("")
    const [likeStatus, setLikeStatus] = useState({})
    const [likedPosts, setLikedPosts] = useState([])
    const [currentUser,setCurrentUser]=useState("")
    const [loadingUserPosts, setLoadingUserPosts] = useState(true)
    const [loadingAllPosts, setLoadingAllPosts] = useState(true)


    const fetchUserPost=async()=>{
        try {
            const response=await axios.get('/fetchUserPost')
            setUserPosts(response.data)
        } catch (error) {
            console.log("Error getting user post:",error)
        }finally {
            setLoadingUserPosts(false);
        }   
    }

    const fetchAllPost=async()=>{
        try {
            const response=await axios.get('/feed')
            setPosts(response.data)
        } catch (error) {
            console.log("Error getting user post:",error)
        }finally {
            setLoadingAllPosts(false)
        }
    }

    const handleDelete=async(id)=>{
        try {
            const response=await axios.delete(`/delete`,{data:{id}})
            const updatedPosts = posts.filter(post=>post.id!==id)
            const updatedUserPosts = userPosts.filter(post=>post.id!==id)
            setPosts(updatedPosts)
            setUserPosts(updatedUserPosts)
            await fetchAllPost()
            await fetchUserPost()
        } catch (error) {
            console.log("Error deleting user post:", error)
        }
    }

    const handleEdit=(id)=>{
        setEditPostDetails(id)
    }

    const handleLike=async(id,isPostLiked)=>{
        try {
            const response=await axios.post('/like',{data:{id}})
            console.log(response.data)
            const updatedLikedPosts = isPostLiked ? likedPosts.filter(postId=>postId!==id) : [...likedPosts,id]
            setLikedPosts(updatedLikedPosts)
        } catch (error) {
            console.log("Error deleting user post:", error)
        }
    }

    const getLikeForPosts=async()=>{
        try {
            const response=await axios.get('/getLikes')
            const likedPostIds=response.data.map(like=>like.postId)
            setLikedPosts(likedPostIds)

        } catch (error) {
            console.log("Error getting the likes",error)
        }
    }

    const getCurrentUser=async()=>{
        try {
            const response=await axios.get('/currentUser')
            setCurrentUser(response.data)
            console.log(currentUser)
        } catch (error) {
            console.log("Error getting the data",error)
        }
    }

    const getCurrentUserByToken=async()=>{
        try {
            const response=await axios.get('/getCurrentUserByToken')
            setUserId(response.data)
        } catch (error) {
            console.log("Error getting the data",error)
        }
    }

    useEffect(()=>{
        fetchUserPost()
        fetchAllPost()
        getLikeForPosts()
        getCurrentUser()
        getCurrentUserByToken()
        console.log(userId,'ss')
    },[])

    if (loadingUserPosts || loadingAllPosts) {
        return <p>Loading...</p>; // You can replace this with a loading spinner or component
    }

    return(
        <PostViewContainer>
            
            {addpost && ( <Posting user={userId}/>)}
            {editPostDetails && <Posting details={editPostDetails}/>}

            <PostViewWrapper>

                <UserWrapper>
                    <h1>User</h1>
                    <UserCardContainer>
                        <UserProfileImage src={`http://localhost:4000/uploads/${userId.image}`} alt="Error"/>
                        <UserName>{userId.name}</UserName>
                        <UserEmail>{userId.email}</UserEmail>
                        <AddPostButton onClick={()=>setAddPost(true)}>Add Post <FontAwesomeIcon icon={faPlus}/></AddPostButton>
                    </UserCardContainer>
                    
                    {/*User Post */}
                    <PostWrapper>
                        <h2>My Posts</h2>
                        {userPosts && userPosts.map((item,index)=>{
                            return(
                                <CardContainer key={index}>
                                    <PostedBy>Posted By:{item.name}</PostedBy>
                                    <UserProfileImage src={`http://localhost:4000/uploads/${userId.image}`} alt="Error"/>
                                    <p>{item.message}</p>
                                    <p>{item.email}</p>
                                    <p>User{item._id}</p>
                                    {item.image ? ( 
                                        <Image src={`http://localhost:4000/uploads/${item.image}`} alt="Item Image"/>) : (<p></p>
                                    )}
                                    <Place>
                                        <StyledFontAwesomeIcon icon={faTrash} onClick={()=>{handleDelete(item._id)}}/>
                                        <StyledFontAwesomeIcon icon={faEdit} onClick={()=>{handleEdit(item._id)}}/>
                                    </Place>
                                </CardContainer>
                            )
                        })}
                    </PostWrapper>
                </UserWrapper>

                {/**Feed */}
                <div>
                    <h1>Feed</h1>
                    {posts && posts .map((item,index)=>{
                        const isPostLiked=likedPosts.includes(item._id)
                        return(
                            <CardContainer key={index}>
                                <PostedBy as={ImportantText}>Posted By: {item.name}</PostedBy>
                                <UserProfileImage src={`http://localhost:4000/uploads/${item.image}`} alt="Error"/>
                                <p as={UserText}>Post: {item.message}</p>
                                <p>User: {item._id}</p>
                                {item.image ? ( 
                                <Image src={`http://localhost:4000/uploads/${item.image}`} alt="Item Image"/>) : (<p></p>
                                )}
                                <Place style={{paddingRight:"10px"}}>
                                    <FontAwesomeIcon icon={faHeart} onClick={()=>{handleLike(item._id,isPostLiked)}} style={{ color: isPostLiked ? 'red' : 'black' }}/>
                                </Place>
                                <div>
                                    <p>Comments</p>
                                    <Comments details={item._id}/>
                                </div>
                            </CardContainer>
                        )
                    })}
                </div>

            </PostViewWrapper>
        </PostViewContainer>
    )
}

export default PostView
