"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default  function AddTopic() {
const router = useRouter()
const [title , setTitle] = useState("")
const [description, setDescription] = useState("")

const handleSubmit =async (e)=>{
  e.preventDefault();
  if(!title || !description){
    alert("Please enter a title and description");
    return;
  }

  try {
    const res =await fetch('https://crud-adeeb.vercel.appapi/topics',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({title , description})
    })
    if(res.ok){
      router.push('/')
      router.refresh()
    }else{
      throw new Error('failed to create topic')
    }
  } catch (error) {
    console.log('errro')
  }
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border text-black border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 text-black"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 "
      >
        Add Topic
      </button>
    </form>
  );
}