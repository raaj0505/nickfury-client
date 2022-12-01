import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.scss']
})
export class SystemsComponent implements OnInit{
  cards: any[] = [];

  ngOnInit(): void {

    this.loadSystems();
  }

  loadSystems() {
    this.cards = [{
      "id": 1,
      "name": "Kanlam",
      "isUp": true,
      "healthCheckUrl": "http://fastcompany.com/non.jpg?nullam=dolor&orci=vel&pede=est&venenatis=donec&non=odio&sodales=justo&sed=sollicitudin&tincidunt=ut&eu=suscipit&felis=a&fusce=feugiat&posuere=et&felis=eros&sed=vestibulum&lacus=ac&morbi=est&sem=lacinia&mauris=nisi&laoreet=venenatis&ut=tristique&rhoncus=fusce&aliquet=congue&pulvinar=diam&sed=id&nisl=ornare&nunc=imperdiet&rhoncus=sapien&dui=urna&vel=pretium&sem=nisl&sed=ut&sagittis=volutpat&nam=sapien&congue=arcu&risus=sed&semper=augue&porta=aliquam&volutpat=erat&quam=volutpat&pede=in&lobortis=congue&ligula=etiam&sit=justo&amet=etiam&eleifend=pretium&pede=iaculis&libero=justo&quis=in&orci=hac&nullam=habitasse&molestie=platea&nibh=dictumst&in=etiam&lectus=faucibus&pellentesque=cursus&at=urna&nulla=ut&suspendisse=tellus&potenti=nulla&cras=ut&in=erat&purus=id&eu=mauris&magna=vulputate&vulputate=elementum&luctus=nullam&cum=varius&sociis=nulla&natoque=facilisi&penatibus=cras&et=non&magnis=velit&dis=nec&parturient=nisi&montes=vulputate&nascetur=nonummy&ridiculus=maecenas&mus=tincidunt&vivamus=lacus&vestibulum=at&sagittis=velit&sapien=vivamus",
      "lastCheckedAt": "10/3/2022"
    }, {
      "id": 2,
      "name": "Fixflex",
      "isUp": true,
      "healthCheckUrl": "http://nhs.uk/non.png?nunc=odio&nisl=odio&duis=elementum&bibendum=eu&felis=interdum&sed=eu&interdum=tincidunt&venenatis=in&turpis=leo&enim=maecenas&blandit=pulvinar&mi=lobortis&in=est&porttitor=phasellus&pede=sit&justo=amet&eu=erat&massa=nulla&donec=tempus&dapibus=vivamus&duis=in&at=felis&velit=eu&eu=sapien&est=cursus&congue=vestibulum&elementum=proin&in=eu&hac=mi&habitasse=nulla&platea=ac&dictumst=enim&morbi=in&vestibulum=tempor&velit=turpis&id=nec&pretium=euismod&iaculis=scelerisque&diam=quam&erat=turpis&fermentum=adipiscing&justo=lorem&nec=vitae&condimentum=mattis&neque=nibh&sapien=ligula&placerat=nec&ante=sem&nulla=duis&justo=aliquam&aliquam=convallis&quis=nunc&turpis=proin&eget=at&elit=turpis&sodales=a&scelerisque=pede&mauris=posuere&sit=nonummy&amet=integer&eros=non&suspendisse=velit&accumsan=donec&tortor=diam&quis=neque&turpis=vestibulum&sed=eget&ante=vulputate&vivamus=ut&tortor=ultrices&duis=vel&mattis=augue&egestas=vestibulum&metus=ante",
      "lastCheckedAt": "3/2/2022"
    }, {
      "id": 3,
      "name": "Ronstring",
      "isUp": true,
      "healthCheckUrl": "https://google.cn/sapien/sapien/non.aspx?proin=in&eu=hac&mi=habitasse&nulla=platea&ac=dictumst&enim=maecenas&in=ut&tempor=massa&turpis=quis&nec=augue&euismod=luctus&scelerisque=tincidunt&quam=nulla&turpis=mollis&adipiscing=molestie&lorem=lorem&vitae=quisque&mattis=ut&nibh=erat&ligula=curabitur&nec=gravida&sem=nisi&duis=at&aliquam=nibh&convallis=in&nunc=hac&proin=habitasse&at=platea",
      "lastCheckedAt": "7/4/2022"
    }, {
      "id": 4,
      "name": "Latlux",
      "isUp": true,
      "healthCheckUrl": "https://google.com.hk/justo/aliquam/quis.js?magna=erat&bibendum=fermentum&imperdiet=justo&nullam=nec&orci=condimentum&pede=neque&venenatis=sapien&non=placerat&sodales=ante&sed=nulla&tincidunt=justo&eu=aliquam&felis=quis&fusce=turpis&posuere=eget&felis=elit&sed=sodales&lacus=scelerisque&morbi=mauris&sem=sit&mauris=amet&laoreet=eros&ut=suspendisse&rhoncus=accumsan&aliquet=tortor&pulvinar=quis&sed=turpis&nisl=sed&nunc=ante&rhoncus=vivamus&dui=tortor&vel=duis&sem=mattis&sed=egestas&sagittis=metus&nam=aenean&congue=fermentum&risus=donec&semper=ut&porta=mauris&volutpat=eget&quam=massa&pede=tempor&lobortis=convallis&ligula=nulla&sit=neque&amet=libero&eleifend=convallis&pede=eget&libero=eleifend&quis=luctus&orci=ultricies&nullam=eu&molestie=nibh&nibh=quisque&in=id&lectus=justo&pellentesque=sit&at=amet&nulla=sapien&suspendisse=dignissim&potenti=vestibulum&cras=vestibulum&in=ante&purus=ipsum&eu=primis&magna=in&vulputate=faucibus&luctus=orci&cum=luctus&sociis=et&natoque=ultrices&penatibus=posuere&et=cubilia&magnis=curae&dis=nulla&parturient=dapibus&montes=dolor&nascetur=vel&ridiculus=est&mus=donec&vivamus=odio&vestibulum=justo&sagittis=sollicitudin&sapien=ut&cum=suscipit&sociis=a&natoque=feugiat&penatibus=et&et=eros&magnis=vestibulum&dis=ac&parturient=est",
      "lastCheckedAt": "10/28/2022"
    }, {
      "id": 5,
      "name": "Andalax",
      "isUp": true,
      "healthCheckUrl": "http://dell.com/non.html?nulla=elit&integer=proin&pede=interdum&justo=mauris&lacinia=non&eget=ligula&tincidunt=pellentesque&eget=ultrices&tempus=phasellus&vel=id&pede=sapien&morbi=in&porttitor=sapien&lorem=iaculis&id=congue&ligula=vivamus&suspendisse=metus&ornare=arcu&consequat=adipiscing",
      "lastCheckedAt": "10/31/2022"
    }, {
      "id": 6,
      "name": "Domainer",
      "isUp": true,
      "healthCheckUrl": "https://twitpic.com/amet/consectetuer/adipiscing/elit/proin/interdum.json?pellentesque=ultrices&eget=aliquet&nunc=maecenas&donec=leo&quis=odio&orci=condimentum&eget=id&orci=luctus&vehicula=nec&condimentum=molestie&curabitur=sed&in=justo&libero=pellentesque&ut=viverra&massa=pede&volutpat=ac&convallis=diam&morbi=cras&odio=pellentesque&odio=volutpat&elementum=dui&eu=maecenas&interdum=tristique&eu=est&tincidunt=et&in=tempus&leo=semper&maecenas=est&pulvinar=quam&lobortis=pharetra&est=magna&phasellus=ac&sit=consequat&amet=metus&erat=sapien&nulla=ut&tempus=nunc",
      "lastCheckedAt": "1/29/2022"
    }, {
      "id": 7,
      "name": "Stronghold",
      "isUp": false,
      "healthCheckUrl": "https://wikia.com/id/mauris/vulputate/elementum/nullam.aspx?sapien=commodo&cum=vulputate&sociis=justo&natoque=in&penatibus=blandit&et=ultrices&magnis=enim&dis=lorem&parturient=ipsum&montes=dolor&nascetur=sit&ridiculus=amet&mus=consectetuer&etiam=adipiscing&vel=elit&augue=proin&vestibulum=interdum&rutrum=mauris&rutrum=non&neque=ligula&aenean=pellentesque&auctor=ultrices&gravida=phasellus&sem=id&praesent=sapien&id=in&massa=sapien&id=iaculis&nisl=congue&venenatis=vivamus",
      "lastCheckedAt": "7/19/2022"
    }, {
      "id": 8,
      "name": "Tin",
      "isUp": false,
      "healthCheckUrl": "http://theatlantic.com/suscipit/ligula/in/lacus.jsp?consequat=tristique&in=fusce&consequat=congue&ut=diam&nulla=id&sed=ornare&accumsan=imperdiet&felis=sapien&ut=urna&at=pretium&dolor=nisl&quis=ut&odio=volutpat&consequat=sapien&varius=arcu&integer=sed&ac=augue&leo=aliquam&pellentesque=erat&ultrices=volutpat&mattis=in&odio=congue&donec=etiam&vitae=justo&nisi=etiam&nam=pretium&ultrices=iaculis&libero=justo&non=in&mattis=hac&pulvinar=habitasse&nulla=platea&pede=dictumst&ullamcorper=etiam&augue=faucibus&a=cursus&suscipit=urna&nulla=ut&elit=tellus&ac=nulla&nulla=ut&sed=erat&vel=id&enim=mauris&sit=vulputate&amet=elementum&nunc=nullam&viverra=varius&dapibus=nulla&nulla=facilisi&suscipit=cras&ligula=non&in=velit&lacus=nec&curabitur=nisi&at=vulputate&ipsum=nonummy&ac=maecenas&tellus=tincidunt&semper=lacus&interdum=at&mauris=velit&ullamcorper=vivamus&purus=vel&sit=nulla&amet=eget&nulla=eros&quisque=elementum&arcu=pellentesque",
      "lastCheckedAt": "7/10/2022"
    }, {
      "id": 9,
      "name": "Viva",
      "isUp": true,
      "healthCheckUrl": "http://photobucket.com/massa.png?quis=in&justo=felis&maecenas=eu&rhoncus=sapien&aliquam=cursus&lacus=vestibulum&morbi=proin&quis=eu&tortor=mi&id=nulla&nulla=ac&ultrices=enim&aliquet=in&maecenas=tempor&leo=turpis&odio=nec&condimentum=euismod&id=scelerisque&luctus=quam",
      "lastCheckedAt": "2/25/2022"
    }, {
      "id": 10,
      "name": "Voyatouch",
      "isUp": true,
      "healthCheckUrl": "http://addthis.com/leo/pellentesque/ultrices/mattis/odio.xml?sapien=odio&cursus=curabitur&vestibulum=convallis&proin=duis&eu=consequat&mi=dui&nulla=nec&ac=nisi&enim=volutpat&in=eleifend&tempor=donec&turpis=ut&nec=dolor&euismod=morbi&scelerisque=vel&quam=lectus&turpis=in&adipiscing=quam&lorem=fringilla&vitae=rhoncus&mattis=mauris&nibh=enim&ligula=leo&nec=rhoncus&sem=sed&duis=vestibulum&aliquam=sit&convallis=amet&nunc=cursus&proin=id&at=turpis&turpis=integer&a=aliquet&pede=massa&posuere=id&nonummy=lobortis&integer=convallis&non=tortor&velit=risus&donec=dapibus&diam=augue&neque=vel&vestibulum=accumsan&eget=tellus&vulputate=nisi&ut=eu&ultrices=orci&vel=mauris&augue=lacinia",
      "lastCheckedAt": "1/24/2022"
    }]
  }

}
