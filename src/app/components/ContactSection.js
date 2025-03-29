import Image from "next/image";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center justify-center text-center py-10 bg-gray-900 text-white fade-in"
    >

      <h2 className="text-2xl font-semibold mb-6">Contact Person</h2>

      <h3 className="text-1xl font-semibold mb-6">‎ </h3>
      <h3 className="text-1xl font-semibold mb-6">‎ </h3>

      <div className="flex flex-col items-center gap-2">

        <div className="flex items-center gap-2">
          <Image src="/whatsapp1.webp" alt="WhatsApp Logo" width={25} height={25} />
          <span className="text-lg font-medium">+62 896-8321-5333</span>
        </div>


        <div className="flex items-center gap-2">
          <Image src="/line.webp" alt="LINE Logo" width={25} height={25} />
          <span className="text-lg font-medium">@ds.ezra</span>
        </div>
      </div>
    </footer>
  );
}
