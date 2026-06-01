import TextSlide from "@/components/TextSlide";
export default function Slide26() {
  return (
    <TextSlide
      headline="Debugging Process"
      body={
        <div className="space-y-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>Reproduce</li>
            <li>Simplify</li>
            <li>Analyze</li>
            <li>Iterate individually (change 1 thing only, then check)</li>
          </ul>
          <div className="pt-4 border-t border-white/20">
            <h3 className="text-2xl font-bold mb-2 text-white">How to Google</h3>
            <p>LLMs are helpful, but question everything they say.</p>
          </div>
        </div>
      }
    />
  );
}