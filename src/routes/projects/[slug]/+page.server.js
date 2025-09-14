import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/helpers/contentful-fetch";

export async function load({ params }) {
  const { slug } = params;

  const query = `
{
	projectCollection(where: {slug: "${slug}"}){
    items{
      title
      shortDescription
      coverImage {
        url(transform: {
          format: AVIF
        })
        description
      }
      description {
        json
      }
      slug
    }
  }
}
`;

  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(response.status, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { items } = data.projectCollection;

  return { items };
}
