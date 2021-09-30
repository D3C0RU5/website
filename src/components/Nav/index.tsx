import { Avatar, Brand, MenuItem, Navbar } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

interface Props {
  toggleTheme(): void
}

const Nav: React.FC<Props> = ({ toggleTheme }) => {
  const menus = ['Home', 'Portfolio', 'Skills', 'About me']

  const { colors, title } = useContext(ThemeContext)

  return (
    <Navbar
      className={
        'navbar navbar-expand-lg ' +
        (title === 'light' ? 'navbar-light' : 'navbar-dark')
      }
    >
      <div className="container-fluid">
        <Brand>
          <Avatar src="/images/personal.jpg" />
          Carlos Pedrada
        </Brand>
        <div className="d-flex align-items-center justify-content-center gap-2 order-lg-2">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                <rect fill="none" height="24" width="24"></rect>
                <path
                  fill="#fff"
                  d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
                ></path>
              </svg>
            }
            uncheckedIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -1 40 30">
                <rect fill="none" height="24" width="24"></rect>
                <path
                  fill="#fff"
                  d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
                ></path>
              </svg>
            }
            height={18}
            width={50}
            handleDiameter={25}
            offColor={colors.primary}
            onColor={colors.primary}
            onHandleColor="#fff"
            offHandleColor="#25283D"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            {menus.map((item, key) => (
              <MenuItem
                key={key}
                className="nav-item"
                onClick={() => alert('Em breve')}
              >
                {item}
              </MenuItem>
            ))}
          </ul>
        </div>
      </div>
    </Navbar>
  )
}

export default Nav
