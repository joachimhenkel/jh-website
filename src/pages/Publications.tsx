import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Download, Users, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const Publications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Sample publications organized by research area
  const publications = {
    "profiting": [
      {
        title: "Being the best or being the only one – Dichotomous R&D strategy choices by startups aiming for acquisition",
        journal: "Journal of Economic Behavior and Organization",
        year: "2025",
        volume: "234",
        pages: "107024",
        authors: ["J. Henkel", "T. Rønde"],
        type: "journal",
        doi: "10.1016/j.jebo.2025.107024"
      },
      {
        title: "Value capture in hierarchically organized value chains",
        journal: "Journal of Economics and Management Strategy",
        year: "2019",
        volume: "28",
        pages: "260-279",
        authors: ["J. Henkel", "A. Hoffmann"],
        type: "journal",
        doi: "10.1111/jems.12278"
      },
      {
        title: "Complements and Substitutes in Profiting from Innovation – A Choice Experimental Approach",
        journal: "Research Policy",
        year: "2013",
        volume: "42",
        pages: "326-339",
        authors: ["T. Fischer", "J. Henkel"],
        type: "journal"
      }
    ],
    "open": [
      {
        title: "Deductive Certainty? Exploring the Boundaries of Trust Formation in Smart Contracts on Blockchains",
        journal: "Management of Information Systems Quarterly",
        year: "2025",
        volume: "in print",
        authors: ["D. Obermeier", "J. Henkel"],
        type: "journal"
      },
      {
        title: "The emergence of openness: How and why firms adopt selective revealing in open innovation",
        journal: "Research Policy",
        year: "2014",
        volume: "43",
        pages: "879–890",
        authors: ["J. Henkel", "S. Schöberl", "O. Alexy"],
        type: "journal"
      },
      {
        title: "Champions of revealing - The role of open source developers in commercial firms",
        journal: "Industrial and Corporate Change",
        year: "2009",
        volume: "18",
        issue: "3",
        pages: "435-471",
        authors: ["J. Henkel"],
        type: "journal"
      },
      {
        title: "Selective revealing in open innovation processes: the case of embedded Linux",
        journal: "Research Policy",
        year: "2006",
        volume: "35",
        issue: "7",
        pages: "953-969",
        authors: ["J. Henkel"],
        type: "journal"
      }
    ],
    "markets": [
      {
        title: "Licensing standard-essential patents in the IoT – A value chain perspective on markets for technology",
        journal: "Research Policy",
        year: "2022",
        volume: "51",
        pages: "104600",
        authors: ["J. Henkel"],
        type: "journal",
        doi: "10.1016/j.respol.2022.104600"
      },
      {
        title: "Overcoming inefficiencies in patent licensing: A method to assess a patent's essentiality for technical standards",
        journal: "Research Policy",
        year: "2022",
        volume: "51",
        pages: "104590",
        authors: ["R. Bekkers", "E.M. Tur", "J. Henkel", "T. van der Vorst", "M. Driesse", "J.L. Contreras"],
        type: "journal",
        doi: "10.1016/j.respol.2022.104590"
      },
      {
        title: "IP Modularity: Profiting from Innovation by Aligning Product Architecture with Intellectual Property",
        journal: "California Management Review",
        year: "2013",
        volume: "55",
        issue: "4",
        pages: "65-82",
        authors: ["J. Henkel", "C. Baldwin", "W. Shih"],
        type: "journal"
      }
    ],
    "patents": [
      {
        title: "How many patents are truly valid? Extent, causes, and remedies for latent patent invalidity",
        journal: "European Journal of Law and Economics",
        year: "2019",
        volume: "48",
        issue: "2",
        pages: "195–239",
        authors: ["J. Henkel", "H. Zischka"],
        type: "journal",
        doi: "10.1007/s10657-019-09627-4"
      },
      {
        title: "Patent trolls on markets for technology – An empirical analysis of NPEs' patent acquisitions",
        journal: "Research Policy",
        year: "2012",
        volume: "41",
        issue: "9",
        pages: "1519-1533",
        authors: ["T. Fischer", "J. Henkel"],
        type: "journal"
      },
      {
        title: "On Sharks, Trolls, and Their Patent Prey - Unrealistic damage awards and firms' strategies of being infringed",
        journal: "Research Policy",
        year: "2007",
        volume: "36",
        pages: "134-154",
        authors: ["M. Reitzig", "J. Henkel", "C. H. Heath"],
        type: "journal"
      }
    ],
    "infringement": [
      {
        title: "Offensive patent portfolio races",
        journal: "Long Range Planning",
        year: "2017",
        volume: "50",
        pages: "531-549",
        authors: ["F. Jell", "J. Henkel", "M. Wallin"],
        type: "journal"
      },
      {
        title: "Collateral damage for R&D manufacturers: How patent sharks operate in markets for technology",
        journal: "Industrial and Corporate Change",
        year: "2010",
        volume: "19",
        issue: "3",
        pages: "947-967",
        authors: ["M. Reitzig", "J. Henkel", "F. Schneider"],
        type: "journal"
      }
    ]
  };

  const workingPapers = [
    {
      title: "Hybrid games: Integrating cooperative and noncooperative interactions in strategy analysis",
      year: "2019",
      authors: ["J. Henkel"],
      type: "working"
    },
    {
      title: "Patents and Alliances as Venture Capital Screening Criteria — Investigating Industry Differences",  
      year: "2012",
      authors: ["D. Hoenig", "J. Henkel"],
      type: "working"
    }
  ];

  const blogPosts = [
    {
      title: "Lack of Transparency in Licensing Standard Essential Patents",
      journal: "LES Nouvelles, Journal of the Licensing Executive Society International",
      year: "2025",
      month: "March",
      authors: ["J. Henkel", "T. Maghamé"],
      type: "blog"
    },
    {
      title: "IP shares: a means to simplify licensing of standard essential patents",
      journal: "Intellectual Asset Management Magazine",
      year: "2023",
      date: "18 October",
      authors: ["J. Henkel", "T. Maghamé"],
      type: "blog"
    },
    {
      title: "Im Dschungel des Patentrechts",
      journal: "Frankfurter Allgemeine Zeitung",
      year: "2023",
      date: "2 October",
      page: "p. 18",
      authors: ["J. Henkel"],
      type: "blog"
    }
  ];

  const getAllPublications = () => {
    const allPubs = [];
    Object.values(publications).forEach(area => allPubs.push(...area));
    allPubs.push(...workingPapers);
    allPubs.push(...blogPosts);
    return allPubs.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  };

  const filterPublications = (pubs) => {
    let filtered = pubs;
    if (filterType !== "all") {
      filtered = filtered.filter(pub => pub.type === filterType);
    }
    if (searchQuery) {
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    return filtered;
  };

  const getPublicationsByArea = (area) => {
    return filterPublications(publications[area] || []);
  };

  const PublicationCard = ({ pub }) => (
    <Card className="bg-card border-border/50 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {pub.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="font-medium">{pub.journal}</span>
              {pub.year && (
                <>
                  <span>•</span>
                  <span>{pub.year}</span>
                </>
              )}
              {pub.volume && (
                <>
                  <span>•</span>
                  <span>Vol. {pub.volume}</span>
                </>
              )}
              {pub.pages && (
                <>
                  <span>•</span>
                  <span>pp. {pub.pages}</span>
                </>
              )}
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Users className="h-3 w-3 mr-2" />
              <span>{pub.authors.join(", ")}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:min-w-[180px]">
            <Badge variant="secondary" className="bg-primary-lighter text-primary w-fit">
              {pub.type === 'journal' ? 'Peer-Reviewed' : 
               pub.type === 'working' ? 'Working Paper' : 'Article'}
            </Badge>
            <div className="flex flex-col gap-1">
              {pub.doi && (
                <Button size="sm" variant="outline" className="justify-start text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  DOI
                </Button>
              )}
              <Button size="sm" variant="outline" className="justify-start text-xs">
                <Download className="h-3 w-3 mr-1" />
                PDF
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Research contributions spanning innovation management, intellectual property, and technology markets
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="journal">Peer-Reviewed</SelectItem>
                  <SelectItem value="working">Working Papers</SelectItem>
                  <SelectItem value="blog">Articles & Posts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Publications by Research Area */}
          <Tabs defaultValue="profiting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto md:h-10">
              <TabsTrigger value="profiting" className="text-sm">Profiting from Innovation</TabsTrigger>
              <TabsTrigger value="open" className="text-sm">Open Innovation</TabsTrigger>
              <TabsTrigger value="markets" className="text-sm">Markets for Technology</TabsTrigger>
              <TabsTrigger value="patents" className="text-sm">Patent Management</TabsTrigger>
              <TabsTrigger value="infringement" className="text-sm">Patent Infringement</TabsTrigger>
              <TabsTrigger value="all" className="text-sm">All Publications</TabsTrigger>
            </TabsList>

            {/* Profiting from Innovation */}
            <TabsContent value="profiting" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Profiting from Innovation
                </h2>
                <p className="text-muted-foreground">
                  Research on value capture mechanisms and appropriability strategies
                </p>
              </div>
              <div className="space-y-6">
                {getPublicationsByArea("profiting").map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
              </div>
            </TabsContent>

            {/* Open Innovation */}
            <TabsContent value="open" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Open & User Innovation
                </h2>
                <p className="text-muted-foreground">
                  Studies on collaborative innovation and selective revealing strategies
                </p>
              </div>
              <div className="space-y-6">
                {getPublicationsByArea("open").map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
              </div>
            </TabsContent>

            {/* Markets for Technology */}
            <TabsContent value="markets" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Markets for Technology
                </h2>
                <p className="text-muted-foreground">
                  Analysis of technology licensing and transfer mechanisms
                </p>
              </div>
              <div className="space-y-6">
                {getPublicationsByArea("markets").map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
              </div>
            </TabsContent>

            {/* Patent Management */}
            <TabsContent value="patents" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Patent Management
                </h2>
                <p className="text-muted-foreground">
                  Strategic patent portfolio management and IP optimization
                </p>
              </div>
              <div className="space-y-6">
                {getPublicationsByArea("patents").map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
              </div>
            </TabsContent>

            {/* Patent Infringement */}
            <TabsContent value="infringement" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Patent Infringement
                </h2>
                <p className="text-muted-foreground">
                  Economic and legal aspects of patent disputes and enforcement
                </p>
              </div>
              <div className="space-y-6">
                {getPublicationsByArea("infringement").map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
              </div>
            </TabsContent>

            {/* All Publications */}
            <TabsContent value="all" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Complete Publications List
                </h2>
                <p className="text-muted-foreground">
                  Chronological listing of all publications ({getAllPublications().length} total)
                </p>
              </div>
              
              <div className="space-y-6">
                {filterPublications(getAllPublications()).map((pub, index) => (
                  <PublicationCard key={index} pub={pub} />
                ))}
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