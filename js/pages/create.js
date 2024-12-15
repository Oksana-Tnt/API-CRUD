"use strict";
// import { iPizza } from "../interfaces/iPizza.js";
// import { HttpClient } from "../Modules/Http.js";
// class CreatePage{
//     http: HttpClient<iPizza>;
//     apiUrl: string = 'http://localhost:3000/pizze';
//     form: HTMLFormElement | null;
//     gusto: HTMLInputElement | null;
//     prezzo: HTMLInputElement | null;
//     constructor() {
//         this.http = new HttpClient<iPizza>();
//         this.form = document.querySelector("#create-form");
//         this.gusto = document.querySelector('#gusto');
//         this.prezzo = document.querySelector("#prezzo");
//     }
//     createNewPizza() {
//         if (this.form) {
//         this.form.addEventListener('submit', e => {
//         e.preventDefault();
//         const newPizza:Partial<iPizza> = {
//             gusto: this.gusto?.value,
//             prezzo: Number(this.prezzo?.value)
//             }    
//             console.log(newPizza) ;
//         })
//     } 
//    }        
// }
//new CreatePage();
//# sourceMappingURL=create.js.map