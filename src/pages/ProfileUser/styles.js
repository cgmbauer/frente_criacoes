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

 .date1 {
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

  #orcDisponibilidade{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    width:100%;
    margin-top:6px;
    margin: 10px 0 0 6

  }


   .cache {
     display: inline-block;
    max-width: 150px;
    margin: 10px 0 0 6
  }


   .disponibilidade {
    display: inline-block;
    max-width: 150px;
    min-width:150px;
    margin: 10px 0 0 6

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
    margin-top:25px;

    color: #e9eff9;
    font-weight: 500;
    max-width: 400px;
    transition: opacity 0.3s;



    &:hover {
      opacity: 0.9;
    }

  }

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
