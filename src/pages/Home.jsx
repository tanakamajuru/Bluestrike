import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Zap, Box, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import BackgroundSlider from '@/components/BackgroundSlider';
import { useNavigation } from '../App';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const { navigate } = useNavigation();
  // Add your images here - replace with actual image paths from your src folder
  const serviceImages = [
    'src/assets/solar.png',
    'src/assets/generator.png',
    'src/assets/container.jpg',
    'src/assets/accessories.jpg',
  ];
  return (
    <AnimatedBackground variant="morphing">
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center justify-center px-6 bg-gradient-to-b from-blue-50/80 to-white/80 dark:from-gray-900/80 dark:to-gray-800/80">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            BLUESTRIKE ENGINEERING
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powering Your Future with
            <span className="text-blue-600 dark:text-blue-400"> Sustainable Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Excels in the sale, installation, and maintenance of solar products, 
            generators, fabricated containers, and essential accessories.
          </p>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 dark:bg-gray-800/50">
            Learn More
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="h-screen snap-start relative flex items-center px-6 overflow-hidden">
        <BackgroundSlider images={serviceImages} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your energy and infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Solar Products */}
            <Card className="hover:shadow-xl transition-shadow bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                  <Sun className="h-5 w-5 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Solar Products</CardTitle>
                <CardDescription className="text-sm">
                  High-efficiency solar panels and photovoltaic systems
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Solar panel installation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    System design & consultation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Regular maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Generators */}
            <Card className="hover:shadow-xl transition-shadow bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Generators</CardTitle>
                <CardDescription className="text-sm">
                  Reliable backup power solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Diesel & gas generators
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Professional installation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    24/7 maintenance support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Fabricated Containers */}
            <Card className="hover:shadow-xl transition-shadow bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <Box className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Fabricated Containers</CardTitle>
                <CardDescription className="text-sm">
                  Custom-built containers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Custom fabrication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Storage solutions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Mobile offices
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Accessories & Maintenance */}
            <Card className="hover:shadow-xl transition-shadow bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <Wrench className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Accessories & Maintenance</CardTitle>
                <CardDescription className="text-sm">
                  Essential components and support
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Quality accessories
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Preventive maintenance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    Emergency repairs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="h-screen snap-start flex items-center px-6 bg-blue-600/90 dark:bg-blue-900/90 text-white backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Bluestrike Investments?</h2>
            <p className="text-base md:text-lg text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
              Your trusted partner for sustainable energy and infrastructure solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Installation</h3>
              <p className="text-sm text-blue-100 dark:text-blue-200">
                Professional installation by certified technicians ensuring optimal performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Maintenance</h3>
              <p className="text-sm text-blue-100 dark:text-blue-200">
                Comprehensive maintenance plans to keep your systems running smoothly
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sun className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-sm text-blue-100 dark:text-blue-200">
                Premium products from trusted manufacturers with proven reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen snap-start flex items-center justify-center px-6 bg-gradient-to-b from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us today for a free consultation and discover how we can power your future
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('contacts')}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      </div>
    </AnimatedBackground>
  );
}
