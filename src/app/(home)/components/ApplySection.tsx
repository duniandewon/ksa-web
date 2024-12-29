import Achievement from "@/components/Achievement";
import ApplicationForm from "@/components/ApplicationForm";
import Parallax from "@/components/Parallax";
import { SectionsHeader } from "@/components/SectionsHeader";

function LeftSide() {
  return (
    <div className="space-y-4 basis-[58%] text-white">
      <SectionsHeader
        className="text-white"
        data={{
          subtitle: "Your Path to Umrah Serenity",
          title: "Your Ultimate Umrah Experience Awaits",
        }}
      />
    </div>
  );
}

function Form() {
  return (
    <div className="basis-[39%] rounded-3xl overflow-hidden">
      <div className="bg-muted p-8 space-y-8">
        <div className="border-b pb-4">
          <h2 className="font-semibold text-2xl">Book you prligrims here</h2>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
}

export function ApplySection() {
  return (
    <section className="flex flex-col">
      <Achievement />
      <Parallax
        bgUrl="https://res.cloudinary.com/ndewon/image/upload/v1735484017/KSA/pexels-yasirgurbuz-11259831_btuygq.jpg"
        className="-mt-[75px] pt-36 pb-10"
      >
        <div className="container lg:flex items-center space-y-16">
          <LeftSide />
          <Form />
        </div>
      </Parallax>
    </section>
  );
}
