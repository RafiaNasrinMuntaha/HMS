import { useParams, useNavigate } from "react-router-dom";

const allNews = [
  {
    id: 1,
    title: "The Importance of Regular Heart Checkups",
    category: "Health Care",
    author: "Professor Dr Shaikh Md Hasan Mamun",
    date: "Monday 05, January 2026",
    views: 68,
    likes: 86,
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
    content: `
      Regular heart checkups are one of the most effective ways to prevent serious cardiovascular disease. 
      Many people ignore symptoms like occasional chest tightness or shortness of breath, assuming they are 
      just signs of stress or aging. However, these could be early warning signs of a serious heart condition.

      Our cardiology team at MediCore recommends that everyone above the age of 30 should get an annual 
      heart screening. This includes an ECG, blood pressure check, cholesterol levels, and a consultation 
      with a cardiologist.

      Early detection of conditions like hypertension, arrhythmia, or coronary artery disease can 
      significantly improve treatment outcomes. In many cases, lifestyle changes alone — such as diet, 
      exercise, and stress management — can reverse early-stage heart disease.

      At MediCore, our cardiology department is equipped with the latest diagnostic tools and staffed by 
      experienced specialists who are passionate about preventive care. Book your checkup today and take 
      the first step towards a healthier heart.
    `,
  },
  {
    id: 2,
    title: "Understanding DNA Testing and What It Means for You",
    category: "Medical",
    author: "Dr. Rehnuma Rashid",
    date: "Tuesday 24, February 2026",
    views: 54,
    likes: 72,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    content: `
      DNA testing has evolved far beyond ancestry and paternity verification. Today, it is a powerful 
      medical tool that can help doctors understand a patient's genetic predisposition to certain diseases, 
      allowing for truly personalized medicine.

      At MediCore, our DNA testing services cover a wide range of applications including genetic disease 
      screening, cancer risk assessment, pharmacogenomics (how your body responds to medications), and 
      hereditary condition testing.

      Understanding your genetic makeup can be life-changing. For example, knowing that you carry a gene 
      associated with breast cancer or heart disease allows you and your doctor to take proactive steps — 
      whether that's more frequent screenings, preventive medications, or lifestyle changes.

      Our laboratory uses the latest sequencing technology and all results are reviewed by certified 
      geneticists. Results are kept strictly confidential and are only shared with the patient and their 
      designated physician.

      If you are interested in DNA testing, speak to your doctor at MediCore to find out which test is 
      right for you.
    `,
  },
  {
    id: 3,
    title: "Why Free Checkups Save Lives",
    category: "Surgery",
    author: "Dr. S M Ali Ahsan",
    date: "Sunday 15, March 2026",
    views: 91,
    likes: 110,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    content: `
      It is a well-known fact that many serious medical conditions go undetected simply because people 
      do not visit a doctor until symptoms become severe. By that point, treatment options may be limited 
      and outcomes are often worse.

      MediCore's free checkup program was launched with a simple mission — to make preventive healthcare 
      accessible to everyone, regardless of financial situation. Since its launch, the program has helped 
      thousands of patients catch conditions like diabetes, hypertension, anemia, and even early-stage 
      cancers before they became life-threatening.

      During a free checkup at MediCore, patients receive a full body general examination, blood pressure 
      and blood sugar screening, BMI assessment, and a consultation with one of our experienced doctors. 
      The entire process takes less than an hour and is completely free of charge.

      We believe that prevention is always better than cure. A single free checkup today could save you 
      from years of expensive treatment tomorrow. Visit MediCore and take control of your health — because 
      your life is worth it.
    `,
  },
  {
  id: 4,
  title: "Recovering From Joint Replacement Surgery: What to Expect",
  category: "Surgery",
  author: "Dr. Rahul Bhan",
  date: "Friday 01, May 2026",
  views: 63,
  likes: 88,
  image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
  content: `
    Joint replacement surgery is one of the most successful procedures in modern medicine. 
    Whether it is a hip, knee, or shoulder replacement, thousands of patients regain their 
    mobility and quality of life each year thanks to this procedure.

    At MediCore, our orthopaedic team ensures that every patient receives comprehensive 
    pre-operative and post-operative care. Before surgery, our specialists will assess 
    your overall health, explain the procedure in detail, and prepare a personalised 
    recovery plan.

    The first few days after surgery are the most critical. Patients can expect some 
    swelling, discomfort, and limited mobility. Our nursing staff and physiotherapists 
    are available around the clock to manage pain and guide you through early movement 
    exercises.

    Most patients are able to walk with assistance within 24 hours of surgery. Full 
    recovery typically takes between 6 to 12 weeks depending on the type of replacement 
    and the patient's overall health condition.

    Our physiotherapy team will work with you through every stage of recovery — from 
    gentle range-of-motion exercises in the hospital to strength training at home. 
    We are committed to helping you get back to your normal life as quickly and safely 
    as possible.
  `,
},
];

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = allNews.find((n) => n.id === parseInt(id));

  if (!news) {
    return <div className="p-10 text-center">Article not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <button
        onClick={() => navigate("/news")}
        className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-8 hover:underline"
      >
        ← Back to News
      </button>

      <img
        src={news.image}
        alt={news.title}
        className="w-full h-80 object-cover rounded mb-8"
      />

      <div className="flex flex-wrap items-center gap-3 text-sm text-[#3AABBB] mb-4">
        <span>📅 {news.date}</span>
        <span>✍️ By {news.author}</span>
        <span className="bg-[#3AABBB] text-white px-3 py-1 rounded-full text-xs">
          {news.category}
        </span>
        <span>👁️ {news.views}</span>
        <span>❤️ {news.likes}</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B3C6B] mb-6">{news.title}</h1>

      <div className="text-gray-600 leading-8 whitespace-pre-line">
        {news.content}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/appointment")}
          className="bg-[#1B3C6B] text-white px-6 py-2 rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer"
        >
          Book an Appointment
        </button>
        <button
          onClick={() => navigate("/news")}
          className="border border-[#1B3C6B] text-[#1B3C6B] px-6 py-2 rounded hover:bg-[#1B3C6B] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          ← Back to News
        </button>
      </div>
    </div>
  );
};

export default NewsDetailPage;