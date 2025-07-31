import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Download, Calendar, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Previous Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of peer-reviewed research organized by area of expertise
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Publications by Research Area */}
          <Tabs defaultValue="area1" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto md:h-10">
              <TabsTrigger value="area1" className="text-sm">[Research Area 1]</TabsTrigger>
              <TabsTrigger value="area2" className="text-sm">[Research Area 2]</TabsTrigger>
              <TabsTrigger value="area3" className="text-sm">[Research Area 3]</TabsTrigger>
              <TabsTrigger value="all" className="text-sm">All Publications</TabsTrigger>
            </TabsList>

            {/* Research Area 1 Publications */}
            <TabsContent value="area1" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  [Research Area 1] Publications
                </h2>
                <p className="text-muted-foreground">
                  Research focused on [specific aspects of this research area]
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          [Publication Title Related to Research Area 1]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Journal Name]</span>
                          <span>•</span>
                          <span>[Year]</span>
                          <span>•</span>
                          <span>Vol. [X], pp. [XXX-XXX]</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Co-authors: [Names]</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Brief abstract or summary of the publication's key contributions to this research area]
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 lg:min-w-[180px]">
                        <Badge variant="secondary" className="bg-primary-lighter text-primary w-fit">
                          [Specific Sub-area]
                        </Badge>
                        <div className="flex flex-col gap-1">
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Online
                          </Button>
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          [Another Publication in Research Area 1]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Conference/Journal Name]</span>
                          <span>•</span>
                          <span>[Year]</span>
                          <span>•</span>
                          <span>[Publication Details]</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Solo author</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Summary of this publication's contributions and significance]
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 lg:min-w-[180px]">
                        <Badge variant="secondary" className="bg-primary-lighter text-primary w-fit">
                          [Sub-area]
                        </Badge>
                        <div className="flex flex-col gap-1">
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Online
                          </Button>
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Research Area 2 Publications */}
            <TabsContent value="area2" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  [Research Area 2] Publications
                </h2>
                <p className="text-muted-foreground">
                  Investigations into [specific aspects of this research area]
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          [Publication Title Related to Research Area 2]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Journal Name]</span>
                          <span>•</span>
                          <span>[Year]</span>
                          <span>•</span>
                          <span>[Publication Details]</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Co-authors: [Names]</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Summary focusing on this research area's specific contributions]
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 lg:min-w-[180px]">
                        <Badge variant="secondary" className="bg-accent-light text-accent w-fit">
                          [Sub-area]
                        </Badge>
                        <div className="flex flex-col gap-1">
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Online
                          </Button>
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Research Area 3 Publications */}
            <TabsContent value="area3" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  [Research Area 3] Publications
                </h2>
                <p className="text-muted-foreground">
                  Emerging research in [specific aspects of this research area]
                </p>
              </div>
              <div className="space-y-6">
                <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          [Publication Title Related to Research Area 3]
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium">[Journal/Conference Name]</span>
                          <span>•</span>
                          <span>[Year]</span>
                          <span>•</span>
                          <span>[Publication Details]</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Users className="h-3 w-3 mr-2" />
                          <span>Co-authors: [Names]</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Summary highlighting innovations in this emerging research area]
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 lg:min-w-[180px]">
                        <Badge variant="secondary" className="bg-research-secondary/20 text-research-secondary w-fit">
                          [Sub-area]
                        </Badge>
                        <div className="flex flex-col gap-1">
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Online
                          </Button>
                          <Button size="sm" variant="outline" className="justify-start text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* All Publications */}
            <TabsContent value="all" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Complete Publications List
                </h2>
                <p className="text-muted-foreground">
                  Chronological listing of all peer-reviewed publications
                </p>
              </div>
              
              {/* Publications by Year */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4 border-b border-border pb-2">
                    [Current Year]
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-5">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              [Recent Publication Title]
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              [Journal Name] • [Publication Details]
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">[Research Area]</Badge>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4 border-b border-border pb-2">
                    [Previous Year]
                  </h3>
                  <div className="space-y-4">
                    <Card className="bg-card border-border/50">
                      <CardContent className="p-5">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              [Previous Year Publication Title]
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              [Journal Name] • [Publication Details]
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">[Research Area]</Badge>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Citation Information */}
          <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Citation Information
            </h3>
            <p className="text-muted-foreground mb-4">
              For citation formats and bibliographic information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                Google Scholar Profile
              </Button>
              <Button variant="outline">
                ORCID Profile
              </Button>
              <Button variant="outline">
                ResearchGate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;