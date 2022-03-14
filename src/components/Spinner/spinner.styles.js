import styled from 'styled-components'

export const CustomSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid #313131;
  border-bottom-color: transparent;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  margin: 5rem auto;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
