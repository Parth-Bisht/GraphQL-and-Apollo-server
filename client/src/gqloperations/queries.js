import { gql } from "@apollo/client";
export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by {
        _id
        first_name
      }
    }
  }
`;

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    user: myprofile {
      first_name
      last_name
      email
      quotes {
        name
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    user(_id: $userId) {
      _id
      first_name
      last_name
      email
      quotes {
        name
      }
    }
  }
`;
