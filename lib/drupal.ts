import { DrupalClient } from "next-drupal";

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    debug: process.env.NODE_ENV === "development",
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET,
    },
    withAuth: true,
    useDefaultResourceTypeEntry: true,
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
  }
);
