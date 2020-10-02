import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  limit = 25;
  total: string = ''
  channels: Array<any> = []
  dataChannels: Array<any> = []
  
  constructor(private _data : DataService) {
    this._data.getChannelsData().subscribe(data=>{
      if(data){
        this.total = data.total
        this.dataChannels = data.channelDetails
        this.channels = this.dataChannels.slice(0, this.limit);
      }
      
    })
   }

  ngOnInit(): void {
  }

  addChannels() {
    this.limit += 15;
    this.channels = this.dataChannels.slice(0, this.limit);
  }

  check(url){
    console.log(url)
  }

}
