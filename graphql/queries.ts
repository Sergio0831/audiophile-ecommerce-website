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

export const GET_PRODUCTS = gql`
  query Products {
    products {
      slug
      category
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($slug: String!) {
    product(slug: $slug) {
      id
      slug
      name
      image {
        desktop
        tablet
        mobile
      }
      category
      new
      price
      description
      features
      includes {
        item
        quantity
      }
      gallery {
        first {
          desktop
          tablet
          mobile
        }
        second {
          desktop
          tablet
          mobile
        }
        third {
          desktop
          tablet
          mobile
        }
      }
      others {
        name
        slug
        image {
          desktop
          tablet
          mobile
        }
      }
    }
  }
`;
