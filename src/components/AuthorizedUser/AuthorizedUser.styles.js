import styled from 'styled-components';

export const AuthorizedUresContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;

  & p {
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
      2 0px 8px 13px rgba(0, 0, 0, 0.1), 3 0px 18px 23px rgba(0, 0, 0, 0.1);
  }

  & button {
    border-radius: 10px;
    background-color: lightcyan;
    font-size: 15px;
    padding: 5px;
    padding-right: 10px;
    padding-left: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const UresPhoto = styled.img`
  border-radius: 50%;
`;
