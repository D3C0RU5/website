import styled from 'styled-components'
import { shade } from 'polished'

export const Navbar = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.background};
  padding: 0 30px;
  display: flex;
  box-shadow: 0px 1px 4px ${(props) => props.theme.colors.backgroundshadow};
`
export const Container = styled.div`
  max-width: 1050px;
  width: 100%;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1rem;
`
export const Avatar = styled.img`
  width: 40px;
  border-radius: 100%;
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  font-weight: 400;
  padding: 5px 10px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Button = styled.button`
  cursor: pointer;
  transition: 0.3s;

  background: ${(props) => props.theme.colors.primary};
  color: #fff;

  border: none;
  border-radius: 5px;
  padding: 10px 15px;

  margin-right: 30px;
  margin-left: 15px;

  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background: ${(props) => shade(0.25, props.theme.colors.primary)};
  }
`
