import styled from 'styled-components';

export const RegistrationSection = styled.section``;

export const RegistrationForm = styled.form`
  display: flex;
  align-items: center;
  width: 250px;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;

  & button {
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
  }
`;

export const RegistrationFormLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & input {
    border-radius: 10px;
    padding: 5px 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;
