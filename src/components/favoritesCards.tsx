import { StyledSectionsContainer } from '../styledComponents';
import { PopularItem } from './popularTourItem';

import { useRecoilState } from 'recoil';
import { favoritesState, toursState } from '../recoil/atom';
import { ExtendedLaunchProps } from '../types/popularTours';

export function FavoritesCards() {
  const [favorites, setFavorites] =
    useRecoilState<ExtendedLaunchProps[]>(favoritesState);
  const [tours, setTour] = useRecoilState(toursState);

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    <StyledSectionsContainer>
      <section className="favorites-cards-section">
        <button className="clear-all btn" onClick={clearFavorites}>
          Clear all
        </button>

        <ul className="favorites-cards-list">
          {favorites.map(({ id, details, mission_name, favorite }) => {
            return (
              <PopularItem
                id={id}
                key={id}
                details={details}
                name={mission_name}
                favorite={favorite}
              />
            );
          })}
        </ul>
      </section>
    </StyledSectionsContainer>
  );
}
