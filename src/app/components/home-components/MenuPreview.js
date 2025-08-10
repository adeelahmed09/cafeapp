export default function MenuPreview() {
  const menuItems = [
    {
      name: "Caramel Latte",
      description: "Rich espresso with creamy caramel sweetness.",
      price: "$4.50",
      image: "/menu1.jpg"
    },
    {
      name: "Vanilla Cold Brew",
      description: "Smooth cold brew infused with vanilla notes.",
      price: "$3.80",
      image: "/menu2.jpg"
    },
    {
      name: "Mocha Delight",
      description: "Chocolate and coffee, a match made in heaven.",
      price: "$4.20",
      image: "/menu3.webp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5c4033]">
          Our Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-[#f8f5f2] hover:scale-105 transition rounded-lg hover:shadow-2xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#5c4033]">{item.name}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
                <p className="mt-4 font-bold text-[#5c4033]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center hover:scale-105 transition mt-10">
          <a
            href="#full-menu"
            className="bg-[#5c4033] text-white px-6 py-3 rounded-lg hover:bg-[#4a3328]  transition duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
