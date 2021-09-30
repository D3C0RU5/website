import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Wallpaper from '../Background'
import { Ballon, Banner, ImageCircle } from './styles'

const Nav: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Banner>
      <Wallpaper></Wallpaper>
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="row" style={{ height: 'calc(100vh - 60px)' }}>
          <div className="col col-12 col-md-6 text-end d-flex align-items-center justify-content-end p-3">
            <Ballon className="align-items-end align-md-end">
              <div>
                <div className="fs-5 text-secondary">Hello world!</div>
                <div className="fs-3 fw-bolder" style={{ color: colors.text }}>
                  Carlos Pedrada
                </div>
                <div
                  className="fs-3 fw-bolder"
                  style={{ color: colors.primary }}
                >
                  Fullstack developer
                </div>
                <div
                  className="fs-6 text-secondary"
                  style={{ textShadow: `1px 1px 1px ${colors.background}` }}
                >
                  I love creating elegant and functional software solutions.
                </div>
              </div>
            </Ballon>
          </div>
          <div className="col col-12 col-md-6 d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start p-3">
            <ImageCircle src="images/personal.jpg" />
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default Nav
