import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList';
export default class CurrencyConverter extends LightningElement {
    codeList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'AUD';

    connectedCallback(){
        console.log('Country code list is ', this.codeList);
        console.log('Background image is ', this.bgImg);
    }

    handleChange(event){
        const {name,value} = event.target;
        this[name] = value;
    }

    submitHandler(event){
        event.preventDefault();
        this.convert();
    }

    async convert(){
        let from = 'EUR';
        let to = 'GBP';
        let amount = '10';

        const apiURL = `https://api.exchangerate.host/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount`;
    }
}