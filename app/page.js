export default function ClothingBusinessWebsite() {
  const products = [
    {
      name: "Classic Oversized Hoodie",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium cotton oversized hoodie designed for everyday comfort.",
    },
    {
      name: "Urban Streetwear Jacket",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
      description:
        "Lightweight streetwear jacket with modern minimal styling.",
    },
    {
      name: "Essential Relaxed T-Shirt",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Soft breathable cotton t-shirt for daily casual wear.",
    },
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Customers can return products within 15 days of delivery.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Orders are usually delivered within 3-5 business days.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer: "Yes, cash on delivery is available across India.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              VeroWear Fashion Store
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Discover premium streetwear, hoodies, jackets, and casual
              essentials designed for modern fashion lovers.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
              Shop Collection
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
            alt="Fashion Store"
            className="rounded-3xl shadow-2xl h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-8">
            VeroWear is a modern clothing brand focused on stylish, comfortable,
            and affordable fashion. We specialize in premium streetwear and
            everyday essentials for customers across India.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                      {product.price}
                    </span>
                    <button className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-300 mb-3">
            Email: support@verowear.com
          </p>
          <p className="text-gray-300 mb-3">Phone: +91 98765 43210</p>
          <p className="text-gray-300">
            Hyderabad, Telangana, India
          </p>
        </div>
      </section>
    </div>
  );
}
