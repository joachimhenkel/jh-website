import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "/lovable-uploads/hero-background.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero text-primary-foreground"
        style={{
          backgroundImage: `url('/lovable-uploads/hero-background-new.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 leading-tight max-w-5xl">
              Prof. Dr. Joachim Henkel Technical University of Munich (TUM) - Chair of Innovation & Technology Management
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
              Technical Univerestiy of Munich (TUM) - Chair of Innovation & Technology Management
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
              Professor of Innovation & Technology Management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 bg-primary hover:bg-primary-light text-primary-foreground">
                <Link to="/research">
                  View Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 bg-primary hover:bg-primary-light text-primary-foreground">
                <Link to="/about">About Me</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 bg-primary hover:bg-primary-light text-primary-foreground">
                <a href="https://www.ie.mgt.tum.de/en/tim/about-us/prof-dr-joachim-henkel/" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Research Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                Research Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exploring innovation management, intellectual property, and technology markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Research Area Cards */}
              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-primary-lighter text-primary">
                    Primary Focus
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    Profiting from Innovation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategies and mechanisms for capturing value from innovative activities and R&D investments.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-accent-light text-accent">
                    Innovation Models
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    Open & User Innovation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborative innovation models and the role of users in the innovation process.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-research-secondary/20 text-research-secondary">
                    Technology Markets
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    Markets for Technology
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Analysis of technology licensing, transfer, and commercialization strategies.
                  </p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-primary-lighter text-primary">
                    IP Strategy
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    Patent Management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic patent portfolio management and intellectual property optimization.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-accent-light text-accent">
                    Legal & Economic
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    Patent Infringement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Economic and legal aspects of patent disputes and infringement cases.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-light">
                <Link to="/research">
                  Explore All Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications Preview */}
      <section className="py-16 bg-publication-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                Recent Publications
              </h2>
              <p className="text-lg text-muted-foreground">
                Latest contributions to innovation and technology management research
              </p>
            </div>

            <div className="space-y-6">
              {/* Publication Preview Items */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Deductive Certainty? Exploring the Boundaries of Trust Formation in Smart Contracts on Blockchains
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Management of Information Systems Quarterly, 2025 • Co-author: D. Obermeier
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This research examines trust formation mechanisms in blockchain-based smart contracts and their implications for organizational decision-making.
                      </p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      Open Innovation
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Being the best or being the only one – Dichotomous R&D strategy choices by startups aiming for acquisition
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Journal of Economic Behavior and Organization, 2025 • Co-author: T. Rønde
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Analyzes R&D strategy choices of startups seeking acquisition, examining whether to pursue excellence or uniqueness in innovation.
                      </p>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent">
                      Profiting from Innovation
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        Licensing standard-essential patents in the IoT – A value chain perspective on markets for technology
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        Research Policy, 2022
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Examines patent licensing challenges in IoT value chains and proposes frameworks for efficient technology markets.
                      </p>
                    </div>
                    <Badge variant="outline" className="border-research-secondary text-research-secondary">
                      Markets for Technology
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/publications">
                  View All Publications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;