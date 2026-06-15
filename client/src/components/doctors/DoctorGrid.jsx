import DoctorCard from "./DoctorCard";

export const doctors = [
  {
    id: 1,
    name: "Prof. Brig. Gen Ghulam Kawnayn",
    degree: "MBBS, FCPS (Neurology)",
    role: "Senior Consultant",
    department: "Neurology",
    image: "/src/Public/assets/doctor1.png",
    expertise: [
      "Completed MBBS from Dhaka Medical College and FCPS in Neurology from BCPS.",
      "Over 15 years of experience treating neurological disorders.",
      "Worked as Head of Neurology at Dhaka Medical College.",
      "Attended international training programs in neurology across Africa and Europe.",
      "Published numerous research papers in national and international journals.",
    ],
  },
  {
    id: 2,
    name: "Dr. Asif Ahmed Bin Moin",
    degree: "MBBS, MD (Cardiology)",
    role: "Senior Consultant",
    department: "Cardiology",
    image: "/src/Public/assets/doctor2.png",
    expertise: [
      "Completed MBBS and MD in Cardiology from Dhaka Medical College.",
      "Specialist in interventional cardiology and heart failure management.",
      "Previously worked as Chief Cardiologist at United Hospital Dhaka.",
      "Trained in advanced cardiac procedures in India and the United Kingdom.",
      "Member of the Bangladesh Cardiac Society and African Heart Foundation.",
    ],
  },
  {
    id: 3,
    name: "Dr. Fahmida Akhter",
    degree: "MBBS, FCPS (Gynaecology)",
    role: "Consultant",
    department: "Gynaecology",
    image: "/src/Public/assets/doctor3.png",
    expertise: [
      "Completed MBBS from Dhaka Medical College and FCPS in Gynaecology.",
      "Specialist in maternal health, high-risk pregnancies, and laparoscopic surgery.",
      "Worked at Dhaka Medical College Hospital for over 10 years.",
      "Attended women's health training programs in the USA and UK.",
      "Active member of the Bangladesh Medical Association and African Gynaecology Society.",
    ],
  },
  {
    id: 4,
    name: "Dr. Rahul Bhan",
    degree: "MBBS, MS (Orthopaedics)",
    role: "Senior Consultant",
    department: "Orthopaedics",
    image: "/src/Public/assets/doctor4.png",
    expertise: [
      "Completed MBBS and MS in Orthopaedics from Dhaka Medical College.",
      "Specialist in joint replacement, spine surgery, and sports injuries.",
      "Previously worked at National Orthopaedic Hospital, Dhaka.",
      "Trained in advanced orthopaedic techniques in India and Singapore.",
      "Member of the Bangladesh Orthopaedic Society.",
    ],
  },
  {
    id: 5,
    name: "Dr. Abu Jafar Mohammed Saleh",
    degree: "MBBS, MD (Oncology)",
    role: "Senior Consultant",
    department: "Oncology",
    image: "/src/Public/assets/doctor5.png",
    expertise: [
      "Completed MBBS and MD in Oncology from Dhaka Medical College.",
      "Specialist in cancer diagnosis, chemotherapy, and radiation therapy.",
      "Previously worked at National Cancer Institute, Dhaka.",
      "Trained in advanced oncology procedures in India and Germany.",
      "Member of the Bangladesh Cancer Society.",
    ],
  },
  {
    id: 6,
    name: "Dr. Farzana Haseen",
    degree: "MBBS, FCPS (Ophthalmology)",
    role: "Consultant",
    department: "Ophthalmology",
    image: "/src/Public/assets/doctor6.png",
    expertise: [
      "Completed MBBS and FCPS in Ophthalmology from BCPS.",
      "Specialist in cataract surgery, glaucoma, and retinal disorders.",
      "Worked at National Eye Hospital, Dhaka for 8 years.",
      "Trained in advanced eye surgery techniques in Singapore.",
      "Member of the Bangladesh Ophthalmological Society.",
    ],
  },
  {
    id: 7,
    name: "Dr. Mohammad Enamul Hoque",
    degree: "MBBS, MD (Dermatology)",
    role: "Consultant",
    department: "Dermatology",
    image: "/src/Public/assets/doctor7.png",
    expertise: [
      "Completed MBBS and MD in Dermatology from Dhaka Medical College.",
      "Specialist in skin disorders, cosmetic dermatology, and laser treatments.",
      "Previously worked at Dhaka Skin Centre for 6 years.",
      "Trained in advanced dermatology in Thailand and Malaysia.",
      "Member of the Bangladesh Dermatological Society.",
    ],
  },
  {
    id: 8,
    name: "Dr. Ayesha Perveen",
    degree: "MBBS, MD (Radiology & Imaging)",
    role: "Associate Consultant",
    department: "Radiology & Imaging",
    image: "/src/Public/assets/doctor8.png",
    expertise: [
      "Completed MBBS and MD in Radiology & Imaging from Dhaka Medical College.",
      "Specialist in medical imaging, diagnostic radiology, and interventional procedures.",
      "Previously worked at Bangabandhu Sheikh Mujib Medical University.",
      "Trained in advanced gastroenterology in India and Thailand.",
      "Member of the Bangladesh Society of Gastroenterology.",
    ],
  },
  {
    id: 9,
    name: "Dr. Dipika Dey",
    degree: "MBBS, MD (Paediatrics)",
    role: "Senior Consultant",
    department: "Paediatrics",
    image: "/src/Public/assets/doctor9.png",
    expertise: [
      "Completed MBBS and MD in Paediatrics from Dhaka Medical College.",
      "Specialist in respiratory diseases, asthma, and sleep disorders.",
      "Previously worked at National Institute of Diseases of Chest and Hospital.",
      "Trained in advanced Paediatrics in Japan and South Korea.",
      "Member of the Bangladesh Paediatric Society.",
    ],
  },
  {
    id: 10,
    name: "Dr. Md. Faizur Rahman",
    degree: "MBBS, MCPS, MS (Nephrology)",
    role: "Senior Consultant",
    department: "Nephrology",
    image: "/src/Public/assets/doctor10.png",
    expertise: [
      "Completed MBBS and MS in Nephrology from Dhaka Medical College.",
      "Specialist in kidney disorders, urinary tract infections, and bladder surgery.",
      "Previously worked at National Kidney Foundation Hospital, Dhaka.",
      "Trained in advanced nephrology in India and Singapore.",
      "Member of the Bangladesh Association of Nephrologists.",
    ],
  },
];

const DoctorGrid = ({ filtered }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-10 col-span-2">
          No doctors found.
        </p>
      ) : (
        filtered.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))
      )}
    </div>
  );
};

export default DoctorGrid;