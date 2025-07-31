import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Download, Calendar, Users } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Research Interests & Current Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exploring the frontiers of [research field] through innovative methodologies and collaborative research
            </p>
          </div>

          {/* Research Interests */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Research Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit bg-primary-lighter text-primary">
                    Primary Focus
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    [Research Interest 1]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Detailed description of this research area, including current questions being explored,
                    methodologies used, and significance to the field.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">[Methodology 1]</Badge>
                    <Badge variant="outline" className="text-xs">[Methodology 2]</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit bg-accent-light text-accent">
                    Active Research
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    [Research Interest 2]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Current investigations and ongoing projects in this domain, including collaborative
                    efforts and emerging findings.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">[Method A]</Badge>
                    <Badge variant="outline" className="text-xs">[Method B]</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit bg-research-secondary/20 text-research-secondary">
                    Emerging Interest
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    [Research Interest 3]
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    New directions and collaborative opportunities being explored, representing
                    the cutting edge of the field.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">[New Approach 1]</Badge>
                    <Badge variant="outline" className="text-xs">[New Approach 2]</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Current Publications */}
          <section>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Current Publications
            </h2>
            <div className="space-y-6">
              {/* Published Article */}
              <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 leading-tight">
                          [Current Publication Title: A Comprehensive Study of...]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Journal Name]</span>
                          <span>•</span>
                          <span>Volume [X], Issue [Y]</span>
                          <span>•</span>
                          <span>Pages [XXX-XXX]</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>[Publication Year]</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Co-authors: [Name 1], [Name 2], [Name 3]</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Abstract</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          [Provide the abstract or a detailed summary of the publication. This should be
                          comprehensive enough to give readers a clear understanding of the research question,
                          methodology, key findings, and implications for the field.]
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Findings</h4>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li>• [Key finding or contribution 1]</li>
                          <li>• [Key finding or contribution 2]</li>
                          <li>• [Key finding or contribution 3]</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <Badge variant="secondary" className="bg-primary-lighter text-primary w-fit">
                        [Research Area]
                      </Badge>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline" className="justify-start">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View Online
                        </Button>
                        <Button size="sm" variant="outline" className="justify-start">
                          <Download className="h-3 w-3 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* In Press Article */}
              <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 leading-tight">
                          [In Press Publication Title: An Investigation of...]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Journal Name]</span>
                          <span>•</span>
                          <Badge variant="secondary" className="bg-accent-light text-accent text-xs">
                            In Press
                          </Badge>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Expected [Year]</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Co-authors: [Name 1], [Name 2]</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Abstract</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          [Abstract for the in-press publication, highlighting the research contribution
                          and its significance to ongoing scholarly discourse.]
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary w-fit">
                        [Research Area]
                      </Badge>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline" className="justify-start" disabled>
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Coming Soon
                        </Button>
                        <Button size="sm" variant="outline" className="justify-start">
                          <Download className="h-3 w-3 mr-2" />
                          Preprint PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Paper */}
              <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 leading-tight">
                          [Working Paper Title: Preliminary Findings on...]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                            Working Paper
                          </Badge>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>Updated [Date]</span>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Solo author</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Research Summary</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          [Description of the working paper, including preliminary findings and research direction.
                          Mention that this is work in progress and may be subject to revision.]
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <Badge variant="secondary" className="bg-accent-light text-accent w-fit">
                        [Research Area]
                      </Badge>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline" className="justify-start">
                          <Download className="h-3 w-3 mr-2" />
                          Download Draft
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                For a complete list of publications organized by research area
              </p>
              <Button size="lg" variant="outline">
                View All Publications
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Research;