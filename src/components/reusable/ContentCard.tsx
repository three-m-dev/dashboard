interface ContentCardProps {
  type: "blog" | "newsletter";
  title: string;
  date: string;
  author: string;
  image: string;
  content?: string;
  blogType?: "article" | "update";
  subject?: string;
  sendersCount?: number;
}

const ContentCard = ({
  type,
  title,
  date,
  author,
  image,
  content,
  blogType,
  subject,
  sendersCount,
}: ContentCardProps) => {
  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="w-full max-w-sm lg:flex lg:max-w-full">
      <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-t border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
        {type === "blog" && (
          <>
            <div className="mb-8">
              <p>{blogType}</p>
              <div className="mb-2 text-xl font-bold text-gray-900">
                {title}
              </div>
              <p className="text-base text-gray-700">
                {truncateText(content || "", 100)}
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="mr-4 h-10 w-10 rounded-full"
                src={image}
                alt={`Avatar of ${author}`}
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">{author}</p>
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </>
        )}
        {type === "newsletter" && (
          <>
            <div className="mb-8">
              <div className="mb-2 text-xl font-bold text-gray-900">
                {subject}
              </div>
              <p className="text-base text-gray-700">Senders: {sendersCount}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="leading-none text-gray-900">{author}</p>
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
