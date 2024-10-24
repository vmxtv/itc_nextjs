import CoreValueItem, {
  CoreValueItemProps,
} from "components/core-values--item";

interface CoreValuesProps {
  title: string;
  description: string;
  values: CoreValueItemProps[];
}
export default function CoreValues({
  title,
  description,
  values,
}: CoreValuesProps) {
  return (
    <div className="bg-[#f3f3f3] px-80 py-20 my-20">
      <div>
        <h1 className="font-bold text-center text-2xl">{title}</h1>
        <p className="text-center py-10">{description}</p>
      </div>
      <div>
        {values.map((value, index) => (
          <CoreValueItem
            key={index}
            title={value.title}
            description={value.description}
            image={value.image}
          />
        ))}
      </div>
    </div>
  );
}
