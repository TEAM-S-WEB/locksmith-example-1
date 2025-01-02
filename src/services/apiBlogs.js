

const MASTER_URL=process.env.BACKEND_API_URL;
const OWNER_EMAIL=process.env.EMAIL;

export const GetAllBlogsByUser = async () =>{
try {
    const res = await fetch(`https://crm-backend-4uvx.onrender.com/blog/my-blogs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ownerEmail: OWNER_EMAIL,
        }),
    })
    const data = await res.json();
    return data;
} catch (error) {
    return console.log(error);
}
}