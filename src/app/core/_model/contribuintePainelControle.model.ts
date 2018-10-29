import { PeriodoModel } from "./periodo.model";
import { InfoContribuintesPainelControle } from "./infoContribuintesPainelControle.model";
export class ContribuintePainelControle{
    constructor(public periodo:  PeriodoModel, public infoContribuintes: InfoContribuintesPainelControle[]){}

    
}

