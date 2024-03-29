export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Section 1 with a background image */}
      <section
        id="section1"
        className="h-screen flex justify-center items-center"
        style={{
          backgroundImage: 'url("/assets/planets_align_in_front_of_the_sun.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-2xl font-bold font-sans text-gray-800">Section 1</h2>
      </section>

      {/* Section 2 */}
      <section id="section2" className="h-screen flex justify-center items-center bg-green-200">
        <h2 className="text-2xl font-bold font-sans text-gray-800">Section 2</h2>
      </section>

      {/* Section 3 */}
      <section id="section3" className="h-screen flex justify-center items-center bg-red-200">
        <h2 className="text-2xl font-bold font-sans text-gray-800">Section 3</h2>
      </section>
    </main>
  );
}
