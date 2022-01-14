/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      name
      profilePhoto
      biography
      isCreator
      createdAt
      creator_id
      updatedAt
      posts {
        nextToken
      }
      custompages {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      name
      profilePhoto
      biography
      isCreator
      createdAt
      creator_id
      updatedAt
      posts {
        nextToken
      }
      custompages {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      name
      profilePhoto
      biography
      isCreator
      createdAt
      creator_id
      updatedAt
      posts {
        nextToken
      }
      custompages {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      body
      likes
      file
      fileName
      fileType
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      body
      likes
      file
      fileName
      fileType
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      body
      likes
      file
      fileName
      fileType
      createdAt
      authorId
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onCreateCustomPage = /* GraphQL */ `
  subscription OnCreateCustomPage {
    onCreateCustomPage {
      id
      header
      profile
      headingText
      subheadingText
      joinBtnColor
      whyJoinBg
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
    }
  }
`;
export const onUpdateCustomPage = /* GraphQL */ `
  subscription OnUpdateCustomPage {
    onUpdateCustomPage {
      id
      header
      profile
      headingText
      subheadingText
      joinBtnColor
      whyJoinBg
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
    }
  }
`;
export const onDeleteCustomPage = /* GraphQL */ `
  subscription OnDeleteCustomPage {
    onDeleteCustomPage {
      id
      header
      profile
      headingText
      subheadingText
      joinBtnColor
      whyJoinBg
      authorId
      createdAt
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      body
      likes
      createdAt
      authorId
      postId
      name
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      post {
        id
        title
        body
        likes
        file
        fileName
        fileType
        createdAt
        authorId
        updatedAt
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      body
      likes
      createdAt
      authorId
      postId
      name
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      post {
        id
        title
        body
        likes
        file
        fileName
        fileType
        createdAt
        authorId
        updatedAt
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      body
      likes
      createdAt
      authorId
      postId
      name
      updatedAt
      author {
        id
        email
        name
        profilePhoto
        biography
        isCreator
        createdAt
        creator_id
        updatedAt
      }
      post {
        id
        title
        body
        likes
        file
        fileName
        fileType
        createdAt
        authorId
        updatedAt
      }
    }
  }
`;
