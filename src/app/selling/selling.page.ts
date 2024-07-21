import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FolderPage } from '../folder/folder.page';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.page.html',
  styleUrls: ['./selling.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FolderPage]
})
export class SellingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tchuco() {

    const velotrol:any = document.getElementById('velotrol')
    const tchuco:any = document.getElementById('tchuco')
    const batman:any = document.getElementById('batman')
    const hulk:any = document.getElementById('hulk')

    velotrol.src = "/assets/images/tchuco.jpeg"

    tchuco.style.boxShadow = "1px 1px 2px 2px black"
    batman.style.boxShadow = "1px 1px 2px 2px transparent"
    hulk.style.boxShadow = "1px 1px 2px 2px transparent"

  }


  batman() {

    const velotrol:any = document.getElementById('velotrol')
    const tchuco:any = document.getElementById('tchuco')
    const batman:any = document.getElementById('batman')
    const hulk:any = document.getElementById('hulk')

    velotrol.src = "/assets/images/batman.jpg"

    tchuco.style.boxShadow = "1px 1px 2px 2px transparent"
    batman.style.boxShadow = "1px 1px 2px 2px black"
    hulk.style.boxShadow = "1px 1px 2px 2px transparent"

  }

  hulk() {

    const velotrol:any = document.getElementById('velotrol')
    const tchuco:any = document.getElementById('tchuco')
    const batman:any = document.getElementById('batman')
    const hulk:any = document.getElementById('hulk')

    velotrol.src = "/assets/images/hulk.png"

    tchuco.style.boxShadow = "1px 1px 2px 2px transparent"
    batman.style.boxShadow = "1px 1px 2px 2px transparent"
    hulk.style.boxShadow = "1px 1px 2px 2px black"


  }

  add() {

    const giftItem:any = document.getElementById('giftItem')
    const cartStyle:any = document.getElementById('cartStyle')

        giftItem.style.visibility = "visible"
        cartStyle.style.transform = "rotate(15deg)"
    setTimeout(() => {

      giftItem.style.visibility = "hidden"
      cartStyle.style.transform = "rotate(0deg)"
    }, 4000);


  }

}
