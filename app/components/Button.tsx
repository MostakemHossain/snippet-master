import { mainColor } from "@/public/colors";

export default function Button() {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button
        className={`max-sm:w-full bg-[${mainColor}] p-[8px] px-6 text-sm text-white rounded-md`}
      >
        Sing In
      </button>
      <button
        className={`text-sm border border-[${mainColor}] text-[${mainColor}] text-sm hover:bg-[${mainColor}] hover:text-white p-[8px] px-6 text-sm  rounded-md`}
      >
        Sing Up
      </button>
    </div>
  );
}
