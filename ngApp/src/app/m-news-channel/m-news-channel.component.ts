import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-m-news-channel',
  templateUrl: './m-news-channel.component.html',
  styleUrls: ['./m-news-channel.component.scss']
})
export class MNewsChannelComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }
  public windTitle:String="News Channel";
  public selectedItem:any="";
  public channel=[
    {title: "ABC News", code: "us", category: "general", id: "abc-news"},
    {title: "ABC News (AU)", code: "au", category: "general", id: "abc-news-au"},
    {title: "Aftenposten", code: "no", category: "general", id: "aftenposten"},
    {title: "Al Jazeera English", code: "us", category: "general", id: "al-jazeera-english"},
    {title: "ANSA.it", code: "it", category: "general", id: "ansa"},
    {title: "Argaam", code: "sa", category: "business", id: "argaam"},
    {title: "Ars Technica", code: "us", category: "technology", id: "ars-technica"},
    {title: "Ary News", code: "pk", category: "general", id: "ary-news"},
    {title: "Associated Press", code: "us", category: "general", id: "associated-press"},
    {title: "Australian Financial Review", code: "au", category: "business", id: "australian-financial-review"},
    {title: "Axios", code: "us", category: "general", id: "axios"},
    {title: "BBC News", code: "gb", category: "general", id: "bbc-news"},
    {title: "BBC Sport", code: "gb", category: "sports", id: "bbc-sport"},
    {title: "Bild", code: "de", category: "general", id: "bild"},
    {title: "Blasting News (BR)", code: "br", category: "general", id: "blasting-news-br"},
    {title: "Bleacher Report", code: "us", category: "sports", id: "bleacher-report"},
    {title: "Bloomberg", code: "us", category: "business", id: "bloomberg"},
    {title: "Breitbart News", code: "us", category: "general", id: "breitbart-news"},
    {title: "Business Insider", code: "us", category: "business", id: "business-insider"},
    {title: "Business Insider (UK)", code: "gb", category: "business", id: "business-insider-uk"},
    {title: "Buzzfeed", code: "us", category: "entertainment", id: "buzzfeed"},
    {title: "CBC News", code: "ca", category: "general", id: "cbc-news"},
    {title: "CBS News", code: "us", category: "general", id: "cbs-news"},
    {title: "CNBC", code: "us", category: "business", id: "cnbc"},
    {title: "CNN", code: "us", category: "general", id: "cnn"},
    {title: "CNN Spanish", code: "us", category: "general", id: "cnn-es"},
    {title: "Crypto Coins News", code: "us", category: "technology", id: "crypto-coins-news"},
    {title: "Daily Mail", code: "gb", category: "entertainment", id: "daily-mail"},
    {title: "Der Tagesspiegel", code: "de", category: "general", id: "der-tagesspiegel"},
    {title: "Die Zeit", code: "de", category: "business", id: "die-zeit"},
    {title: "El Mundo", code: "es", category: "general", id: "el-mundo"},
    {title: "Engadget", code: "us", category: "technology", id: "engadget"},
    {title: "Entertainment Weekly", code: "us", category: "entertainment", id: "entertainment-weekly"},
    {title: "ESPN", code: "us", category: "sports", id: "espn"},
    {title: "ESPN Cric Info", code: "us", category: "sports", id: "espn-cric-info"},
    {title: "Financial Post", code: "ca", category: "business", id: "financial-post"},
    {title: "Focus", code: "de", category: "general", id: "focus"},
    {title: "Football Italia", code: "it", category: "sports", id: "football-italia"},
    {title: "Fortune", code: "us", category: "business", id: "fortune"},
    {title: "FourFourTwo", code: "gb", category: "sports", id: "four-four-two"},
    {title: "Fox News", code: "us", category: "general", id: "fox-news"},
    {title: "Fox Sports", code: "us", category: "sports", id: "fox-sports"},
    {title: "Globo", code: "br", category: "general", id: "globo"},
    {title: "Google News", code: "us", category: "general", id: "google-news"},
    {title: "Google News (Argentina)", code: "ar", category: "general", id: "google-news-ar"},
    {title: "Google News (Australia)", code: "au", category: "general", id: "google-news-au"},
    {title: "Google News (Brasil)", code: "br", category: "general", id: "google-news-br"},
    {title: "Google News (Canada)", code: "ca", category: "general", id: "google-news-ca"},
    {title: "Google News (France)", code: "fr", category: "general", id: "google-news-fr"},
    {title: "Google News (India)", code: "in", category: "general", id: "google-news-in"},
    {title: "Google News (Israel)", code: "is", category: "general", id: "google-news-is"},
    {title: "Google News (Italy)", code: "it", category: "general", id: "google-news-it"},
    {title: "Google News (Russia)", code: "ru", category: "general", id: "google-news-ru"},
    {title: "Google News (Saudi Arabia)", code: "sa", category: "general", id: "google-news-sa"},
    {title: "Google News (UK)", code: "gb", category: "general", id: "google-news-uk"},
    {title: "Göteborgs-Posten", code: "se", category: "general", id: "goteborgs-posten"},
    {title: "Gruenderszene", code: "de", category: "technology", id: "gruenderszene"},
    {title: "Hacker News", code: "us", category: "technology", id: "hacker-news"},
    {title: "Handelsblatt", code: "de", category: "business", id: "handelsblatt"},
    {title: "IGN", code: "us", category: "entertainment", id: "ign"},
    {title: "Il Sole 24 Ore", code: "it", category: "business", id: "il-sole-24-ore"},
    {title: "Independent", code: "gb", category: "general", id: "independent"},
    {title: "Infobae", code: "ar", category: "general", id: "infobae"},
    {title: "InfoMoney", code: "br", category: "business", id: "info-money"},
    {title: "La Gaceta", code: "ar", category: "general", id: "la-gaceta"},
    {title: "La Nacion", code: "ar", category: "general", id: "la-nacion"},
    {title: "La Repubblica", code: "it", category: "general", id: "la-repubblica"},
    {title: "Le Monde", code: "fr", category: "general", id: "le-monde"},
    {title: "Lenta", code: "ru", category: "general", id: "lenta"},
    {title: "L'equipe", code: "fr", category: "sports", id: "lequipe"},
    {title: "Les Echos", code: "fr", category: "business", id: "les-echos"},
    {title: "Libération", code: "fr", category: "general", id: "liberation"},
    {title: "Marca", code: "es", category: "sports", id: "marca"},
    {title: "Mashable", code: "us", category: "entertainment", id: "mashable"},
    {title: "Medical News Today", code: "us", category: "health", id: "medical-news-today"},
    {title: "Metro", code: "gb", category: "general", id: "metro"},
    {title: "Mirror", code: "gb", category: "general", id: "mirror"},
    {title: "MSNBC", code: "us", category: "general", id: "msnbc"},
    {title: "MTV News", code: "us", category: "entertainment", id: "mtv-news"},
    {title: "MTV News (UK)", code: "gb", category: "entertainment", id: "mtv-news-uk"},
    {title: "National Geographic", code: "us", category: "science", id: "national-geographic"},
    {title: "National Review", code: "us", category: "general", id: "national-review"},
    {title: "NBC News", code: "us", category: "general", id: "nbc-news"},
    {title: "News24", code: "za", category: "general", id: "news24"},
    {title: "New Scientist", code: "us", category: "science", id: "new-scientist"},
    {title: "News.com.au", code: "au", category: "general", id: "news-com-au"},
    {title: "Newsweek", code: "us", category: "general", id: "newsweek"},
    {title: "New York Magazine", code: "us", category: "general", id: "new-york-magazine"},
    {title: "Next Big Future", code: "us", category: "science", id: "next-big-future"},
    {title: "NFL News", code: "us", category: "sports", id: "nfl-news"},
    {title: "NHL News", code: "us", category: "sports", id: "nhl-news"},
    {title: "NRK", code: "no", category: "general", id: "nrk"},
    {title: "Politico", code: "us", category: "general", id: "politico"},
    {title: "Polygon", code: "us", category: "entertainment", id: "polygon"},
    {title: "RBC", code: "ru", category: "general", id: "rbc"},
    {title: "Recode", code: "us", category: "technology", id: "recode"},
    {title: "Reddit /r/all", code: "us", category: "general", id: "reddit-r-all"},
    {title: "Reuters", code: "us", category: "general", id: "reuters"},
    {title: "RT", code: "ru", category: "general", id: "rt"},
    {title: "RTE", code: "ie", category: "general", id: "rte"},
    {title: "RTL Nieuws", code: "nl", category: "general", id: "rtl-nieuws"},
    {title: "SABQ", code: "sa", category: "general", id: "sabq"},
    {title: "Spiegel Online", code: "de", category: "general", id: "spiegel-online"},
    {title: "Svenska Dagbladet", code: "se", category: "general", id: "svenska-dagbladet"},
    {title: "T3n", code: "de", category: "technology", id: "t3n"},
    {title: "TalkSport", code: "gb", category: "sports", id: "talksport"},
    {title: "TechCrunch", code: "us", category: "technology", id: "techcrunch"},
    {title: "TechCrunch (CN)", code: "zh", category: "technology", id: "techcrunch-cn"},
    {title: "TechRadar", code: "us", category: "technology", id: "techradar"},
    {title: "The American Conservative", code: "us", category: "general", id: "the-american-conservative"},
    {title: "The Globe And Mail", code: "ca", category: "general", id: "the-globe-and-mail"},
    {title: "The Hill", code: "us", category: "general", id: "the-hill"},
    {title: "The Hindu", code: "in", category: "general", id: "the-hindu"},
    {title: "The Huffington Post", code: "us", category: "general", id: "the-huffington-post"},
    {title: "The Irish Times", code: "ie", category: "general", id: "the-irish-times"},
    {title: "The Jerusalem Post", code: "is", category: "general", id: "the-jerusalem-post"},
    {title: "The Lad Bible", code: "gb", category: "entertainment", id: "the-lad-bible"},
    {title: "The New York Times", code: "us", category: "general", id: "the-new-york-times"},
    {title: "The Next Web", code: "us", category: "technology", id: "the-next-web"},
    {title: "The Sport Bible", code: "gb", category: "sports", id: "the-sport-bible"},
    {title: "The Telegraph", code: "gb", category: "general", id: "the-telegraph"},
    {title: "The Times of India", code: "in", category: "general", id: "the-times-of-india"},
    {title: "The Verge", code: "us", category: "technology", id: "the-verge"},
    {title: "The Wall Street Journal", code: "us", category: "business", id: "the-wall-street-journal"},
    {title: "The Washington Post", code: "us", category: "general", id: "the-washington-post"},
    {title: "The Washington Times", code: "us", category: "general", id: "the-washington-times"},
    {title: "Time", code: "us", category: "general", id: "time"},
    {title: "USA Today", code: "us", category: "general", id: "usa-today"},
    {title: "Vice News", code: "us", category: "general", id: "vice-news"},
    {title: "Wired", code: "us", category: "technology", id: "wired"},
    {title: "Wired.de", code: "de", category: "technology", id: "wired-de"},
    {title: "Wirtschafts Woche", code: "de", category: "business", id: "wirtschafts-woche"},
    {title: "Xinhua Net", code: "zh", category: "general", id: "xinhua-net"},
    {title: "Ynet", code: "is", category: "general", id: "ynet"}
  ];
  listClick(event, newValue) {
    this.selectedItem = newValue;  // don't forget to update the model here
    console.log(newValue.id);
    this.router.navigate(["home",{ lang:"", country:"", category:"", source:newValue.id}], {relativeTo: this.route.parent});
  }  
  ngOnInit() {
  }
}