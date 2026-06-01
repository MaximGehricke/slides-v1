import fs from 'fs';
import path from 'path';

const slidesDir = path.join(process.cwd(), 'slides');

// Ensure directory exists
if (!fs.existsSync(slidesDir)) {
  fs.mkdirSync(slidesDir, { recursive: true });
}

// Clean up existing slides
const existingFiles = fs.readdirSync(slidesDir);
for (const file of existingFiles) {
  if (file !== 'index.ts' && file.endsWith('.tsx')) {
    fs.unlinkSync(path.join(slidesDir, file));
  }
}

const slideDefs = [
  // 1. Title
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide01() {
  return <TitleSlide headline="How to make 3min of animation in just 5 years!" bgImage="" />;
}`,
  // 2. Video: SEN_reel.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide02() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/SEN_reel.mp4" />;
}`,
  // 3. Video: bestOfFS.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide03() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/bestOfFS.mp4" />;
}`,
  // 4. Video: SEN_reel.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide04() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/SEN_reel.mp4" />;
}`,
  // 5. Text: Three major parts
  `import TextSlide from "@/components/TextSlide";
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
}`,
  // 6. Title: Where it started
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide06() {
  return <TitleSlide headline="Where it started" bgImage="" />;
}`,
  // 7. Video: uni.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide07() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/uni.mp4" />;
}`,
  // 8. Video: SEN_reel.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide08() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/SEN_reel.mp4" />;
}`,
  // 9. Title: Technical
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide09() {
  return <TitleSlide headline="Technical" bgImage="" />;
}`,
  // 10. Video: cocnepts_story.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide10() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/cocnepts_story.mp4" />;
}`,
  // 11. Video: CHRs.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide11() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/CHRs.mp4" />;
}`,
  // 12. Video: ASSTS.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide12() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/ASSTS.mp4" />;
}`,
  // 13. Title: Animation
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide13() {
  return <TitleSlide headline="Animation" bgImage="" />;
}`,
  // 14. Video: animBlocking.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide14() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/animBlocking.mp4" />;
}`,
  // 15. Video: animSplinePolish.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide15() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/animSplinePolish.mp4" />;
}`,
  // 16. Title: Lighting
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide16() {
  return <TitleSlide headline="Lighting" bgImage="" />;
}`,
  // 17. Video: lgt_clouds.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide17() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/lgt_clouds.mp4" />;
}`,
  // 18. Video: lgt_fire.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide18() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/lgt_fire.mp4" />;
}`,
  // 19. Title: FX
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide19() {
  return <TitleSlide headline="FX" bgImage="" />;
}`,
  // 20. Video: portalFX.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide20() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/portalFX.mp4" />;
}`,
  // 21. Video: trailFX.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide21() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/trailFX.mp4" />;
}`,
  // 22. Title: Compositing
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide22() {
  return <TitleSlide headline="Compositing" bgImage="" />;
}`,
  // 23. Image: complayers.PNG
  `import ImageSlide from "@/components/ImageSlide";
export default function Slide23() {
  return <ImageSlide src="/images/complayers.PNG" />;
}`,
  // 24. Video: BD_PortalDistortion.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide24() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/BD_PortalDistortion.mp4" />;
}`,
  // 25. Video: explosion.mp4
  `import VideoSlide from "@/components/VideoSlide";
export default function Slide25() {
  return <VideoSlide src="https://pub-b7c5f41c03ef46718a1713db88239f83.r2.dev/explosion.mp4" />;
}`,
  // 26. Text: Debugging Process
  `import TextSlide from "@/components/TextSlide";
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
}`,
  // 27. Title: The mental challenge of making a project of this scale solo.
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide27() {
  return <TitleSlide headline="The mental challenge of making a project of this scale solo." bgImage="" />;
}`,
  // 28. Strategies: Headlines only
  `import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide28() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
    />
  );
}`,
  // 29. Strategies: Break it down
  `import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide29() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={0}
      headline="Breaking tasks down"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Keep steps small, brain can't argue</li>
          <li>Some mornings: first task simply "open Maya"</li>
          <li>Complete - tiny dopamine reward reduces friction</li>
        </ul>
      }
    />
  );
}`,
  // 30. Strategies: Routine
  `import StrategiesSlide from "@/components/StrategiesSlide";
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
}`,
  // 31. Strategies: The 10min Trick
  `import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide31() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={2}
      headline="The 10min Trick"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>Set a timer: 10min or whatever amount of time comfortable to endure with task at hand.</li>
          <li>Once passed, how do you feel? You can stop working and do whatever you desire more.</li>
          <li>Most times, you're invested and keep going longer.</li>
          <li>BUT: don't deceive yourself. Truly don't feel like it? Do something fun!</li>
        </ul>
      }
    />
  );
}`,
  // 32. Strategies: Accountability
  `import StrategiesSlide from "@/components/StrategiesSlide";
export default function Slide32() {
  const strategies = ["Break it down", "Routine", "The 10min Trick", "Accountability", "Discipline"];
  return (
    <StrategiesSlide
      strategies={strategies}
      activeIndex={3}
      headline="Accountability"
      body={
        <ul className="list-disc pl-6 space-y-4">
          <li>The "sledgehammer method" of motivation</li>
          <li>Tell EVERYONE you are making the project</li>
          <li>If you care about reputation, you will feel pressure to deliver when they keep asking about progress</li>
          <li>Danger! You are fully committed!</li>
        </ul>
      }
    />
  );
}`,
  // 33. Strategies: Discipline
  `import StrategiesSlide from "@/components/StrategiesSlide";
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
}`,
  // 34. Text: QOL / Outsource Memory
  `import TextSlide from "@/components/TextSlide";
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
}`,
  // 35. Title: Generalist or Specialize?
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide35() {
  return <TitleSlide headline="Bonus Slide: Generalist or Specialize?" bgImage="" />;
}`,
  // 36. Thank You
  `import TitleSlide from "@/components/TitleSlide";
export default function Slide36() {
  return <TitleSlide headline="Thank You!" bgImage="" />;
}`
];

let indexTsContent = `/**
 * Slide registry – import all numbered slides and export them in order.
 */
import { ComponentType } from "react";

`;

const exportsList = [];

for (let i = 0; i < slideDefs.length; i++) {
  const numStr = String(i + 1).padStart(2, '0');
  const fileName = `${numStr}.tsx`;
  const compName = `Slide${numStr}`;

  fs.writeFileSync(path.join(slidesDir, fileName), slideDefs[i]);

  indexTsContent += `import ${compName} from "@/slides/${numStr}";\n`;
  exportsList.push(compName);
}

indexTsContent += `\nconst slides: ComponentType<any>[] = [\n  ${exportsList.join(',\n  ')}\n];\n\nexport default slides;\n`;

fs.writeFileSync(path.join(slidesDir, 'index.ts'), indexTsContent);

console.log("Successfully generated all slides.");
