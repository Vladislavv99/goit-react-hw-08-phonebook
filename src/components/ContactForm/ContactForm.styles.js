import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 20px;

  padding: 30px;
  border-radius: 30px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & p {
    color: black;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const ContactButton = styled.button`
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: rgb(58, 54, 54);
    background-color: rgb(58, 54, 54);
    color: whitesmoke;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;
