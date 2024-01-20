import React from "react";
import { HomePageContainer, HomeWrapper } from "../../styles/homePage";
import Navbar from '../../components/navbar';
import PostView from "../../views/postView";

const HomePage=()=>{

    return(
        <HomePageContainer>
            <HomeWrapper>
                <Navbar/>
                <PostView/>
            </HomeWrapper>
        </HomePageContainer>
    )
}

export default HomePage