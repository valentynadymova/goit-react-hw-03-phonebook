import styled from "@emotion/styled";


export const FormPhoneBook = styled.form`
  border-color: black;
  border-style: dotted;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
`;
export const LabelPhoneBook = styled.label`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
`;

export const InputPhoneBook = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 400;
`;

export const ButtonPhoneBook = styled.button`
  display: inline-flex;
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background-color: #751075;
  color:white;

  :hover {
    background-color: #a16da1;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;