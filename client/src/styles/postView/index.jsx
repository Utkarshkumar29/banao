// postView.js (styles)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const PostViewContainer=styled.div`
    width: 100%;
    background-color: #f1f1f1;
`

export const PostViewWrapper=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`

export const UserCardContainer=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
`

export const UserProfileImage=styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`

export const UserName=styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`

export const UserEmail=styled.p`
  font-size: 14px;
  color: #777;
`

export const AddPostButton=styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`
 
export const Image=styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-top: 10px;
`


export const PostWrapper=styled.div`
    
`

export const UserWrapper=styled.div`
    width: 100%;
`

export const CardContainer=styled.div`
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-bottom: 10px;
    color: #333;
    font-size: 16px;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const Place=styled.div`
    position: absolute;
    top: 10px;
    right: 0px;
`

export const PostedBy=styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`

export const ImportantText=styled.p`
  font-weight: bold;
  color: red;
`

export const NormalText=styled.p`
  color: black;
`

export const UserText=styled.p`
  font-style: italic;
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
  color: #333;

  &:hover {
    color: #e74c3c; 
  }
`