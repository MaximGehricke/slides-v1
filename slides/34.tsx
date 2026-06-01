import TextSlide from "@/components/TextSlide";
export default function Slide34() {
  return (
    <TextSlide
      headline="QOL & Outsource Memory"
      body={
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">QOL — strong impact on motivation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automate + simplify repetitive tasks</li>
              <li>Not only saves time, but also brainpower</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">Outsource Memory</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Brain is good for processing, not good at remembering</li>
              <li>Started with simple .txt, now using Miro</li>
              <li>Whatever works for you.</li>
              <li>Switching it up every now and then keeps it exciting</li>
            </ul>
          </div>
        </div>
      }
    />
  );
}