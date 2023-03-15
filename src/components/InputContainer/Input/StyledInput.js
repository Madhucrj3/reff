import styled from "styled-components";
 export const InputMain = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction:  ${props =>props.isCheckbox ?"row":"column"};
  align-items: ${props =>props.isCheckbox && "center"}
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;
