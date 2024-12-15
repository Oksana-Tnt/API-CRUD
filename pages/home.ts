import { iPizza } from "../interfaces/iPizza.js";
import { HttpClient } from "../Modules/Http.js";

class HomePage{

    http:HttpClient<iPizza>;

    apiUrl:string = 'http://localhost:3000/pizze'

    pizze:iPizza[] = [];
    target:HTMLElement | null

    constructor(){
        this.http = new HttpClient<iPizza>();
        this.target = document.querySelector('#target');
        this.getPizze()
    }

    async getPizze(){
        this.pizze = await this.http.get(this.apiUrl)
        this.costruisciRighe()
    }

    costruisciRighe(){
        this.pizze.forEach((p, i) => { 
            
        const tr:HTMLTableRowElement = document.createElement('tr');
        const idTd:HTMLTableCellElement = document.createElement('td');
        const gustoTd:HTMLTableCellElement = document.createElement('td');
        const prezzoTd:HTMLTableCellElement = document.createElement('td');
        const azioniTd:HTMLTableCellElement = document.createElement('td');
        const deleteBtn:HTMLButtonElement = document.createElement('button');
        const editLink:HTMLAnchorElement = document.createElement('a');

        deleteBtn.classList.add('btn','btn-danger');
        editLink.classList.add('btn','btn-warning');

        idTd.innerText = String(i + 1);
        gustoTd.innerText = p.gusto;
        prezzoTd.innerText = p.prezzo + '€';
        deleteBtn.innerText = 'Elimina';
        editLink.innerText = 'Modifica';

        editLink.href = `/update.html?id=${p.id}`;
        
        deleteBtn.addEventListener('click',() => {
            this.http.delete(`${this.apiUrl}/${p.id}`)
            .then(() => {
                tr.remove();
            })
        })

        azioniTd.append(editLink, deleteBtn);
        tr.append(idTd, gustoTd, prezzoTd, azioniTd);
        
        this.target?.append(tr);

        })
    }

}

new HomePage()