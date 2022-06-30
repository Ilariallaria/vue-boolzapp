// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

const app = new Vue({
    el: '#app',
    data:{
        currentContact: 0,
        messageAddedUser: {},
        messageAddedContact : {},
        messageAddedTxt: '',
        filteredTxt: '',
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],

            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    },

    methods: {
        getCurrentContact(index) {
            this.currentContact = index;
        },

        // funzione che aggiunge messaggio Utente
        addUserMessage() {

            // se l'input non è vuoto
            if(this.messageAddedTxt.length > 0) {
                
                // aggiungo il messaggio (oggetto) agli altri messaggi
                this.messageAddedUser = {
                    'date': dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    'text': this.messageAddedTxt,
                    'status': 'sent'
                };
                
                //  nell'array messages del contatto attivo
                this.contacts[this.currentContact].messages.push(this.messageAddedUser)

                // resetto input
                this.messageAddedTxt = '';

                // chiamiamo il messaggio preimpostato dopo 1secondo
                setTimeout(this.addContactMessage, 1000);
            }
            
        },

        addContactMessage(){

            // funzione aggiunge il messaggio (oggetto) preimpostato
            this.messageAddedContact = {
                'date': dayjs().format('DD/MM/YYYY HH:mm:ss'),
                'text': 'Ok',
                'status': 'received'
            };
            
            // nell'array messages del contatto attivo
            this.contacts[this.currentContact].messages.push(this.messageAddedContact)

        },

        searchContacByTxt(){
            
            this.contacts.forEach((element) => {
                const userInputlower = this.filteredTxt.toLowerCase();
                const elementTxtLower = element.name.toLowerCase();
                
                if(elementTxtLower.includes(userInputlower)){
                    element.visible = true;
                }else{
                    element.visible = false;
                }
          });
        }
    },

})