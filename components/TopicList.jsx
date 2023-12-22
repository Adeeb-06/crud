import React from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("https://crud-adeeb.vercel.app/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Fail to fetch topics");
    }
    return res.json()
  } catch (error) {
    console.log("error loading topics:" + error);
  }
};

export default async function TopicList()  {
  const { topics } = await getTopics();
  console.log(topics)
  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border-[solid] border-slate-300 my-3 flex justify-between gap-5 items-start rounded-[20px] border-[2px]   "
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-4">
            <RemoveBtn id={t._id}/>
            <Link
              href={`/editTopic/${t._id}`}
              className="bg-lime-400 p-5 rounded-[50%] text-white-500"
            >
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};


