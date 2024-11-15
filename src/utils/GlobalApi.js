import { gql, request } from 'graphql-request'

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;



const GetBlogById = async (id) =>{
  const query = gql`
 query MyQuery {
  blogs(where: {blogId: ${id}}) {
    id
    keywords
    date
    title
    article
    subtitle
    subparagraph
    titleParagraph
    paragraph
    pic {
      url
    }
  }
}
`
const result = await request(MASTER_URL, query);
console.log(result.blogs);
return result.blogs[0];
}

export default{
    GetBlogById
}