import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Zap, Box, Building2, Factory, Home } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Commercial Solar Installation",
      category: "Solar Energy",
      icon: Sun,
      description: "500kW solar panel system for manufacturing facility",
      details: "Reduced energy costs by 60% and carbon footprint by 400 tons annually",
      status: "Completed",
      color: "yellow"
    },
    {
      title: "Industrial Generator Setup",
      category: "Power Generation",
      icon: Zap,
      description: "Backup power solution for hospital complex",
      details: "24/7 reliable power with 2000kVA capacity ensuring uninterrupted operations",
      status: "Completed",
      color: "blue"
    },
    {
      title: "Custom Container Fabrication",
      category: "Infrastructure",
      icon: Box,
      description: "Mobile office units for construction site",
      details: "20 custom-built climate-controlled containers with full amenities",
      status: "Completed",
      color: "purple"
    },
    {
      title: "Residential Solar Project",
      category: "Solar Energy",
      icon: Home,
      description: "Community housing solar installation",
      details: "50-home solar project providing clean energy to entire neighborhood",
      status: "In Progress",
      color: "yellow"
    },
    {
      title: "Factory Power Infrastructure",
      category: "Power Generation",
      icon: Factory,
      description: "Complete power system for textile factory",
      details: "Hybrid solar-generator system with smart energy management",
      status: "Completed",
      color: "blue"
    },
    {
      title: "Commercial Building Retrofit",
      category: "Infrastructure",
      icon: Building2,
      description: "Energy-efficient upgrade for office complex",
      details: "Solar panels, LED lighting, and smart HVAC system integration",
      status: "Completed",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects across solar energy, power generation, and infrastructure solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-white dark:bg-gray-800 border-blue-600 dark:border-blue-400">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">Projects Delivered</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-gray-800 border-blue-600 dark:border-blue-400">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">50MW+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">Solar Capacity Installed</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-gray-800 border-blue-600 dark:border-blue-400">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">Generators Installed</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white dark:bg-gray-800 border-blue-600 dark:border-blue-400">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">Containers Fabricated</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(project.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    {project.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-600 dark:bg-blue-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and proven track record
          </p>
        </div>
      </div>
    </div>
  );
}
