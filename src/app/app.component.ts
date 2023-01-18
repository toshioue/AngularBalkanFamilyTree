import { Component } from '@angular/core';
import FamilyTree from "src/assets/balkanapp/familytree";
import * as jsonData from '../assets/tree/FamilyTree.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  data: any = jsonData;

  constructor() { 
    FamilyTree.templates['tommy']['field_11'] =
    '<text class="field_11" style="font-size: 14px;" fill="#ffffff" hidden x="125" y="50" text-anchor="bottom">{val}</text>';
  }

  callNow(): any{
    alert('the tree has been saved');
  }

  ngOnInit() {
    const tree = document.getElementById('tree');
    if (tree) {
      var family = new FamilyTree(tree, {
      //   state: {
      //     name: 'StateForMyTree',
      //     readFromLocalStorage: true,
      //     writeToLocalStorage: true,
      // },
        levelSeparation: 150,
        miniMap: true,
        nodeTreeMenu: true,
        menu: {
          importXML: {
            text: "Import JSON",
            icon: FamilyTree.icon.xml(24, 24, '#7A7A7A'),
            onClick: function () { family.importJSON(); }
          },
          call: {
            text: 'Save Tree',
            icon: FamilyTree.icon.xml(24, 24, '#7A7A7A'),
            onClick: this.callNow
          },
          json: { text: "Export JSON" }
        },
        nodeBinding: {
          field_0: "name",
          img_0: "img",
          field_11: "bio"
        },
      });

      // family.load([
      //   { id: 1, pids: [2], name: "Amber McKenzie", gender: "female", img: "https://cdn.balkan.app/shared/2.jpg", bio: "Hello Wrld" },
      //   { id: 2, pids: [1], name: "Ava Field", gender: "male", img: "https://cdn.balkan.app/shared/m30/5.jpg", bio: "TEST TEST" },
      //   { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/2.jpg", bio: "TEST TEST" },
      //   { id: 4, mid: 1, fid: 2, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg", bio: "TEST TEST" },
      //   { id: 5, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg", bio: "TEST TEST" }
      // ]);
      family.load(this.data);
    
      family.onUpdateNode((args) => {
        console.log(args);
        //return false;
      });
    }
  }





}

