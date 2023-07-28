export interface CrowdAnkiNoteModelModel {
  __type__: "NoteModel",
  crowdanki_uuid:string;
  css:string;
  flds: {
    collapsed:boolean;
    description:string;
    font:string;
    //media:any[];
    name:string;
    ord:number;
    plainText:boolean;
    rtl:boolean;
    size:number;
    sticky:boolean;
    excludeFromSearch:boolean;

  }[];
  latexPost:string;
  latexPre:string;
  latexsvg:boolean;
  name:string;
  originalStockKind:number;
  req:((number | "any"|"none"| number[])[])[]
  sortf:number;
  //tags:string[];
  tmpls:{
    afmt:string;
    bafmt:string;
    bfont:string;
    bqfmt:string;
    bsize:number;
    did:null;
    name:string;
    ord:number;
    qfmt:string;
  }[]
  type:number;
  //vers:[]
}
