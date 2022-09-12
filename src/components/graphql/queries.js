import { gql } from "@apollo/client";

const GET_BLOGS_DATA = gql`
  query MyQuery {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      slug
      title
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_Authors_DATA = gql`
  query MyQuery {
    authors {
      name
      id
      slug
      avatar {
        url
      }
      description {
        text
      }
    }
  }
`;

const GET_AUTHOR_DATA = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_DATA = gql`
  query getPostData($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
      }
      slug
      title
      coverPhoto {
        url
      }
      author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;

const GET_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_BLOGS_DATA,
  GET_Authors_DATA,
  GET_AUTHOR_DATA,
  GET_POST_DATA,
  GET_COMMENTS,
};
