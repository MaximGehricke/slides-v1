import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide32() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={3}
      headline="Accountability"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Tell EVERYONE you are making the project</li>
          <li>If you care about your reputation, you will feel pressure to deliver</li>
          <li>people will keep asking about progress</li>
          <li>Danger! You have to be fully committed!</li>
        </ul>
      }
    />
  );
}