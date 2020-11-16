import { Exibition } from './../exibition/exibition-model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { userAuthService } from '../../userAuthService';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit,OnDestroy {
  public exibitions: Exibition[] =
   [new Exibition(0,"The Altes Museum in Berlin","../../../assets/muzejBerlin.jpg","2020:17:02",'art',20,"The Altes Museum (German for Old Museum) is a museum building on Museum Island in Berlin, Germany. Since restoration work in 2010–11, it houses the Antikensammlung (antiquities collection) of the Berlin State Museums. The museum building was built between 1823 and 1830 by the architect Karl Friedrich Schinkel in the neoclassical style to house the Prussian royal family's art collection. The historic, protected building counts among the most distinguished in neoclassicism and is a high point of Schinkel's career. Until 1845, it was called the Königliches Museum (Royal Museum). Along with the other museums and historic buildings on Museum Island, the Altes Museum was designated a UNESCO World Heritage Site in 1999. The Altes Museum was originally constructed to house all of the city's collections of fine arts, including Old Master paintings, and prints and drawings. However, since 1904, the museum has solely housed the Antikensammlung (Collection of Classical Antiquities). Since 1998, the Collection of Classical Antiquities has displayed its Greek collection, including the treasury, on the ground floor of the Altes Museum. Special exhibitions are displayed on the second floor of the museum. Under General Director Ludwig Justi, the building was the first museum of Museum Island to undergo reconstruction and restoration.", false, 
   ["Aleksandar Ivanović","Jovan petrović","Milos Jovanović"], false, "https://www.smb.museum/museen-einrichtungen/altes-museum/home/"),
   new Exibition(1,"Waterloo memorial museum in Belgium","../../../assets/waterloo.jpg","25.10.2020","military",25,
  "The Memorial of Waterloo 1815 (Mémorial Waterloo 1815 in french) is a Belgian museum complex located on the site of the Waterloo battlefield in Belgium. It includes a museum inaugurated in 2015, the Lion's Mound, the Panorama of the Battle of Waterloo and the Hougoumont farm.\
  The Memorial, the Lion's Mound and the Panorama of the Battle of Waterloo stand on the northern edge of the Waterloo battlefield, along the Route du Lion (Lion's road), west of the chaussée de Charleroi, on the territory of Braine-l'Alleud, in the province of Walloon Brabant.\
  The Hougoumont farm stands to the south-west of the aforementioned complex, at the end of a path that starts from the Panorama rotunda, called the Chemin des Vertes Bornes, which takes further the name Chemin du Goumont\
  The surrounding area is rich in monuments celebrating the battle.",
  false,[], true, "https://www.waterloo1815.be/en/the-site/"),
  new Exibition(2,"Green vault museum in Dresden","../../../assets/drezden.jpg","04.07.2020","art",35,
  "The Green Vault (German: Grünes Gewölbe) is a museum located in Dresden, Germany, which contains the largest treasure collection in Europe. The museum was founded in 1723 by Augustus the Strong of Poland and Saxony, and it features a variety of exhibits in styles from Baroque to Classicism. The Green Vault is named after the formerly malachite green painted column bases and capitals of the initial rooms. It has some claim to be the oldest museum in the world; it is older than the British Museum, opened in 1759, but the Vatican Museums date their foundation to the public display of the newly excavated Laocoön group in 1506. \
  After the bombing of Dresden during World War II, the Grünes Gewölbe was completely restored. Today, its treasures are shown in two exhibitions: The Historic Green Vault (Historisches Grünes Gewölbe) is famous for its splendors of the historic treasure chamber as it existed in 1733, while the New Green Vault (Neues Grünes Gewölbe) focuses the attention on each individual object in neutral rooms.",
  false,["Marko Nikolić","Jovan Jovanović","Stefan Petrović"], true, "https://gruenes-gewoelbe.skd.museum/en/"),
  new Exibition(3,"Museum of Yugoslavia in Belgrade","../../../assets/kucaCveca.jpg","31.12.2020","history",5,
  "The Museum of Yugoslavia is a museum institution that collects, studies and presents various objects related to the history of Yugoslavia . It was founded in 1996 . by the decision of the Government of the Federal Republic of Yugoslavia , by merging the Memorial Center 'Josip Broz Tito' and the Museum of the Revolution into the Museum of the History of Yugoslavia. Until 2003 . was an independent federal organization, and after that it passed into the jurisdiction of the Republic of Serbia . April 2013 . was declared an institution of culture of great importance. March 2017 . changed its name to the Museum of Yugoslavia\
  Today, the museum includes facilities - the House of Flowers , the Old Museum and the Museum '25. May', with a total area of ​​5,252 square meters, as well as a park of 3.2 hectares\
  The Museum of the History of Yugoslavia was founded in 1996 . by a decree of the Government of the Federal Republic of Yugoslavia. ",
  false,["Marko Nikolić","Jovan Jovanović","Stefan Petrović"], true, "https://www.muzej-jugoslavije.org/"),
  new Exibition(4,"National Museum of Pancevo","../../../assets/muzejPancevo.jpg","31.02.2021","history",3,
  "The building of the Magistrate in Pancevo is located on King Peter I Square no. 7, it was built in the period from 1833 until 1838. The building is under state protection as a cultural monument of great importance The building was built according to the plans of the border builder Major Hyman, for the building of the Magistrate - an administrative building with a dominant position on the main town square. It was built as a one-storey representative building, under the influence of classicism, with a base in the shape of an inverted Cyrillic letter P, accentuated by the main facade oriented towards the Square and somewhat lower, later added, side wings. The horizontal division is made by a cordon wreath, which separates the ground floor from the first floor, and the attic wreath, and the main accent of the symmetrically composed street facade is a strongly prominent central projection in the axis of the facade, with portals , pillars supporting the balcony with balustrade anda tympanum in whose niche is a relief with figures of winged nymphs and a clock ",
  false,["Nebojša Petrović","Jovan Jovanović"], true, "http://www.muzejpancevo.rs/en/#etnologija"),
  new Exibition(5,"National Museum of Valjevo","../../../assets/valjevo.jpg","31.02.2021","history",7,
  "The Valjevo National Museum was founded in 1951 . Today, its central building is located in the center of Valjevo , on the banks of the river Kolubara , not far from Tesnjar , the old city bazaar, the new bazaar, Knez Miloseva Street and the Grand Hotel. The museum keeps more than 50,000 different objects classified into four types of collections: archeological, historical, ethnographic and artistic. The museum is in charge of protecting the movable and intangible cultural heritage in the territories of the city of Valjevo and the other five municipalities of the Kolubara district ( Osecina , Mionica , Ljig , Lajkovac and Ub ). The work of the Museum is organized through three services: administrative and technical, service for work with museum collections and service for work with the public and museum communications. The museum also includes its annexes and departments in Valjevo: Muselimov konak and Kula Nenadovića ,Historical memorial complex in Brankovina and Native Museum Department in Osecina.",
  false,["Nebojša Petrović","Jovan Jovanović"], true, "http://museum.org.rs/"),
  new Exibition(6,"The Louvre","../../../assets/luvr.jpg","08.12.2020","art",45,
  "The Louvre, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet). In 2019, the Louvre received 9.6 million visitors, making it the most visited museum in the world. The museum is housed in the Louvre Palace, originally built as the Louvre castle in the late 12th to 13th century under Philip II. Remnants of the fortress are visible in the basement of the museum.",
  false,[], true, "https://www.louvre.fr/en"),
  new Exibition(7,"The Museum of Military History in Vienna","../../../assets/arsenal.jpg","08.12.2020","military",30,
  "The Museum of Military History – Military History Institute (German: Heeresgeschichtliches Museum – Militärhistorisches Institut) in Vienna is the leading museum of the Austrian Armed Forces. It documents the history of Austrian military affairs through a wide range of exhibits comprising, above all, weapons, armours, tanks, aeroplanes, uniforms, flags, paintings, medals and badges of honour, photographs, battleship models, and documents. Although the museum is owned by the Federal Government, it is not affiliated to the Federal museums but is organised as a subordinate agency reporting directly to the Ministry of Defence and Sports. The museum building (Arsenal object number 18) is the centrepiece of Vienna's Arsenal, a huge military complex previously consisting of a total of 72 buildings erected in the wake of the 1848/49 revolution. The Arsenal was the largest building project of the young Kaiser Franz Joseph I in his first years of reign, and served to consolidate his neoabsolutist position of power, as opposed to the revolutionary Vienna of 1848. It was Danish architect Theophil Hansen who designed what was then referred to as the weapons museum. The museum was completed on 8 May 1856, just six years after the beginning of construction (15 April 1850), making it the oldest museum building – planned and executed as such – in Austria. At the time of its construction, the Arsenal was located outside the outer ring of fortifications; in 1850, however, the area was incorporated into Vienna along with the original Favoriten (4th District; as of 1874, 10th District; since 1938, the Arsenal forms part of Vienna's 3rd District).",
  false,[], true, "https://www.hgm.at/"),
  new Exibition(7,"Imperial War Museum in London","https://spectrumphoto.co.uk/wp-content/uploads/2018/10/Poppies-1-1020x765@2x.jpg","08.12.2020","military",30,
  "The museum has occupied the former Bethlem Royal Hospital on Lambeth Road since 1936. The hospital building was designed by the hospital surveyor, James Lewis, from plans submitted by John Gandy and other architects, and construction completed in October 1814. The hospital consisted of a range of buildings 580 feet long with a basement and three storeys, parallel to Lambeth Road, with a central entrance under a portico. The building was substantially altered in 1835 by architect Sydney Smirke. In order to provide more space, he added blocks at either end of the frontage, and galleried wings on either side of the central portion. He also added a small single-storey lodge, still in existence, at the Lambeth Road gate. Later, between 1844–46, the central cupola was replaced with a copper-clad dome in order to expand the chapel beneath. The building also featured a theatre in a building to the rear of the site. n 1989 the museum acquired the All Saints Annexe, a former hospital building in Austral Street off West Square. The 1867 building, which backs onto Geraldine Mary Harmsworth Park, was originally an orphanage opened by local philanthropist Charlotte Sharman, then later used as a hospital. It houses the museum's photographic, film and sound archives, and offices.",
  false,[], true, "https://www.iwm.org.uk/")
  ];
  userRecommendation = [];
  count = 0;
  checkReverse  = () => {this.count++;}
  constructor(private userAuth : userAuthService) { }
  subscription : Subscription;
  isLoggedIn;
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    this.subscription = this.userAuth.loggedIn.subscribe(data =>{
      this.isLoggedIn = data;
    })
    this.userRecommendation = this.exibitions.filter( exibition =>{
      return exibition.theme == user.pref.toLowerCase(); 
    })
  }
  ngOnDestroy(){ 
    this.subscription.unsubscribe();
  }

}
