import styled from 'styled-components'

export const FormStyle = styled.form`
  position: relative;
  margin: 1rem auto;
  width: 100%;

  input,
  input:focus {
    border: none;
    outline: none;
  }
  input {
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 2.5rem;
    border-radius: 9999px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`
