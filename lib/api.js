async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPostsGQL() {
  const data = await fetchAPI(
    `query Posts {
      posts {
        data {
          id
          attributes {
            title
            description
            author
            content
            createdAt
            profile {
              data {
                id
                attributes {
                  url
                }
              }
            }
            categories {
              data {
                id
                attributes {
                  Framework
                }
              }
            }
          }
        }
      }
    }`
  )
  return data.posts
}

export async function getPost(id) {
  const data = await fetchAPI(
    `query Posts($id: ID!) {
      post(id: $id) {
        data {
          id
          attributes {
            title
            description
            author
            content
            createdAt
            profile {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`,
    { variables: { id } }
  )
  return data.post
}

export async function getCategories() {
  const data = await fetchAPI(
    `query Categories {
      categories {
        data {
          id
          attributes {
            Framework
          }
        }
      }
    }`
  )
  return data.categories
}

export async function getCategory(id) {
  const data = await fetchAPI(
    `query Categories($id: ID!) {
      category(id: $id) {
        data {
          id
          attributes {
            Framework
          }
        }
      }
    }`,
    { variables: { id } }
  )
  return data.category
}