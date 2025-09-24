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
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Channels = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const channelData = [
    {
      id: "uk",
      title: "All UK Channels",
      flag: "🇬🇧",
      count: "2,500+",
      color: "from-blue-600/20 to-red-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "BBC One", "BBC Two", "BBC Three", "BBC Four", "BBC News", "BBC Sport",
        "ITV", "ITV2", "ITV3", "ITV4", "ITVBe", "Channel 4", "E4", "More4",
        "Channel 5", "5Star", "5USA", "Sky Sports Premier League", "Sky Sports Football",
        "Sky Sports Cricket", "BT Sport 1", "BT Sport 2", "BT Sport 3",
        "Sky Cinema Premiere", "Sky Cinema Action", "Sky Cinema Comedy",
        "Discovery", "National Geographic", "History Channel", "Comedy Central",
        "MTV", "Nickelodeon", "Cartoon Network", "Disney Channel",
        "Food Network", "TLC", "Animal Planet", "Investigation Discovery"
      ]
    },
    {
      id: "usa",
      title: "USA Channels",
      flag: "🇺🇸",
      count: "1,800+",
      color: "from-red-600/20 to-blue-600/20",
      borderColor: "border-red-600/30",
      channels: [
        "CNN", "Fox News", "MSNBC", "ESPN", "ESPN2", "Fox Sports 1", "Fox Sports 2",
        "NBC", "ABC", "CBS", "FOX", "HBO", "Showtime", "Netflix", "Hulu",
        "Disney+", "Paramount+", "AMC", "FX", "TNT", "TBS", "USA Network",
        "Syfy", "Bravo", "E!", "Comedy Central", "Adult Swim", "Cartoon Network",
        "Nickelodeon", "Disney Channel", "Food Network", "HGTV", "Discovery",
        "National Geographic", "History", "A&E", "Lifetime", "TLC"
      ]
    },
    {
      id: "india-pakistan",
      title: "India & Pakistan",
      flag: "🇮🇳🇵🇰",
      count: "1,200+",
      color: "from-orange-600/20 to-green-600/20",
      borderColor: "border-orange-600/30",
      channels: [
        "Star Plus", "Colors", "Zee TV", "Sony Entertainment", "Life OK",
        "Star Bharat", "Zee Cinema", "Sony Max", "Star Gold", "Colors Cineplex",
        "Sony Six", "Star Sports 1", "Star Sports 2", "Ten Sports", "Neo Sports",
        "PTV Home", "ARY Digital", "Geo TV", "Hum TV", "Express Entertainment",
        "Aaj News", "Geo News", "ARY News", "Samaa TV", "Dawn News",
        "MTV India", "9XM", "Zoom", "B4U Music", "Zing", "Comedy Central India",
        "Pogo", "Cartoon Network India", "Nick India", "Disney Channel India"
      ]
    },
    {
      id: "france",
      title: "France",
      flag: "🇫🇷",
      count: "800+",
      color: "from-blue-600/20 to-red-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "TF1", "France 2", "France 3", "Canal+", "France 5", "M6",
        "Arte", "C8", "W9", "TMC", "TFX", "NRJ 12", "LCP",
        "France 4", "BFM TV", "CNews", "LCI", "France Info", "i>Télé",
        "Eurosport 1", "Eurosport 2", "beIN Sports 1", "beIN Sports 2",
        "RMC Sport 1", "RMC Sport 2", "Canal+ Sport", "L'Équipe 21",
        "OCS Max", "OCS City", "TCM Cinéma", "Paris Première",
        "Planète+", "National Geographic France", "Discovery France"
      ]
    },
    {
      id: "canada",
      title: "Canada",
      flag: "🇨🇦",
      count: "600+",
      color: "from-red-600/20 to-white/10",
      borderColor: "border-red-600/30",
      channels: [
        "CBC", "CTV", "Global", "Citytv", "TVA", "Radio-Canada", "V",
        "TSN", "Sportsnet", "RDS", "TVA Sports", "Sportsnet One",
        "CBC News Network", "CTV News Channel", "CP24", "LCN",
        "Movie Network", "Super Channel", "Hollywood Suite", "Starz Canada",
        "Family Channel", "YTV", "Teletoon", "Cartoon Network Canada",
        "Discovery Canada", "History Canada", "National Geographic Canada",
        "Food Network Canada", "HGTV Canada", "Showcase", "Space"
      ]
    },
    {
      id: "portugal",
      title: "Portugal",
      flag: "🇵🇹",
      count: "400+",
      color: "from-green-600/20 to-red-600/20",
      borderColor: "border-green-600/30",
      channels: [
        "RTP1", "RTP2", "SIC", "TVI", "RTP3", "SIC Notícias", "TVI24",
        "Canal Hollywood", "AXN", "Fox", "Fox Life", "Fox Crime",
        "National Geographic", "Discovery", "History", "Animal Planet",
        "Sport TV 1", "Sport TV 2", "Sport TV 3", "Benfica TV", "Porto Canal",
        "Sporting TV", "A Bola TV", "Record TV", "SIC Mulher", "TVI Ficção",
        "Hollywood", "AXN Movies", "Cinemundo", "SyFy", "24 Kitchen"
      ]
    },
    {
      id: "albania",
      title: "Albania",
      flag: "🇦🇱",
      count: "300+",
      color: "from-red-600/20 to-black/20",
      borderColor: "border-red-600/30",
      channels: [
        "RTSH 1", "RTSH 2", "RTSH 3", "Top Channel", "Vizion Plus", "Klan TV",
        "News 24", "Ora News", "Report TV", "ABC News", "News One",
        "Supersport 1", "Supersport 2", "Supersport 3", "Supersport 4",
        "Tring Sport 1", "Tring Sport 2", "Digitalb Sport 1", "Digitalb Sport 2",
        "Film Hits", "Film Autor", "Film Thriller", "Film Aksion",
        "Cufo", "Folk+", "Club TV", "City TV", "RTV 21", "KTV"
      ]
    },
    {
      id: "arabic",
      title: "Arabic",
      flag: "🇸🇦🇦🇪",
      count: "1,000+",
      color: "from-green-600/20 to-gold/20",
      borderColor: "border-green-600/30",
      channels: [
        "Al Jazeera", "Al Arabiya", "BBC Arabic", "Sky News Arabia", "RT Arabic",
        "MBC 1", "MBC 2", "MBC 3", "MBC 4", "MBC Action", "MBC Max",
        "beIN Sports 1", "beIN Sports 2", "beIN Sports 3", "Al Kass Sports",
        "Dubai Sports", "Abu Dhabi Sports", "KTV Sport", "SSC Sport",
        "Rotana Cinema", "Rotana Classic", "MBC Bollywood", "Zee Aflam",
        "OSN Movies", "Cairo Cinema", "Nile Cinema", "Syrian Drama",
        "LBC", "Future TV", "MTV Lebanon", "Al Manar", "OTV Lebanon"
      ]
    },
    {
      id: "ex-yu",
      title: "Ex-YU",
      flag: "🇷🇸🇭🇷🇧🇦",
      count: "700+",
      color: "from-blue-600/20 to-red-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "RTS 1", "RTS 2", "Pink", "B92", "Happy TV", "Nova S", "O2 TV",
        "HRT 1", "HRT 2", "Nova TV", "RTL", "Doma TV", "RTL 2",
        "BHT 1", "FTV", "OBN", "Pink BH", "N1", "Al Jazeera Balkans",
        "Arena Sport 1", "Arena Sport 2", "Sport Klub 1", "Sport Klub 2",
        "Eurosport 1", "Eurosport 2", "SK Premium", "Arena Premium",
        "Cinemax", "HBO", "Fox", "National Geographic", "Discovery",
        "Viasat History", "24Kitchen", "TLC", "Animal Planet"
      ]
    },
    {
      id: "africa",
      title: "Africa",
      flag: "🇿🇦🇳🇬🇰🇪",
      count: "500+",
      color: "from-yellow-600/20 to-green-600/20",
      borderColor: "border-yellow-600/30",
      channels: [
        "SABC 1", "SABC 2", "SABC 3", "eTV", "M-Net", "SuperSport 1",
        "SuperSport 2", "SuperSport 3", "kykNET", "Mzansi Magic",
        "NTV", "Citizen TV", "KTN", "K24", "KBC", "Switch TV",
        "Africa Magic", "MTV Base", "Channel O", "Trace Urban",
        "BBC World News", "CNN International", "Al Jazeera English",
        "Discovery Channel Africa", "National Geographic Wild",
        "Animal Planet", "History Channel Africa", "Food Network"
      ]
    },
    {
      id: "zambia",
      title: "Zambia",
      flag: "🇿🇲",
      count: "150+",
      color: "from-green-600/20 to-orange-600/20",
      borderColor: "border-green-600/30",
      channels: [
        "ZNBC TV1", "ZNBC TV2", "ZNBC TV3", "Muvi TV", "Diamond TV",
        "DSTV Zambia", "GOtv Zambia", "Zambezi Magic", "Africa Magic",
        "SuperSport Zambia", "ESPN Africa", "Fox Sports Africa",
        "BBC World News", "CNN International", "Al Jazeera English",
        "Discovery Channel", "National Geographic", "Animal Planet",
        "Cartoon Network Africa", "Nickelodeon Africa", "Disney Channel Africa"
      ]
    },
    {
      id: "malaysia",
      title: "Malaysia",
      flag: "🇲🇾",
      count: "400+",
      color: "from-red-600/20 to-blue-600/20",
      borderColor: "border-red-600/30",
      channels: [
        "TV1", "TV2", "TV3", "NTV7", "8TV", "TV9", "Astro Prima",
        "Astro Ria", "Astro Warna", "Astro Citra", "Astro Oasis",
        "Astro SuperSport 1", "Astro SuperSport 2", "Astro SuperSport 3",
        "Fox Sports", "ESPN", "beIN Sports", "Eurosport",
        "HBO", "Cinemax", "Fox Movies", "Star Movies", "Thrill",
        "AXN", "Warner TV", "Comedy Central Asia", "MTV Asia",
        "Channel [V]", "Discovery Asia", "National Geographic Asia"
      ]
    },
    {
      id: "italy",
      title: "Italy",
      flag: "🇮🇹",
      count: "600+",
      color: "from-green-600/20 to-red-600/20",
      borderColor: "border-green-600/30",
      channels: [
        "Rai 1", "Rai 2", "Rai 3", "Canale 5", "Italia 1", "Rete 4",
        "La7", "TV8", "Nove", "20 Mediaset", "Rai 4", "Rai 5",
        "Sky Sport 1", "Sky Sport 2", "Sky Sport 24", "Sky Calcio 1",
        "Premium Sport", "Eurosport 1", "Eurosport 2", "DAZN",
        "Sky Cinema Uno", "Sky Cinema Due", "Premium Cinema",
        "Mediaset Premium", "Fox", "National Geographic Italia",
        "Discovery Italia", "History Channel Italia", "Animal Planet Italia"
      ]
    },
    {
      id: "greece",
      title: "Greece",
      flag: "🇬🇷",
      count: "350+",
      color: "from-blue-600/20 to-white/10",
      borderColor: "border-blue-600/30",
      channels: [
        "ERT1", "ERT2", "ERT3", "Mega", "ANT1", "Alpha", "Star",
        "Skai", "Open TV", "Macedonia TV", "Thessaloniki TV",
        "Nova Sports 1", "Nova Sports 2", "Nova Sports 3", "Eurosport 1",
        "Eurosport 2", "OTE Sport 1", "OTE Sport 2", "Cosmote Sport",
        "Nova Cinema 1", "Nova Cinema 2", "Filmnet Plus", "Cosmote Cinema",
        "National Geographic Greece", "Discovery Greece", "History Greece"
      ]
    },
    {
      id: "australia",
      title: "Australia",
      flag: "🇦🇺",
      count: "450+",
      color: "from-blue-600/20 to-red-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "ABC", "Seven", "Nine", "Ten", "SBS", "ABC News 24",
        "Seven Mate", "7Two", "9Go!", "9Gem", "10 Peach", "SBS Viceland",
        "Fox Sports 1", "Fox Sports 2", "Fox Sports 3", "ESPN Australia",
        "beIN Sports 1", "beIN Sports 2", "Eurosport", "Racing.com",
        "Foxtel Movies", "Movie One", "Movie Two", "Sci-Fi",
        "Universal Channel", "Fox8", "Comedy Channel", "Lifestyle",
        "Discovery Australia", "National Geographic Australia", "History Australia"
      ]
    },
    {
      id: "netherlands",
      title: "Netherlands",
      flag: "🇳🇱",
      count: "400+",
      color: "from-orange-600/20 to-blue-600/20",
      borderColor: "border-orange-600/30",
      channels: [
        "NPO 1", "NPO 2", "NPO 3", "RTL 4", "RTL 5", "SBS6",
        "Net5", "Veronica", "RTL 7", "RTL 8", "Comedy Central",
        "Eurosport 1", "Eurosport 2", "Ziggo Sport", "Fox Sports 1",
        "Fox Sports 2", "Sport1", "ESPN Nederland",
        "Film1 Premiere", "Film1 Action", "Film1 Drama", "RTL Crime",
        "Investigation Discovery", "National Geographic", "Discovery",
        "History", "Animal Planet", "TLC", "24Kitchen"
      ]
    },
    {
      id: "thailand",
      title: "Thailand",
      flag: "🇹🇭",
      count: "300+",
      color: "from-red-600/20 to-blue-600/20",
      borderColor: "border-red-600/30",
      channels: [
        "Channel 3", "Channel 5", "Channel 7", "NBT", "Thai PBS",
        "Channel 8", "MCOT HD", "Nation TV", "New TV", "Spring News",
        "True Sport 1", "True Sport 2", "True Sport 3", "Fox Sports",
        "beIN Sports 1", "beIN Sports 2", "ESPN", "Eurosport",
        "HBO", "Cinemax", "AXN", "Fox Movies", "Warner TV",
        "National Geographic", "Discovery", "Animal Planet", "History"
      ]
    },
    {
      id: "mexico",
      title: "Mexico",
      flag: "🇲🇽",
      count: "500+",
      color: "from-green-600/20 to-red-600/20",
      borderColor: "border-green-600/30",
      channels: [
        "Las Estrellas", "Canal 5", "Azteca Uno", "Azteca 7", "Imagen TV",
        "Multimedios", "Canal Once", "Teleformula", "ADN 40", "Milenio TV",
        "Fox Sports Mexico", "ESPN Mexico", "ESPN 2", "ESPN 3",
        "Fox Sports 2", "TUDN", "Claro Sports", "AYM Sports",
        "HBO Latino", "Cinemax", "Golden", "TNT", "Space",
        "Universal Channel", "Sony Channel", "Warner Channel",
        "Discovery en Español", "National Geographic en Español"
      ]
    },
    {
      id: "turkey",
      title: "Turkey",
      flag: "🇹🇷",
      count: "600+",
      color: "from-red-600/20 to-white/10",
      borderColor: "border-red-600/30",
      channels: [
        "TRT 1", "ATV", "Show TV", "Star TV", "Kanal D", "Fox TV",
        "TV8", "Kanal 7", "Beyaz TV", "TRT Haber", "CNN Türk", "NTV",
        "beIN Sports 1", "beIN Sports 2", "beIN Sports 3", "TRT Spor",
        "Spor Smart", "A Spor", "FB TV", "GS TV", "BJK TV",
        "Sinema TV", "Moviemax", "Premier", "Film Smart",
        "National Geographic Turkey", "Discovery Turkey", "History Turkey"
      ]
    },
    {
      id: "europe",
      title: "Europe",
      flag: "🇪🇺",
      count: "2,000+",
      color: "from-blue-600/20 to-yellow-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "Eurosport 1", "Eurosport 2", "Eurovision", "Arte", "3sat",
        "ZDF", "ARD", "RTL", "ProSieben", "Sat.1", "VOX", "Kabel Eins",
        "ORF 1", "ORF 2", "ATV", "Puls 4", "ServusTV", "Red Bull TV",
        "RSI LA 1", "RSI LA 2", "SRF 1", "SRF zwei", "RTS Un", "RTS Deux",
        "TV4", "SVT1", "SVT2", "Kanal 5", "TV3 Sverige", "TV6",
        "NRK1", "NRK2", "TV 2 Norge", "TVNorge", "Viasat 4",
        "DR1", "DR2", "TV2 Danmark", "Kanal 5 DK", "TV3 Danmark"
      ]
    },
    {
      id: "spain",
      title: "Spain",
      flag: "🇪🇸",
      count: "700+",
      color: "from-red-600/20 to-yellow-600/20",
      borderColor: "border-red-600/30",
      channels: [
        "La 1", "La 2", "Antena 3", "Cuatro", "Telecinco", "laSexta",
        "FDF", "Nova", "Mega", "Atreseries", "Energy", "Divinity",
        "Movistar LaLiga", "Movistar Deportes", "Eurosport 1", "Eurosport 2",
        "beIN Sports", "Real Madrid TV", "Barça TV", "GOL",
        "Cine Español", "Hollywood", "TCM", "Paramount Channel",
        "AXN", "Fox", "Syfy", "Calle 13", "Comedy Central España",
        "National Geographic España", "Discovery España", "Historia"
      ]
    },
    {
      id: "romania",
      title: "Romania",
      flag: "🇷🇴",
      count: "400+",
      color: "from-blue-600/20 to-yellow-600/20",
      borderColor: "border-blue-600/30",
      channels: [
        "TVR 1", "TVR 2", "TVR 3", "Pro TV", "Antena 1", "Prima TV",
        "Kanal D", "Acasa TV", "B1 TV", "România TV", "Realitatea TV",
        "Digi Sport 1", "Digi Sport 2", "Eurosport 1", "Eurosport 2",
        "Orange Sport 1", "Orange Sport 2", "Look Sport", "Prima Sport",
        "HBO Romania", "Cinemax", "AXN", "Pro Cinema", "Moviemax",
        "National Geographic Romania", "Discovery Romania", "Viasat History"
      ]
    }
  ];

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
              Discover <span className="text-red-400 font-semibold">10,000+ Live TV channels</span> from the UK, USA, Europe, Asia, and beyond — 
              all available in stunning <span className="text-blue-400 font-semibold">HD & 4K quality</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/10 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6">
                <Tv className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                <div className="text-blue-300 text-sm">Live Channels</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/10 backdrop-blur-sm border border-green-600/30 rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-green-300 text-sm">Countries</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/10 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6">
                <Star className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">4K</div>
                <div className="text-red-300 text-sm">Ultra HD Quality</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/10 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-purple-300 text-sm">Live Streaming</div>
              </div>
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
              Click on any region below to explore the full list of available channels. 
              All channels are included in every subscription plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {channelData.map((region) => (
              <Collapsible 
                key={region.id} 
                open={openSections.includes(region.id)}
                onOpenChange={() => toggleSection(region.id)}
              >
                <Card className={`bg-gradient-to-br ${region.color} backdrop-blur-sm border ${region.borderColor} hover:scale-105 transition-all duration-300`}>
                  <CollapsibleTrigger className="w-full p-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{region.flag}</div>
                          <div className="text-left">
                            <CardTitle className="text-lg text-white mb-1">
                              {region.title}
                            </CardTitle>
                            <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                              {region.count} channels
                            </Badge>
                          </div>
                        </div>
                        <div className="text-white">
                          {openSections.includes(region.id) ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 max-h-64 overflow-y-auto scrollbar-none">
                        <div className="grid grid-cols-1 gap-2">
                          {region.channels.map((channel, index) => (
                            <div 
                              key={index} 
                              className="flex items-center space-x-3 py-2 px-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                              <div className="text-white text-sm font-medium flex-1">
                                {channel}
                              </div>
                              <Play className="w-3 h-3 text-gray-400 flex-shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between text-xs text-gray-300">
                          <span>Showing {region.channels.length} channels</span>
                          <div className="flex items-center space-x-1">
                            <Check className="w-3 h-3 text-green-400" />
                            <span>All HD/4K</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-600/30 rounded-3xl p-8 max-w-4xl mx-auto">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                All Channels Included
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Every channel listed above is included in all our subscription plans. 
                No hidden fees, no premium upgrades - just complete access to our entire library.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Channel Access</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">No Limits</div>
                  <div className="text-gray-400 text-sm">Viewing Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">Multi-Device</div>
                  <div className="text-gray-400 text-sm">Streaming</div>
                </div>
              </div>
            </div>
          </div>
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
                Start watching your favorite shows and sports from around the world today!
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