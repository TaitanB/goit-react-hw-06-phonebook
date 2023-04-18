import styled from 'styled-components';

export const BtnContact = styled.button`
  margin: auto;
  padding: 5px 10px;
  border: 1px solid rgb(175 28 7);
  border-radius: 5px;
  background-color: rgb(219 94 94);
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1), 0 0 75px rgba(0, 0, 0, 0.1);

  :hover,
  :focus {
    background-color: rgb(207 30 30);
    color: rgb(229, 206, 188);
    scale: 0.9;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;

  p {
    width: 360px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
