import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 4rem 0;
`

export const Title = styled.h3`
  text-align: center;
`

export const Card = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: grab;

  img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 1rem;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`
