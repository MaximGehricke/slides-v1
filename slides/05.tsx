import TextSlide from "@/components/TextSlide";
export default function Slide05() {
  return (
    <TextSlide
      headline="Three major parts:"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Project Origins</li>
          <li>Technical Breakdown</li>
          <li>The mental challenge of solo-dev</li>
        </ul>
      }
    />
  );
}