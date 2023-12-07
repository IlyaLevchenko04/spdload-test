import { Outlet, useLocation } from 'react-router';
import { NAV_ENUM } from '../constants';
import { StyledSectionsContainer, StyledNavLink } from '../styledComponents';
import { Link } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <StyledSectionsContainer className="header-container">
          <Link to={'/'} className="logo">
            Logo
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
                  <button className="active-fav-btn btn">v</button>
                ) : (
                  <button className="fav-btn btn">v</button>
                )}
              </Link>
            </li>
            <li className="buttons-item">
              <button className="signin-btn btn">SIGN IN</button>
            </li>
          </ul>
        </StyledSectionsContainer>
      </header>
      <Outlet />
    </>
  );
}
