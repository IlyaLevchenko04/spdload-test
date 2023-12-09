import firstImage from '../images/firstImage.jpg';
import sprite from '../images/sprite/sprite.svg';
import { useRecoilState } from 'recoil';
import { favoritesState, toursState } from '../recoil/atom';
import { nanoid } from 'nanoid';
import { ExtendedLaunchProps } from '../types/popularTours';

interface PopularItemProps {
  favorite: boolean;
  id: string;
  name: string;
  details: string;
}

export function PopularItem(props: PopularItemProps) {
  const { favorite, name, details, id } = props;

  const [favorites, setFavorites] = useRecoilState<ExtendedLaunchProps[]>(
    favoritesState as any
  );
  const [tours, setTours] = useRecoilState<ExtendedLaunchProps[]>(
    toursState as any
  );

  const addFavorite = () => {
    const findElement: any = tours.find(({ id: elemId }) => elemId === id);

    const isFavoriteElementAlreadyExist = favorites.find(
      ({ id: elemId }) => elemId === findElement.id
    );

    const elementToAdd: any = { ...findElement, favorite: true };

    const updatedTours: any = tours.map(tourItem =>
      tourItem.id === id
        ? {
            ...tourItem,
            favorite: tourItem.id === id,
          }
        : tourItem
    );

    setTours(updatedTours);

    const updatedFavorites = [...favorites, elementToAdd];

    !isFavoriteElementAlreadyExist && setFavorites(updatedFavorites);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = () => {
    const updatedTours = tours.map(tour =>
      tour.id === id
        ? {
            ...tour,
            favorite: false,
          }
        : tour
    );

    console.log(updatedTours);

    setTours(updatedTours);

    const updatedFavorites = favorites.filter(fav => fav.id !== id);

    console.log(updatedFavorites);

    setFavorites(updatedFavorites);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const iconsButtons = () => {
    if (favorite) {
      return (
        <button className="fav-btn btn" onClick={removeFavorite}>
          <svg className="heart-icon">
            <use href={`${sprite}#Delete`} />
          </svg>
        </button>
      );
    }

    if (!favorite) {
      return (
        <button className="fav-btn btn" onClick={addFavorite}>
          <svg className="heart-icon">
            <use href={`${sprite}#Heart`} />
          </svg>
        </button>
      );
    }
  };

  return (
    <li className="popular-tours-item" id={id} key={id}>
      <img
        src={`${firstImage}`}
        alt="space"
        className="popular-tours-item-photo"
      />
      <div className="popular-tours-info-wrapper">
        <div className="popular-tours-info-header">
          <h3 className="popular-tours-item-header">{name}</h3>
          <p className="popular-tours-text">
            {details ? details : 'There is no details about this mission'}
          </p>
        </div>
        <ul className="popular-tours-btn-list">
          <li className="popular-tours-btn-item buy-btn-wrapper" key={nanoid()}>
            <button className="signin-btn btn buy-btn">BUY</button>
          </li>
          <li className="popular-tours-btn-item" key={nanoid()}>
            {iconsButtons()}
          </li>
        </ul>
      </div>
    </li>
  );
}
