import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { motion } from 'framer-motion';
import '../styles/brand-colors.css';

export default function About() {
  return (
    <AnimatedBackground variant="morphing">
      <div className="min-h-screen overflow-y-auto snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center justify-center px-6 pt-24 relative overflow-hidden">
          {/* Brand Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] via-[#E8EEF4] to-[#D1DDE8] dark:from-[#0F1419] dark:via-[#1A1F2E] dark:to-[#2E4057]"></div>
          <div className="absolute inset-0 bg-white/40 dark:bg-black/20"></div>
          
        <div className="container mx-auto max-w-full relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA] mb-6">
              About <span className="text-[#4A90E2]">BlueStrike Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4A5568] dark:text-[#C7D2E0] max-w-4xl mx-auto mb-8 leading-relaxed">
              We are East Africa's leading provider of sustainable energy solutions and infrastructure services, 
              committed to powering a brighter future for businesses and communities through innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#64B5F6] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#4A5568] dark:text-[#C7D2E0] leading-relaxed">
                    To provide innovative, reliable, and sustainable energy solutions that empower 
                    businesses and communities to thrive while protecting our environment for future generations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-[#D1DDE8] dark:border-[#2E4057] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E4057] to-[#4A90E2] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#4A5568] dark:text-[#C7D2E0] leading-relaxed">
                    To be the most trusted partner in sustainable energy and infrastructure solutions across East Africa, 
                    leading the transition to a cleaner, more efficient future.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="h-screen snap-start flex items-center px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#64B5F6] via-[#4A90E2] to-[#2E4057]"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="container mx-auto max-w-full relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-2 border-white/50 dark:border-[#2E4057] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#4A5568] dark:text-[#C7D2E0] leading-relaxed">
                    We strive for excellence in every project, delivering quality solutions that exceed expectations and set industry standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-2 border-white/50 dark:border-[#2E4057] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#4A5568] dark:text-[#C7D2E0] leading-relaxed">
                    We conduct business with honesty, transparency, and respect for all stakeholders, building lasting trust.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/95 dark:bg-[#1A1F2E]/95 backdrop-blur-sm border-2 border-white/50 dark:border-[#2E4057] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#1A1F2E] dark:text-[#F5F7FA]">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#4A5568] dark:text-[#C7D2E0] leading-relaxed">
                    We embrace innovation to provide cutting-edge solutions that meet evolving needs and drive progress.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="h-screen snap-start flex items-center px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E4057] via-[#4A90E2] to-[#64B5F6]"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        
        <div className="container mx-auto max-w-full text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Expertise
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              With over a decade of experience in the energy and infrastructure sector, our team brings 
              unparalleled expertise and innovation to every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-full mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-white mb-4">10+</div>
              <p className="text-xl text-white/90">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-white mb-4">850+</div>
              <p className="text-xl text-white/90">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-white mb-4">98%</div>
              <p className="text-xl text-white/90">Client Satisfaction</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <button 
              className="!inline-flex !items-center !justify-center !gap-2 !bg-transparent !text-[#4A90E2] !border-2 !border-[#4A90E2] hover:!bg-[#F5F7FA] hover:!text-[#1E88E5] hover:!border-[#1E88E5] dark:!bg-transparent dark:!text-[#64B5F6] dark:!border-[#64B5F6] dark:hover:!bg-[rgba(74,144,226,0.15)] dark:hover:!text-[#90CAF9] dark:hover:!border-[#90CAF9] !px-6 !py-3 !text-base !font-semibold hover:!scale-105 !transition-all !duration-200 !rounded-lg !cursor-pointer"
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
                transition: 'all 0.2s ease'
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
              Join Our Team
            </button>
          </motion.div>
        </div>
      </section>
      </div>
    </AnimatedBackground>
  );
}
