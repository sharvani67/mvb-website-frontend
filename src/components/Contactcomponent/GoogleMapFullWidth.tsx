// components/ContactCompo/GoogleMapFullWidth.tsx
export default function GoogleMapFullWidth() {
  return (
    <section className="w-full">
      <div className="w-full h-[500px] mb-12">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6194194662785!2d77.6134774735871!3d12.867840117147663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b2f749b10e7%3A0x8fad47fa07dc98d3!2sP.N.Shetty%20Complex!5e0!3m2!1sen!2sin!4v1777290666154!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}