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
                  <div className="space-y-4 text-sm">
                    <div><strong>1997:</strong> Ph.D. in Economics (Dr. rer. pol.), University of Mannheim</div>
                    <div><strong>1991:</strong> Diplom-Physiker, University of Bonn</div>
                    <div><strong>1988-1991:</strong> Physics, University of Bonn</div>
                    <div><strong>1986-1988:</strong> Physics and Mathematics, Ruhr University Bochum</div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Experience */}
              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Professional Experience
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <strong>2004 - Present:</strong> Professor, Chair of Innovation & Technology Management, Technical University of Munich
                    </div>
                    <div>
                      <strong>2015:</strong> Visiting Scholar, Singapore Management University (February to August)
                    </div>
                    <div>
                      <strong>2013:</strong> Visiting Scholar, Harvard Business School (February to August)
                    </div>
                    <div>
                      <strong>2008:</strong> International Visiting Scholar, Harvard Business School (March to September)
                    </div>
                    <div>
                      <strong>2006:</strong> Organizer and host of the 4th International Workshop on User Innovation, TUM
                    </div>
                    <div>
                      <strong>2004:</strong> Habilitation, Ludwig-Maximilians-Universität München
                    </div>
                    <div>
                      <strong>2002:</strong> Visiting Scholar, MIT Sloan School of Management (March to September)
                    </div>
                    <div>
                      <strong>1999-2004:</strong> Researcher, Institute for Innovation Research and Technology Management, LMU Munich
                    </div>
                    <div>
                      <strong>1997-1999:</strong> Consultant, Bain & Company, Munich
                    </div>
                    <div>
                      <strong>1993-1997:</strong> Doctoral Student, University of Mannheim
                    </div>
                    <div>
                      <strong>1991-1993:</strong> Doctoral Student, University of Bonn, Faculty of Physics
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
                  <div className="space-y-3 text-xs">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Walter Rathenau Prize (Best Paper Award)
                      </h4>
                      <p className="text-muted-foreground">2004 • GEABA</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Highly Commended Paper Award
                      </h4>
                      <p className="text-muted-foreground">2007 • EURAM</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Academy of Management Best Paper
                      </h4>
                      <p className="text-muted-foreground">2006, 2007 • AOM</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Studienstiftung des Deutschen Volkes
                      </h4>
                      <p className="text-muted-foreground">1987-1991 • Scholarship</p>
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
                      Profiting from Innovation
                    </Badge>
                    <Badge variant="secondary" className="bg-accent-light text-accent">
                      Open Innovation
                    </Badge>
                    <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary">
                      User Innovation
                    </Badge>
                    <Badge variant="secondary" className="bg-primary-lighter text-primary">
                      Markets for Technology
                    </Badge>
                    <Badge variant="secondary" className="bg-accent-light text-accent">
                      Patent Management
                    </Badge>
                    <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary">
                      Patent Infringement
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Editorial Review Boards */}
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  Editorial Review Boards
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Industrial and Corporate Change</div>
                  <div>• Research Policy</div>
                  <div>• Innovation: Organization & Management</div>
                </div>
              </CardContent>
            </Card>

            {/* Ad Hoc Reviewer */}
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  Ad Hoc Reviewer
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Journals</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Academy of Management Journal, California Management Review, European Management Review</div>
                      <div>Industrial and Corporate Change, Journal of Economics and Management Strategy</div>
                      <div>Management Science, Organization Science, Research Policy, Strategic Management Journal</div>
                      <div>RAND Journal of Economics, Long Range Planning, Technovation</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Conferences</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Academy of Management Meeting, DRUID Summer Conference</div>
                      <div>European Academy of Management (EURAM), Strategic Management Society</div>
                      <div>International Conference on Information Systems (ICIS)</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-2">Institutions</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Deutsche Forschungsgemeinschaft (DFG)</div>
                      <div>Copenhagen Business School, Ecole Polytechnique Fédérale de Lausanne</div>
                      <div>German-Israeli Foundation, Thyssen Foundation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;