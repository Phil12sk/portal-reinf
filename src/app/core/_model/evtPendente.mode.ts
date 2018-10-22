import { DocumentModel } from "./document.model";
import { LayoutModel } from "./layout.model";

export class EvtPendente{

    // constructor(public month: any, public contribuinte: DocumentModel, public layout: LayoutModel){};
    constructor(public month: any, public contribuinte: DocumentModel[], public layout: LayoutModel){};
}