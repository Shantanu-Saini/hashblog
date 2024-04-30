import React from 'react'
import { Container, Logo, Logout } from './index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: !authStatus
    },
    {
      name: "Add Posts",
      slug: "/add -posts",
      active: !authStatus
    }
  ]

  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link>
              <Logo />
            </Link>
          </div>
          <ul>
            {
              navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )
            }
          </ul>
          {
            auth.staus && (
              <button >
                <Logout />
              </button>
            )
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header