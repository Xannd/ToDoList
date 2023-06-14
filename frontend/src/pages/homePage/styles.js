import styled from "styled-components";

export const Container = styled.div`
  width:90%;
  background: #fff;
  height: auto;
  padding: 2%;
  margin-top: 3%;
  border-radius: 15px 15px 0 0;
  box-sizing: border-box;
  display: flex;
  gap: 2%;
  align-items: center;
  flex-direction: column;
  
`;

export const AddTask = styled.form`
  width: 100%;
  height: 15%;
  display:flex;
  align-items: center;
  justify-content: space-between;

`;
export const ListTask = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 79%;
  min-height: 79%;
  box-sizing: border-box;
  overflow-y:auto;
`;

export const Input = styled.input`
  width: 92%;
  height:65%;
  border-radius: 10px;
  outline: none;
  border: 1px solid #dedede;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  color: #312F2F;
`

export const ColumnsTask = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 8px 8px 0 0 ;
  display: flex;
  align-items: center;
`;

export const Task = styled.div`
  width: 35%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dedede;
  color: #312F2F;
  font-weight: bold;
`

export const Date = styled.div`
  width: 25%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dedede;
  color: #312F2F;
  font-weight: bold;
  
`

export const Status = styled.div`
  width: 20%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dedede;
  color: #312F2F;
  font-weight: bold;
  
`

export const Action = styled.div`
  width: 20%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  color: #312F2F;
  font-weight: bold;
 
`
