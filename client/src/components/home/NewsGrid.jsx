import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const news = [
  {
    id: 1,
    date: "Monday 05, January 2026",
    author: "Professor Dr Shaikh Md Hasan Mamun",
    title: "The Importance of Regular Heart Checkups",
    views: 68,
    likes: 86,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
  },
  {
    id: 2,
    date: "Tuesday 24, February 2026",
    author: "Dr. Rehnuma Rashid",
    title: "Understanding DNA Testing and What It Means for You",
    views: 54,
    likes: 72,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    id: 3,
    date: "Sunday 15, March 2026",
    author: "Dr. S M Ali Ahsan",
    title: "Why Free Checkups Save Lives",
    views: 91,
    likes: 110,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
  {
    id: 1,
    date: "Monday 05, January 2026",
    author: "Professor Dr Shaikh Md Hasan Mamun",
    title: "The Importance of Regular Heart Checkups",
    views: 68,
    likes: 86,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
  },
];

export default function NewsGrid() {
  const navigate = useNavigate();

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
            <div
              key={i}
              onClick={() => navigate(`/news/${item.id}`)}
              className="flex gap-4 items-start cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-24 object-cover rounded flex-shrink-0 group-hover:opacity-80 transition-opacity"
              />
              <div>
                <p className="text-accent text-xs mb-1">
                  {item.date} | By {item.author}
                </p>
                <p className="text-primary font-medium text-sm mb-2 leading-snug group-hover:text-accent transition-colors">
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

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/news")}
            className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
          >
            View All News →
          </button>
        </div>
      </div>
    </section>
  );
}
