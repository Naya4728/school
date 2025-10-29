export default function Academics() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Academic Excellence
          </h1>
          <p className="text-lg md:text-xl">
            Inspiring students through a world-class curriculum and innovative learning experiences.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Our Curriculum
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Greenfield Academy, we offer a broad and balanced curriculum designed to challenge, inspire,
          and prepare students for future success.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">Primary School</h3>
            <p className="text-gray-600">
              Building strong foundations in literacy, numeracy, science, and social studies.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">Middle School</h3>
            <p className="text-gray-600">
              Developing critical thinking, leadership, and collaboration skills across a diverse range of subjects.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">High School</h3>
            <p className="text-gray-600">
              Preparing students for college and beyond with rigorous academics, electives, and career-focused programs.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Departments</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {["Science", "Mathematics", "Arts & Humanities", "Technology"].map((dept) => (
            <div
              key={dept}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-indigo-700">{dept}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="photo-1529070538774-1843cb3265df.avif"
            alt="extracurricular activities"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 text-indigo-800">
            Beyond the Classroom
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Education goes beyond textbooks. We encourage students to participate in sports, arts, music,
            debate, and community service to nurture holistic development.
          </p>
          <button className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg shadow hover:bg-indigo-600 transition">
            Explore Activities
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Academic Programs?</h2>
        <p className="mb-6 text-lg">
          Take the next step in your educational journey at Greenfield Academy.
        </p>
        <button className="px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition">
          Apply Now
        </button>
      </section>
    </div>
  );
}
