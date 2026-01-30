// app/author/[slug]/page.jsx

import AuthorPage from "@/components/authorSection/authorProfile";
import { base_url } from "@/components/Helper/helper";



 

 
export async function generateMetadata({ params }) {
  console.log("Params in author slug metadata:", params);
  const slug = params.slug;
  const baseUrl = "https://fgstmails.com";
 
  try {
    const res = await fetch(`${base_url}/api/auth/singleUserbyslug/${slug}`, {
      next: { revalidate: 60 },
    });


 
    // if (!res.ok) {
    //   return {
    //     title: "Author Not Found | Jobkityaari",
    //     description: "No author information available at the moment.",
    //     alternates: {
    //       canonical: `${baseUrl}/author/${slug}`,
    //     },
    //   };
    // }
 
    const data = await res.json();
    const author = data[0];


   
 
    if (!author) {
      return {
        title: "Author Not Found | Jobkityaari",
        description: "No author information available at the moment.",
        alternates: {
          canonical: `${baseUrl}/author/${slug}`,
        },
      };
    }

    
 
    const fullName = `${author?.name}`;
    const bio =`Explore articles and insights by ${fullName} on fgstmails.`;

    // const imageUrl = author?.image
    //   ? author?.image.startsWith("http")
    //     ? author?.image
    //     : `${baseUrl}${author?.image}`
    //   : `${baseUrl}/images/default-user.png`;
  // console.log("Author is " , author);

    return {
      title: `${fullName} | Author at fgstmails`,
      description: bio,
      keywords: [
        fullName,
        "fgstmails authors",
        "tech blog authors",
        "curated content writer",
        "fgstmails 5 articles",
        "insights by " + fullName,
      ],
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
      openGraph: {
        title: `${fullName} | Author at fgstmails`,
      description: bio,
        url: `${baseUrl}/author/${slug}`,
        siteName: "fgstmails",
        type: "article",
        images: [
          {
            url: `${base_url}${author?.image}`,
            width: 1200,
            height: 630,
            alt: "fgstmails – Latest in India",
          },
        ],
      },

    };
  } catch (error) {
    return {
      title: "Author Profile | fgstmails",
      description:
        "Author information could not be loaded due to a network issue.",
      alternates: {
        canonical: `${baseUrl}/author/${slug}`,
      },
    };
  }
}
 
export default function Page({ params }) {
  return <AuthorPage slug={params?.slug} />;
}
 
 