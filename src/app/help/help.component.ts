import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  videoItems = [
    {
      name: 'How to open box',
      src: 'http://192.168.2.105:8080/videos/How_to_open_box.webm',
      type: 'video/webm',
      icon: 'inventory_2'
    },
    {
      name: 'How to disable non-conformity',
      src: 'http://127.0.0.1:8080/videos/How_to_disable_non-conformity.mp4',
      type: 'video/mp4',
      icon: 'settings_applications'
    },
    {
      name: 'How to add new non-conformity',
      src: 'http://192.168.2.105:8080/videos/How_to_add_non-conformity.webm',
      type: 'video/webm',
      icon: 'bug_report'
    },
    {
      name: 'How to change the box temperature',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4',
      icon: 'local_shipping'
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data;

  constructor() { }

  ngOnInit(): void { }

  videoPlayerInit(data) {
    this.data = data;   
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }
}
