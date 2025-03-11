import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import UnderDevelopment from "../utils/UnderDevelopment";

export default function ReportsView() {
  return (
    <div className="mt-10">
      <div className="flex flex-col w-full py-8 px-4 border border-neutral-800">
        <div className="flex flex-row items-center gap-3">
          <BarChartRoundedIcon className="text-[#C8FF88]" />
          <p className="text-xl font-bold">Reports</p>
        </div>
        <p className="text-sm text-neutral-400 mt-3">
          Access comprehensive reports and analytics from your chaos engineering
          experiments.
        </p>
      </div>
      <div className="mt-8">
        <UnderDevelopment />
      </div>
    </div>
  );
}
