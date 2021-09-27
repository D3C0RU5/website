import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Ballon, Banner, ImageCircle } from './styles'

const Nav: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Banner>
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="row" style={{ height: 'calc(100vh - 60px)' }}>
          <div className="col col-md-6 text-end d-flex align-items-center justify-content-end">
            <Ballon>
              <div className="fs-5 text-secondary">Hello,world</div>
              <div className="fs-3 fw-bolder text-white">Carlos Pedrada</div>
              <div className="fs-3 fw-bolder" style={{ color: colors.primary }}>
                Fullstack developer
              </div>
              <div className="fs-6 text-secondary">
                I love creating elegant and functional software solutions.
              </div>
            </Ballon>
          </div>
          <div className="col col-md-6 text-end d-flex align-items-center">
            <ImageCircle src="images/personal.jpg" />
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default Nav
