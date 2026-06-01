import TextSlide from "@/components/TextSlide";
export default function Slide05() {
  return (
    <TextSlide
      headline="Three major parts:"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Where it started.</li>
          <li>Some technical details on the work and the challenges I encountered.</li>
          <li>The mental challenge of making a project of this scope solo.</li>
        </ul>
      }
    />
  );
}