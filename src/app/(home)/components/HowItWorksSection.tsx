import { SectionsHeader } from "@/components/SectionsHeader";

interface Step {
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    title: "Inquiry and Consultation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Documentation Submission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Payment and Confirmation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Perform your Holy Pilgrims",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

function Steps({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="flex justify-between gap-6 border-b last:border-b-0 pb-10"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{step.title}</h2>
            <p>{step.description}</p>
          </div>
          <div>
            <h2 className="text-7xl font-bold">0{index + 1}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="grid grid-cols-2 gap-28 container py-16">
      <div className="space-y-8">
        <SectionsHeader
          data={{
            title: "Embarking Your Sacred Umrah Venture Since 2007",
            subtitle: "How it Works",
          }}
        />
        <div className="relative">
          <div className="w-full rounded-3xl bg-slate-600 h-[31.625rem]"></div>
          <div className="bg-muted flex items-center rounded-3xl w-7/12 px-5 py-9 absolute -bottom-8 -right-10">
            <div className="w-[93.33px] h-full"></div>
            <h3 className="font-bold text-2xl">
              Flying & Send 1000+ Pilgrims to Mecca
            </h3>
          </div>
        </div>
      </div>
      <Steps steps={STEPS} />
    </section>
  );
}
