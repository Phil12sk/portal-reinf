import { DocumentModel } from "./document.model";
import { InfoContribuintesPainelControle } from "./infoContribuintesPainelControle.model";
export class ContribuintePainelControle{
    constructor(public periodo:  DocumentModel, public infoContribuintes: InfoContribuintesPainelControle[]){}

    
}

