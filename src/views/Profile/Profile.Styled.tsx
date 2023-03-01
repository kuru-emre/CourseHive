import styled from "styled-components";

const StyledProfile = styled.div`
  img {
    object-fit: contain;
    height: 170px;
  }
  
  .dal {
    height: 80px;
    margin-left: -20px;
  }
  
  .form {
    text-align: left;
  }
  
  .label{
    display: block;
    font-size: larger;
    color: black;
    padding: 5px;
  }
  
  .btn-group button {
    padding: 15px 24px; 
    cursor: pointer; 
    float: left;
    margin-right: 15px;
    border-radius: 10px;
  }
  
  .save {
    background-color: #2196f3;
    border: black;
    color: black;
  }
  
  .delete {
    background-color: #f44336;
    border: black;
    color: black;
  }
   
  .input{
    font-size: x-large;
    padding: 5px;
    margin: 2px;
    border-radius: 10px;
    
  }
  
  .changePic {
    padding: 10px 20px; 
    cursor: pointer; 
    margin-left: 15px;
    background-color: #f5f5f5;
    border-color: black;
    color: black;
    border-radius: 10px;
  }
`;

export default StyledProfile;