import { writeFileSync } from "node:fs";
import qs from "qs";

async function main() {
  const url =
    "http://localhost:1337/api/posts?" +
    qs.stringify(
      {
        fields: [
          "slug",
          "title",
          "description",
          "publishedAt",
          "author",
          "body",
        ],
        populate: {
          image: {
            fields: ["url"],
          },
        },
        sort: ["updatedAt:desc"],
        pagination: {
          pageSize: 3,
          page: 1,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const body = await response.json();

  writeFileSync(
    "scripts/strapi-response.json",
    JSON.stringify(body, null, 2),
    "utf8"
  );

  console.log("Response saved.");
}

main().catch(console.error);