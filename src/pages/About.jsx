import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="h-screen snap-start flex items-center justify-center px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-600 dark:text-blue-400">Bluestrike Investments</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We are a leading provider of sustainable energy solutions and infrastructure services, 
              committed to powering a brighter future for businesses and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader>
                <Target className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-3" />
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide innovative, reliable, and sustainable energy solutions that empower 
                  businesses and communities to thrive while protecting our environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-3" />
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the most trusted partner in sustainable energy and infrastructure solutions, 
                  leading the transition to a cleaner, more efficient future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="h-screen snap-start flex items-center px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-white dark:bg-gray-700 border-2 border-blue-600 dark:border-blue-400">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We strive for excellence in every project, delivering quality solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-700 border-2 border-blue-600 dark:border-blue-400">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We conduct business with honesty, transparency, and respect for all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white dark:bg-gray-700 border-2 border-blue-600 dark:border-blue-400">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We embrace innovation to provide cutting-edge solutions that meet evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="h-screen snap-start flex items-center px-6 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Expertise
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-12 max-w-3xl mx-auto">
            With years of experience in the energy and infrastructure sector, our team brings 
            unparalleled expertise to every project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <p className="text-blue-100 dark:text-blue-200">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100 dark:text-blue-200">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <p className="text-blue-100 dark:text-blue-200">Client Satisfaction</p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
