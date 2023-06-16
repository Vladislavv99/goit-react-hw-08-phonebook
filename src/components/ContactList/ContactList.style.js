import styled from 'styled-components';

export const ContactsListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContactItem = styled.li`
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid rgb(58, 54, 54);
  color: black;
  background-color: lightcyan;
`;

export const Delete = styled.button`
  border-radius: 10px;
  font-size: 15px;
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: red;
    background-color: rgb(255, 187, 197);
    color: red;
  }
`;

export const Loader = styled.div`
  width: 40px;
  margin: 0 auto;
`;
