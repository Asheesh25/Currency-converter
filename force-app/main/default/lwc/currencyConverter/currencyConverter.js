import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList';
// import bgImage from '@salesforce/resourceUrl/currencyBackground';
export default class CurrencyConverter extends LightningElement {
    codeList = countryCodeList;
    countryFrom = 'USD';
    countryTo = 'AUD';
    // bgImg = bgImage;

    connectedCallback(){
        console.log('Country code list is ', this.codeList);
        console.log('Background image is ', this.bgImg);
    }

    handleChange(event){
        const {name,value} = event.target;
        this[name] = value;
        // console.log('Value is ',value,'and country from is ',this.countryFrom);
        // console.log('Value is ',value,' and country to is ',this.countryTo);
    }
}