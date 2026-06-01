import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide31() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={2}
      headline="The 10min Trick"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Set a timer: 10min - or whatever amount of time feels comfortable to endure with task at hand</li>
          <li>Once passed, if you don't feel like it, you can stop working and do whatever you desire more.</li>
          <li>Most times, you're invested and keep going longer.</li>
          <li>BUT: don't deceive yourself. Truly don't feel like it? Do something fun!</li>
          <li>Doesn't work well for chores, passion projects only!</li>
        </ul>
      }
    />
  );
}