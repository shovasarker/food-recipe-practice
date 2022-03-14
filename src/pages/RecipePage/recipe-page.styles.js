import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ul {
    margin-top: 2rem;
    margin-left: 1.5rem;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
  img {
    width: 100%;
  }
`

export const Button = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  font-weight: 600;
  cursor: pointer;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
`

export const Details = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0;
  font-weight: 400;
  padding-left: ${({ type }) => (type ? '1rem' : 0)};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`
