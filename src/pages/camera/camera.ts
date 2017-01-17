import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Photo} from './../photo';
import{Camera} from 'ionic-native';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello From Camera Page');
  }

  photos: Photo[] = [new Photo('https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAOtAAAAJGM3ZDBhODkxLTg1MTMtNGQ1Zi05NjVhLTUzNDkzOTllZTYyYg.jpg', 7), new Photo('https://d13yacurqjgara.cloudfront.net/users/729829/screenshots/3177853/galshir-babushka.gif', 8)]

takePhoto(){
  Camera.getPicture({
    destinationType: Camera.DestinationType.DATA_URL,
    targetHeight: 500,
    targetWidth: 500,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }).then((imageData)=>{
  this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));

// var currentName = imageData.replace(/^.*[\\\/]/, '');
 
//   //Create a new name for the photo
//   var d = new Date(),
//       n = d.getTime(),
//       newFileName = n + ".jpg";
 
//   //Move the file to permanent storage
//   $cordovaFile.moveFile(cordova.file.tempDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
 
//     //success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
//     //createPhoto(success.nativeURL);
 
//   },


},(err)=>{
  console.log(err);
  });
}
removePhoto(photo){
  this.photos.splice(this.photos.indexOf(photo),1)
}

likePhoto(photo){
  photo.likes++;
}

getGalleryPicture(){
  Camera.getPicture({
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
    targetHeight: 500,
    targetWidth: 500,
    correctOrientation: true    
  }).then((imageData)=>{
  this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));
},
(err)=>{
  console.log(err);
  });
}
}
