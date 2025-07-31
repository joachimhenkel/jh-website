import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Dr. [Professor Name]
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 opacity-90">
              Professor of [Department/Field]
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
              [University Name] • Researcher in [Primary Research Area]
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8">
                <Link to="/research">
                  View Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">[X]+ Publications</h3>
              <p className="text-muted-foreground">Peer-reviewed research articles</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">[X] Years</h3>
              <p className="text-muted-foreground">Teaching & research experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-research-secondary rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">[X] Awards</h3>
              <p className="text-muted-foreground">Research grants & recognitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Research Highlights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Exploring cutting-edge questions in [research field] with innovative methodologies
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
                    [Research Area 1]
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Brief description of the research area and its significance to the field.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-accent-light text-accent">
                    Active Research
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    [Research Area 2]
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Current investigations and ongoing projects in this domain.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 bg-research-secondary/20 text-research-secondary">
                    Emerging Interest
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    [Research Area 3]
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    New directions and collaborative opportunities being explored.
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Recent Publications
              </h2>
              <p className="text-lg text-muted-foreground">
                Latest contributions to academic literature
              </p>
            </div>

            <div className="space-y-6">
              {/* Publication Preview Items */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        [Recent Publication Title]
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        [Journal Name], [Year] • Co-authors: [Names]
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Brief abstract or description of the publication's key findings...
                      </p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      [Research Area]
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        [Another Recent Publication]
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        [Conference/Journal Name], [Year] • Co-authors: [Names]
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Key insights and contributions from this research work...
                      </p>
                    </div>
                    <Badge variant="outline" className="border-accent text-accent">
                      [Research Area]
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