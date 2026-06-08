import { FaEye, FaHeart } from "react-icons/fa";

const news = [
  {
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
];

export default function NewsGrid() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Better Information, Better Health
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">News</h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300"
                alt="news"
                className="w-32 h-24 object-cover rounded flex-shrink-0"
              />
              <div>
                <p className="text-accent text-xs mb-1">
                  {item.date} | By {item.author}
                </p>
                <p className="text-primary font-medium text-sm mb-2 leading-snug">
                  {item.title}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1">
                    <FaEye /> {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart /> {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === 1 ? "bg-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
