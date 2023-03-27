import styled from 'styled-components';

export const Button = styled.button`
  min-width: 50px;
  height: 20px;
  margin-left: 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 5px;
  color: #fff;
  background-color: red;

  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.5);
`;

export const ContactItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  
  &:not(:last-child){
    margin-bottom: 10px;
  }
`;
