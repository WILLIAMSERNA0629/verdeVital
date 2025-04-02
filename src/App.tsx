import { Sparkles, Shield, Wind, Leaf, Star, MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573127570197', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
                ¡Descubre la Revolución Natural en Cuidado Dental con HGW! 🦷✨
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                ¿Estás listo para transformar tu sonrisa de forma natural? Con la pasta dental HGW, 
                no solo limpias tus dientes, ¡los revitalizas!
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full 
                transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                <MessageCircle size={20} />
                Contáctanos por WhatsApp
              </button>
            </div>
            <div className="relative">
              <img
                src='/images/pastaDental1.jpeg'
                alt="Pasta dental natural HGW"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-600 mt-1">+1000 reseñas positivas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Blancura Radiante</h3>
            <p className="text-gray-600">
              Despídete de las manchas y saluda a una sonrisa más brillante.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Protección Natural Completa</h3>
            <p className="text-gray-600">
              Combate las caries y fortalece el esmalte con ingredientes naturales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Wind className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Frescura Duradera</h3>
            <p className="text-gray-600">
              Disfruta de un aliento fresco que dura todo el día con componentes naturales.
            </p>
          </div>
        </div>
      </div>

      {/* Promotional Image Section */}
      <div className="bg-white py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/pastaDentalMujer.jpeg"
              alt="Mujer sonriendo usando pasta dental HGW"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Natural Ingredients Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Ingredientes 100% Naturales
            </h2>
            <div className="flex items-center justify-center gap-2">
              <Leaf className="text-green-600" />
              <p className="text-lg text-gray-600">
                Formulado con los mejores ingredientes de la naturaleza
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¡Tu sonrisa lo merece!
          </h2>
          <p className="text-lg mb-8">
            No esperes más para experimentar la diferencia HGW.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-white text-green-800 font-semibold py-3 px-8 rounded-full 
            transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-100 
            flex items-center gap-2 mx-auto">
            <MessageCircle size={20} />
            Contáctanos
          </button>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full 
          shadow-lg transition duration-300 ease-in-out transform hover:scale-110 z-50">
        <MessageCircle size={32} />
      </button>
    </div>
  );
}

export default App;