import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Head from "next/head";
import { DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { NodeArticle } from "components/node--article";
import { NodeBasicPage } from "components/node--basic-page";
import { NodeItcPage } from "components/node--itc-page";
import { Layout } from "components/layout";

const RESOURCE_TYPES = ["node--page", "node--article", "node--ict_page"];

interface NodePageProps {
  resource: DrupalNode;
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null;

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
      {resource.type === "node--ict_page" && <NodeItcPage node={resource} />}
    </Layout>
  );
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context);

  if (!path) {
    return {
      notFound: true,
    };
  }

  const type = path.jsonapi.resourceName;

  let params = {};
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    };
  }

  if (type === "node--ict_page") {
    params = {
      include:
        "field_text, field_itc_pillars, field_itc_pillars.field_pillars,field_itc_pillars.field_pillars.field_animation.field_media_svg, field_carousel, field_carousel.items, field_carousel.items.image, field_carousel.items.image.field_media_image, field_highlight, field_highlight.field_image.field_media_image, field_itc_values, field_itc_values.values, field_itc_values.values.image, field_itc_values.values.image.field_media_image",
    };
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  );

  //const carousel = await getCarousel("81a37512-3de2-4cfb-9823-33041e3c32aa");
  //console.log(carousel);
  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`);
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      resource,
    },
  };
}
