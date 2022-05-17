import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      name
      image
    }
  }
`;

export const GET_CATEGORY = gql`
  query Category($name: String!) {
    category(name: $name) {
      name
      products {
        id
        name
        new
        slug
        description
        categoryName
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
        category
        image {
          desktop
          tablet
          mobile
        }
      }
    }
  }
`;
