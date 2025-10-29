export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-indigo-800 text-white py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Greenfield Academy</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Shaping minds, building futures, and nurturing tomorrow’s leaders with excellence in education.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide a world-class education that empowers students with the knowledge, skills, and values needed
            to thrive in an ever-changing world.
          </p>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be a leading institution recognized for academic excellence, innovation, and holistic student development.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6">Our History</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Founded in 1995, Greenfield Academy began with a simple vision: to create a learning environment
            where every child can thrive. Over the years, we have grown into a community of passionate educators
            and curious learners, committed to academic excellence and character development.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="School Building"
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Principal"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700">Dr. Emily Carter</h3>
            <p className="text-gray-600">Principal</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Vice Principal"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700">Mr. James Anderson</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Head of Academics"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-indigo-700">Mrs. Laura Mitchell</h3>
            <p className="text-gray-600">Head of Academics</p>
          </div>
        </div>
      </section>
    </div>
  );
}
