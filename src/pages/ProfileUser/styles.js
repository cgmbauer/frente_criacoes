import styled from 'styled-components';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 10px 20px;
  max-width: 800px;

  padding: 10px 20px;
  margin: 0 auto;
  .profile {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
  img.profile {
    margin-top: 30px;
    width: 100px;
    height: 100px;
    text-align: center;
  }
`;

export const LoginTitle = styled.div`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 50px;
`;

export const LoginTitleText = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family-primary);
  font-weight: 700;
  color: var(--color-primary);
`;

export const Form = styled.form`
  margin: 10px auto 0;

  display: flex;
  flex-direction: column;

  max-width: 400px;

  .flexbox{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    width:100%;
    label {
    margin-top:10px;
   }
  }

 .date1, .date2{
  display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    input {
      width:150px;
    }
 }

  #orcamento{
   width:100%;
   display:flex;
   justify-content:space-between;
   label {
    margin-top:10px;
   }
  }

  .vlrmax, .vlrmin, .rs {
    display: inline-block;
    max-width: 129px;
    margin: 1px 1px 0;

  }

  button {
    text-align: center;

    width: 226px;
    height: 37px;
    left: 607px;

    background: var(--bg-buttonDir);

    border: 0;
    border-radius: 10px;
    padding: 0px;
    margin: 18px auto 0;
    margin-bottom: 50px;

    color: var(--color-button);
    font-weight: 500;
    max-width: 400px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

  }

  /* select {
    display: flex;
    align-items: center;

    border: none;
    border-radius: 10px;

    padding: 10px;
    margin-top: 5px;

    background: var(--bg-input);

    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    color: var(--color-primary);
  } */

  label {
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);

    margin-left: 6px;

    &:nth-child(n + 2) {
      margin-top: 10px;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--font-family-primary);
    font-weight: 400;
    color: var(--color-primary);
    color: #484848;
    font-size: 14px;
    text-align: center;

    margin: 18px 0 0 0;

    transition: text-decoration 0.3s;

    &:hover {
      text-decoration: underline;
    }
`;
