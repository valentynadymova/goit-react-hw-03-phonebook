import styled from "@emotion/styled";


export const ContactItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  margin-right: 10px;
  font-weight:400;
`;

export const ContactButton = styled.button`
  padding: 5px 20px;
  font-size: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color:white;
  background-color: #751075;
  :hover {
    background-color: #a16da1;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;