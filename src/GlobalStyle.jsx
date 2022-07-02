import createGlobalStyle from 'styled-components';
import styled from '@emotion/styled';

export const Container = createGlobalStyle.div`

* {
  box-sizing: border-box;
  margin:0;
  padding:0;
  }

  html {
    scroll-behavior: smooth;

  }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #fff;
    color: #010101;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4, 
  h5,
  h6
   {
    margin: 0;
  }

`;

export const TitlePhoneBook = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  color: #751075;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const TitleContacts = styled.h2`
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: 700;
  color: #751075;
  text-align: center;
`;

export const Section = styled.section`
  padding-bottom: 30px;
  width:500px;
  margin:auto;
`;