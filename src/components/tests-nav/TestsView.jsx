import ScienceIcon from "@mui/icons-material/Science";
import UnderDevelopment from "../utils/UnderDevelopment";

export default function TestsView() {
  return (
    <div className="mt-10">
      <div className="flex flex-col w-full py-8 px-4 border border-neutral-800">
        <div className="flex flex-row items-center gap-3">
          <ScienceIcon className="text-[#C8FF88]" />
          <p className="text-xl font-bold">Tests</p>
        </div>
        <p className="text-sm text-neutral-400 mt-3">
          View and manage your chaos engineering tests.
        </p>
      </div>
      <div className="mt-8">
        <UnderDevelopment />
      </div>
    </div>
  );
}
