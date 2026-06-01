import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide33() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={4}
      headline="Discipline vs Motivation"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Aim for Discipline</li>
          <li>Motivation: comes in spurs.</li>
          <li>Discipline: can be maintained.</li>
          <li>Discipline is a commitment to becoming the best possible version of yourself</li>
          <li>while accepting, you'll never finish growing</li>
          <li>physical exercise helps maintain discipline</li>
        </ul>
      }
    />
  );
}