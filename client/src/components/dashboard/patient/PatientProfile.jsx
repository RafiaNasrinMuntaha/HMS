import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function PatientProfile() {
  const [tab, setTab] = useState("info");
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1711-000000",
    dob: "1990-05-15",
    gender: "Male",
    emergency: "+880 1811-000000",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState({
    current: false,
    newPass: false,
    confirm: false,
  });
  const [passError, setPassError] = useState("");
  const [passSaved, setPassSaved] = useState(false);

  const handleProfileSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirm) {
      setPassError("Passwords do not match.");
      return;
    }
    if (passwords.newPass.length < 8) {
      setPassError("Minimum 8 characters.");
      return;
    }
    setPassError("");
    setPassSaved(true);
    setPasswords({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setPassSaved(false), 3000);
  };

  const toggleShow = (field) =>
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-primary mb-6">
        My Profile
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: "info", label: "Personal Information" },
          { id: "password", label: "Change Password" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
              ${
                tab === id
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-gray-200 hover:border-primary"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-2xl">
        {/* Personal Info */}
        {tab === "info" && (
          <form onSubmit={handleProfileSave} className="space-y-5">
            {saved && (
              <div className="bg-green-50 text-green-600 text-sm px-4 py-3 rounded-lg">
                ✓ Profile updated successfully!
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-primary block mb-1.5">
                Full Name
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                <span className="px-3 text-gray-400">
                  <FaUser size={14} />
                </span>
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="flex-1 py-3 pr-4 text-sm outline-none text-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-primary block mb-1.5">
                  Email
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                  <span className="px-3 text-gray-400">
                    <FaEnvelope size={14} />
                  </span>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="flex-1 py-3 pr-2 text-sm outline-none text-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1.5">
                  Phone
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                  <span className="px-3 text-gray-400">
                    <FaPhone size={14} />
                  </span>
                  <input
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="flex-1 py-3 pr-2 text-sm outline-none text-primary"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-primary block mb-1.5">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profile.dob}
                  onChange={(e) =>
                    setProfile({ ...profile, dob: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors text-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1.5">
                  Gender
                </label>
                <select
                  value={profile.gender}
                  onChange={(e) =>
                    setProfile({ ...profile, gender: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition-colors text-primary bg-white"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary block mb-1.5">
                Emergency Contact
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                <span className="px-3 text-gray-400">
                  <FaPhone size={14} />
                </span>
                <input
                  value={profile.emergency}
                  onChange={(e) =>
                    setProfile({ ...profile, emergency: e.target.value })
                  }
                  className="flex-1 py-3 pr-4 text-sm outline-none text-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition-all duration-200 text-sm"
            >
              Save Changes
            </button>
          </form>
        )}

        {/* Change Password */}
        {tab === "password" && (
          <form onSubmit={handlePasswordSave} className="space-y-5">
            {passError && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
                {passError}
              </div>
            )}
            {passSaved && (
              <div className="bg-green-50 text-green-600 text-sm px-4 py-3 rounded-lg">
                ✓ Password changed!
              </div>
            )}

            {[
              {
                field: "current",
                label: "Current Password",
                placeholder: "Enter current password",
              },
              {
                field: "newPass",
                label: "New Password",
                placeholder: "Min. 8 characters",
              },
              {
                field: "confirm",
                label: "Confirm Password",
                placeholder: "Repeat new password",
              },
            ].map(({ field, label, placeholder }) => (
              <div key={field}>
                <label className="text-sm font-medium text-primary block mb-1.5">
                  {label}
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                  <span className="px-3 text-gray-400">
                    <FaLock size={14} />
                  </span>
                  <input
                    type={showPass[field] ? "text" : "password"}
                    value={passwords[field]}
                    onChange={(e) =>
                      setPasswords({ ...passwords, [field]: e.target.value })
                    }
                    placeholder={placeholder}
                    required
                    className="flex-1 py-3 text-sm outline-none text-primary"
                  />
                  <button
                    type="button"
                    onClick={() => toggleShow(field)}
                    className="px-3 text-gray-400 hover:text-primary transition-colors"
                  >
                    {showPass[field] ? (
                      <FaEyeSlash size={14} />
                    ) : (
                      <FaEye size={14} />
                    )}
                  </button>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition-all duration-200 text-sm"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
