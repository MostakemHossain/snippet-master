import { mainColor } from "@/public/colors";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <DataObjectIcon
          sx={{
            fontSize: 27,
            color: "white",
          }}
        />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className={`text-slate-600`}>Master</span>
      </div>
    </div>
  );
}
