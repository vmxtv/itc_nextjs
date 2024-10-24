export function formatDate(input: string): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

export function getSvgUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

export async function getSvgContent(input: string) {
  let svg = await fetch(input)
    .then((response) => response.text())
    .then((text) => text)
    .catch((error) => console.error(error));

  return svg;
}
