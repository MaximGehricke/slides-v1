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
          <li>Motivation: spurs. Discipline: maintains.</li>
          <li>Commitment: becoming the best possible version of yourself</li>
          <li>Accepting: never finished growing</li>
          <li>Discipline is also physical — Exercise!</li>
        </ul>
      }
    />
  );
}