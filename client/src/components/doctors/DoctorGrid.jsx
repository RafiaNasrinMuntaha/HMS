import DoctorCard from "./DoctorCard";

export const doctors = [
  {
    id: 1,
    name: "Prof. Brig. Gen Ghulam Kawnayn",
    degree: "MBBS, FCPS (Neurology)",
    role: "Senior Consultant",
    department: "Neurology",
    image: "/src/assets/doctor1.png",
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
    image: "/src/assets/doctor2.png",
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
    image: "/src/assets/doctor3.png",
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
    role: "Associate Consultant",
    department: "Orthopaedics",
    image: "/src/assets/doctor4.png",
    expertise: [
      "Completed MBBS and MS in Orthopaedics from Dhaka Medical College.",
      "Specialist in joint replacement, spine surgery, and sports injuries.",
      "Previously worked at National Orthopaedic Hospital, Dhaka.",
      "Trained in advanced orthopaedic techniques in India and Singapore.",
      "Member of the Bangladesh Orthopaedic Society.",
    ],
  },
];

const DoctorGrid = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorGrid;