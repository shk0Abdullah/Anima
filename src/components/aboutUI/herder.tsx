// HeadingBlock.tsx
import React from "react";

export default function Heading() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 m-20">
      <h1 className="font-urbanist text-4xl font-semibold text-black">
        Inside the Botpipes Prefabrication Process —{" "}
        <span className="text-[#24275E]">
          Where Precision Meets Performance
        </span>
      </h1>

      <div className="font-arabic text-sm text-gray-500">
        <p>
          Our <strong>robotic prefabrication process</strong> delivers{" "}
          <strong>faster timelines, leak-free joints,</strong> and{" "}
          <strong>certified consistency</strong> — transforming complex
          fire-safety designs into ready-to-install assemblies.
        </p>
        <p className="mt-2">
          Each step is engineered for{" "}
          <strong>accuracy, reliability, and safety,</strong> ensuring seamless
          installation and long-term performance at every project site.
        </p>
      </div>
    </div>
  );
}
