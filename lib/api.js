async function fetchAPI(query, { variables } = {}) {
  
  const res = await fetch(
    `${
      process.env.API_URL || 'https://shrouded-brushlands-64807.herokuapp.com'
    }/graphql`, {
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

export async function getPosts() {
  const data = await fetchAPI(
    `query Posts {
      posts(sort: "id:asc") {
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

export async function getTeknicFeatures() {
  const data = await fetchAPI(
    `query TeknicFeatures {
      teknicFeatures(sort: "id:asc") {
        data {
          id
          attributes {
            title
            subtitle
            Show
            icon {
              width
              height
              layout
              styles
              alt
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }`
  )
  return data.teknicFeatures
}

export async function getTeknicHomepage() {
  const data = await fetchAPI(
    `query Homepage {
      homepage {
        data {
          id
          attributes {
            Heros {
              id
              homeURL
              featureRelation {
                id
              }
              brandMedia {
                width
                height
                layout
                styles
                alt
                media {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              heroMedia {
                width
                height
                layout
                styles
                alt
                media {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              content {
                title
                subtitle
                description
                styles
              }
            }
          }
        }
      }
    }`
  )
  return data.homepage
}