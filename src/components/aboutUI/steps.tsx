// ProcessSteps.tsx
import React from "react";
import Image from "next/image";

type Step = {
  num: number;
  title: string;
  body: React.ReactNode;
};

const steps: Step[] = [
  {
    num: 1,
    title: "CAD & Design",
    body: (
      <>
        Creating detailed <strong>CAD and isometric drawings</strong> for exact
        prefabrication accuracy.
      </>
    ),
  },
  {
    num: 2,
    title: "Precision Cutting",
    body: (
      <>
        Automated <strong>plasma cutting and grooving</strong> deliver
        consistent dimensions within ±1 mm tolerance.
      </>
    ),
  },
  {
    num: 3,
    title: "Robotic Welding",
    body: (
      <>
        <strong>ABB-powered robotic weld cells</strong> guarantee uniform,
        certified welds with zero leakage.
      </>
    ),
  },
  {
    num: 4,
    title: "Testing & Certification",
    body: (
      <>
        Each unit undergoes{" "}
        <strong>hydro-testing, QC inspection, and documentation review.</strong>
      </>
    ),
  },
];

function Card({ num, title, body }: Step) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="rounded-2xl bg-[#EAEAEF] p-4">
        <h3 className="font-anek mb-6">Step {String(num).padStart(2, "0")}</h3>
        <h2 className="font-anek mb-2 text-lg font-semibold">{title}</h2>
        <div className="font-arabic text-sm">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

// ProcessSteps.tsx
export default function ProcessSteps() {
  return (
    <div className="flex flex-col mb-20 ml-10 mr-10 gap-10 lg:flex-row items-center justify-center">
      {steps.map((step, idx) => (
        <React.Fragment key={step.num}>
          {/* ----------  CARD WRAPPER  ---------- */}
          <div
            className={`
                relative flex flex-col gap-4         
                ${idx === 0 ? "-translate-y-8" : ""}
                ${idx === 1 ? "translate-y-8" : ""}
                ${idx === 2 ? "-translate-y-8" : ""}
                ${idx === 3 ? "translate-y-8" : ""}
              `}
          >
            {/* ARROW **ABOVE** card for steps 2 & 4 */}
            {idx === 3 && (
              <img
                src="/arrow.png"
                alt=""
                className="hidden h-fit w-fit lg:block"
              />
            )}
            {idx === 1 && (
              <img
                src="/arrow.png"
                alt=""
                className="hidden h-fit w-fit lg:block"
              />
            )}

            {/* THE CARD */}
            <Card num={step.num} title={step.title} body={step.body} />

            {/* ARROW **BELOW** card for steps 1 & 3 */}

            {idx === 2 && (
              <img
                src="/arrow.png"
                alt=""
                className="hidden h-fit w-fit -scale-y-90 lg:block"
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
