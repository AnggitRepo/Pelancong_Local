webpackJsonp([6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        this.newcreds = {
            username: '',
            password: '',
            telp: '',
            email: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (user) {
        var _this = this;
        this.authservice.adduser(user).then(function (data) {
            if (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'User Created',
                    buttons: ['ok']
                });
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input [(ngModel)] = "newcreds.username" type="text" ></ion-input>\n		</ion-item> \n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input [(ngModel)] = "newcreds.password" type="password" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-input [(ngModel)] = "newcreds.telp" type="number" placeholder="Telepon Number" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Email</ion-label>\n			<ion-input [(ngModel)] = "newcreds.email" type="email"></ion-input>\n		</ion-item>\n	</ion-list>\n	<ion-grid>\n		<div><button ion-button full (click)="register(newcreds)">Simpan</button></div>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapsPage = /** @class */ (function () {
    function MapsPage(http, geolocation, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var aaa = resp.coords.latitude, bbb = resp.coords.longitude;
            _this.latitude = aaa;
            _this.longitude = bbb;
        });
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapsPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: -7.782827,
                    lng: 110.367085
                },
                zoom: 14,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://192.168.43.52:8080/api/gallery', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var hasil = data.records;
            _this.initMap(hasil);
        });
    };
    MapsPage.prototype.onButtonClick = function () {
        this.map.moveCamera({
            target: { lat: this.latitude, lng: this.longitude },
            zoom: 14,
            tilt: 30
        }).then(function () {
            alert("Camera changed");
        });
    };
    MapsPage.prototype.initMap = function (hasil) {
        for (var i = 0, length = hasil.length; i < length; i++) {
            var isi = hasil[i];
            console.log("data isi" + isi.nama);
            this.map.addMarker({
                title: isi.nama,
                animation: 'DROP',
                position: {
                    lat: isi.latitude,
                    lng: isi.longitude
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert(isi.keterangan);
                });
            });
        }
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\maps\maps.html"*/'<!--\n  Generated template for the MapsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>maps</ion-title>\n  	<ion-buttons end>\n	    <button ion-button icon-only (click)="onButtonClick()"> \n	      	<ion-icon name=\'locate\' style="font-size: 2rem; color: blue; ">MyLocation</ion-icon>\n	    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div  id="map_canvas"  style=" height: 100%"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(http, geolocation, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var aaa = resp.coords.latitude, bbb = resp.coords.longitude;
            _this.latitude = aaa;
            _this.longitude = bbb;
        });
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: -7.782827,
                    lng: 110.367085
                },
                zoom: 14,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://192.168.43.52:8080/api/gallery', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var hasil = data.records;
            _this.initMap(hasil);
        });
    };
    MapPage.prototype.onButtonClick = function () {
        this.map.moveCamera({
            target: { lat: this.latitude, lng: this.longitude },
            zoom: 14,
            tilt: 30
        }).then(function () {
            alert("Camera changed");
        });
    };
    MapPage.prototype.initMap = function (hasil) {
        for (var i = 0, length = hasil.length; i < length; i++) {
            var isi = hasil[i];
            console.log("data isi" + isi.nama);
            this.map.addMarker({
                title: isi.nama,
                animation: 'DROP',
                position: {
                    lat: isi.latitude,
                    lng: isi.longitude
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert(isi.keterangan);
                });
            });
        }
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>MAP</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onButtonClick()"> \n        <ion-icon name=\'locate\' style="font-size: 2rem; color: blue; ">MyLocation</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<div  id="map_canvas"  style=" height: 100%"></div>\n</ion-content>\n '/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/inputdata/inputdata.module": [
		290,
		5
	],
	"../pages/login/login.module": [
		291,
		4
	],
	"../pages/map/map.module": [
		292,
		3
	],
	"../pages/maps/maps.module": [
		294,
		2
	],
	"../pages/menu/menu.module": [
		293,
		1
	],
	"../pages/register/register.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageProvider = /** @class */ (function () {
    function ImageProvider(http, _CAMERA) {
        this.http = http;
        this._CAMERA = _CAMERA;
    }
    ImageProvider.prototype.takePhotograph = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._CAMERA.getPicture({
                destinationType: _this._CAMERA.DestinationType.DATA_URL,
                targetWidth: 640,
                targetHeight: 480
            })
                .then(function (data) {
                _this.cameraImage = "data:image/jpeg;base64," + data;
                resolve(_this.cameraImage);
            });
        });
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TampildataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputdata_inputdata__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TampildataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TampildataPage = /** @class */ (function () {
    function TampildataPage(navCtrl, _TOAST, _HTTP) {
        this.navCtrl = navCtrl;
        this._TOAST = _TOAST;
        this._HTTP = _HTTP;
        this._HOST = "http://192.168.43.52:8080/";
    }
    TampildataPage.prototype.ionViewDidEnter = function () {
        this.retrieve();
    };
    TampildataPage.prototype.deleteRecord = function (item) {
        var _this = this;
        var recordID = item._id, url = this._HOST + "api/gallery/" + recordID;
        this._HTTP
            .delete(url)
            .subscribe(function (data) {
            _this.retrieve();
            _this.displayNotification(data.records.nama + ' was successfully deleted');
        }, function (error) {
            console.dir(error);
        });
    };
    TampildataPage.prototype.retrieve = function () {
        var _this = this;
        this._HTTP
            .get(this._HOST + "api/gallery")
            .subscribe(function (data) {
            _this.items = data.records;
        }, function (error) {
            console.dir(error);
        });
    };
    TampildataPage.prototype.suka = function (item) {
        var id = item._id, like = item.like, headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), 
        //options       : any       = { nama : nama, kategori : kategori, keterangan : keterangan, latitude : latitude, longitude : longitude, gambar : gambar, displayed: displayed },
        options = { like: like }, url = this._HOST;
        this._HTTP
            .put(url + 'api/like/' + id, options, headers)
            .subscribe(function (data) {
            console.log('Berhasil');
        }, function (error) {
            console.dir(error);
        });
    };
    TampildataPage.prototype.tidak = function (item) {
        var id = item._id, dislike = item.dislike, headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), 
        //options       : any       = { nama : nama, kategori : kategori, keterangan : keterangan, latitude : latitude, longitude : longitude, gambar : gambar, displayed: displayed },
        options = { dislike: dislike }, url = this._HOST;
        this._HTTP
            .put(url + 'api/dislike/' + id, options, headers)
            .subscribe(function (data) {
            console.log('Berhasil');
        }, function (error) {
            console.dir(error);
        });
    };
    TampildataPage.prototype.updateRecord = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inputdata_inputdata__["a" /* InputdataPage */], { record: item });
    };
    TampildataPage.prototype.displayNotification = function (message) {
        var toast = this._TOAST.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    TampildataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tampildata',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\tampildata\tampildata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Gallery\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" social-cards tutorial-page">\n  <ion-item *ngFor="let item of items">\n    <ion-card>\n      <div style="position: relative">\n        <ion-slides pager>\n        <ion-slide>\n          <img src="{{item.gambar}}" class="slide-image">\n        </ion-slide>\n        <ion-slide>\n          <img src="{{item.gambar2}}" class="slide-image">\n        </ion-slide>\n      </ion-slides>\n        <ion-fab right top>\n          <button ion-fab mini class="fab-map">\n            <ion-icon name="more"></ion-icon>\n          </button>\n          <ion-fab-list>\n          <button ion-fab (click)="deleteRecord(item)"><ion-icon name="trash"></ion-icon></button>\n          <button ion-fab (click)="updateRecord(item)"><ion-icon name="create"></ion-icon></button>\n        </ion-fab-list>\n        </ion-fab>\n      </div>\n      <ion-card-content text-wrap>\n        <ion-card-title style="font-weight: bold; text-align: center;">\n          {{item.nama}}\n        </ion-card-title>\n        <p>{{item.keterangan}}</p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start (click)="suka(item)">\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n            {{item.like}}\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start (click)="tidak(item)">\n            <ion-icon name=\'thumbs-down\'></ion-icon>\n            {{item.dislike}}\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <ion-note>\n            {{item.date | date: "shortTime"}}\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\tampildata\tampildata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TampildataPage);
    return TampildataPage;
}());

//# sourceMappingURL=tampildata.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _HTTP) {
        this.navCtrl = navCtrl;
        this._HTTP = _HTTP;
        this._HOST = "http://192.168.43.52:8080/";
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.retrieve();
    };
    HomePage.prototype.retrieve = function () {
        var _this = this;
        this._HTTP
            .get(this._HOST + "api/gallery")
            .subscribe(function (data) {
            _this.items = data.records;
        }, function (error) {
            console.dir(error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class=" social-cards tutorial-page">\n  <ion-item *ngFor="let item of items">\n    <ion-card> \n      <div style="position: relative">\n        <ion-slides pager>\n        <ion-slide>\n          <img src="{{item.gambar}}" class="slide-image">\n        </ion-slide>\n        <ion-slide>\n          <img src="{{item.gambar2}}" class="slide-image">\n        </ion-slide>\n      </ion-slides>\n      </div>\n      <ion-card-content text-wrap>\n        <ion-card-title style="font-weight: bold; text-align: center;">\n          {{item.nama}}\n        </ion-card-title>\n        <p>{{item.keterangan}}</p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start>\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n            {{item.like}}\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start>\n            <ion-icon name=\'thumbs-down\'></ion-icon>\n            {{item.dislike}}\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <ion-note>\n            {{item.date | date: "shortTime"}}\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-item>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inputdata_inputdata__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tampildata_tampildata__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_authservice_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_image_image__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inputdata_inputdata__["a" /* InputdataPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tampildata_tampildata__["a" /* TampildataPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/inputdata/inputdata.module#InputdataPageModule', name: 'inputdata', segment: 'inputdata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inputdata_inputdata__["a" /* InputdataPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tampildata_tampildata__["a" /* TampildataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_authservice_authservice__["a" /* AuthserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_image_image__["a" /* ImageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'MAPS', component: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], icon: 'map' },
            { title: 'SIGIN', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'unlock' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header >\n    <ion-toolbar  color="danger">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <ion-list >\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    \n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authservice = authservice;
        this.usercreds = {
            username: '',
            password: ''
        };
        this.menuCtrl.enable(true, 'myMenu');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        this.authservice.authenticate(user).then(function (data) {
            if (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            }
        });
    };
    LoginPage.prototype.menu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>LOGIN</ion-title>\n	</ion-navbar>\n</ion-header>  \n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input [(ngModel)] = "usercreds.username" type="text"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input [(ngModel)] = "usercreds.password" type="password"></ion-input>\n		</ion-item>\n	</ion-list>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<div><button ion-button icon-left full (click)="login(usercreds)"><ion-icon name="unlock"></ion-icon>Login</button></div>\n			</ion-col>\n			<ion-col>\n				<div><button ion-button icon-left full (click)="signup()"><ion-icon name="person-add"></ion-icon>Register</button></div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authservice_authservice__["a" /* AuthserviceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthserviceProvider = /** @class */ (function () {
    function AuthserviceProvider(http) {
        this.http = http;
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
    }
    AuthserviceProvider.prototype.storeUserCredentials = function (token) {
        window.localStorage.setItem('anggit', token);
        this.useCredentials(token);
    };
    AuthserviceProvider.prototype.useCredentials = function (token) {
        this.isLoggedin = true;
        this.AuthToken = token;
    };
    AuthserviceProvider.prototype.loadUserCredentials = function () {
        var token = window.localStorage.getItem('anggit');
        this.useCredentials(token);
    };
    AuthserviceProvider.prototype.destroyUserCredentials = function () {
        this.isLoggedin = false;
        this.AuthToken = null;
        window.localStorage.clear();
    };
    AuthserviceProvider.prototype.authenticate = function (user) {
        var _this = this;
        var creds = "username=" + user.username + "&password=" + user.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://192.168.43.52:8080/api/authenticate', creds, { headers: headers }).subscribe(function (data) {
                if (data.json().success) {
                    _this.storeUserCredentials(data.json().token);
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthserviceProvider.prototype.adduser = function (user) {
        var _this = this;
        var creds = "username=" + user.username + "&password=" + user.password + "&telp=" + user.telp + "&email=" + user.email;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        console.log('ini authnya::::' + creds);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://192.168.43.52:8080/api/signup', creds, { headers: headers }).subscribe(function (data) {
                if (data.json().success) {
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    };
    AuthserviceProvider.prototype.getinfo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.loadUserCredentials();
            console.log(_this.AuthToken);
            headers.append('Authorization', 'Bearer ' + _this.AuthToken);
            _this.http.get('http://192.168.43.52:8080/api/memberinfo', { headers: headers }).subscribe(function (data) {
                if (data.json().success)
                    resolve(data.json());
                else
                    resolve(false);
            });
        });
    };
    AuthserviceProvider.prototype.logout = function () {
        this.destroyUserCredentials();
    };
    AuthserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthserviceProvider);
    return AuthserviceProvider;
}());

//# sourceMappingURL=authservice.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_image__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InputdataPage = /** @class */ (function () {
    function InputdataPage(navCtrl, navParams, _FB, _HTTP, geolocation, _TOAST, _IMAGE) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this._HTTP = _HTTP;
        this.geolocation = geolocation;
        this._TOAST = _TOAST;
        this._IMAGE = _IMAGE;
        this._HOST = "http://192.168.43.52:8080/api/gallery";
        this.form = this._FB.group({
            'nama': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'kategori': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'gambar': [''],
            'gambar2': [''],
            'keterangan': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'displayed': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            var aaa = resp.coords.latitude, bbb = resp.coords.longitude;
            _this.latitude = aaa;
            _this.longitude = bbb;
        });
    }
    InputdataPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get("record")) {
            this._ID = this.navParams.data.record._id;
            this.nama = this.navParams.data.record.nama;
            this.kategori = this.navParams.data.record.kategori;
            this.keterangan = this.navParams.data.record.keterangan;
            this.gambar = this.navParams.data.record.gambar;
            this.gambar2 = this.navParams.data.record.gambar2;
            this.displayed = this.navParams.data.record.displayed;
            this.pageTitle = "Update";
        }
        else {
            this.pageTitle = "Create";
        }
    };
    InputdataPage.prototype.manageGallery = function () {
        var _this = this;
        var nama = this.form.controls['nama'].value, kategori = this.form.controls['kategori'].value, keterangan = this.form.controls['keterangan'].value, gambar = this.form.controls['gambar'].value, gambar2 = this.form.controls['gambar2'].value, displayed = this.form.controls['displayed'].value, headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { nama: nama, kategori: kategori, keterangan: keterangan,
            latitude: this.latitude,
            longitude: this.longitude, gambar: gambar, gambar2: gambar2, displayed: displayed }, url = this._HOST;
        if (this.navParams.get("record")) {
            this._HTTP
                .put(url + '/' + this._ID, options, headers)
                .subscribe(function (data) {
                _this.displayNotification(nama + ' was successfully updated');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */]);
            }, function (error) {
                console.dir(error);
            });
        }
        else {
            this._HTTP
                .post(url, options, headers)
                .subscribe(function (data) {
                _this.displayNotification(nama + ' was successfully created');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */]);
            }, function (error) {
                console.dir(error);
            });
        }
    };
    InputdataPage.prototype.displayNotification = function (message) {
        var toast = this._TOAST.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    InputdataPage.prototype.takePhotograph = function () {
        var _this = this;
        this._IMAGE
            .takePhotograph()
            .then(function (image) {
            _this.gambar = image.toString();
            _this.image = image.toString();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    InputdataPage.prototype.takePhotograph2 = function () {
        var _this = this;
        this._IMAGE
            .takePhotograph()
            .then(function (image) {
            _this.gambar2 = image.toString();
            _this.image2 = image.toString();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    InputdataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inputdata',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\inputdata\inputdata.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>\n         Tambah Data \n      </ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <form [formGroup]="form">\n      <ion-list>\n         <ion-item margin-bottom>\n            <ion-label>Nama</ion-label>\n            <ion-input\n               type="text"\n               [(ngModel)]="nama" \n               formControlName="nama"></ion-input>\n         </ion-item>\n         <ion-item margin-bottom>\n            <ion-label>Kategori</ion-label>\n            <ion-select\n               [(ngModel)]="kategori"\n               formControlName="kategori">\n               <ion-option value="Restauran">Restauran</ion-option>\n               <ion-option value="Rumah Sakit">Rumah Sakit</ion-option>\n               <ion-option value="Pom Bensin">Pom Bensin</ion-option>\n               <ion-option value="Cafe">Cafe</ion-option>\n               <ion-option value="A">ATM</ion-option>\n               <ion-option value="Toko">Toko</ion-option>\n               <ion-option value="Tempat Wisata">Tempat Wisata</ion-option>\n               <ion-option value="Lainya">Lain - Lain</ion-option>\n            </ion-select>\n         </ion-item>\n         <ion-item margin-bottom>\n            <ion-label>Keterangan</ion-label>\n            <ion-textarea\n               type="text"\n               [(ngModel)]="keterangan"\n               formControlName="keterangan"></ion-textarea>\n         </ion-item>\n         <ion-grid>\n            <ion-row>\n               <ion-col>\n                  <div>\n                     <ion-item-group>\n                        <ion-item>\n                                 <ion-col>\n                                    <div><button ion-button icon-left full (click)="takePhotograph()"><ion-icon name="camera"></ion-icon>Ambil</button></div>\n                                 </ion-col>\n                        </ion-item>\n                        <ion-item>\n                                 <ion-col>\n                                    <div>\n                                       <img [src]="image">\n                                       <input type="hidden" name="gambar" formControlName="gambar" [(ngModel)]="gambar">     \n                                    </div>\n                                 </ion-col>\n                        </ion-item>\n                     </ion-item-group>\n                  </div>\n               </ion-col>\n               <ion-col>\n                  <div>\n                     <ion-item-group>\n                        <ion-item>\n                                 <ion-col>\n                                    <div><button ion-button icon-left full (click)="takePhotograph2()"><ion-icon name="camera"></ion-icon>Ambil</button></div>\n                                 </ion-col>\n                        </ion-item>\n                        <ion-item>\n                                 <ion-col>\n                                    <div>\n                                       <img [src]="image2">\n                                       <input type="hidden" name="gambar2" formControlName="gambar2" [(ngModel)]="gambar2">     \n                                    </div>\n                                 </ion-col>\n                        </ion-item>\n                     </ion-item-group>\n                  </div>\n               </ion-col>\n            </ion-row>\n         </ion-grid>\n         <ion-item margin-bottom>\n            <ion-label>Is Displayed?</ion-label>\n            <ion-select\n               [(ngModel)]="displayed"\n               formControlName="displayed">\n               <ion-option value="true">True</ion-option>\n               <ion-option value="false">False</ion-option>\n            </ion-select>\n         </ion-item>\n         <button\n            ion-button\n            color="primary"\n            text-center\n            block [disabled]="!form.valid" (click)="manageGallery()">Save this record</button>\n      </ion-list>\n   </form>\n</ion-content>'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\inputdata\inputdata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_image_image__["a" /* ImageProvider */]])
    ], InputdataPage);
    return InputdataPage;
}());

//# sourceMappingURL=inputdata.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inputdata_inputdata__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tampildata_tampildata__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, authservice, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'myMenu');
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.input = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inputdata_inputdata__["a" /* InputdataPage */]);
    };
    MenuPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tampildata_tampildata__["a" /* TampildataPage */]);
    };
    MenuPage.prototype.Map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */]);
    };
    MenuPage.prototype.logout = function () {
        this.authservice.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\menu\menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-6 text-center>\n				<button ion-button icon-only (click)="input()"><ion-icon name="add" ></ion-icon></button>\n				<br>Input\n			</ion-col>\n			<ion-col col-6 text-center>\n				<button ion-button icon-only (click)="home()"><ion-icon name="home" ></ion-icon></button>\n				<br>Home\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-6 text-center>\n				<button ion-button icon-only (click)="Map()"><ion-icon name="map" ></ion-icon></button>\n				<br>Maps\n			</ion-col>\n			<ion-col col-6 text-center>\n				<button ion-button icon-only (click)="logout()"><ion-icon name="power" ></ion-icon></button>\n				<br>Logout\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\asus\PENDADARAN\APP\PelancongLocal\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authservice_authservice__["a" /* AuthserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map