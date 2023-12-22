import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        CRUD APP
      </Link>
      <Link className="bg-[lime] rounded-[50%] text-slate-800 p-2" href={"/addTopic"}>
      <IoMdAdd size={24} />
      </Link>
    </nav>
  );
}