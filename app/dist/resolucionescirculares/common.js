"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["common"],{

/***/ 9524:
/*!*********************************************************!*\
  !*** ./src/app/pages/02-registros/registros.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrosService": () => (/* binding */ RegistrosService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.globals */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }) };
class RegistrosService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.url = src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.api;
    }
    /** CARTAS RESOLUCIONES */
    /** DATA DOCUMENTOS PAGINADOS */
    getDocs(dto, page = 0, limit = 0, sort = '', order = '') {
        return this.http.get(`${this.url}/${dto.model}?` +
            (page === 0 ? `` : `&page=${page}`) +
            (limit === 0 ? `` : `&limit=${limit}`) +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.etapa === '' ? `` : `&etapa=${dto.etapa}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`)).pipe();
    }
    /** DOWNLOAD PDF */
    getData(model) {
        return this.http.get(`${this.url}/${model}`).pipe();
    }
    /**TRAE DOCUMENTOS PAGINADOS */
    getNotificadosFilter(model, descripcion = '') {
        return this.http.get(`${this.url}/${model}` +
            (descripcion === '' ? `` : `?`) +
            (descripcion === '' ? `` : `descripcion=${descripcion}`)).pipe();
    }
    /** NOTIFICACIONES */
    /** TRAE NOTIFICACIONES POR CODIGO DE DOCUMENTOS */
    getNotificaciones(model, id = 0) {
        return this.http.get(`${this.url}/${model}/getNotificaciones/${id}`).pipe();
    }
    getBajas(model, id) {
        return this.http.get(`${this.url}/${model}/${id}`).pipe();
    }
    /** CATALOGOS */
    /** TRAE LISTA DE OPCIONES DE CATALOGOS PARA SELECT */
    getOptions() {
        return this.http.get(`${this.url}/catalogos/options`).pipe();
    }
    //#region CRUD
    /** INSERT CON FORMDATA */
    create(model, data, file) {
        return this.http.post(`${this.url}/${model}`, file).pipe();
    }
    /** INSERT SIMPLE */
    createSimple(model, data) {
        return this.http.post(`${this.url}/${model}`, data).pipe();
    }
    /** MODIFICACION CON FORMDATA */
    update(model, id, data, file) {
        return this.http.put(`${this.url}/${model}/${id}`, file).pipe();
    }
    /** ELIMINACION LOGICA */
    delete(model, id) {
        return this.http.delete(`${this.url}/${model}/${id}`);
    }
    //#endregion
    //#region DOWNLOAD
    /** DOWNLOAD GET FILE */
    getFile(model, id) {
        const returl = `${this.url}/${model}/download/${id}`;
        return this.http.get(returl, { responseType: "blob" });
    }
    /**REPORTE EN CSV */
    getCsv(dto, page = 0, limit = 0, sort = '', order = '') {
        const returl = `${this.url}/${dto.model}/downloadcsv?` +
            (page === 0 ? `` : `&page=${page}`) +
            (limit === 0 ? `` : `&limit=${limit}`) +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.etapa === '' ? `` : `&etapa=${dto.etapa}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    /** REPORTE EN PDF */
    getPdf(dto, page = 0, limit = 0, sort = '', order = '') {
        const returl = `${this.url}/${dto.model}/downloadpdf?` +
            (page === 0 ? `` : `&page=${page}`) +
            (limit === 0 ? `` : `&limit=${limit}`) +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.etapa === '' ? `` : `&etapa=${dto.etapa}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    //#endregion
    formatDate(date) {
        const dateFormat = new Date(date);
        return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
    }
}
RegistrosService.ɵfac = function RegistrosService_Factory(t) { return new (t || RegistrosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RegistrosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegistrosService, factory: RegistrosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map