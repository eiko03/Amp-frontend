/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createCustomPage = /* GraphQL */ `
  mutation CreateCustomPage(
    $input: CreateCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    createCustomPage(input: $input, condition: $condition) {
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
export const updateCustomPage = /* GraphQL */ `
  mutation UpdateCustomPage(
    $input: UpdateCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    updateCustomPage(input: $input, condition: $condition) {
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
export const deleteCustomPage = /* GraphQL */ `
  mutation DeleteCustomPage(
    $input: DeleteCustomPageInput!
    $condition: ModelCustomPageConditionInput
  ) {
    deleteCustomPage(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
