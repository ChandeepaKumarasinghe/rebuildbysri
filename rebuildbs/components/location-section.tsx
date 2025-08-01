export function LocationSection() {
  return (
    <section id="location" className="py-12 sm:py-16 bg-[#080808]">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-[#ff4f00] text-3xl sm:text-4xl font-bold mb-8"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          Our Location
        </h2>

        <div className="w-full h-64 sm:h-80 md:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467999756!2d79.86107831477!3d6.914742995010001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sThimbirigasyaya%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1642000000000!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Location"
          ></iframe>
        </div>

        <p className="text-[#c9c0bb] text-lg sm:text-lg" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          Visit us at our convenient location in Colombo
        </p>
      </div>
    </section>
  )
}
