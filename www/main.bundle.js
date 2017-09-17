webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: "\n  <div style=\"text-align:center;\">\n  <h1 style=\"padding-top:50px;\">404<br>Das ist nicht die Seite, die du suchst.</h1>\n  <span style=\"font-size:3000%;\"><i class=\"fa fa-rebel\" aria-hidden=\"true\" style=\"cursor:pointer;\" [routerLink]=\"['/loginPage']\" routerLinkActive=\"active\"></i></span>\n  </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    })
], PageNotFoundComponent);

//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__404_component__ = __webpack_require__("../../../../../src/app/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__noconnection_component__ = __webpack_require__("../../../../../src/app/noconnection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_component__ = __webpack_require__("../../../../../src/app/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_component__ = __webpack_require__("../../../../../src/app/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__school_component__ = __webpack_require__("../../../../../src/app/school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__student_component__ = __webpack_require__("../../../../../src/app/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__teacher_component__ = __webpack_require__("../../../../../src/app/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_update_service__ = __webpack_require__("../../../../../src/app/service/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_delete_service__ = __webpack_require__("../../../../../src/app/service/delete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__root_component__["a" /* Root */],
            __WEBPACK_IMPORTED_MODULE_8__404_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__noconnection_component__["a" /* NoConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__classes_component__["a" /* ClassesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__school_component__["a" /* SchoolComponent */],
            __WEBPACK_IMPORTED_MODULE_14__student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__teacher_component__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_component__["a" /* LoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTE_CONFIG */], { enableTracing: true }),
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__service_local_service__["d" /* GlobalSchool */],
            __WEBPACK_IMPORTED_MODULE_16__service_local_service__["b" /* GlobalClass */],
            __WEBPACK_IMPORTED_MODULE_16__service_local_service__["e" /* GlobalStatus */],
            __WEBPACK_IMPORTED_MODULE_16__service_local_service__["c" /* GlobalLogin */],
            __WEBPACK_IMPORTED_MODULE_16__service_local_service__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_17__service_post_service__["e" /* postTeacherService */],
            __WEBPACK_IMPORTED_MODULE_17__service_post_service__["c" /* postSchoolService */],
            __WEBPACK_IMPORTED_MODULE_17__service_post_service__["a" /* postClassService */],
            __WEBPACK_IMPORTED_MODULE_17__service_post_service__["d" /* postStudentService */],
            __WEBPACK_IMPORTED_MODULE_17__service_post_service__["b" /* postNoteService */],
            __WEBPACK_IMPORTED_MODULE_18__service_get_service__["e" /* getTeacherService */],
            __WEBPACK_IMPORTED_MODULE_18__service_get_service__["c" /* getSchoolService */],
            __WEBPACK_IMPORTED_MODULE_18__service_get_service__["a" /* getClassService */],
            __WEBPACK_IMPORTED_MODULE_18__service_get_service__["d" /* getStudentService */],
            __WEBPACK_IMPORTED_MODULE_18__service_get_service__["b" /* getNoteService */],
            __WEBPACK_IMPORTED_MODULE_19__service_update_service__["e" /* updateTeacherService */],
            __WEBPACK_IMPORTED_MODULE_19__service_update_service__["c" /* updateSchoolService */],
            __WEBPACK_IMPORTED_MODULE_19__service_update_service__["a" /* updateClassService */],
            __WEBPACK_IMPORTED_MODULE_19__service_update_service__["d" /* updateStudentService */],
            __WEBPACK_IMPORTED_MODULE_19__service_update_service__["b" /* updateNoteService */],
            __WEBPACK_IMPORTED_MODULE_20__service_delete_service__["e" /* deleteTeacherService */],
            __WEBPACK_IMPORTED_MODULE_20__service_delete_service__["c" /* deleteSchoolService */],
            __WEBPACK_IMPORTED_MODULE_20__service_delete_service__["a" /* deleteClassService */],
            __WEBPACK_IMPORTED_MODULE_20__service_delete_service__["d" /* deleteStudentService */],
            __WEBPACK_IMPORTED_MODULE_20__service_delete_service__["b" /* deleteNoteService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__root_component__["a" /* Root */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTE_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__404_component__ = __webpack_require__("../../../../../src/app/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noconnection_component__ = __webpack_require__("../../../../../src/app/noconnection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_component__ = __webpack_require__("../../../../../src/app/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__school_component__ = __webpack_require__("../../../../../src/app/school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_component__ = __webpack_require__("../../../../../src/app/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacher_component__ = __webpack_require__("../../../../../src/app/teacher.component.ts");







var ROUTE_CONFIG = [
    { path: 'loginPage', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__school_component__["a" /* SchoolComponent */] },
    { path: 'classes', component: __WEBPACK_IMPORTED_MODULE_3__classes_component__["a" /* ClassesComponent */] },
    { path: 'teachers', component: __WEBPACK_IMPORTED_MODULE_6__teacher_component__["a" /* TeacherComponent */] },
    //{ path: 'teacher/:id',component: TeacherComponent},
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_5__student_component__["a" /* StudentComponent */] },
    { path: 'student/:id', component: __WEBPACK_IMPORTED_MODULE_5__student_component__["a" /* StudentComponent */] },
    { path: '',
        redirectTo: 'loginPage',
        pathMatch: 'full'
    },
    { path: 'noc', component: __WEBPACK_IMPORTED_MODULE_1__noconnection_component__["a" /* NoConnectionComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__404_component__["a" /* PageNotFoundComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_update_service__ = __webpack_require__("../../../../../src/app/service/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_delete_service__ = __webpack_require__("../../../../../src/app/service/delete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClassesComponent = (function () {
    function ClassesComponent(PostClassServiceImpl, GetClassServiceImpl, UpdateClassServiceImpl, DeleteClassServiceImpl, GetStudentServiceImpl, GetSchoolServiceImpl, globalSchoolImpl, globalClassImpl, globalStatusImpl) {
        this.PostClassServiceImpl = PostClassServiceImpl;
        this.GetClassServiceImpl = GetClassServiceImpl;
        this.UpdateClassServiceImpl = UpdateClassServiceImpl;
        this.DeleteClassServiceImpl = DeleteClassServiceImpl;
        this.GetStudentServiceImpl = GetStudentServiceImpl;
        this.GetSchoolServiceImpl = GetSchoolServiceImpl;
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalClassImpl = globalClassImpl;
        this.globalStatusImpl = globalStatusImpl;
        this.title = 'Klassenübersicht';
        this.PostClassService = PostClassServiceImpl;
        this.GetClassService = GetClassServiceImpl;
        this.UpdateClassService = UpdateClassServiceImpl;
        this.DeleteClassService = DeleteClassServiceImpl;
        this.GetStudentService = GetStudentServiceImpl;
        this.GetSchoolService = GetSchoolServiceImpl;
        this.globalSchool = globalSchoolImpl;
        this.globalClass = globalClassImpl;
        this.globalStatus = globalStatusImpl;
        this.showNewClass = false;
    }
    ClassesComponent.prototype.init = function () {
        var _this = this;
        if (this.globalSchool.getSchool()) {
            this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(function (s) { return _this.classes = s; });
            this.GetSchoolService.getSchools().subscribe(function (s) { return _this.schools = s; });
        }
    };
    ClassesComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ClassesComponent.prototype.ngOnDestroy = function () {
    };
    ClassesComponent.prototype.isStudents = function () {
        if (this.students) {
            return true;
        }
        else {
            return false;
        }
    };
    ClassesComponent.prototype.toggleNewClass = function () {
        if (this.showNewClass == false) {
            this.selectedClass = null;
            this.students = null;
            this.showNewClass = true;
        }
        else {
            this.cancelNewClass();
        }
    };
    ClassesComponent.prototype.cancelNewClass = function () {
        this.showNewClass = false;
    };
    ClassesComponent.prototype.newClass = function (name, level, belongsToSchool) {
        var _this = this;
        if (name > "" && level > "" && belongsToSchool > 0) {
            var h;
            this.PostClassService.postClass(new __WEBPACK_IMPORTED_MODULE_2__types_types__["a" /* Class */](null, name, level, belongsToSchool)).subscribe(function (res) {
                if (res.id) {
                    _this.showNewClass = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Enter required Values");
        }
    };
    ClassesComponent.prototype.updateClass = function (klasse, key, value) {
        var _this = this;
        var val;
        if (klasse != null && key != null && value != null) {
            val = value;
            klasse[key] = val;
            this.UpdateClassService.updateClass(klasse).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("No changes");
        }
    };
    ClassesComponent.prototype.deleteClass = function (klasse) {
        var _this = this;
        var h;
        if (klasse.id > 0) {
            this.DeleteClassService.deleteClass(klasse).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Nothing to delete!");
        }
    };
    ClassesComponent.prototype.getSchoolName = function (id) {
        var school = __WEBPACK_IMPORTED_MODULE_1__lib_functions__["a" /* find */](this.schools, 'id', id);
        if (school != null) {
            return school.name;
        }
        else {
            return "";
        }
    };
    ClassesComponent.prototype.isGlobalClass = function (id) {
        if (this.globalClass.getClass() && this.globalClass.getClass().id == id) {
            return true;
        }
        else {
            return false;
        }
    };
    ClassesComponent.prototype.getCurrentSchool = function () {
        return this.globalSchool.getSchool();
    };
    ClassesComponent.prototype.selectKlasse = function (klasse) {
        if (this.isGlobalClass(klasse.id)) {
            this.globalClass.unsetClass();
        }
        else {
            this.globalClass.setClass(klasse);
        }
    };
    ClassesComponent.prototype.selectClass = function (klasse) {
        var _this = this;
        this.cancelNewClass();
        this.selectedClass = klasse;
        this.students = null;
        this.GetStudentService.getEntities(klasse.id).subscribe(function (s) {
            if (s != null) {
                _this.students = s;
            }
            else {
                _this.students = null;
            }
        });
    };
    return ClassesComponent;
}());
ClassesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/html/classes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_post_service__["a" /* postClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_post_service__["a" /* postClassService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_get_service__["a" /* getClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_get_service__["a" /* getClassService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_update_service__["a" /* updateClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_update_service__["a" /* updateClassService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["a" /* deleteClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["a" /* deleteClassService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_get_service__["d" /* getStudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_get_service__["d" /* getStudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_get_service__["c" /* getSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_get_service__["c" /* getSchoolService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_local_service__["d" /* GlobalSchool */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__service_local_service__["b" /* GlobalClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_local_service__["b" /* GlobalClass */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_local_service__["e" /* GlobalStatus */]) === "function" && _j || Object])
], ClassesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=classes.component.js.map

/***/ }),

/***/ "../../../../../src/app/css/component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/css/font-awesome.css"), "");

// module
exports.push([module.i, "\n.status {\n  position: absolute;\n  display:block;\n  width: 20%;\n  padding: 1em 2%;\n  top: .5em;\n  right:38%;\n  background-color: rgba(0,0,0, 0.50);\n  color:white;\n  border-radius: 2px;\n}\n\nbody {\n  background: #e2e1e0;\n  font-famliy:Roboto-Medium;\n}\nbutton,html,input,select,textarea {\n font-family:Roboto,Helvetica Neue,sans-serif\n}\nh1 {\n    font-size: 300%;\n}\n\nh2 {\n    font-size: 250%;\n}\nh3 {\n  margin: .8em 0 .2em 8px;\n  font-size: 200%\n}\n\ntextarea {\n  resize: none;\n\tdisplay: block;\n\twidth: 100%;\n\tborder: 0;\n\tpadding: 10px 5px;\n  background: white no-repeat;\n  /*\n  * IMPORTANT PART HERE\n  */\n\n  /* 2 imgs : 1px gray line (normal state) AND 2px green line (focus state) */\n  background-image: linear-gradient(to bottom, #1abc9c, #1abc9c), linear-gradient(to bottom, silver, silver);\n  /* sizes for the 2 images (default state) */\n  background-size: 0 2px, 100% 1px;\n  /* positions for the 2 images. Change both \"50%\" to \"0%\" or \"100%\" and tri again */\n  background-position: 50% 100%, 50% 100%;\n\n  /* animation solely on background-size */\n  transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n\n  }\n\n  textarea:focus{\n    /* sizes for the 2 images (focus state) */\n  \tbackground-size: 100% 2px, 100% 1px;\n  \toutline: none;\n  }\n\n.title{\n  color: #f0f0f0;\n  text-shadow: 0 0 3px rgba(0,0,0,0.25), 0 0 5px rgba(0,0,0,0.12);\n  text-decoration: none;\n}\n.title:hover {\n    cursor:pointer;\n}\n.del {\n  position:absolute;top: 3em;right:3em;\n}\n.del:hover {\n  cursor:pointer;\n}\nnav {\n  display:block;\n  background-color: #fff;\n  margin-bottom: 1.5em;\n\n}\nnav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display:block;\n    background-color: #fff;\n    text-indent:0;\n}\nnav ul li{\n    display:inline-block;\n    min-width: 3em;\n    font-size: 130%;\n    background-color:#fff;\n    color:black;\n    padding: 1rem 1rem;\n    text-align: center;\n}\nnav a, .noLink {\n  color:black;\n  text-decoration: none;\n}\nnav ul li.active:hover {\n  background-color: #f0f0f0;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-delay: 0.2s;\n  cursor:pointer;\n}\nnav a:hover{\n    color:black;\n}\nnav a:visited, .noLink:visited  {\n  color:black;\n}\n\n.card {\n  background: #fff;\n  border-radius: 2px;\n  display: inline-block;\n  margin: 1rem;\n  position: relative;\n  padding: 0 3rem 3rem 0;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.card-1:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n}\n\n.pane {\n  background: #fff;\n  border-radius: 2px;\n  margin: 0 1rem 1rem 0;\n  position: relative;\n  padding: 2em;\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.pane:hover {\n box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n.spinner {\n  -webkit-animation: rotator 1.4s linear infinite;\n          animation: rotator 1.4s linear infinite;\n}\n\n@-webkit-keyframes rotator {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(270deg); transform: rotate(270deg); }\n}\n\n@keyframes rotator {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(270deg); transform: rotate(270deg); }\n}\n\n.path {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n\n@-webkit-keyframes colors {\n\t0% { stroke: #4285F4; }\n\t25% { stroke: #DE3E35; }\n\t50% { stroke: #F7C223; }\n\t75% { stroke: #1B9A59; }\n  100% { stroke: #4285F4; }\n}\n\n@keyframes colors {\n\t0% { stroke: #4285F4; }\n\t25% { stroke: #DE3E35; }\n\t50% { stroke: #F7C223; }\n\t75% { stroke: #1B9A59; }\n  100% { stroke: #4285F4; }\n}\n\n@-webkit-keyframes dash {\n 0% { stroke-dashoffset: 187; }\n 50% {\n   stroke-dashoffset: 187/4;\n   -webkit-transform:rotate(135deg);\n           transform:rotate(135deg);\n }\n 100% {\n   stroke-dashoffset: 187;\n   -webkit-transform:rotate(450deg);\n           transform:rotate(450deg);\n }\n}\n\n@keyframes dash {\n 0% { stroke-dashoffset: 187; }\n 50% {\n   stroke-dashoffset: 187/4;\n   -webkit-transform:rotate(135deg);\n           transform:rotate(135deg);\n }\n 100% {\n   stroke-dashoffset: 187;\n   -webkit-transform:rotate(450deg);\n           transform:rotate(450deg);\n }\n}\n\n/* Material style */\nbutton {\n  border: none;\n  cursor: pointer;\n  color: white;\n  padding: 1.2rem 3.5rem;\n  border-radius: 2px;\n  font-size: 130%;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  background: #2196F3;\n}\nbutton:hover {\n box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n/* Ripple magic */\nbutton{\n  position: relative;\n  overflow: hidden;\n}\n\nbutton:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 5px;\n  height: 5px;\n  background: rgba(255, 255, 255, .5);\n  opacity: 0;\n  border-radius: 100%;\n  -webkit-transform: scale(1, 1) translate(-50%);\n          transform: scale(1, 1) translate(-50%);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n\n@-webkit-keyframes ripple {\n  0% {\n    -webkit-transform: scale(20, 20);\n            transform: scale(20, 20);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: scale(60, 60);\n            transform: scale(60, 60);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(90, 90);\n            transform: scale(90, 90);\n  }\n}\n\n@keyframes ripple {\n  0% {\n    -webkit-transform: scale(20, 20);\n            transform: scale(20, 20);\n    opacity: 1;\n  }\n  20% {\n    -webkit-transform: scale(60, 60);\n            transform: scale(60, 60);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(90, 90);\n            transform: scale(90, 90);\n  }\n}\n\nbutton:focus:not(:active)::after {\n  -webkit-animation: ripple 1s ease-out;\n          animation: ripple 1s ease-out;\n}\n\n.switch-input {\n  display: none;\n}\n.switch-label {\n  position: relative;\n  display: inline-block;\n  min-width: 112px;\n  cursor: pointer;\n  font-weight: 500;\n  text-align: left;\n  margin: 16px;\n  padding: 16px 0 16px 44px;\n}\n.switch-label:before, .switch-label:after {\n  content: \"\";\n  position: absolute;\n  margin: 0;\n  outline: 0;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  transition: all 0.3s ease;\n}\n.switch-label:before {\n  left: 1px;\n  width: 34px;\n  height: 14px;\n  background-color: #9E9E9E;\n  border-radius: 8px;\n}\n.switch-label:after {\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-color: #FAFAFA;\n  border-radius: 50%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);\n}\n.switch-label .toggle--on {\n  display: none;\n}\n.switch-label .toggle--off {\n  display: inline-block;\n}\n.switch-input:checked + .switch-label:before {\n  background-color: #A5D6A7;\n}\n.switch-input:checked + .switch-label:after {\n  background-color: #4CAF50;\n  -webkit-transform: translate(80%, -50%);\n  transform: translate(80%, -50%);\n}\n.switch-input:checked + .switch-label .toggle--on {\n  display: inline-block;\n}\n.switch-input:checked + .switch-label .toggle--off {\n  display: none;\n}\n\n.group \t\t\t  {\n  position:relative;\n  margin-bottom:1em;\n  width:90%;\n}\n.md-input \t\t\t\t{\n  font-size:18px;\n  padding:10px 10px 10px 5px;\n  display:block;\n  border:none;\n  border-bottom:1px solid #757575;\n}\n.md-input, .bar {\n  width:100%;\n}\n.md-input:focus \t\t{ outline:none; }\n\n/* LABEL ======================================= */\n.md-input-label \t\t\t\t {\n  color:#999;\n  font-size:18px;\n  font-weight:normal;\n  position:absolute;\n  pointer-events:none;\n  left:5px;\n  top:10px;\n  transition:0.2s ease all;\n  -moz-transition:0.2s ease all;\n  -webkit-transition:0.2s ease all;\n}\n\n/* active state */\n.md-input:focus ~ .md-input-label, .md-input:valid ~ .md-input-label \t\t{\n  top:-20px;\n  font-size:14px;\n  color:#5264AE;\n}\n\n/* BOTTOM BARS ================================= */\n.bar \t{ position:relative; display:block;}\n.bar:before, .bar:after \t{\n  content:'';\n  height:2px;\n  width:0;\n  bottom:1px;\n  position:absolute;\n  background:#5264AE;\n  transition:0.2s ease all;\n  -moz-transition:0.2s ease all;\n  -webkit-transition:0.2s ease all;\n}\n.bar:before {\n  left:50%;\n}\n.bar:after {\n  right:50%;\n}\n\n/* active state */\n.md-input:focus ~ .bar:before, .md-input:focus ~ .bar:after {\n  width:50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position:absolute;\n  height:60%;\n  width:100px;\n  top:25%;\n  left:0;\n  pointer-events:none;\n  opacity:0.5;\n}\n\n/* active state */\n  .md-input:focus ~ .highlight {\n  -webkit-animation:inputHighlighter 0.3s ease;\n  animation:inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n\tfrom { background:#5264AE; }\n  to \t{ width:0; background:transparent; }\n}\n@keyframes inputHighlighter {\n\tfrom { background:#5264AE; }\n  to \t{ width:0; background:transparent; }\n}\n.L {\n  width:18.3em;\n  list-style-type: none;\n  text-decoration: none;\n  padding: 5px;\n  line-height: 1em;\n  display:block;\n}\n.LNO{padding: 0;\nmargin:0;\nmargin-bottom:.1em;\n\n}\n.LBadge {\n  width:3em;\n  padding: .8em;\n  font-size: small;\n  border-radius: 2px 2px 2px 2px;\n  margin:0 .5em 0 0;\n}\n.LB-Blue{\n  color: white;\n  background-color: #4285f4;\n}\n.LB-Green{\n  background-color: #0f9d58;\n  color: #fff;\n}\n.LB.Red{\n  background-color: #ef5a4a;\n  color: #fff;\n}\n.LPane {\nwidth:17.2em;\nmin-height: 1.8em;\npadding: .5em .5em .5em .5em;\nbackground-color: #EEE;\nmargin-bottom: .2em;\nvertical-align: middle;\nbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n.LText {\n  margin: .7em .5em 0 .3em;\n  overflow: hidden;\n  width:11.6em;\n}\n.LPane:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  cursor:pointer;\n}\nli.selected\n.LPane{\n  color: black;\n  background-color: #CCCCCC;\n  left: .1em;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\nli.selected\n.LPane:hover{\n  background-color: #b3b3b3 !important;\n  color: black;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n}\n\n  .leftbar {\n    display:block;\n    float:left;\n    width:20em;\n  }\n\n  .widthnexttobar {\n    margin-right: 0;\n    width: calc(100% - 29em);\n  }\n\n  .button > paper-ripple {\n       border-radius: 2px;\n       overflow: hidden;\n     }\n\n     .button.narrow {\n       width: 8em;\n     }\n     .button.small {\n       width: 8em;\n       padding: .5em 1em;\n       font-size: 100%;\n       box-shadow: 0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.30);\n     }\n     .button.medium {\n       width: 15.2em;\n       padding: .5em 1em;\n       margin-left: 5px;\n       font-size: 120%;\n       box-shadow: 0 3px 6px rgba(0,0,0,0.23), 0 3px 6px rgba(0,0,0,0.30);\n\n     }\n    .button.medium:hover, .button.small:hover {\n      box-shadow: 0 3px 4px rgba(0,0,0,0.13), 0 3px 6px rgba(0,0,0,0.20);\n    }\n\n\n     .button.grey {\n       background-color: #eee;\n       color:black;\n     }\n\n     .button.blue {\n       background-color: #4285f4;\n       color: #fff;\n     }\n     .button.red {\n       background-color: #ef5a4a;\n       color: #fff;\n     }\n\n     .button.green {\n       background-color: #0f9d58;\n       color: #fff;\n     }\n\n     .button.raised {\n       transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n       transition-delay: 0.2s;\n       box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n     }\n\n     .button.raised:active {\n       box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\n       transition-delay: 0s;\n     }\n     .floatleft {\n      float:left;\n      }\n      .floatright {\n       float:right;\n      }\n      .clearfix {\n        clear:both;\n      }\n       .bemerkungen {\n         list-style-type: none;\n       }\n\n\n      .headerpicture{\n        background: url(" + __webpack_require__("../../../../../src/app/img/background.jpg") + ")no-repeat center left;\n        background-size: contain;\n        background-size: 100% auto;\n        width: 100%;\n        background-position: left;\n      }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dummy.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STUDENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TEACHERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHOOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOTES; });
var CLASSES = [
    { id: 13, name: 'GK Physik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 150, name: 'GrundKurs Physik 1 Jahrgangsstufe Qualifikationsphase 1', level: 'Q1', belongsToSchool: 1 },
    { id: 14, name: 'LK Informatik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 15, name: 'GK Deutsch 1', level: 'Q1', belongsToSchool: 1 },
    { id: 16, name: 'GK Englisch 1', level: 'Q1', belongsToSchool: 1 },
    { id: 17, name: 'LK Englisch 1', level: 'Q1', belongsToSchool: 1 },
    { id: 18, name: 'GK Erdkunde 1', level: 'Q1', belongsToSchool: 1 },
    { id: 19, name: 'LK Mathematik 1', level: 'Q2', belongsToSchool: 1 },
    { id: 20, name: 'GK Mathematik 1', level: 'Q2', belongsToSchool: 1 },
    { id: 21, name: 'GK Mathematik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 22, name: 'GK Mathematik 2', level: 'Q1', belongsToSchool: 1 },
    { id: 7, name: 'Mathematik 1', level: 'EF', belongsToSchool: 2 },
    { id: 8, name: 'Mathematik 2', level: 'EF', belongsToSchool: 2 },
    { id: 9, name: 'Physik 1', level: 'EF', belongsToSchool: 2 },
    { id: 10, name: 'Informatik  1', level: 'EF', belongsToSchool: 2 },
    { id: 11, name: 'GK Mathematik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 12, name: 'GK Mathematik 2', level: 'Q1', belongsToSchool: 1 },
    { id: 23, name: 'GK Physik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 24, name: 'LK Informatik 1', level: 'Q1', belongsToSchool: 1 },
    { id: 25, name: 'GK Deutsch 1', level: 'Q1', belongsToSchool: 1 },
    { id: 26, name: 'GK Englisch 1', level: 'Q1', belongsToSchool: 1 }
];
var STUDENTS = [
    { id: 10, firstname: 'Anton', lastname: 'Müller', belongsToClass: 8 },
    { id: 11, firstname: 'Berta', lastname: 'Schmitz', belongsToClass: 8 },
    { id: 12, firstname: 'Cäsar', lastname: 'Meyer', belongsToClass: 8 },
    { id: 13, firstname: 'Dora', lastname: 'Schneider', belongsToClass: 8 },
    { id: 14, firstname: 'Emil', lastname: 'Steinhauer', belongsToClass: 8 },
    { id: 15, firstname: 'Friedrich', lastname: 'Schmidt', belongsToClass: 8 },
    { id: 16, firstname: 'Gustav', lastname: 'Weber', belongsToClass: 8 },
    { id: 17, firstname: 'Heinrich', lastname: 'Fischer', belongsToClass: 8 },
    { id: 18, firstname: 'Ida', lastname: 'Krause', belongsToClass: 8 }
];
var TEACHERS = [
    { id: 10, firstname: 'Professor', lastname: 'Crey', mailAddress: 'crey@schule.net', password: '123456', belongsToSchool: 1 },
    { id: 11, firstname: 'Direktor', lastname: 'Knauer', mailAddress: 'kauer@schule.net', password: '123456', belongsToSchool: 1 },
    { id: 12, firstname: 'Professor', lastname: 'Bömmel', mailAddress: 'boemmel@schule.net', password: '123456', belongsToSchool: 1 },
    { id: 13, firstname: 'Doktor', lastname: 'Brett', mailAddress: 'brett@schule.net', password: '123456', belongsToSchool: 1 },
    { id: 14, firstname: 'Musiklehrer', lastname: 'Fridolin', mailAddress: 'fridolin@schule.net', password: '123456', belongsToSchool: 1 }
];
var SCHOOLS = [
    { id: 1, name: 'Friedrich-Spee Gymnasium Geldern' },
    { id: 2, name: 'Erasmus Gymnasium Grevenbroich' },
    { id: 3, name: 'Konrad Adenauer Gemeinschaftsgesamtschule Bonn-Beuel' }
];
var NOTES = [
    { id: 10, text: 'Test 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', timestamp: 1504872457000, authorTeacherId: 12, belongsToStudent: 10 },
    { id: 11, text: 'Test 2: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sit amet.', timestamp: 1504472930000, authorTeacherId: 10, belongsToStudent: 15 }
];
//# sourceMappingURL=dummy.data.js.map

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.674f50d287a8c48dc19b.eot";

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.eot?v=4.7.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.674f50d287a8c48dc19b.eot";

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.svg?v=4.7.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.912ec66d7572ff821749.svg";

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.ttf?v=4.7.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.b06871f281fee6b241d6.ttf";

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.woff2?v=4.7.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.af7ae505a9eed503f8b8.woff2";

/***/ }),

/***/ "../../../../../src/app/fonts/fontawesome-webfont.woff?v=4.7.0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.fee66e712a8a08eef580.woff";

/***/ }),

/***/ "../../../../../src/app/html/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div style=\"width: 64%;margin: 0 auto;align:center;\">\n<div class=\"pane leftbar\">\n<h2>{{title}}</h2>\n<button class=\"button medium red\" type=\"button\" (click) = \"toggleNewClass()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n<ul class=\"L \" >\n<li class=\"LNO\" *ngFor=\"let klasse of classes\"\n  [class.selected]=\"klasse === selectedClass\"\n  (click)=\"selectClass(klasse)\">\n  <div class=\"floatleft pane LPane\" (click)=\"selectKlasse(klasse)\">\n    <div *ngIf=\"isGlobalClass(klasse.id); then B else NB\"></div>\n    <ng-template #B>\n    <div class=\"LBadge LB-Green floatleft\" style=\"text-align:center\" >{{klasse.level}}</div>\n    <div class=\"LText floatleft\">{{klasse.name}}</div>\n    </ng-template>\n    <ng-template #NB>\n    <div class=\"LBadge LB-Blue floatleft\" style=\"text-align:center\">{{klasse.level}}</div>\n    <div class=\"LText floatleft\">{{klasse.name}}</div>\n    </ng-template>\n  </div>\n</li>\n</ul></div>\n<div class=\"floatleft widthnexttobar\">\n\n<div *ngIf=\"showNewClass\" class=\"pane floatleft\" style=\"width:100%;\">\n<h3>Neue Klasse erstellen</h3>\n<div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n    <input #name type=\"text\" class=\"md-input\" required >\n    <span class=\"highlight\"></span>\n    <span class=\"bar\"></span>\n    <label class=\"md-input-label\">Name</label>\n  </div>\n  <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n      <input #level type=\"text\" class=\"md-input\" required >\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"md-input-label\">Stufe</label>\n    </div>\n      <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #belongsToSchool type=\"number\" class=\"md-input\" required  [value]=\"getCurrentSchool().id\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Schule: {{this.getSchoolName(belongsToSchool.value)}}</label>\n        </div>\n        <div class=\"floatright\">\n        <button class=\"button small grey\" type=\"button\" (click)=\"cancelNewClass()\">Abbrechen</button>\n        <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"newClass(name.value, level.value, belongsToSchool.value)\">Anlegen</button>\n        </div>\n</div>\n\n\n<div *ngIf=\"selectedClass\" class=\"pane floatleft\" style=\"width:100%;\">\n<h3 style=\"width:90%;\">Details: {{selectedClass.name}}</h3>\n<div class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-weight:600;font-size:150%;\" (click)=\"deleteClass(selectedClass)\"></i></div>\n<div class=\"clearfix\"></div>\n<div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n    <input #a class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedClass.name\" (change)=\"updateClass(selectedClass,'name',a.value)\">\n    <span class=\"highlight\"></span>\n    <span class=\"bar\"></span>\n    <label class=\"md-input-label\">Name</label>\n  </div>\n  <div  class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n      <input #b class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedClass.level\" (change)=\"updateClass(selectedClass,'level',b.value)\">\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"md-input-label\">Stufe</label>\n    </div>\n    <div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n        <!--<input class=\"md-input\" type=\"number\" required [(ngModel)]=\"selectedClass.belongsToSchool\">\n        <span class=\"highlight\"></span>\n        <span class=\"bar\"></span>-->\n        <label >Zugeordnet zu Schule: {{this.getSchoolName(selectedClass.belongsToSchool)}}</label>\n      </div>\n  <div style=\"margin-left:5px\"><label>id: </label>{{selectedClass.id}}</div>\n</div>\n\n<div *ngIf=\"selectedClass\" class=\"floatleft\" style=\"width:100%;\">\n\n<div *ngIf=\"isStudents(); then schueler else keineschueler\"></div>\n\n<ng-template #keineschueler>\n<div class=\"pane floatleft\" style=\"width:100%;margin-bottom:.3em;\">\n<span style=\"width:40%;font-weight:600;font-size:130%;\">Keine Schüler in dieser Klasse</span>\n</div>\n</ng-template>\n\n<ng-template #schueler>\n<div class=\"pane floatleft\" style=\"padding-top: 1em;padding-bottom:3em;margin-bottom:.3em;width:100%\">\n<h3>Schüler dieser Klasse</h3>\n<ul class=\"L\">\n<li class=\"LNO\" *ngFor=\"let student of students\"\n  [class.selected]=\"student === selectedStudent\" [routerLink]=\"['/student',student.id]\" routerLinkActive=\"active\">\n  <div class=\"floatleft pane LPane\">\n  <div class=\"LText floatleft\">{{student.firstname}} {{student.lastname}}</div>\n  </div>\n</li></ul></div>\n</ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/html/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pane\" style=\"width:40%;max-width:720px;margin: 1em auto 1em auto; padding: 3em 0 3em 0;overflow:hidden;\">\n<!--Title Part -->\n<div  style=\"text-align:center\">\n<h1 style=\"padding-top:50px;\">\n  {{title}}\n</h1>\n\n<!-- Replace this later -->\n<i style=\"font-size:2000%;\" class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i>\n\n</div>\n\n<div style=\"height:2em;\">\n<div *ngIf=\"wait\" style=\"text-align:center;font-size:140%;\">please wait...</div>\n</div>\n<!--Login Button -->\n<div style=\"text-align:center;margin-top:2em;\">\n<div class=\"group\" style=\"margin: 2em auto;max-width:300px;\">\n  <input #a type=\"text\" class=\"md-input\" required>\n  <span class=\"highlight\"></span>\n  <span class=\"bar\"></span>\n  <label class=\"md-input-label\">E-Mail Adresse hier eingeben</label>\n</div>\n  <div class=\"group\" style=\"margin: 2em auto;max-width:300px;\">\n  <input #b type=\"password\" class=\"md-input\" required>\n  <span class=\"highlight\"></span>\n  <span class=\"bar\"></span>\n  <label class=\"md-input-label\">Passwort</label>\n</div>\n<button type=\"button\" style=\"margin-top:2em;\" (click)=\"getLoginUser(a.value, b.value)\">Login</button>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/html/school.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div style=\"width: 64%;margin: 0 auto;align:center;\">\n<div class=\"pane leftbar\">\n<h2>{{title}}</h2>\n<button class=\"button medium red\" type=\"button\" (click) = \"toggleNewSchool()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n<ul class=\"L\">\n<li  class=\"LNO\" *ngFor=\"let school of schools\"\n  [class.selected]=\"school === selectedSchool\"\n  (click)=\"onSelect(school)\">\n  <div class=\"floatleft pane LPane\">\n  <div *ngIf=\"isGlobalSchool(school.id); then B else NB\"></div>\n  <ng-template #B>\n  <div class=\"LBadge LB-Green floatleft\" style=\"text-align:center\" (click)=\"selectSchool(school)\"><i class=\"fa fa-check-square-o\" aria-hidden=\"true\" style=\"font-weight:600;font-size:120%;\"></i></div>\n  <div class=\"LText floatleft\">{{school.name}}</div>\n  </ng-template>\n  <ng-template #NB>\n  <div class=\"LBadge LB-Blue floatleft\" style=\"text-align:center\" (click)=\"selectSchool(school)\"><i class=\"fa fa-square-o\" aria-hidden=\"true\" style=\"font-weight:600;font-size:120%;\"></i></div>\n  <div class=\"LText floatleft\">{{school.name}}</div>\n  </ng-template>\n  </div>\n</li>\n</ul></div>\n\n<div class=\"floatleft widthnexttobar\">\n\n<div *ngIf=\"showNewSchool\" class=\"pane floatleft\" style=\"width:100%;\">\n<h3>Neue Schule erstellen</h3>\n<div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n    <input #a type=\"text\" class=\"md-input\" required [value]=\"NewSchool.name\">\n    <span class=\"highlight\"></span>\n    <span class=\"bar\"></span>\n    <label class=\"md-input-label\">Name</label>\n  </div>\n  <div class=\"floatright\">\n  <button class=\"button small grey\" type=\"button\" (click)=\"cancelNewSchool()\">Abbrechen</button>\n  <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"newSchool(a.value)\">Anlegen</button>\n  </div>\n</div>\n\n<div *ngIf=\"selectedSchool\" class=\"pane floatleft\" style=\"width:100%;\">\n<h3 style=\"width:90%;\">Details: {{selectedSchool.name}}</h3>\n<div class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-weight:600;font-size:150%;\" (click)=\"deleteSchool(selectedSchool)\"></i></div>\n<div  class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n    <input #a class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedSchool.name\" (change)=\"updateSchool(selectedSchool,'name',a.value)\">\n    <span class=\"highlight\"></span>\n    <span class=\"bar\"></span>\n    <label class=\"md-input-label\">Name</label>\n  </div>\n  <div style=\"margin-left:5px\"><label>id: </label>{{selectedSchool.id}}</div>\n  <div class=\"floatright\">\n  <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"selectSchool(selectedSchool)\">verwenden</button>\n  </div>\n</div>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/html/student.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div style=\"width: 64%;margin: 0 auto;align:center;\">\n\n  <div class=\"pane leftbar\">\n    <h2>{{title}}</h2>\n    <button class=\"button medium red\" type=\"button\" (click)=\"toggleNewStudent()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n    <ul class=\"L\">\n      <li class=\"LNO\" *ngFor=\"let student of students\" [class.selected]=\"student === selectedStudent\" (click)=\"onSelect(student)\">\n        <div class=\"floatleft pane LPane\">\n          <div class=\"LText floatleft\">{{student.lastname}}, {{student.firstname}}</div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"floatleft widthnexttobar\">\n    <div *ngIf=\"showNewStudent\" class=\"pane floatleft\" style=\"width:100%;\">\n      <h3>Neuen Schüler erfassen</h3>\n      <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n        <input #a type=\"text\" class=\"md-input\" required [value]=\"NewStudent.firstname\">\n        <span class=\"highlight\"></span>\n        <span class=\"bar\"></span>\n        <label class=\"md-input-label\">Vorname</label>\n      </div>\n      <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n        <input #b type=\"text\" class=\"md-input\" required [value]=\"NewStudent.lastname\">\n        <span class=\"highlight\"></span>\n        <span class=\"bar\"></span>\n        <label class=\"md-input-label\">Nachname</label>\n      </div>\n      <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n        <input #c type=\"number\" class=\"md-input\" required [value]=\"getCurrentClass().id\">\n        <span class=\"highlight\"></span>\n        <span class=\"bar\"></span>\n        <label class=\"md-input-label\">Klasse</label>\n      </div>\n      <div class=\"floatright\">\n        <button class=\"button small grey\" type=\"button\" (click)=\"cancelNewStudent()\">Abbrechen</button>\n        <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"newStudent(a.value, b.value, c.value)\">Anlegen</button>\n      </div>\n    </div>\n\n    <div class=\"floatleft\" *ngIf=\"selectedStudent\" style=\"width:100%;\">\n      <div class=\"pane floatleft\" style=\"width:100%\">\n        <h3 style=\"width:90%;\">Details: {{selectedStudent.firstname}} {{selectedStudent.lastname}}</h3>\n        <div class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-weight:600;font-size:150%;\" (click)=\"deleteStudent(selectedStudent)\"></i></div>\n        <div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #a class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedStudent.firstname\" (change)=\"updateStudent(selectedStudent,'firstname',a.value)\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Vorname</label>\n        </div>\n        <div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #b class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedStudent.lastname\" (change)=\"updateStudent(selectedStudent,'lastname',b.value)\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Nachname</label>\n        </div>\n        <div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #c class=\"md-input\" type=\"number\" required [(ngModel)]=\"selectedStudent.belongsToClass\" (change)=\"updateStudent(selectedStudent,'belongsToClass',c.value)\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Zugeordnet zu Klasse: {{getClassName(selectedStudent.belongsToClass)}}</label>\n        </div>\n        <div style=\"margin-left:5px\"><label>id: </label>{{selectedStudent.id}}</div>\n        <div class=\"clearfix\"></div>\n        <div class=\"floatright\">\n          <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"toggleNewNote()\">Neue Bemerkung</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"showNewNote\" class=\"pane floatleft\" style=\"width:100%;\">\n        <h3>Neue Bemerkung verfassen</h3>\n        <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <label class=\"md-input-label\">Zugeordnet zu Schüler: {{selectedStudent.firstname}} {{selectedStudent.lastname}}</label>\n        </div>\n        <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <label class=\"md-input-label\">Eingestellt von: {{getLoginName()}}</label>\n        </div>\n        <div class=\"clearfix\"></div>\n        <textarea #a style=\"width:90%;height:7em;border:none;padding-top:1em;align:center;margin-top:2em\">\n      </textarea>\n        <div class=\"floatright\">\n          <button class=\"button small grey\" type=\"button\" (click)=\"cancelNewNote()\">Abbrechen</button>\n          <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"newNote(a.value, getNow() ,getLoginId(), selectedStudent.id)\">Anlegen</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"isNotes(); then Bemerkungen else keineBemerkungen\"></div>\n\n      <ng-template #keineBemerkungen>\n        <div class=\"pane floatleft\" style=\"width:100%;margin-bottom:.3em;\">\n          <span style=\"width:40%;font-weight:600;font-size:130%;\">Noch keine Bemerkungen</span>\n        </div>\n      </ng-template>\n\n      <ng-template #Bemerkungen>\n        <div class=\"pane floatleft\" style=\"padding-top: 1em;padding-bottom:1em;margin-bottom:.3em;width:100%\">\n          <h3>Bemerkungen</h3>\n        </div>\n\n        <div *ngFor=\"let note of notes\" class=\"pane floatleft\" style=\"width:100%;margin-bottom:.3em;\">\n          <div class=\"floatleft\" style=\"width:40%;font-weight:600;\">{{note.timestamp | date: 'dd.MM.yyyy HH:mm'}}</div>\n          <div class=\"floatleft\" style=\"width:40%;font-weight:600;\">erstellt von: {{this.getTeacherName(note.authorTeacherId)}}</div>\n          <div class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-weight:600;font-size:150%;\" (click)=\"deleteNote(note)\"></i></div>\n          <div class=\"clearfix\"></div>\n          <textarea #a style=\"width:90%;height:7em;border:none;padding-top:1em;align:center;\" [class.selected]=\"note === selectedNote\" readonly [(ngModel)]=\"note.text\">\n      </textarea>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/html/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n\n<div style=\"width: 64%;margin: 0 auto;align:center;\">\n<div class=\"pane leftbar\">\n<h2>{{title}}</h2>\n<button class=\"button medium red\" type=\"button\" (click) = \"toggleNewTeacher()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n</button>\n<ul class=\"L\">\n<li class=\"LNO\" *ngFor=\"let teacher of teachers\"\n  [class.selected]=\"teacher === selectedTeacher\"\n  (click)=\"selectTeacher(teacher)\">\n  <div class=\"floatleft pane LPane\">\n  <div *ngIf=\"isLoginTeacher(teacher.id); then B else NB\"></div>\n  <ng-template #B>\n  <div class=\"LBadge LB-Green floatleft\" style=\"text-align:center\" (click)=\"selectLoginTeacher(teacher)\">&nbsp;</div>\n  <div class=\"LText floatleft\">{{teacher.lastname}}, {{teacher.firstname}}</div>\n  </ng-template>\n  <ng-template #NB>\n  <div class=\"LBadge LB-Blue floatleft\" style=\"text-align:center\" (click)=\"selectLoginTeacher(teacher)\">&nbsp;</div>\n  <div class=\"LText floatleft\">{{teacher.lastname}}, {{teacher.firstname}}</div>\n  </ng-template>\n  </div>\n</li>\n</ul>\n</div>\n\n    <div class=\" floatleft widthnexttobar\">\n\n    <div *ngIf=\"showNewTeacher\" class=\"pane floatleft\" style=\"width:100%;\">\n      <h3>Neuen Lehrer erfassen</h3>\n        <div  class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #a type=\"text\" class=\"md-input\" required [value]=\"NewTeacher.firstname\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Vorname</label>\n        </div>\n        <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n            <input #b type=\"text\" class=\"md-input\" required [value]=\"NewTeacher.lastname\">\n            <span class=\"highlight\"></span>\n            <span class=\"bar\"></span>\n            <label class=\"md-input-label\">Nachname</label>\n        </div>\n        <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n              <input #c type=\"text\" class=\"md-input\" required [value]=\"NewTeacher.mailAddress\">\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label class=\"md-input-label\">EMail Adresse</label>\n        </div>\n       <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n                <input #d type=\"password\" class=\"md-input\" required [value]=\"NewTeacher.password\">\n                <span class=\"highlight\"></span>\n                <span class=\"bar\"></span>\n                <label class=\"md-input-label\">Passwort</label>\n              </div>\n            <div class=\"group floatleft\" style=\"margin-top:3em;margin-bottom:1em;\">\n                <input #e type=\"number\" class=\"md-input\" required [value]=\"getCurrentSchool().id\">\n                <span class=\"highlight\"></span>\n                <span class=\"bar\"></span>\n                <label class=\"md-input-label\">Schule</label>\n              </div>\n      <div class=\"floatright\">\n      <button class=\"button small grey\" type=\"button\" (click)=\"cancelNewTeacher()\">Abbrechen</button>\n      <button class=\"button small blue\" style=\"margin: 0 .3em;\" type=\"button\" (click)=\"newTeacher(a.value,b.value,c.value,d.value,e.value)\">Anlegen</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"selectedTeacher\" class=\"pane\" style=\"width:100%;\">\n    <h3 style=\"width:90%;\">Details: {{selectedTeacher.firstname}} {{selectedTeacher.lastname}}</h3>\n    <div class=\"del\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"font-weight:600;font-size:150%;\" (click)=\"deleteTeacher(selectedTeacher)\"></i></div>\n      <div class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n          <input #a class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedTeacher.firstname\" (change)=\"updateTeacher(selectedTeacher,'firstname',a.value)\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"md-input-label\">Vorname</label>\n        </div>\n        <div  class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n            <input #b class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedTeacher.lastname\" (change)=\"updateTeacher(selectedTeacher,'lastname',b.value)\">\n            <span class=\"highlight\"></span>\n            <span class=\"bar\"></span>\n            <label class=\"md-input-label\">Nachname</label>\n          </div>\n          <div  class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n              <input #c class=\"md-input\" type=\"text\" required [(ngModel)]=\"selectedTeacher.mailAddress\" (change)=\"updateTeacher(selectedTeacher,'mailAddress',c.value)\">\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label class=\"md-input-label\">E-Mail Adresse</label>\n            </div>\n            <div  class=\"group\" style=\"margin-top:3em;margin-bottom:1em;\">\n                <!--<input class=\"md-input\" type=\"number\" required [(ngModel)]=\"selectedTeacher.belongsToSchool\" >\n                <span class=\"highlight\"></span>\n                <span class=\"\"></span> -->\n                <label class=\"\">zugeordnete Schule: {{this.getSchoolName(selectedTeacher.belongsToSchool)}}</label>\n              </div>\n        <div style=\"margin-left:5px\"><label>id: </label>{{selectedTeacher.id}}</div>\n      </div>\n\n      </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/img/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.72729b2836257f9422ea.jpg";

/***/ }),

/***/ "../../../../../src/app/lib/functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sort */
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* unused harmony export filter */
/* harmony export (immutable) */ __webpack_exports__["b"] = handleError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);

function sort(array, key, order) {
    if (order == 'dsc') {
        return array.sort(function (b, a) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    else {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}
function find(array, key, value) {
    return array.find(function (o) { return o[key] === value; });
}
function filter(array, key, value) {
    return array.filter(function (o) { return o[key] === value; });
}
/*
export function handleError(error: any): Promise<any> {
  console.error('[ERROR] => ', error);
  return Promise.reject(1);
}*/
function handleError(error) {
    var errMsg = (error.message) ? error.message :
        error.status ? error.status + " - " + error.statusText : 'Server error';
    console.error(errMsg); // log to console instead
    return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
}
//# sourceMappingURL=functions.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(routerImpl, globalLoginImpl, globalSchoolImpl, globalStatusImpl, GetTeacherServiceImpl, GetSchoolServiceImpl) {
        this.routerImpl = routerImpl;
        this.globalLoginImpl = globalLoginImpl;
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalStatusImpl = globalStatusImpl;
        this.GetTeacherServiceImpl = GetTeacherServiceImpl;
        this.GetSchoolServiceImpl = GetSchoolServiceImpl;
        this.title = 'Studentnote';
        this.router = routerImpl;
        this.globalLogin = globalLoginImpl;
        this.globalSchool = globalSchoolImpl;
        this.globalStatus = globalStatusImpl;
        this.GetTeacherService = GetTeacherServiceImpl;
        this.GetSchoolService = GetSchoolServiceImpl;
        this.wait = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('CurrentTeacher')) && JSON.parse(localStorage.getItem('CurrentTeacher')).id) {
            this.teacher = JSON.parse(localStorage.getItem('CurrentTeacher'));
            this.globalLogin.setLogin(this.teacher);
            this.GetSchoolService.getSchool(this.teacher.belongsToSchool).subscribe(function (s) { _this.globalSchool.setSchool(s); });
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.getLoginUser = function (email, password) {
        var _this = this;
        if (email > "") {
            //Google login will be accessible here.
            this.wait = true;
            this.GetTeacherService.getTeacherByMail(email, password).subscribe(function (t) { _this.teacher = t; _this.globalLogin.setLogin(t); });
            if (this.wait) {
                setTimeout(function () { return _this.Login(); }, 3000);
            }
        }
        else {
            this.globalStatus.setStatus("Enter your Email address");
        }
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.wait = false;
        console.log(this.teacher);
        if (!(JSON.parse(localStorage.getItem('CurrentTeacher')) && JSON.parse(localStorage.getItem('CurrentTeacher')).id)) {
            this.globalStatus.setStatus("No Permission");
        }
        else {
            this.globalLogin.setLogin(this.teacher);
            this.GetSchoolService.getSchool(this.teacher.belongsToSchool).subscribe(function (s) { console.log(s); _this.globalSchool.setSchool(s); });
            this.router.navigate(['home']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/html/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["c" /* GlobalLogin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["c" /* GlobalLogin */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["e" /* GlobalStatus */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_get_service__["e" /* getTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_get_service__["e" /* getTeacherService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__service_get_service__["c" /* getSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_get_service__["c" /* getSchoolService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(globalSchoolImpl, globalLoginImpl, globalClassImpl, routerImpl) {
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalLoginImpl = globalLoginImpl;
        this.globalClassImpl = globalClassImpl;
        this.routerImpl = routerImpl;
        this.title = 'Studentnote';
        this.globalSchool = globalSchoolImpl;
        this.globalLogin = globalLoginImpl;
        this.globalClass = globalClassImpl;
        this.router = routerImpl;
        this.ngOnInit();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (!(JSON.parse(localStorage.getItem('CurrentTeacher')).id)) {
            this.logoff();
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
    };
    NavbarComponent.prototype.isGlobalSchool = function () {
        if (this.globalSchool.getSchool() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isGlobalClass = function () {
        if (this.globalClass.getClass() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logoff = function () {
        localStorage.removeItem('CurrentTeacher');
        localStorage.removeItem('CurrentSchool');
        localStorage.removeItem('CurrentClass');
        this.router.navigate(['/loginPage']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: "\n  <div class=\"pane headerpicture\" style=\"width: 64%;margin: 1.3em auto 1em auto;align:center;padding:2% 0 1% 0;\">\n\n  <div *ngIf=\"isGlobalSchool(); then  TitleWSchool  else Title\"></div>\n\n<ng-template #Title><h1 class=\"title\" style=\"margin:.6em;\" [routerLink]=\"['home']\" routerLinkActive=\"active\">{{title}}</h1></ng-template>\n<ng-template #TitleWSchool><h1 class=\"title\" style=\"margin:.6em;\" [routerLink]=\"['home']\" routerLinkActive=\"active\">{{title}} for {{this.globalSchool.getSchool().name}}</h1></ng-template>\n\n\n<nav class=\"pane\" style=\"padding: 0 0;margin: 0 0;\">\n<ul>\n    <li class=\"active floatleft\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></li>\n    <!--<li class=\"active floatleft\" [routerLink]=\"['/schools']\" routerLinkActive=\"active\">Schule</li>-->\n    <li *ngIf=\"isGlobalSchool()\" class=\"active floatleft\" [routerLink]=\"['/classes']\" routerLinkActive=\"active\">Klasse</li>\n    <li *ngIf=\"isGlobalSchool()\" class=\"active floatleft\" [routerLink]=\"['/teachers']\" routerLinkActive=\"active\">Lehrer</li>\n    <li *ngIf=\"isGlobalClass()\" class=\"active floatleft\" [routerLink]=\"['/students']\" routerLinkActive=\"active\">Sch\u00FCler</li>\n    <li style=\"\">&nbsp;</li>\n\n    <li class=\"active floatright\" (click)=\"logoff()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n</li>\n</ul>\n</nav>\n</div>\n\n",
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["c" /* GlobalLogin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["c" /* GlobalLogin */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["b" /* GlobalClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["b" /* GlobalClass */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/noconnection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoConnectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoConnectionComponent = (function () {
    function NoConnectionComponent() {
    }
    return NoConnectionComponent;
}());
NoConnectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: "\n  <div style=\"text-align:center;\">\n  <h1 style=\"padding-top:50px;\">Keine Verbindung zum Datenhaltungssystem. Versuche es sp\u00E4ter nochmal.</h1>\n  <span style=\"font-size:3000%;\"><i class=\"fa fa-chain-broken\" aria-hidden=\"true\" style=\"cursor:pointer;\" [routerLink]=\"['/loginPage']\" routerLinkActive=\"active\"></i></span>\n  </div>\n  ",
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    })
], NoConnectionComponent);

//# sourceMappingURL=noconnection.component.js.map

/***/ }),

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Root = (function () {
    function Root(globalstatusImpl) {
        this.globalstatusImpl = globalstatusImpl;
        this.globalstatus = globalstatusImpl;
    }
    Root.prototype.isStatus = function () {
        if (this.globalstatus.getStatus() != "" && this.globalstatus.getStatus() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    Root.prototype.unsetStatus = function () {
        this.globalstatus.unsetStatus();
    };
    return Root;
}());
Root = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'root',
        template: "\n<router-outlet></router-outlet>\n\n<div  *ngIf=\"isStatus()\" class=\"status\" style=\"text-align:center;\" (click)=\"unsetStatus()\">\n{{this.globalstatus.getStatus()}}\n</div>\n",
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_local_service__["e" /* GlobalStatus */]) === "function" && _a || Object])
], Root);

var _a;
//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/school.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_update_service__ = __webpack_require__("../../../../../src/app/service/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_delete_service__ = __webpack_require__("../../../../../src/app/service/delete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SchoolComponent = (function () {
    function SchoolComponent(globalSchoolImpl, globalStatusImpl, PostSchoolServiceImpl, GetSchoolServiceImpl, UpdateSchoolServiceImpl, DeleteSchoolServiceImpl) {
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalStatusImpl = globalStatusImpl;
        this.PostSchoolServiceImpl = PostSchoolServiceImpl;
        this.GetSchoolServiceImpl = GetSchoolServiceImpl;
        this.UpdateSchoolServiceImpl = UpdateSchoolServiceImpl;
        this.DeleteSchoolServiceImpl = DeleteSchoolServiceImpl;
        this.schools = [];
        this.title = 'Liste der Schulen';
        this.globalSchool = globalSchoolImpl;
        this.globalStatus = globalStatusImpl;
        this.PostSchoolService = PostSchoolServiceImpl;
        this.GetSchoolService = GetSchoolServiceImpl;
        this.UpdateSchoolService = UpdateSchoolServiceImpl;
        this.DeleteSchoolService = DeleteSchoolServiceImpl;
        this.showNewSchool = false;
        this.NewSchool = new __WEBPACK_IMPORTED_MODULE_1__types_types__["c" /* School */](null, null);
    }
    SchoolComponent.prototype.init = function () {
        var _this = this;
        this.GetSchoolService.getSchools().subscribe(function (s) { _this.schools = s; });
    };
    SchoolComponent.prototype.ngOnInit = function () {
        this.init();
    };
    SchoolComponent.prototype.ngOnDestroy = function () {
    };
    SchoolComponent.prototype.isGlobalSchool = function (id) {
        if (this.globalSchool.getSchool() && this.globalSchool.getSchool().id == id) {
            return true;
        }
        else {
            return false;
        }
    };
    SchoolComponent.prototype.selectSchool = function (school) {
        if (this.isGlobalSchool(school.id)) {
            this.globalSchool.unsetSchool();
        }
        else {
            this.globalSchool.setSchool(school);
        }
    };
    SchoolComponent.prototype.toggleNewSchool = function () {
        if (this.showNewSchool == false) {
            this.selectedSchool = null;
            this.showNewSchool = true;
        }
        else {
            this.cancelNewSchool();
        }
    };
    SchoolComponent.prototype.cancelNewSchool = function () {
        this.NewSchool = new __WEBPACK_IMPORTED_MODULE_1__types_types__["c" /* School */](null, null);
        this.showNewSchool = false;
    };
    SchoolComponent.prototype.newSchool = function (name) {
        var _this = this;
        if (name > "") {
            this.PostSchoolService.postSchool(new __WEBPACK_IMPORTED_MODULE_1__types_types__["c" /* School */](null, name)).subscribe(function (res) {
                if (res.id) {
                    _this.showNewSchool = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Enter required Values");
        }
    };
    SchoolComponent.prototype.updateSchool = function (school, key, value) {
        var _this = this;
        var val;
        if (school != null && key != null && value != null) {
            val = value;
            school[key] = val;
            var h;
            this.UpdateSchoolService.updateSchool(school).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("No changes");
        }
    };
    SchoolComponent.prototype.deleteSchool = function (school) {
        var _this = this;
        var h;
        if (school.id > 0) {
            this.DeleteSchoolService.deleteSchool(school).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Nothing to delete!");
        }
    };
    SchoolComponent.prototype.onSelect = function (school) {
        this.cancelNewSchool();
        this.selectedSchool = school;
    };
    return SchoolComponent;
}());
SchoolComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/html/school.component.html"),
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["d" /* GlobalSchool */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_local_service__["e" /* GlobalStatus */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_post_service__["c" /* postSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_post_service__["c" /* postSchoolService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_get_service__["c" /* getSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_get_service__["c" /* getSchoolService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_update_service__["c" /* updateSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_update_service__["c" /* updateSchoolService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_delete_service__["c" /* deleteSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_delete_service__["c" /* deleteSchoolService */]) === "function" && _f || Object])
], SchoolComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=school.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/delete.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteSchoolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteStudentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteNoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteTeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var deleteSchoolService = (function () {
    function deleteSchoolService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'delete/deleteSchool';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    deleteSchoolService.prototype.deleteSchool = function (school) {
        return this.http.delete(this.global.basicUrl + "/" + this.url + "/" + school.id, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return deleteSchoolService;
}());
deleteSchoolService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], deleteSchoolService);

var deleteClassService = (function () {
    function deleteClassService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'delete/deleteClass';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    deleteClassService.prototype.deleteClass = function (klasse) {
        return this.http.delete(this.global.basicUrl + "/" + this.url + "/" + klasse.id, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return deleteClassService;
}());
deleteClassService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object])
], deleteClassService);

var deleteStudentService = (function () {
    function deleteStudentService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'delete/deleteStudent';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    deleteStudentService.prototype.deleteStudent = function (student) {
        return this.http.delete(this.global.basicUrl + "/" + this.url + "/" + student.id, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return deleteStudentService;
}());
deleteStudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _f || Object])
], deleteStudentService);

var deleteNoteService = (function () {
    function deleteNoteService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'delete/deleteNote';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    deleteNoteService.prototype.deleteNote = function (note) {
        return this.http.delete(this.global.basicUrl + "/" + this.url + "/" + note.id, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return deleteNoteService;
}());
deleteNoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _h || Object])
], deleteNoteService);

var deleteTeacherService = (function () {
    function deleteTeacherService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'delete/deleteTeacher';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    deleteTeacherService.prototype.deleteTeacher = function (teacher) {
        return this.http.delete(this.global.basicUrl + "/" + this.url + "/" + teacher.id, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return deleteTeacherService;
}());
deleteTeacherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _k || Object])
], deleteTeacherService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=delete.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/get.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSchoolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStudentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var getSchoolService = (function () {
    function getSchoolService(globalData, httpImpl, routerImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.routerImpl = routerImpl;
        this.url = 'get/getSchool';
        this.global = globalData;
        this.http = httpImpl;
        this.router = routerImpl;
    }
    getSchoolService.prototype.getSchools = function () {
        return this.http.get(this.global.basicUrl + "/" + this.url)
            .map(function (response) {
            return response.json().school.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__types_types__["c" /* School */](item.id, item.name);
            });
        });
    };
    //return func.sort(this.global.gSchools,'name','asc');}
    getSchoolService.prototype.getSchool = function (id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + id)
            .map(function (response) { return response.json(); });
    };
    return getSchoolService;
}());
getSchoolService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], getSchoolService);

var getClassService = (function () {
    function getClassService(globalData, httpImpl, routerImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.routerImpl = routerImpl;
        this.url = 'get/getClass';
        this.global = globalData;
        this.http = httpImpl;
        this.router = routerImpl;
    } /*
  public getClasses(): Promise<Class[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Class[])
             .catch(func.handleError);
    //return func.sort(this.global.gClasses,'level','asc');
  }*/
    getClassService.prototype.getClass = function (schoolid, id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + schoolid + "/" + id)
            .map(function (response) { return response.json(); });
    };
    getClassService.prototype.getEntities = function (id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + id)
            .map(function (response) {
            return response.json().schoolClass.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__types_types__["a" /* Class */](item.id, item.name, item.level, item.belongsToSchool);
            });
        });
    };
    return getClassService;
}());
getClassService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], getClassService);

var getStudentService = (function () {
    function getStudentService(globalData, httpImpl, routerImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.routerImpl = routerImpl;
        this.url = 'get/getStudent';
        this.global = globalData;
        this.http = httpImpl;
        this.router = routerImpl;
    } /*
  public getStudents(): Promise<Student[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Student[])
             .catch(func.handleError);
    //return func.sort(this.global.gStudents,'level','asc');
  }*/
    getStudentService.prototype.getStudent = function (classid, id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + classid + "/" + id)
            .map(function (response) { return response.json(); });
    };
    getStudentService.prototype.getEntities = function (id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + id)
            .map(function (response) {
            return response.json().student.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__types_types__["d" /* Student */](item.id, item.firstname, item.lastname, item.belongsToClass);
            });
        });
    };
    return getStudentService;
}());
getStudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _j || Object])
], getStudentService);

var getNoteService = (function () {
    function getNoteService(globalData, httpImpl, routerImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.routerImpl = routerImpl;
        this.url = 'get/getNote';
        this.global = globalData;
        this.http = httpImpl;
        this.router = routerImpl;
    } /*
  public getNotes() : Promise<Note[]> {

    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Note[])
             .catch(func.handleError);
  return func.sort(a,'timestamp','dsc');
}*/
    getNoteService.prototype.getNote = function (studentid, id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + studentid + "/" + id)
            .map(function (response) { return response.json(); });
    };
    getNoteService.prototype.getEntities = function (id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + id)
            .map(function (response) {
            return response.json().note.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__types_types__["b" /* Note */](item.id, item.text, item.timestamp, item.authorTeacherId, item.belongsToStudent);
            });
        });
    };
    return getNoteService;
}());
getNoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _m || Object])
], getNoteService);

var getTeacherService = (function () {
    function getTeacherService(globalData, httpImpl, routerImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.routerImpl = routerImpl;
        this.url = 'get/getTeacher';
        this.global = globalData;
        this.http = httpImpl;
        this.router = routerImpl;
    } /*
  public getTeachers(): Teacher[] {
    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
           .toPromise()
           .then(response => response.json().data as Teacher[])
           .catch(func.handleError);
return func.sort(a,'timestamp','dsc');
}*/
    getTeacherService.prototype.getTeacher = function (schoolid, id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + schoolid + "/" + id)
            .map(function (response) { return response.json(); });
    };
    getTeacherService.prototype.getEntities = function (id) {
        return this.http.get(this.global.basicUrl + "/" + this.url + "/" + id)
            .map(function (response) {
            return response.json().teacher.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__types_types__["e" /* Teacher */](item.id, item.firstname, item.lastname, item.mailAddress, item.password, item.belongsToSchool);
            });
        });
    };
    getTeacherService.prototype.getTeacherByMail = function (mail, password) {
        return this.http.get(this.global.basicUrl + "/login/login/" + mail + "/" + password)
            .map(function (response) {
            var t = response.json();
            localStorage.setItem('CurrentTeacher', JSON.stringify(t));
            return t;
        });
    };
    return getTeacherService;
}());
getTeacherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__local_service__["a" /* Global */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _q || Object])
], getTeacherService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=get.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GlobalSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlobalClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GlobalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GlobalLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_data__ = __webpack_require__("../../../../../src/app/dummy.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var globalStatus = null;
var GlobalSchool = (function () {
    function GlobalSchool() {
    }
    GlobalSchool.prototype.setSchool = function (school) {
        localStorage.setItem('CurrentSchool', JSON.stringify(school));
        return 0;
    };
    GlobalSchool.prototype.unsetSchool = function () {
        localStorage.removeItem('CurrentSchool');
        return 0;
    };
    GlobalSchool.prototype.getSchool = function () {
        var school = new __WEBPACK_IMPORTED_MODULE_2__types_types__["c" /* School */](null, null);
        school = JSON.parse(localStorage.getItem('CurrentSchool'));
        return school;
    };
    return GlobalSchool;
}());
GlobalSchool = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalSchool);

var GlobalClass = (function () {
    function GlobalClass() {
    }
    GlobalClass.prototype.setClass = function (klasse) {
        localStorage.setItem('CurrentClass', JSON.stringify(klasse));
        return 0;
    };
    GlobalClass.prototype.unsetClass = function () {
        localStorage.removeItem('CurrentClass');
        return 0;
    };
    GlobalClass.prototype.getClass = function () {
        var klasse = new __WEBPACK_IMPORTED_MODULE_2__types_types__["a" /* Class */](null, null, null, null);
        klasse = JSON.parse(localStorage.getItem('CurrentClass'));
        return klasse;
    };
    return GlobalClass;
}());
GlobalClass = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalClass);

var GlobalStatus = (function () {
    function GlobalStatus() {
    }
    GlobalStatus.prototype.setStatus = function (status) {
        globalStatus = status;
        setTimeout(function () { return globalStatus = null; }, 3000);
    };
    GlobalStatus.prototype.unsetStatus = function () {
        globalStatus = null;
        return 0;
    };
    GlobalStatus.prototype.getStatus = function () {
        return globalStatus;
    };
    return GlobalStatus;
}());
GlobalStatus = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalStatus);

var GlobalLogin = (function () {
    function GlobalLogin() {
    }
    GlobalLogin.prototype.setLogin = function (teacher) {
        localStorage.setItem('CurrentTeacher', JSON.stringify(teacher));
    };
    GlobalLogin.prototype.unsetLogin = function () {
        localStorage.removeItem('CurrentTeacher');
        return 0;
    };
    GlobalLogin.prototype.getLogin = function () {
        var teacher = new __WEBPACK_IMPORTED_MODULE_2__types_types__["e" /* Teacher */](null, null, null, null, null, null);
        teacher = JSON.parse(localStorage.getItem('CurrentTeacher'));
        return teacher;
    };
    return GlobalLogin;
}());
GlobalLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalLogin);

var Global = (function () {
    function Global() {
        this.gSchools = __WEBPACK_IMPORTED_MODULE_1__dummy_data__["c" /* SCHOOLS */];
        this.gClasses = __WEBPACK_IMPORTED_MODULE_1__dummy_data__["a" /* CLASSES */];
        this.gStudents = __WEBPACK_IMPORTED_MODULE_1__dummy_data__["d" /* STUDENTS */];
        this.gNotes = __WEBPACK_IMPORTED_MODULE_1__dummy_data__["b" /* NOTES */];
        this.gTeachers = __WEBPACK_IMPORTED_MODULE_1__dummy_data__["e" /* TEACHERS */];
        this.basicUrl = 'http://localhost:8888';
        //public basicUrl = 'https://studentnotegae-webengii.appspot.com';
    }
    return Global;
}());
Global = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], Global);

//# sourceMappingURL=local.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postSchoolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postStudentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postNoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postTeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var postSchoolService = (function () {
    function postSchoolService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'create/newSchool';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    postSchoolService.prototype.postSchool = function (school) {
        return this.http.post(this.global.basicUrl + "/" + this.url + "/" + school.name, JSON.stringify(school), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return postSchoolService;
}());
postSchoolService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], postSchoolService);

var postClassService = (function () {
    function postClassService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'create/newClass';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    postClassService.prototype.postClass = function (klasse) {
        return this.http.post(this.global.basicUrl + "/" + this.url + "/" + klasse.name + "/" + klasse.level + "/" + klasse.belongsToSchool, JSON.stringify(klasse), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return postClassService;
}());
postClassService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object])
], postClassService);

var postStudentService = (function () {
    function postStudentService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'create/newStudent';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    postStudentService.prototype.postStudent = function (student) {
        return this.http.post(this.global.basicUrl + "/" + this.url + "/" + student.firstname + "/" + student.lastname + "/" + student.belongsToClass, JSON.stringify(student), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return postStudentService;
}());
postStudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _f || Object])
], postStudentService);

var postNoteService = (function () {
    function postNoteService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'create/newNote';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    postNoteService.prototype.postNote = function (note) {
        return this.http.post(this.global.basicUrl + "/" + this.url + "/" + note.text + "/" + note.authorTeacherId + "/" + note.belongsToStudent, JSON.stringify(note), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return postNoteService;
}());
postNoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _h || Object])
], postNoteService);

var postTeacherService = (function () {
    function postTeacherService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'create/newTeacher';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    postTeacherService.prototype.postTeacher = function (teacher) {
        return this.http.post(this.global.basicUrl + "/" + this.url + "/" + teacher.firstname + "/" + teacher.lastname + "/" + teacher.mailAddress + "/" + teacher.password + "/" + teacher.belongsToSchool, JSON.stringify(teacher), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return postTeacherService;
}());
postTeacherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _k || Object])
], postTeacherService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/update.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateSchoolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateStudentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateNoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateTeacherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var updateSchoolService = (function () {
    function updateSchoolService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'update/updateSchool';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    updateSchoolService.prototype.updateSchool = function (school) {
        return this.http
            .put(this.global.basicUrl + "/" + this.url + "/" + school.id + "/" + school.name, JSON.stringify(school), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return updateSchoolService;
}());
updateSchoolService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], updateSchoolService);

var updateClassService = (function () {
    function updateClassService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'update/updateClass';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    updateClassService.prototype.updateClass = function (klasse) {
        return this.http
            .put(this.global.basicUrl + "/" + this.url + "/" + klasse.id + "/" + klasse.level + "/" + klasse.name, JSON.stringify(klasse), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return updateClassService;
}());
updateClassService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _d || Object])
], updateClassService);

var updateStudentService = (function () {
    function updateStudentService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'update/updateStudent';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    updateStudentService.prototype.updateStudent = function (student) {
        return this.http
            .put(this.global.basicUrl + "/" + this.url + "/" + student.id + "/" + student.belongsToClass + "/" + student.firstname + "/" + student.lastname, JSON.stringify(student), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return updateStudentService;
}());
updateStudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _f || Object])
], updateStudentService);

var updateNoteService = (function () {
    function updateNoteService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'update/updateNote';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    updateNoteService.prototype.updateNote = function (note) {
        return this.http
            .put(this.global.basicUrl + "/" + this.url + "/" + note.id, JSON.stringify(note), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return updateNoteService;
}());
updateNoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _h || Object])
], updateNoteService);

var updateTeacherService = (function () {
    function updateTeacherService(globalData, httpImpl) {
        this.globalData = globalData;
        this.httpImpl = httpImpl;
        this.url = 'update/updateTeacher';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.global = globalData;
        this.http = httpImpl;
    }
    updateTeacherService.prototype.updateTeacher = function (teacher) {
        return this.http
            .put(this.global.basicUrl + "/" + this.url + "/" + teacher.id + "/" + teacher.firstname + "/" + teacher.lastname + "/" + teacher.mailAddress + "/" + teacher.password, JSON.stringify(teacher), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(__WEBPACK_IMPORTED_MODULE_5__lib_functions__["b" /* handleError */]);
    };
    return updateTeacherService;
}());
updateTeacherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_service__["a" /* Global */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _k || Object])
], updateTeacherService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=update.service.js.map

/***/ }),

/***/ "../../../../../src/app/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_update_service__ = __webpack_require__("../../../../../src/app/service/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_delete_service__ = __webpack_require__("../../../../../src/app/service/delete.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StudentComponent = (function () {
    function StudentComponent(route, PostStudentServiceImpl, GetStudentServiceImpl, UpdateStudentServiceImpl, DeleteStudentServiceImpl, GetTeacherServiceImpl, PostNoteServiceImpl, GetNoteServiceImpl, UpdateNoteServiceImpl, DeleteNoteServiceImpl, GetClassServiceImpl, globalSchoolImpl, globalClassImpl, globalStatusImpl, globalLoginImpl) {
        this.route = route;
        this.PostStudentServiceImpl = PostStudentServiceImpl;
        this.GetStudentServiceImpl = GetStudentServiceImpl;
        this.UpdateStudentServiceImpl = UpdateStudentServiceImpl;
        this.DeleteStudentServiceImpl = DeleteStudentServiceImpl;
        this.GetTeacherServiceImpl = GetTeacherServiceImpl;
        this.PostNoteServiceImpl = PostNoteServiceImpl;
        this.GetNoteServiceImpl = GetNoteServiceImpl;
        this.UpdateNoteServiceImpl = UpdateNoteServiceImpl;
        this.DeleteNoteServiceImpl = DeleteNoteServiceImpl;
        this.GetClassServiceImpl = GetClassServiceImpl;
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalClassImpl = globalClassImpl;
        this.globalStatusImpl = globalStatusImpl;
        this.globalLoginImpl = globalLoginImpl;
        this.title = 'Schülerübersicht';
        this.globalSchool = globalSchoolImpl;
        this.globalClass = globalClassImpl;
        this.globalStatus = globalStatusImpl;
        this.globalLogin = globalLoginImpl;
        this.PostStudentService = PostStudentServiceImpl;
        this.GetStudentService = GetStudentServiceImpl;
        this.UpdateStudentService = UpdateStudentServiceImpl;
        this.DeleteStudentService = DeleteStudentServiceImpl;
        this.PostNoteService = PostNoteServiceImpl;
        this.GetNoteService = GetNoteServiceImpl;
        this.UpdateNoteService = UpdateNoteServiceImpl;
        this.DeleteNoteService = DeleteNoteServiceImpl;
        this.GetTeacherService = GetTeacherServiceImpl;
        this.GetClassService = GetClassServiceImpl;
        this.showNewStudent = false;
        this.showNewNote = false;
        this.NewStudent = new __WEBPACK_IMPORTED_MODULE_3__types_types__["d" /* Student */](null, null, null, null);
        this.NewNote = new __WEBPACK_IMPORTED_MODULE_3__types_types__["b" /* Note */](null, null, null, null, null);
    }
    StudentComponent.prototype.isNotes = function () {
        if (this.notes) {
            return true;
        }
        else {
            return false;
        }
    };
    StudentComponent.prototype.toggleNewStudent = function () {
        if (this.showNewStudent == false) {
            this.selectedStudent = null;
            this.showNewStudent = true;
        }
        else {
            this.cancelNewStudent();
        }
    };
    StudentComponent.prototype.cancelNewStudent = function () {
        this.NewStudent = new __WEBPACK_IMPORTED_MODULE_3__types_types__["d" /* Student */](null, null, null, null);
        this.showNewStudent = false;
    };
    StudentComponent.prototype.newStudent = function (firstname, lastname, belongsToClass) {
        var _this = this;
        if (firstname > "" && lastname > "" && belongsToClass > 0) {
            this.PostStudentService.postStudent(new __WEBPACK_IMPORTED_MODULE_3__types_types__["d" /* Student */](null, firstname, lastname, belongsToClass)).subscribe(function (res) {
                if (res.id) {
                    _this.showNewStudent = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Enter required Values");
        }
    };
    StudentComponent.prototype.toggleNewNote = function () {
        if (this.showNewNote == false) {
            this.showNewNote = true;
        }
        else {
            this.cancelNewNote();
        }
    };
    StudentComponent.prototype.cancelNewNote = function () {
        this.NewNote = new __WEBPACK_IMPORTED_MODULE_3__types_types__["b" /* Note */](null, null, null, null, null);
        this.showNewNote = false;
    };
    StudentComponent.prototype.newNote = function (text, timestamp, authorTeacherId, belongsToStudent) {
        var _this = this;
        if (text > "" && timestamp > 0 && authorTeacherId != null && belongsToStudent > 0) {
            this.PostNoteService.postNote(new __WEBPACK_IMPORTED_MODULE_3__types_types__["b" /* Note */](null, text, timestamp, authorTeacherId, belongsToStudent)).subscribe(function (res) {
                if (res.id) {
                    _this.showNewNote = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                    _this.onSelect(_this.selectedStudent);
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Enter required Values");
        }
    };
    StudentComponent.prototype.getTeacherName = function (id) {
        var teacher = __WEBPACK_IMPORTED_MODULE_2__lib_functions__["a" /* find */](this.teachers, 'id', id);
        if (teacher != null) {
            return teacher.firstname + " " + teacher.lastname;
        }
        else {
            return "";
        }
    };
    StudentComponent.prototype.getLoginName = function () {
        var teacher = this.globalLogin.getLogin();
        if (teacher != null) {
            return teacher.firstname + " " + teacher.lastname;
        }
        else {
            return "Not logged in!";
        }
    };
    StudentComponent.prototype.getLoginId = function () {
        var teacher = this.globalLogin.getLogin();
        if (teacher != null) {
            return teacher.id;
        }
        else {
            return "";
        }
    };
    StudentComponent.prototype.init = function () {
        var _this = this;
        if (this.globalSchool.getSchool()) {
            this.GetStudentService.getEntities(this.globalClass.getClass().id).subscribe(function (s) { _this.students = s; });
            this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(function (s) { return _this.classes = s; });
            this.GetTeacherService.getEntities(this.globalSchool.getSchool().id).subscribe(function (s) { return _this.teachers = s; });
        }
    };
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            //Ask Webservice
            if (_this.id) {
                setTimeout(function () { _this.selectedStudent = _this.students.find(function (o) { return o.id === _this.id; }); _this.GetNoteService.getEntities(_this.selectedStudent.id).subscribe(function (s) { _this.notes = s; }); }, 2000);
            }
        });
    };
    StudentComponent.prototype.ngOnDestroy = function () {
    };
    StudentComponent.prototype.updateStudent = function (student, key, value) {
        var _this = this;
        var val;
        if (student != null && key != null && value != null) {
            val = value;
            student[key] = val;
            var h;
            this.UpdateStudentService.updateStudent(student).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("No changes");
        }
    };
    StudentComponent.prototype.getNow = function () {
        var now = Date.now() + 1;
        return now;
    };
    StudentComponent.prototype.deleteStudent = function (student) {
        var _this = this;
        var h;
        if (student.id > 0) {
            this.DeleteStudentService.deleteStudent(student).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Nothing to delete!");
        }
    };
    StudentComponent.prototype.updateNote = function (note, key, value) {
        var _this = this;
        var val;
        if (note != null && key != null && value != null) {
            val = value;
            note[key] = val;
            this.UpdateNoteService.updateNote(note).subscribe(function (res) {
                if (res.id) {
                    _this.showNewNote = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                    _this.onSelect(_this.selectedStudent);
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("No changes");
        }
    };
    StudentComponent.prototype.deleteNote = function (note) {
        var _this = this;
        var h;
        if (note.id > 0) {
            this.DeleteNoteService.deleteNote(note).subscribe(function (res) {
                if (res.id) {
                    _this.showNewNote = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                    _this.onSelect(_this.selectedStudent);
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Nothing to delete!");
        }
    };
    StudentComponent.prototype.getClassName = function (id) {
        var klasse = __WEBPACK_IMPORTED_MODULE_2__lib_functions__["a" /* find */](this.classes, 'id', id);
        if (klasse != null) {
            return klasse.level + " " + klasse.name;
        }
        else {
            return "";
        }
    };
    StudentComponent.prototype.getCurrentClass = function () {
        return this.globalClass.getClass();
    };
    StudentComponent.prototype.onSelect = function (student) {
        var _this = this;
        this.cancelNewStudent();
        this.selectedStudent = student;
        this.notes = null;
        this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(function (s) { return _this.classes = s; });
        this.GetNoteService.getEntities(this.selectedStudent.id).subscribe(function (s) {
            if (s != null) {
                _this.notes = s;
            }
            else {
                _this.notes = null;
            }
        });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/html/student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service_post_service__["d" /* postStudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_post_service__["d" /* postStudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__service_get_service__["d" /* getStudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_get_service__["d" /* getStudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__service_update_service__["d" /* updateStudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_update_service__["d" /* updateStudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["d" /* deleteStudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["d" /* deleteStudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__service_get_service__["e" /* getTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_get_service__["e" /* getTeacherService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__service_post_service__["b" /* postNoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_post_service__["b" /* postNoteService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__service_get_service__["b" /* getNoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_get_service__["b" /* getNoteService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__service_update_service__["b" /* updateNoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_update_service__["b" /* updateNoteService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["b" /* deleteNoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_delete_service__["b" /* deleteNoteService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5__service_get_service__["a" /* getClassService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_get_service__["a" /* getClassService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["d" /* GlobalSchool */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["b" /* GlobalClass */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["b" /* GlobalClass */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["e" /* GlobalStatus */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["c" /* GlobalLogin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["c" /* GlobalLogin */]) === "function" && _q || Object])
], StudentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_functions__ = __webpack_require__("../../../../../src/app/lib/functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_types__ = __webpack_require__("../../../../../src/app/types/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_local_service__ = __webpack_require__("../../../../../src/app/service/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_post_service__ = __webpack_require__("../../../../../src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_get_service__ = __webpack_require__("../../../../../src/app/service/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_update_service__ = __webpack_require__("../../../../../src/app/service/update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_delete_service__ = __webpack_require__("../../../../../src/app/service/delete.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TeacherComponent = (function () {
    function TeacherComponent(route, PostTeacherServiceImpl, GetTeacherServiceImpl, UpdateTeacherServiceImpl, DeleteTeacherServiceImpl, GetSchoolServiceImpl, globalSchoolImpl, globalStatusImpl, globalLoginImpl) {
        this.route = route;
        this.PostTeacherServiceImpl = PostTeacherServiceImpl;
        this.GetTeacherServiceImpl = GetTeacherServiceImpl;
        this.UpdateTeacherServiceImpl = UpdateTeacherServiceImpl;
        this.DeleteTeacherServiceImpl = DeleteTeacherServiceImpl;
        this.GetSchoolServiceImpl = GetSchoolServiceImpl;
        this.globalSchoolImpl = globalSchoolImpl;
        this.globalStatusImpl = globalStatusImpl;
        this.globalLoginImpl = globalLoginImpl;
        this.title = 'Liste der Lehrer';
        this.globalSchool = globalSchoolImpl;
        this.globalStatus = globalStatusImpl;
        this.globalLogin = globalLoginImpl;
        this.PostTeacherService = PostTeacherServiceImpl;
        this.GetTeacherService = GetTeacherServiceImpl;
        this.UpdateTeacherService = UpdateTeacherServiceImpl;
        this.DeleteTeacherService = DeleteTeacherServiceImpl;
        this.GetSchoolService = GetSchoolServiceImpl;
        this.showNewTeacher = false;
        this.NewTeacher = new __WEBPACK_IMPORTED_MODULE_3__types_types__["e" /* Teacher */](null, null, null, null, null, null);
    }
    TeacherComponent.prototype.toggleNewTeacher = function () {
        if (this.showNewTeacher == false) {
            this.selectedTeacher = null;
            this.showNewTeacher = true;
        }
        else {
            this.cancelNewTeacher();
        }
    };
    TeacherComponent.prototype.cancelNewTeacher = function () {
        this.NewTeacher = new __WEBPACK_IMPORTED_MODULE_3__types_types__["e" /* Teacher */](null, null, null, null, null, null);
        this.showNewTeacher = false;
    };
    TeacherComponent.prototype.newTeacher = function (firstname, lastname, mailAddress, password, belongsToSchool) {
        var _this = this;
        if (firstname > "" && lastname > "" && mailAddress > "" && password > "" && belongsToSchool > 0) {
            this.PostTeacherService.postTeacher(new __WEBPACK_IMPORTED_MODULE_3__types_types__["e" /* Teacher */](null, firstname, lastname, mailAddress, password, belongsToSchool)).subscribe(function (res) {
                if (res.id) {
                    _this.showNewTeacher = false;
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Enter required Values");
        }
    };
    TeacherComponent.prototype.updateTeacher = function (teacher, key, value) {
        var _this = this;
        var val;
        if (teacher != null && key != null && value != null) {
            val = value;
            teacher[key] = val;
            var h;
            this.UpdateTeacherService.updateTeacher(teacher).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("No changes");
        }
    };
    TeacherComponent.prototype.deleteTeacher = function (teacher) {
        var _this = this;
        var h;
        if (teacher.id > 0) {
            this.DeleteTeacherService.deleteTeacher(teacher).subscribe(function (res) {
                if (res.id) {
                    _this.globalStatus.setStatus("Data submitted");
                    _this.init();
                }
                else {
                    _this.globalStatus.setStatus(res.error);
                }
            });
        }
        else {
            this.globalStatus.setStatus("Nothing to delete!");
        }
    };
    TeacherComponent.prototype.init = function () {
        var _this = this;
        if (this.globalSchool.getSchool()) {
            this.GetTeacherService.getEntities(this.globalSchool.getSchool().id).subscribe(function (s) { return _this.teachers = s; });
            this.GetSchoolService.getSchools().subscribe(function (s) { return _this.schools = s; });
        }
    };
    TeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            //Ask Webservice
            if (_this.id) {
                setTimeout(function () { _this.selectedTeacher = _this.teachers.find(function (o) { return o.id === _this.id; }); }, 2000);
            }
        });
    };
    TeacherComponent.prototype.ngOnDestroy = function () {
    };
    TeacherComponent.prototype.isLoginTeacher = function (id) {
        if (this.globalLogin.getLogin() && this.globalLogin.getLogin().id == id) {
            return true;
        }
        else {
            return false;
        }
    };
    TeacherComponent.prototype.selectLoginTeacher = function (teacher) {
        this.globalStatus.setStatus("You cannot change your user. Please relogin with the desired user.");
    };
    TeacherComponent.prototype.getSchoolName = function (id) {
        var school = __WEBPACK_IMPORTED_MODULE_2__lib_functions__["a" /* find */](this.schools, 'id', id);
        if (school != null) {
            return school.name;
        }
        else {
            return "";
        }
    };
    TeacherComponent.prototype.getCurrentSchool = function () {
        return this.globalSchool.getSchool();
    };
    TeacherComponent.prototype.selectTeacher = function (teacher) {
        this.cancelNewTeacher();
        this.selectedTeacher = teacher;
    };
    return TeacherComponent;
}());
TeacherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/html/teacher.component.html"),
        styles: [__webpack_require__("../../../../../src/app/css/component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_post_service__["e" /* postTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_post_service__["e" /* postTeacherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__service_get_service__["e" /* getTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_get_service__["e" /* getTeacherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__service_update_service__["e" /* updateTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_update_service__["e" /* updateTeacherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__service_delete_service__["e" /* deleteTeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_delete_service__["e" /* deleteTeacherService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_get_service__["c" /* getSchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_get_service__["c" /* getSchoolService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["d" /* GlobalSchool */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["d" /* GlobalSchool */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["e" /* GlobalStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["e" /* GlobalStatus */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__service_local_service__["c" /* GlobalLogin */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_local_service__["c" /* GlobalLogin */]) === "function" && _j || Object])
], TeacherComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/types/types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return School; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Student; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Teacher; });
var Class = (function () {
    function Class(id, name, level, belongsToSchool) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.belongsToSchool = belongsToSchool;
    }
    Class.prototype.toString = function () {
        return (this.id + this.name + this.level + this.belongsToSchool);
    };
    return Class;
}());

var Note = (function () {
    function Note(id, text, timestamp, authorTeacherId, belongsToStudent) {
        this.id = id;
        this.text = text;
        this.timestamp = timestamp;
        this.authorTeacherId = authorTeacherId;
        this.belongsToStudent = belongsToStudent;
    }
    Note.prototype.toString = function () {
        return (this.id + this.text + this.timestamp + this.authorTeacherId + this.belongsToStudent);
    };
    return Note;
}());

var School = (function () {
    function School(id, name) {
        this.id = id;
        this.name = name;
    }
    School.prototype.toString = function () {
        return (this.id + this.name);
    };
    return School;
}());

var Student = (function () {
    function Student(id, firstname, lastname, belongsToClass) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.belongsToClass = belongsToClass;
    }
    Student.prototype.toString = function () {
        return (this.id + this.firstname + this.lastname + this.belongsToClass);
    };
    return Student;
}());

var Teacher = (function () {
    function Teacher(id, firstname, lastname, mailAddress, password, belongsToSchool) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.mailAddress = mailAddress;
        this.password = password;
        this.belongsToSchool = belongsToSchool;
    }
    Teacher.prototype.toString = function () {
        return (this.id + this.firstname + this.lastname + this.mailAddress + this.password + this.belongsToSchool);
    };
    return Teacher;
}());

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/app/css/font-awesome.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.eot?v=4.7.0") + ");\n  src: url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.eot") + "?#iefix&v=4.7.0) format('embedded-opentype'), url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.woff2?v=4.7.0") + ") format('woff2'), url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.woff?v=4.7.0") + ") format('woff'), url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.ttf?v=4.7.0") + ") format('truetype'), url(" + __webpack_require__("../../../../../src/app/fonts/fontawesome-webfont.svg?v=4.7.0") + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map