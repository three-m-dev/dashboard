const BlogBuilder = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-8 shadow-lg">
      <input
        type="text"
        placeholder="Title"
        className="mb-4 rounded border border-gray-300 p-2"
        required
      />
      <textarea
        placeholder="Description (Optional)"
        className="mb-4 rounded border border-gray-300 p-2"
        rows={4}
      />
      <div className="mb-4">
        <div className="flex items-center justify-between rounded border border-gray-300 p-2">
          <button className="font-bold">B</button>
          <button className="italic">I</button>
          <button className="underline">U</button>
        </div>
      </div>
      <textarea
        placeholder="Content"
        className="rounded border border-gray-300 p-2"
        rows={8}
        required
      />
      <div className="mt-4 flex justify-between">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Save and Publish
        </button>
        <button className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default BlogBuilder;
