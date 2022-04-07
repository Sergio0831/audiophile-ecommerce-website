import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      category
      image
    }
  }
`;

export const GET_CATEGORY = gql`
  query Category($categoryName: String!) {
    category(categoryName: $categoryName) {
      category
      products {
        id
        name
        new
        slug
        description
        category
        categoryImage {
          desktop
          tablet
          mobile
        }
      }
    }
  }
`;
