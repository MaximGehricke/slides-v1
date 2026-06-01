import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide30() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={1}
      headline="Routine matters - Consistency is key"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Habits beat procrastination</li>
          <li>Consistently do same things roughly same time every day</li>
          <li>2 weeks - 1 month until it becomes easy</li>
        </ul>
      }
    />
  );
}