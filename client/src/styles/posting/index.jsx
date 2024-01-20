import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
`

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const FileInputIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`

export const FileInput = styled.input`

`

export const PostButton = styled.button`
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`
