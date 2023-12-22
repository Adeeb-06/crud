"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter();
  console.log(title , description)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle: newTitle,
          newDescription: newDescription,
        }),
      });

      if (!res.ok) {
        throw new Error("failed to update topic");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border  text-black border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border text-black border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
