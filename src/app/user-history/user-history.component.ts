import { Component, OnInit } from '@angular/core';
import { Exibition } from '../exibitions/exibition/exibition-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {
  
  constructor(private router : Router) { }
  history: Exibition[] =
  [new Exibition(0,"The Altes Museum in Berlin","../../../assets/muzejBerlin.jpg","2020:17:02",'art',20,"The Altes Museum (German for Old Museum) is a museum building on Museum Island in Berlin, Germany. Since restoration work in 2010–11, it houses the Antikensammlung (antiquities collection) of the Berlin State Museums. The museum building was built between 1823 and 1830 by the architect Karl Friedrich Schinkel in the neoclassical style to house the Prussian royal family's art collection. The historic, protected building counts among the most distinguished in neoclassicism and is a high point of Schinkel's career. Until 1845, it was called the Königliches Museum (Royal Museum). Along with the other museums and historic buildings on Museum Island, the Altes Museum was designated a UNESCO World Heritage Site in 1999. The Altes Museum was originally constructed to house all of the city's collections of fine arts, including Old Master paintings, and prints and drawings. However, since 1904, the museum has solely housed the Antikensammlung (Collection of Classical Antiquities). Since 1998, the Collection of Classical Antiquities has displayed its Greek collection, including the treasury, on the ground floor of the Altes Museum. Special exhibitions are displayed on the second floor of the museum. Under General Director Ludwig Justi, the building was the first museum of Museum Island to undergo reconstruction and restoration.", false, 
  ["Aleksandar Ivanović","Jovan petrović","Milos Jovanović"], false, "https://www.smb.museum/museen-einrichtungen/altes-museum/home/","canceled"),
  new Exibition(1,"Museum of Science and Technology in Belgrade","https://media-exp1.licdn.com/dms/image/C561BAQF-snKSntY5Hw/company-background_10000/0?e=2159024400&v=beta&t=Fw_uXO_ndvqeI47p4G2N9RPipAnIDhpcttyZh8G_3tw","25.10.2020","military",25,
 "The Memorial of Waterloo 1815 (Mémorial Waterloo 1815 in french) is a Belgian museum complex located on the site of the Waterloo battlefield in Belgium. It includes a museum inaugurated in 2015, the Lion's Mound, the Panorama of the Battle of Waterloo and the Hougoumont farm.\
 The Memorial, the Lion's Mound and the Panorama of the Battle of Waterloo stand on the northern edge of the Waterloo battlefield, along the Route du Lion (Lion's road), west of the chaussée de Charleroi, on the territory of Braine-l'Alleud, in the province of Walloon Brabant.\
 The Hougoumont farm stands to the south-west of the aforementioned complex, at the end of a path that starts from the Panorama rotunda, called the Chemin des Vertes Bornes, which takes further the name Chemin du Goumont\
 The surrounding area is rich in monuments celebrating the battle.",
 false,[], true, "https://www.waterloo1815.be/en/the-site/","Done")
  ];
  user;
  sent;
  input;
  text;
  reviewed = false;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(!this.user){
      this.router.navigate(['/']);
    }
    this.sent = false;
    this.history.push(JSON.parse(localStorage.getItem('history')));
    
  }

  sendRating(){
    
    this.input = document.getElementById('rating');
    this.text = this.input.value;
    if(this.text != 1 && this.text != 2 && this.text != 3 && this.text != 4 && this.text != 5){
      alert("Please leave a rating between 1 and 5!");
    }
    else{
    this.sent = true;
    this.reviewed = true;
    }

  }

}
