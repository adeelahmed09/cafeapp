export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Best coffee in town! The atmosphere is so cozy, and the staff is always friendly.",
      image: "/review1.jpg"
    },
    {
      name: "Mark Thompson",
      text: "Their caramel latte is my absolute favorite. I can't start my day without it!",
      image: "/review2.jpg"
    },
    {
      name: "Emily Davis",
      text: "Perfect spot for relaxing with friends. The mocha is a must-try!",
      image: "/review3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-[#f8f5f2]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#5c4033] mb-10">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">{review.text}</p>
              <h4 className="font-semibold text-[#5c4033]">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
