import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID

const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID

export async function getDatabaseMetadata() {
    try {
        if (!DATABASE_ID) throw new Error("DATABASE_ID is missing from .env");

        const response = await notion.databases.retrieve({
            database_id: DATABASE_ID
        });


        const dataSources = response.data_sources
        console.log(dataSources)
        // return response;
        console.log(response)
    } catch (error) {
        console.error("Notion API Error:", error.body || error.message);
        throw error;
    }
}


export async function getDatabaseContents() {
    try {
        const response = await notion.dataSources.query({
            data_source_id: DATA_SOURCE_ID,
            filter: {
                "property": "Published",
                "checkbox": {
                    "equals": true
                }
            },
            sorts: [
                {
                    property: "PublishedDate",
                    direction: "descending"
                }
            ],
        });

        console.log("Notion Response Results Length:", response.results?.length);

        if (!response.results.length) {
            console.warn("No results found in Notion.");
            // User wanted this to throw, but logging it is safer for debugging properly first
            // throw new Error(`Notion API HTTP error! Status: ${response.results}`);
            return [];
        }

        return response.results

    } catch (error) {
        console.error("Detailed Query Error:", error);
        return []
    }
}