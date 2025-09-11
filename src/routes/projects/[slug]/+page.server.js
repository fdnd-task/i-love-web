import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/helpers/contentful-fetch";

export async function load({ params }) {
  const { slug } = params;

  const query = `
{
	projectCollection(where: {slug: "${slug}"}){
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
