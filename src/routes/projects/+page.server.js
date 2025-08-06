import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/helpers/contentful-fetch'

const query = `
{
	projectCollection{
    items{
      title
      coverImage {
        url(transform: {
          format: AVIF
        })
        description
      }
      slug
    }
  }
}
`

export async function load() {
  const response = await contentfulFetch(query)

  if (!response.ok) {
    console.log(response)
    throw error(response.status, {
      message: response.statusText,
    })
  } else {
    console.log(response)
  }

  const { data } = await response.json()
  const { items } = data.projectCollection

  return items
}