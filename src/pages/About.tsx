import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Learn more about my academic journey, research philosophy, and professional background
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio Section */}
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                    <BookOpen className="h-6 w-6 text-primary mr-3" />
                    Academic Biography
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      [Write a compelling academic biography here. Include your research passion, 
                      what drives your work, and your academic philosophy. This should be 2-3 paragraphs 
                      that give insight into both your professional work and personal motivations.]
                    </p>
                    <p>
                      [Second paragraph about your journey into academia, key influences, 
                      and what makes your research unique. Mention any significant career transitions 
                      or pivotal moments that shaped your research direction.]
                    </p>
                    <p>
                      [Third paragraph about your current work, teaching philosophy, 
                      and vision for the future of your field. Include what excites you most 
                      about your research and where you see it heading.]
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center">
                    <GraduationCap className="h-6 w-6 text-primary mr-3" />
                    Education
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Ph.D. in [Field], [Year]
                      </h3>
                      <p className="text-primary font-medium">[University Name]</p>
                      <p className="text-muted-foreground">
                        Dissertation: "[Dissertation Title]"
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Advisor: [Advisor Name]
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        M.A./M.S. in [Field], [Year]
                      </h3>
                      <p className="text-primary font-medium">[University Name]</p>
                      <p className="text-muted-foreground">
                        [Relevant thesis title or specialization]
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        B.A./B.S. in [Field], [Year]
                      </h3>
                      <p className="text-primary font-medium">[University Name]</p>
                      <p className="text-muted-foreground">
                        [Magna Cum Laude, Phi Beta Kappa, etc.]
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Experience */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Professor, [Department]
                      </h3>
                      <p className="text-primary font-medium">
                        [University Name] • [Year] - Present
                      </p>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• [Key responsibility or achievement]</li>
                        <li>• [Teaching or research leadership role]</li>
                        <li>• [Administrative duties or service]</li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Associate Professor, [Department]
                      </h3>
                      <p className="text-primary font-medium">
                        [University Name] • [Year] - [Year]
                      </p>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• [Key accomplishment during this period]</li>
                        <li>• [Research milestones or grants]</li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Assistant Professor, [Department]
                      </h3>
                      <p className="text-primary font-medium">
                        [University Name] • [Year] - [Year]
                      </p>
                      <ul className="text-muted-foreground mt-2 space-y-1">
                        <li>• [Early career achievements]</li>
                        <li>• [Course development or research establishment]</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Image */}
              <Card>
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/fdaee9ed-9c1d-4d64-84df-b0196d96d7da.png" 
                    alt="Prof. Dr. Joachim Henkel" 
                    className="w-full rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm">henkel@wi.tum.de</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary mr-3" />
                      <span className="text-sm">+49 (0)89 289-25741</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary mr-3 mt-0.5" />
                      <div className="text-sm">
                        <div>Room 2510</div>
                        <div>Technical University of Munich</div>
                        <div>Chair of Innovation & Technology Management</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Awards & Honors */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Awards & Honors
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        [Award Name]
                      </h4>
                      <p className="text-xs text-muted-foreground">[Year] • [Awarding Organization]</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        [Grant or Fellowship]
                      </h4>
                      <p className="text-xs text-muted-foreground">[Year] • [Amount/Duration]</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        [Recognition or Honor]
                      </h4>
                      <p className="text-xs text-muted-foreground">[Year] • [Institution]</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Research Keywords
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary-lighter text-primary">
                      [Keyword 1]
                    </Badge>
                    <Badge variant="secondary" className="bg-accent-light text-accent">
                      [Keyword 2]
                    </Badge>
                    <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary">
                      [Keyword 3]
                    </Badge>
                    <Badge variant="secondary" className="bg-primary-lighter text-primary">
                      [Keyword 4]
                    </Badge>
                    <Badge variant="secondary" className="bg-accent-light text-accent">
                      [Keyword 5]
                    </Badge>
                    <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary">
                      [Keyword 6]
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;