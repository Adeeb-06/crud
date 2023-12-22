"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}) {
  const router = useRouter()

  const removeTopic = async()=>{
    const confirmed = confirm("Are you sure")
    if(confirmed) {
      const res = await fetch(`https://crud-adeeb.vercel.app/api/topics?id=${id}` , {
        method: 'DELETE',
      })
      if(res.ok){
        router.refresh()
      }
    }
  }
  return (
    <button onClick={removeTopic} className="text-white-400 bg-red-600 p-5 rounded-[50%] ">
      <HiOutlineTrash size={24} />
    </button>
  );
}