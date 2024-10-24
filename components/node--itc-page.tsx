import Pillars from "components/pillar";
import Text from "components/text";
import Highlight from "components/highlight";
import { DrupalNode } from "next-drupal";
import CoreValues from "components/core-values";
import ItcCarousel from "components/carousel";

interface NodeArticleProps {
  node: DrupalNode;
}

export function NodeItcPage({ node, ...props }: NodeArticleProps) {
  return (
    <article {...props}>
      <Text {...node.field_text} />
      <div className="my-5">
        <Pillars {...node.field_itc_pillars} />
      </div>

      <Highlight {...node.field_highlight} />
      <CoreValues {...node.field_itc_values} />
      <ItcCarousel {...node.field_carousel} />
    </article>
  );
}
