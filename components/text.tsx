interface TextProps {
  field_title: string;
  field_background_color?: string;
  field_description: string;
}

export default function Text({
  field_title,
  field_background_color,
  field_description,
}: TextProps) {
  const style = {
    backgroundColor: field_background_color,
    color: field_background_color == "#ffffff" ? "#000000" : "#ffffff",
  };

  return (
    <div style={style} className="m-20">
      <h1 className="text-center font-bold text-[30px]">{field_title}</h1>
      <p className="mt-[30px] text-center text-[#717171] text-[16px] leading-[30px]">
        {field_description}
      </p>
    </div>
  );
}
