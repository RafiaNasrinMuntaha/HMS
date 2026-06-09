import { useState } from "react";
import { useNavigate } from "react-router-dom";


const allNews = [
  {
    id: 1,
    title: "The Importance of Regular Heart Checkups",
    category: "Health Care",
    author: "Professor Dr Shaikh Md Hasan Mamun",
    date: "Monday 05, January 2026",
    views: 68,
    likes: 86,
    excerpt:
      "Regular heart checkups can help detect early signs of cardiovascular disease. Our cardiology team explains why annual screenings are essential for everyone above 30.",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
  },
  {
    id: 2,
    title: "Understanding DNA Testing and What It Means for You",
    category: "Medical",
    author: "Dr. Rehnuma Rashid",
    date: "Tuesday 24, February 2026",
    views: 54,
    likes: 72,
    excerpt:
      "DNA testing is no longer just for ancestry. It can reveal important genetic risk factors for diseases, allowing doctors to create personalized treatment plans.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  },
  {
    id: 3,
    title: "Why Free Checkups Save Lives",
    category: "Surgery",
    author: "Dr. S M Ali Ahsan",
    date: "Sunday 15, March 2026",
    views: 91,
    likes: 110,
    excerpt:
      "Many serious conditions go undetected simply because people skip routine checkups. MediCore's free checkup program has helped thousands of patients catch problems early.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
];

const categories = [
  { name: "Surgery", count: 3 },
  { name: "Health Care", count: 5 },
  { name: "Medical", count: 8 },
  { name: "Professional", count: 10 },
];

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = allNews.filter((news) =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-50 py-12 px-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-4 hover:underline"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-[#1B3C6B] text-center">Blog Posts</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex gap-10">

        {/* Main Posts */}
        <div className="flex-1 space-y-12">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No posts found.</p>
          ) : (
            filtered.map((news) => (
              <div key={news.id} className="border-b pb-10">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover rounded mb-5"
                />
                <div className="flex items-center gap-4 text-sm text-[#3AABBB] mb-2">
                  <span>📅 {news.date}</span>
                  <span>✍️ By {news.author}</span>
                  <span>👁️ {news.views}</span>
                  <span>❤️ {news.likes}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#1B3C6B] mb-3">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
               <button
  onClick={() => navigate(`/news/${news.id}`)}
  className="border border-[#1B3C6B] text-[#1B3C6B] px-5 py-2 rounded hover:bg-[#1B3C6B] hover:text-white transition-colors duration-300 cursor-pointer"
>
  Read More →
</button>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="w-72 flex-shrink-0 space-y-8">

          {/* Search */}
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="bg-[#1B3C6B] text-white px-4">🔍</button>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold text-[#1B3C6B] mb-4">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {allNews.map((news) => (
                <div key={news.id} className="flex gap-3 items-start">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs text-[#3AABBB]">{news.date}</p>
                    <p className="text-sm text-[#1B3C6B] font-semibold leading-tight">
                      {news.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-[#1B3C6B] mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex justify-between items-center px-4 py-2 bg-blue-50 rounded"
                >
                  <span className="text-gray-600 text-sm">{cat.name}</span>
                  <span className="bg-[#3AABBB] text-white text-xs px-2 py-1 rounded-full">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsPage;