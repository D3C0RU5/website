import styled from 'styled-components'
import { transparentize } from 'polished'

export const Banner = styled.div`
  min-height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-size: cover;
  gap: 30px;
  margin-top: 60px;

  position: relative;

  &:before {
    //content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${transparentize(0.3, '#000')};
    z-index: 0;
  }
`
export const Ballon = styled.div`
  font-size: 2rem;
  z-index: 1;
  @media (max-width: 767px) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50%;
    width: 100%;
  }
`
export const ImageCircle = styled.img`
  width: 350px;
  border-radius: 100%;
  z-index: 1;
  max-width: 100%;

  @media (max-width: 767px) {
    width: 200px;
    margin: auto;
  }
`
