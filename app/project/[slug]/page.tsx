import { project_slugs } from "@/app/constants"
import Project from "@/app/components/project";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    return  project_slugs.map((project_slug) => ({
      slug: project_slug
    }));
}
   
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: {slug: string}}) {
  const { slug } = params;
  return <Project slug={slug}/>;
}