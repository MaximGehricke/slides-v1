import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide29() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={0}
      headline="Break it down"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Break tasks down into steps so small, brain can't argue with them</li>
          <li>Some mornings: first task simply "open Maya"</li>
          <li>Completing task: tiny dopamine reward, reduces friction</li>
        </ul>
      }
    />
  );
}