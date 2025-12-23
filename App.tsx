
import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import AIAssistant from './components/AIAssistant';
import { Product } from './types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Precision Engine Casing',
    category: 'Engine Components',
    description: 'Aircraft-grade aluminum CNC-machined casing designed for superior thermal dissipation and structural integrity.',
    imagePrompt: 'Close-up of a high-tech CNC machined aluminum motorcycle engine cover, metallic finish, industrial lighting'
  },
  {
    id: '2',
    name: 'Custom Upswept Exhaust',
    category: 'Performance',
    description: 'Stainless steel upswept exhaust system providing the legendary Royal Enfield thump with improved airflow and reduced weight.',
    imagePrompt: 'A gleaming stainless steel chrome motorcycle exhaust pipe, elegant curves, studio lighting, black background'
  },
  {
    id: '3',
    name: 'Heritage Leather Saddle',
    category: 'Comfort',
    description: 'Hand-stitched premium grade leather saddle with vibration-damping springs for the ultimate touring experience.',
    imagePrompt: 'Professional product shot of a black leather motorcycle seat with vintage diamond stitching, high quality'
  },
  {
    id: '4',
    name: 'Forged Alloy Rims',
    category: 'Chassis',
    description: 'Heavy-duty forged alloy rims designed for off-road durability and highway stability, available in matte and chrome.',
    imagePrompt: 'A sleek matte black multi-spoke motorcycle wheel rim, modern design, professional photography'
  },
  {
    id: '5',
    name: 'LED Projector Headlamp',
    category: 'Electrical',
    description: 'Ultra-bright 6500K LED projector unit with halo ring, encased in a rugged die-cast aluminum housing.',
    imagePrompt: 'A modern LED motorcycle headlight with a glowing halo ring, futuristic tech, close-up product shot'
  },
  {
    id: '6',
    name: 'Chromed Fuel Tank',
    category: 'Bodywork',
    description: 'Mirror-finish chrome fuel tank for the Classic series, featuring the iconic hand-painted pin-striping.',
    imagePrompt: 'A high-shine chrome motorcycle fuel tank, reflection of a studio, classic vintage shape'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&v=1" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.5em] mb-4 text-sm md:text-base animate-pulse">Engineering Excellence</h2>
          <h1 className="font-display text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter">
            THE ART OF <br /> <span className="text-red-600 italic">PRECISION</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed mb-10">
            Amkay manufactures high-performance components for Royal Enfield motorcycles, blending heritage aesthetics with modern manufacturing standards.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#products" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Explore Catalog
            </a>
            <a href="#about" className="border border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Our Process
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-900 py-20 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 font-display">25+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Years of Mastery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 font-display">500k</div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Parts Produced</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 font-display">100%</div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Quality Assured</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2 font-display">50+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">Custom Designs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm">Components</h2>
              <h3 className="font-display text-5xl md:text-6xl font-black">THE CATALOG</h3>
            </div>
            <p className="max-w-md text-neutral-500 text-sm leading-relaxed">
              Every part in our catalog is engineered to exact specifications, ensuring a perfect fit and legendary performance for your machine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process/About Section */}
      <section id="about" className="py-32 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/800/1000?grayscale&v=2" alt="Manufacturing" className="w-full h-full object-cover grayscale opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600/10 backdrop-blur-3xl rounded-full -z-10 animate-pulse"></div>
            </div>
            
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm">Our Manufacturing</h2>
              <h3 className="font-display text-5xl font-black mb-8">FORGED BY FIRE,<br />REFINED BY TECH</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                At Amkay, we don't just manufacture parts; we engineer reliability. Our facility utilizes state-of-the-art 5-axis CNC machining centers and advanced metallurgical testing labs.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Precision Machining", desc: "Tolerances within 0.01mm for flawless fitment." },
                  { title: "Premium Materials", desc: "Grade 6061-T6 aluminum and high-tensile steel alloys." },
                  { title: "Artisanal Finishing", desc: "Hand-polished chrome and electrostatic powder coating." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 flex-shrink-0 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <i className="fa-solid fa-check text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="assistant" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm">Smart Consultant</h2>
            <h3 className="font-display text-5xl font-black mb-4">ENGINEERING ADVISOR</h3>
            <p className="text-neutral-500">Need help choosing a part? Ask our AI assistant about compatibility and specs.</p>
          </div>
          
          <AIAssistant />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-900 pt-32 pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-display text-2xl font-black">A</div>
                <span className="text-3xl font-black tracking-tighter uppercase italic">Amkay</span>
              </div>
              <p className="text-neutral-500 max-w-sm mb-10 leading-relaxed">
                Premium manufacturing solutions for motorcycle enthusiasts worldwide. We redefine durability for the Royal Enfield legacy.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-all"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-all"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-all"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
              <ul className="space-y-4 text-neutral-500 text-sm">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-red-500 transition-colors">Parts Catalog</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Dealer Portal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Location</h4>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Plot 42, Industrial Area Phase II,<br />
                Manufacturing Hub, Pune,<br />
                Maharashtra - 411026
              </p>
              <p className="text-white font-bold text-sm">+91 98765 43210</p>
              <p className="text-neutral-500 text-sm">sales@amkay.com</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
            <p>© 2024 AMKAY ENGINEERING PVT LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
