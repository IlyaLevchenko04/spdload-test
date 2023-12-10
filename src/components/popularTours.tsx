import { useEffect, useState } from 'react';
import { StyledSectionsContainer } from '../styledComponents';
import { PopularItem } from './';
import { useRecoilState } from 'recoil';
import { toursState } from '../recoil/atom';
import { launchesQuery } from '../services/appoloQueries';
import { useLazyQuery } from '@apollo/client';
import { nanoid } from 'nanoid';
import {
  ChangeOffsetProps,
  ExtendedLaunchProps,
  LaunchProps,
} from '../types/popularTours';
import sprite from '../images/sprite/sprite.svg';

export function PopularTours() {
  const [offset, setOffset] = useState(0);
  const [tour, setTour] = useRecoilState<ExtendedLaunchProps[]>(
    toursState as any
  );
  const [fecthQuery, { loading, error, data }] = useLazyQuery(
    launchesQuery(offset)
  );

  const changeOffset = ({ isPlus, options }: ChangeOffsetProps) => {
    if (options?.dotIndex) {
      setOffset(options?.dotIndex * 3);
    } else {
      setOffset(isPlus ? offset + 3 : offset - 3);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fecthQuery();

        const savedFavorites = JSON.parse(
          localStorage.getItem('favorites') || '[]'
        ) as ExtendedLaunchProps[];

        console.log(savedFavorites);

        const data: ExtendedLaunchProps[] = [...result.data.launches].map(
          (launch: LaunchProps) => ({
            ...launch,
            favorite: !!savedFavorites.find(fav => fav.id === launch.id),
          })
        );

        setTour(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [offset]);

  return (
    <>
      <StyledSectionsContainer className="popular-tours-container">
        <section className="popular-tours-section">
          <div className="pagination-wrapper">
            <h2 className="popular-tours-header">POPULAR TOURS</h2>{' '}
            <div className="pagination-btns-wrapper">
              {offset > 0 && (
                <button
                  onClick={() => changeOffset({ isPlus: false })}
                  key={nanoid()}
                  id="minus"
                  type="button"
                  className="btn pagination-btn"
                >
                  {'<'}
                </button>
              )}{' '}
              {offset < 6 && (
                <button
                  key={nanoid()}
                  onClick={() => changeOffset({ isPlus: true })}
                  id="plus"
                  type="button"
                  className="btn pagination-btn"
                >
                  {'>'}
                </button>
              )}
            </div>
          </div>
          <ul id="popular-tours" className="popular-tours-list">
            {tour.map(item => {
              return (
                <PopularItem
                  id={item.id}
                  key={item.id}
                  details={item.details}
                  name={item.mission_name}
                  favorite={item.favorite}
                />
              );
            })}
          </ul>
          <div className="popular-tours-pagination_bottom">
            {[...new Array(3)].map((_, i) => {
              const activeDotIndex = offset >= 3 ? offset / 3 : 0;
              return (
                <svg
                  className="popular-tours-pagination_bottom-dot"
                  onClick={() => changeOffset({ options: { dotIndex: i } })}
                >
                  <use
                    href={`${sprite}#${
                      activeDotIndex === i ? 'activeDot' : 'dot'
                    }`}
                  />
                </svg>
              );
            })}
          </div>
        </section>
      </StyledSectionsContainer>
    </>
  );
}
