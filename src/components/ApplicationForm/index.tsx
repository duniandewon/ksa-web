import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ApplicationForm() {
  return (
    <form className=" grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <h5 className="font-semibold">Your name</h5>
        <Input placeholder="Name" />
      </div>
      <div className="space-y-2">
        <h5 className="font-semibold">Your Email Address</h5>
        <Input type="email" placeholder="Email" />
      </div>
      <div className="space-y-2">
        <h5 className="font-semibold">Your Phone Number</h5>
        <Input placeholder="Phone" />
      </div>
      <div className="space-y-2">
        <h5 className="font-semibold">Your City</h5>
        <Input placeholder="City" />
      </div>
      <div className="space-y-2 col-span-2">
        <h5 className="font-semibold">Select a package</h5>
        <Input placeholder="Package" />
      </div>
      <div className="col-span-2">
        <Button size="lg">Apply Now</Button>
      </div>
    </form>
  );
}
