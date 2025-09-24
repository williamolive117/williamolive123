import { useState } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  Tv, 
  Star,
  Play,
  Users,
  MapPin,
  Zap,
  Check,
  Search,
  Filter,
  Film,
  Trophy,
  Package,
  Crown,
  Flag,
  Music,
  Baby,
  Gamepad2,
  Info,
  Sparkles,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Channels = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'country': return <Flag className="w-4 h-4" />;
      case 'movies': return <Film className="w-4 h-4" />;
      case 'sports': return <Trophy className="w-4 h-4" />;
      case 'packages': return <Package className="w-4 h-4" />;
      case 'vip': return <Crown className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      case 'kids': return <Baby className="w-4 h-4" />;
      case 'adult': return <Heart className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'country': return 'from-blue-600/20 to-blue-800/10 border-blue-600/30';
      case 'movies': return 'from-purple-600/20 to-purple-800/10 border-purple-600/30';
      case 'sports': return 'from-green-600/20 to-green-800/10 border-green-600/30';
      case 'packages': return 'from-orange-600/20 to-orange-800/10 border-orange-600/30';
      case 'vip': return 'from-yellow-600/20 to-yellow-800/10 border-yellow-600/30';
      case 'music': return 'from-pink-600/20 to-pink-800/10 border-pink-600/30';
      case 'kids': return 'from-cyan-600/20 to-cyan-800/10 border-cyan-600/30';
      case 'adult': return 'from-red-600/20 to-red-800/10 border-red-600/30';
      default: return 'from-gray-600/20 to-gray-800/10 border-gray-600/30';
    }
  };

  const channelData = {
    "highlights": {
      title: "🔹 IPTV Highlights",
      icon: <Sparkles className="w-5 h-5" />,
      items: [
        { name: "18,000+ CHANNELS", type: "packages", count: "18,000+", description: "Premium live channels worldwide" },
        { name: "60,000+ MOVIES", type: "movies", count: "60,000+", description: "Latest blockbusters and classics" },
        { name: "8,400+ TV SHOWS", type: "movies", count: "8,400+", description: "Complete series and episodes" }
      ]
    },
    "usa": {
      title: "🇺🇸 USA Content",
      icon: <Flag className="w-5 h-5" />,
      items: [
        { name: "USA Movies Channels", type: "movies", count: "500+", description: "Hollywood movies and cinema" },
        { name: "USA Music", type: "music", count: "200+", description: "Music channels and concerts" },
        { name: "USA Local – FOX", type: "country", count: "150+", description: "FOX local stations nationwide" },
        { name: "Netflix Premium", type: "vip", count: "Unlimited", description: "Netflix exclusive content" },
        { name: "USA Latin", type: "packages", count: "300+", description: "Spanish language content" },
        { name: "USA Local – CW & MY", type: "country", count: "100+", description: "CW and MyNetworkTV channels" },
        { name: "USA Entertainment", type: "movies", count: "400+", description: "General entertainment channels" },
        { name: "USA Local – ABC", type: "country", count: "200+", description: "ABC affiliate stations" },
        { name: "USA PPV & Cinema PPV", type: "vip", count: "50+", description: "Pay-per-view events" },
        { name: "USA Family & Kids", type: "kids", count: "80+", description: "Kid-friendly content" },
        { name: "USA Local – NBC", type: "country", count: "180+", description: "NBC local affiliates" },
        { name: "USA 24/7 Shows", type: "movies", count: "120+", description: "Round-the-clock series" },
        { name: "USA Sports", type: "sports", count: "250+", description: "All major US sports" },
        { name: "PPV – MMA / Boxing / WWE", type: "sports", count: "Live", description: "Combat sports events" },
        { name: "Sports – Match Center", type: "sports", count: "24/7", description: "Live sports coverage" },
        { name: "USA Fox Sports", type: "sports", count: "30+", description: "Fox Sports networks" },
        { name: "USA beIN Sports", type: "sports", count: "20+", description: "International sports" },
        { name: "Soccer Special Events", type: "sports", count: "Live", description: "Major soccer tournaments" },
        { name: "USA ESPN Plus", type: "sports", count: "All", description: "ESPN+ exclusive content" },
        { name: "USA MLB", type: "sports", count: "162", description: "Major League Baseball" },
        { name: "USA NBA", type: "sports", count: "82", description: "National Basketball Association" },
        { name: "USA NHL", type: "sports", count: "82", description: "National Hockey League" },
        { name: "USA NFL", type: "sports", count: "17", description: "National Football League" },
        { name: "USA NCAAF", type: "sports", count: "College", description: "College football games" }
      ]
    },
    "canada": {
      title: "🇨🇦 Canada Content", 
      icon: <Flag className="w-5 h-5" />,
      items: [
        { name: "Canada EN", type: "country", count: "300+", description: "English Canadian channels" },
        { name: "Canada Local", type: "country", count: "150+", description: "Local Canadian stations" },
        { name: "Canada Kids", type: "kids", count: "40+", description: "Children's programming" },
        { name: "Canada FR", type: "country", count: "200+", description: "French Canadian content" }
      ]
    },
    "uk": {
      title: "🇬🇧 UK Content",
      icon: <Flag className="w-5 h-5" />,
      items: [
        { name: "UK General", type: "country", count: "800+", description: "British television channels" },
        { name: "UK Movies VIP", type: "vip", count: "Premium", description: "Exclusive UK cinema" },
        { name: "iFollow EFL", type: "sports", count: "Live", description: "English Football League" },
        { name: "EPL Games", type: "sports", count: "380+", description: "Premier League matches" },
        { name: "UK Sport VIP", type: "vip", count: "Premium", description: "Exclusive sports content" },
        { name: "UK Movies", type: "movies", count: "500+", description: "British and international films" },
        { name: "UK Sport", type: "sports", count: "200+", description: "All UK sports channels" }
      ]
    },
    "europe": {
      title: "🌍 Europe",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: "France General", type: "country", count: "400+", description: "French television" },
        { name: "France Cinema", type: "movies", count: "200+", description: "French movies" },
        { name: "France Sports", type: "sports", count: "50+", description: "French sports channels" },
        { name: "France Info", type: "country", count: "30+", description: "French news channels" },
        { name: "France Enfants", type: "kids", count: "25+", description: "Children's French content" },
        { name: "France Advertisement", type: "packages", count: "Various", description: "Commercial content" },
        { name: "France Decouvertes", type: "country", count: "40+", description: "Discovery channels" },
        { name: "France Music", type: "music", count: "35+", description: "French music channels" },
        { name: "Germany", type: "country", count: "500+", description: "German channels" },
        { name: "Germany Sport", type: "sports", count: "80+", description: "German sports" },
        { name: "Switzerland", type: "country", count: "150+", description: "Swiss television" },
        { name: "Netherlands", type: "country", count: "200+", description: "Dutch channels" },
        { name: "Belgium", type: "country", count: "120+", description: "Belgian television" },
        { name: "Italy", type: "country", count: "400+", description: "Italian channels" },
        { name: "Spain", type: "country", count: "350+", description: "Spanish television" },
        { name: "Austria", type: "country", count: "100+", description: "Austrian channels" },
        { name: "Portugal", type: "country", count: "150+", description: "Portuguese television" },
        { name: "Czech Republic", type: "country", count: "80+", description: "Czech channels" },
        { name: "Finland", type: "country", count: "60+", description: "Finnish television" },
        { name: "Poland", type: "country", count: "200+", description: "Polish channels" },
        { name: "Norway", type: "country", count: "70+", description: "Norwegian television" },
        { name: "Ukraine", type: "country", count: "150+", description: "Ukrainian channels" },
        { name: "Denmark", type: "country", count: "50+", description: "Danish television" },
        { name: "Russia", type: "country", count: "300+", description: "Russian channels" },
        { name: "Hungary", type: "country", count: "90+", description: "Hungarian television" },
        { name: "Romania", type: "country", count: "120+", description: "Romanian channels" },
        { name: "Bulgaria", type: "country", count: "70+", description: "Bulgarian television" },
        { name: "Croatia", type: "country", count: "80+", description: "Croatian channels" }
      ]
    },
    "asia": {
      title: "🌏 Asia & Middle East",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: "India", type: "country", count: "800+", description: "Indian television" },
        { name: "Pakistan", type: "country", count: "200+", description: "Pakistani channels" },
        { name: "Bangladesh", type: "country", count: "100+", description: "Bangladeshi television" },
        { name: "Thailand", type: "country", count: "150+", description: "Thai channels" },
        { name: "Vietnam", type: "country", count: "80+", description: "Vietnamese television" },
        { name: "Philippines", type: "country", count: "120+", description: "Filipino channels" },
        { name: "China", type: "country", count: "400+", description: "Chinese television" },
        { name: "Iran", type: "country", count: "100+", description: "Persian channels" },
        { name: "Afghanistan", type: "country", count: "60+", description: "Afghan television" },
        { name: "Kazakhstan", type: "country", count: "70+", description: "Kazakh channels" },
        { name: "Azerbaijan", type: "country", count: "50+", description: "Azerbaijani television" },
        { name: "Armenia", type: "country", count: "40+", description: "Armenian channels" }
      ]
    },
    "arab": {
      title: "🕌 Arab World",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: "Arab All", type: "packages", count: "1000+", description: "All Arabic channels" },
        { name: "Arab beIN Sports VIP", type: "vip", count: "Premium", description: "Exclusive Arabic sports" }
      ]
    },
    "africa": {
      title: "🌍 Africa",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: "Africa DSTV", type: "packages", count: "200+", description: "DSTV satellite package" },
        { name: "Africa Super Sports", type: "sports", count: "50+", description: "African sports channels" },
        { name: "Africa All", type: "packages", count: "500+", description: "All African content" },
        { name: "South Africa", type: "country", count: "100+", description: "South African channels" }
      ]
    },
    "latin": {
      title: "🌎 Latin America",
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: "Latino All", type: "packages", count: "800+", description: "All Latin content" },
        { name: "Caribbean", type: "packages", count: "150+", description: "Caribbean channels" },
        { name: "Mexico", type: "country", count: "300+", description: "Mexican television" },
        { name: "Brazil", type: "country", count: "250+", description: "Brazilian channels" },
        { name: "Argentina", type: "country", count: "180+", description: "Argentine television" },
        { name: "Venezuela", type: "country", count: "120+", description: "Venezuelan channels" },
        { name: "Colombia", type: "country", count: "150+", description: "Colombian television" },
        { name: "Chile", type: "country", count: "100+", description: "Chilean channels" },
        { name: "Peru", type: "country", count: "80+", description: "Peruvian television" },
        { name: "Ecuador", type: "country", count: "60+", description: "Ecuadorian channels" },
        { name: "Uruguay", type: "country", count: "40+", description: "Uruguayan television" },
        { name: "Bolivia", type: "country", count: "35+", description: "Bolivian channels" },
        { name: "Paraguay", type: "country", count: "30+", description: "Paraguayan television" },
        { name: "Panama", type: "country", count: "25+", description: "Panamanian channels" },
        { name: "El Salvador", type: "country", count: "20+", description: "Salvadoran television" },
        { name: "Honduras", type: "country", count: "18+", description: "Honduran channels" },
        { name: "Dominican Republic", type: "country", count: "45+", description: "Dominican television" },
        { name: "Nicaragua", type: "country", count: "15+", description: "Nicaraguan channels" }
      ]
    },
    "balkans": {
      title: "⚡ Balkans & Eastern Europe",
      icon: <Zap className="w-5 h-5" />,
      items: [
        { name: "Ex-YU", type: "packages", count: "400+", description: "Former Yugoslavia region" },
        { name: "Albania", type: "country", count: "150+", description: "Albanian channels" },
        { name: "Bosnia (Bosnia & Herzegovina)", type: "country", count: "100+", description: "Bosnian television" },
        { name: "Macedonia (North Macedonia)", type: "country", count: "60+", description: "Macedonian channels" },
        { name: "Lithuania", type: "country", count: "50+", description: "Lithuanian television" }
      ]
    },
    "other": {
      title: "🎯 Other & Special",
      icon: <Package className="w-5 h-5" />,
      items: [
        { name: "Australia", type: "country", count: "200+", description: "Australian television" },
        { name: "Malta", type: "country", count: "20+", description: "Maltese channels" },
        { name: "Israel", type: "country", count: "80+", description: "Israeli television" },
        { name: "Greece", type: "country", count: "120+", description: "Greek channels" },
        { name: "Turkey", type: "country", count: "300+", description: "Turkish television" },
        { name: "Cuba", type: "country", count: "25+", description: "Cuban channels" },
        { name: "Kurdistan", type: "packages", count: "60+", description: "Kurdish content" },
        { name: "Sweden", type: "country", count: "80+", description: "Swedish television" },
        { name: "Cyprus", type: "country", count: "30+", description: "Cypriot channels" },
        { name: "Adults", type: "adult", count: "18+", description: "Adult entertainment" }
      ]
    }
  };

  const filteredData = Object.entries(channelData).filter(([_, region]) => {
    if (selectedFilter === 'all') return true;
    
    return region.items.some(item => 
      selectedFilter === 'countries' && item.type === 'country' ||
      selectedFilter === 'sports' && item.type === 'sports' ||
      selectedFilter === 'movies' && (item.type === 'movies' || item.type === 'vip') ||
      selectedFilter === 'packages' && (item.type === 'packages' || item.type === 'vip')
    );
  }).map(([key, region]) => {
    if (selectedFilter === 'all' && !searchQuery) {
      return [key, region];
    }
    
    const filteredItems = region.items.filter(item => {
      const matchesFilter = selectedFilter === 'all' ||
                          selectedFilter === 'countries' && item.type === 'country' ||
                          selectedFilter === 'sports' && item.type === 'sports' ||
                          selectedFilter === 'movies' && (item.type === 'movies' || item.type === 'vip') ||
                          selectedFilter === 'packages' && (item.type === 'packages' || item.type === 'vip');
      
      const matchesSearch = !searchQuery || 
                          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesFilter && matchesSearch;
    });
    
    return [key, {
      ...region,
      items: filteredItems
    }];
  }).filter(([_, region]) => region.items.length > 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Page Title Section (Top Hero) */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-8">
            <Globe className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Channel Directory</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Explore Our <span className="text-red-600">IPTV Channel List</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Discover <span className="text-red-400 font-semibold">86,000+ channels, movies & shows</span> from around the world — 
              all available in stunning <span className="text-blue-400 font-semibold">HD & 4K quality</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6">
                <Tv className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">18,000+</div>
                <div className="text-blue-300 text-sm">Live Channels</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/10 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6">
                <Film className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">60,000+</div>
                <div className="text-purple-300 text-sm">Movies</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/10 backdrop-blur-sm border border-green-600/30 rounded-2xl p-6">
                <Trophy className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Sports</div>
                <div className="text-green-300 text-sm">Live & On-Demand</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/10 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6">
                <Star className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">8,400+</div>
                <div className="text-red-300 text-sm">TV Shows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-black/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search channels, countries, or content types..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border-gray-600/50 text-white rounded-2xl text-lg"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-[200px] bg-gray-800/50 border-gray-600/50 text-white rounded-2xl">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 text-white">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="countries">🌍 Countries</SelectItem>
                    <SelectItem value="sports">⚽ Sports</SelectItem>
                    <SelectItem value="movies">🎬 Movies & Shows</SelectItem>
                    <SelectItem value="packages">📦 Packages & VIP</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  onClick={() => { setSearchQuery(""); setSelectedFilter("all"); }}
                  className="border-gray-600/50 text-gray-300 hover:bg-gray-800/50 rounded-2xl"
                >
                  Clear
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                <Flag className="w-3 h-3 mr-1" />
                50+ Countries
              </Badge>
              <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-600/30">
                <Trophy className="w-3 h-3 mr-1" />
                Live Sports
              </Badge>
              <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                <Film className="w-3 h-3 mr-1" />
                Premium Cinema
              </Badge>
              <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-300 border-yellow-600/30">
                <Crown className="w-3 h-3 mr-1" />
                VIP Packages
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Channel List Section (Main Grid) */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Browse Channels by <span className="text-red-600">Country & Region</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover content from around the world, organized by region and type. 
              Click on any section to explore the full catalog.
            </p>
          </div>

          <div className="space-y-8">
            {filteredData.map(([regionKey, region]) => (
              <Collapsible 
                key={regionKey}
                open={openSections.includes(regionKey)}
                onOpenChange={() => toggleSection(regionKey)}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50">
                  <CollapsibleTrigger className="w-full p-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-red-600">{region.icon}</div>
                          <div className="text-left">
                            <CardTitle className="text-xl md:text-2xl text-white mb-2">
                              {region.title}
                            </CardTitle>
                            <Badge variant="secondary" className="bg-red-600/20 text-red-300 border-red-600/30">
                              {region.items.length} items available
                            </Badge>
                          </div>
                        </div>
                        <div className="text-white">
                          {openSections.includes(regionKey) ? (
                            <ChevronDown className="w-6 h-6" />
                          ) : (
                            <ChevronRight className="w-6 h-6" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {region.items.map((item, index) => (
                          <Card key={index} className={`bg-gradient-to-br ${getTypeColor(item.type)} backdrop-blur-sm border hover:scale-105 transition-all duration-300 cursor-pointer`}>
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div className="text-white">
                                  {getTypeIcon(item.type)}
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className="text-xs border-white/20 text-white/80"
                                >
                                  {item.count}
                                </Badge>
                              </div>
                              
                              <h3 className="text-white font-semibold mb-2 leading-tight">
                                {item.name}
                              </h3>
                              
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {item.description}
                              </p>

                              <div className="mt-4 flex items-center justify-between">
                                <div className="text-xs text-gray-400">
                                  Click to explore
                                </div>
                                <Play className="w-4 h-4 text-red-400" />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action Section (Bottom Banner) */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto">
              <Tv className="w-20 h-20 text-red-400 mx-auto mb-8" />
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Want to unlock all <span className="text-red-600">premium channels</span>?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Get instant access to our complete channel library with crystal-clear HD & 4K streaming. 
                Start watching your favorite content from around the world today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold">
                  Get IPTV Subscription Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4 text-xl">
                  View Pricing Plans
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">72h</div>
                  <div className="text-gray-400 text-sm">Free Trial</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">Instant</div>
                  <div className="text-gray-400 text-sm">Activation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Channels;