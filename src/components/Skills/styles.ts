import styled from 'styled-components'

export const Background = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  color: #ffffff;
  min-height: calc(100vh - 56px);
`

export const Divider = styled.hr`
  width: 200px;
  margin: 10px auto;
  height: 4px !important;
  opacity: 1;
  border-radius: 60px;
`

export const Skillitem = styled.div``
export const Img = styled.img`
  width: 100%;
  max-width: 80px;
`
