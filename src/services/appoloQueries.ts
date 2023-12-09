import { gql } from '@apollo/client';

export const launchesQuery = (offset: number) => gql`
  query allLaunches {
    launches(limit: 3 offset: ${offset}) {
      id
      details
      mission_name
    }
  }
`;
