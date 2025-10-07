import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Zap, Box, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import BackgroundSlider from '@/components/BackgroundSlider';
import { useNavigation } from '../App';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import '../styles/brand-colors.css';

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
      <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center justify-center px-6 pt-24 relative overflow-hidden">
          {/* Brand Gradient Background */}
          <div className="absolute inset-0 brand-gradient-hero opacity-90"></div>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto max-w-full text-center relative z-10 px-4"
          >

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide"
            >
              BLUESTRIKE ENGINEERING
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Empowering Innovation with
              <span className="block text-[#90CAF9] drop-shadow-lg"> Cutting-Edge Technology</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Leading East Africa in sustainable energy solutions through expert installation, 
              maintenance, and innovative technology across solar, power generation, and infrastructure.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => navigate('about')}
                className="!inline-flex !items-center !justify-center !gap-2 !bg-[#4A90E2] !text-[#FFFFFF] hover:!bg-[#1E88E5] hover:!text-[#FFFFFF] active:!bg-[#0D47A1] dark:!bg-[#4A90E2] dark:!text-[#FFFFFF] dark:hover:!bg-[#64B5F6] dark:hover:!text-[#FFFFFF] dark:active:!bg-[#90CAF9] dark:active:!text-[#1A1F2E] hover:!scale-105 !transition-all !duration-200 !px-8 !py-4 !text-lg !font-semibold !shadow-xl !rounded-lg !cursor-pointer !border-0 !outline-none"
                style={{
                  backgroundColor: '#4A90E2',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1E88E5';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4A90E2';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => navigate('portfolio')}
                className="!inline-flex !items-center !justify-center !gap-2 !bg-transparent !text-[#4A90E2] !border-2 !border-[#4A90E2] hover:!bg-[#F5F7FA] hover:!text-[#1E88E5] hover:!border-[#1E88E5] dark:!bg-transparent dark:!text-[#64B5F6] dark:!border-[#64B5F6] dark:hover:!bg-[rgba(74,144,226,0.15)] dark:hover:!text-[#90CAF9] dark:hover:!border-[#90CAF9] hover:!scale-105 !transition-all !duration-200 !px-8 !py-4 !text-lg !font-semibold !backdrop-blur-sm !rounded-lg !cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  color: '#4A90E2',
                  border: '2px solid #4A90E2',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F5F7FA';
                  e.target.style.color = '#1E88E5';
                  e.target.style.borderColor = '#1E88E5';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#4A90E2';
                  e.target.style.borderColor = '#4A90E2';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </section>

      {/* Services Section */}
      <section className="h-screen snap-start relative flex items-center px-6 overflow-hidden">
        <BackgroundSlider images={serviceImages} />
        <div className="container mx-auto max-w-full relative z-10 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your energy and infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Solar Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="brand-card hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#64B5F6] to-[#90CAF9] rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Solar Products</CardTitle>
                  <CardDescription className="text-[#4A5568] dark:text-[#C7D2E0]">
                    High-efficiency solar panels and photovoltaic systems
                  </CardDescription>
                </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-[#4A5568] dark:text-[#C7D2E0]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Solar panel installation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    System design & consultation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Regular maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            </motion.div>

            {/* Generators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="brand-card hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#1E88E5] rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Generators</CardTitle>
                  <CardDescription className="text-[#4A5568] dark:text-[#C7D2E0]">
                    Reliable backup power solutions
                  </CardDescription>
                </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-[#4A5568] dark:text-[#C7D2E0]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Diesel & gas generators
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Professional installation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    24/7 maintenance support
                  </li>
                </ul>
              </CardContent>
            </Card>

            </motion.div>

            {/* Fabricated Containers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="brand-card hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E4057] to-[#4A90E2] rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <Box className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Fabricated Containers</CardTitle>
                  <CardDescription className="text-[#4A5568] dark:text-[#C7D2E0]">
                    Custom-built containers for diverse applications
                  </CardDescription>
                </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-[#4A5568] dark:text-[#C7D2E0]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Custom fabrication
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Storage solutions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Mobile offices
                  </li>
                </ul>
              </CardContent>
            </Card>

            </motion.div>

            {/* Accessories & Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="brand-card hover:shadow-xl transition-all duration-300 bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Accessories & Maintenance</CardTitle>
                  <CardDescription className="text-[#4A5568] dark:text-[#C7D2E0]">
                    Essential components and comprehensive support
                  </CardDescription>
                </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-[#4A5568] dark:text-[#C7D2E0]">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Quality accessories
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Preventive maintenance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-[#10B981] dark:text-[#34D399] mr-2 mt-0.5 flex-shrink-0" />
                    Emergency repairs
                  </li>
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="h-screen snap-start flex items-center px-6 relative overflow-hidden">
        {/* Brand Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E4057] via-[#4A90E2] to-[#64B5F6]"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="container mx-auto max-w-full relative z-10 text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose BlueStrike?</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner for sustainable energy and infrastructure solutions across East Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Expert Installation</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Professional installation by certified technicians ensuring optimal performance and reliability
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ongoing Maintenance</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Comprehensive maintenance plans and 24/7 support to keep your systems running at peak performance
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Sun className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Quality Products</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Premium products from trusted global manufacturers with proven track records and industry certifications
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen snap-start flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] via-[#E8EEF4] to-[#D1DDE8] dark:from-[#0F1419] dark:via-[#1A1F2E] dark:to-[#2E4057]"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-black/20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA] mb-6"
          >
            Ready to <span className="text-[#4A90E2]">Power Your Future?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#4A5568] dark:text-[#C7D2E0] mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Contact us today for a free consultation and discover how BlueStrike can transform your energy infrastructure with cutting-edge sustainable solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              onClick={() => navigate('contacts')}
              className="!inline-flex !items-center !justify-center !gap-3 !bg-[#4A90E2] !text-[#FFFFFF] hover:!bg-[#1E88E5] hover:!text-[#FFFFFF] active:!bg-[#0D47A1] dark:!bg-[#4A90E2] dark:!text-[#FFFFFF] dark:hover:!bg-[#64B5F6] dark:hover:!text-[#FFFFFF] dark:active:!bg-[#90CAF9] dark:active:!text-[#1A1F2E] !px-10 !py-6 !text-xl !font-semibold !shadow-xl hover:!shadow-2xl hover:!scale-105 !transition-all !duration-200 !rounded-lg !cursor-pointer !border-0 !outline-none"
              style={{
                backgroundColor: '#4A90E2',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 28px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1E88E5';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#4A90E2';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
            >
              Contact Us Today <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            
            <button 
              onClick={() => navigate('portfolio')}
              className="!inline-flex !items-center !justify-center !gap-3 !bg-transparent !text-[#4A90E2] !border-2 !border-[#4A90E2] hover:!bg-[#F5F7FA] hover:!text-[#1E88E5] hover:!border-[#1E88E5] dark:!bg-transparent dark:!text-[#64B5F6] dark:!border-[#64B5F6] dark:hover:!bg-[rgba(74,144,226,0.15)] dark:hover:!text-[#90CAF9] dark:hover:!border-[#90CAF9] !px-10 !py-6 !text-xl !font-semibold hover:!scale-105 !transition-all !duration-200 !backdrop-blur-sm !rounded-lg !cursor-pointer"
              style={{
                backgroundColor: 'transparent',
                color: '#4A90E2',
                border: '2px solid #4A90E2',
                padding: '14px 28px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(4px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#F5F7FA';
                e.target.style.color = '#1E88E5';
                e.target.style.borderColor = '#1E88E5';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#4A90E2';
                e.target.style.borderColor = '#4A90E2';
                e.target.style.transform = 'scale(1)';
              }}
            >
              View Our Work
            </button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A90E2] mb-1">10+</div>
              <div className="text-sm text-[#7A8699] dark:text-[#8B9AAD]">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A90E2] mb-1">850+</div>
              <div className="text-sm text-[#7A8699] dark:text-[#8B9AAD]">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A90E2] mb-1">24/7</div>
              <div className="text-sm text-[#7A8699] dark:text-[#8B9AAD]">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4A90E2] mb-1">100%</div>
              <div className="text-sm text-[#7A8699] dark:text-[#8B9AAD]">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      </div>
    </AnimatedBackground>
  );
}
