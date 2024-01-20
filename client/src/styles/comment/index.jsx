import styled from "styled-components";

export const CommentSection = styled.div`
  margin-top: 20px;
`

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  textarea {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  button {
    background-color: #1da1f2;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`

export const CommentItem = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const NestedCommentItem = styled(CommentItem)`
  margin-left: 20px;  
  border-left: 2px solid #ccc;  
  padding-left: 10px; 
`

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333;
`

export const CommentDetails = styled(StyledParagraph)`
  margin-top: 5px;
  color: #777;
  font-size: 0.8rem;
`