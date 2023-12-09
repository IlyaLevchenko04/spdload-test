import { Outlet, useLocation } from 'react-router';
import { NAV_ENUM } from '../constants';
import { StyledSectionsContainer, StyledNavLink } from '../styledComponents';
import { Link } from 'react-router-dom';
import sprite from '../images/sprite/sprite.svg';
import logo from '../images/spaceX.jpg';

export function Header() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <StyledSectionsContainer className="header-container">
          <Link to={'/'} className="logo">
            <img src={logo} alt="logo" className="logo-photo" />
          </Link>
          <nav>
            <ul className="nav-list">
              {NAV_ENUM.map(({ name, id, path }) => (
                <li key={id} className="nav-item">
                  <StyledNavLink to={path}>{name}</StyledNavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="buttons-list">
            <li className="buttons-item">
              <Link to={'favorites'}>
                {location.pathname === '/favorites' ? (
                  <button className="active-fav-btn btn">
                    <svg className="heart-icon">
                      <use href={`${sprite}#Heart`} />
                    </svg>
                  </button>
                ) : (
                  <button className="fav-btn btn">
                    <svg className="heart-icon">
                      <use href={`${sprite}#Heart`} />
                    </svg>
                  </button>
                )}
              </Link>
            </li>
            <li className="buttons-item">
              <Link to={'favorites'} className="signin-btn btn">
                SIGN IN
              </Link>
            </li>
          </ul>
        </StyledSectionsContainer>
      </header>
      <Outlet />
    </>
  );
}
