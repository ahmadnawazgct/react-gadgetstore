import * as contentful from "contentful";

export const client = contentful.createClient({
         // This is the space ID. A space is like a project folder in Contentful terms
         space: "REACT_APP_SPACE_ID",
         /* This is the access token for this space. Normally you get both ID 
and the token in the Contentful web app */
         accessToken: "REACT_APP_ACCESS_TOKEN"
       });

export default client