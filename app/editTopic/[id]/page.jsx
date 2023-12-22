import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json();
    // console.log("Fetched data:", data.topic);
    
    return data.topic || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const topic = await getTopicById(id);

  if (!topic) {
    console.log('Failed to get topic');
    return null;
  }

  const { title, description } = topic || {};

  return <EditTopicForm id={id} title={title} description={description} />;
}
