import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
@Directive({ selector: '[appBasicHightlight]' })

export class BasicHightLightDirective implements OnInit {
    @Input() types: string[] = [];
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        console.log(this.types);
        if (this.types != undefined || this.types.length < 0) {
            for (var type of this.types) {
                if (type.toLowerCase() === "normal") {
                    this.elementRef.nativeElement.style.backgroundColor = '#bd8d41';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() === "fighting") {
                    this.elementRef.nativeElement.style.backgroundColor = '#915656';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() === "flying") {
                    this.elementRef.nativeElement.style.backgroundColor = '#e3c066';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "poison"){
                    console.log("Did you go here");
                    this.elementRef.nativeElement.style.backgroundColor = '#6c4294';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() === "ground") {
                    this.elementRef.nativeElement.style.backgroundColor = '#6c4294';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "rock") {
                    this.elementRef.nativeElement.style.backgroundColor = '#3b3426';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "bug") {
                    this.elementRef.nativeElement.style.backgroundColor = '#acbe16';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "ghost") {
                    this.elementRef.nativeElement.style.backgroundColor = '#75577d';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "steel") {
                    this.elementRef.nativeElement.style.backgroundColor = '#949494';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "fire") {
                    this.elementRef.nativeElement.style.backgroundColor = '#f45545';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "water") {
                    this.elementRef.nativeElement.style.backgroundColor = '#558bcf';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "grass") {
                    this.elementRef.nativeElement.style.backgroundColor = '#589f43';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "psychic") {
                    this.elementRef.nativeElement.style.backgroundColor = '#ee86a5';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() === "ice") {
                    this.elementRef.nativeElement.style.backgroundColor = '#64aff5';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "dragon") {
                    this.elementRef.nativeElement.style.backgroundColor = '#a485c2';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "dark") {
                    this.elementRef.nativeElement.style.backgroundColor = '#705848';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "fairy") {
                    this.elementRef.nativeElement.style.backgroundColor = '#bf6481';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                if (type.toLocaleLowerCase() ===  "electric") {
                    this.elementRef.nativeElement.style.backgroundColor = '#f3be1f';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
            }
        }
        for(var type of this.types) {
            switch(type.toLocaleLowerCase()) {
            
                case "flying": {
                    this.elementRef.nativeElement.style.backgroundColor = '#e3c066';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "poison": {
                    this.elementRef.nativeElement.style.backgroundColor = '#6c4294';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "ground": {
                    this.elementRef.nativeElement.style.backgroundColor = '#6c4294';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "rock": {
                    this.elementRef.nativeElement.style.backgroundColor = '#3b3426';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "bug": {
                    this.elementRef.nativeElement.style.backgroundColor = '#acbe16';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "ghost": {
                    this.elementRef.nativeElement.style.backgroundColor = '#75577d';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "steel": {
                    this.elementRef.nativeElement.style.backgroundColor = '#949494';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "fire": {
                    this.elementRef.nativeElement.style.backgroundColor = '#f45545';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "water": {
                    this.elementRef.nativeElement.style.backgroundColor = '#558bcf';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "grass": {
                    this.elementRef.nativeElement.style.backgroundColor = '#589f43';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "psychic": {
                    this.elementRef.nativeElement.style.backgroundColor = '#ee86a5';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "ice": {
                    this.elementRef.nativeElement.style.backgroundColor = '#64aff5';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "dragon": {
                    this.elementRef.nativeElement.style.backgroundColor = '#a485c2';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "dark": {
                    this.elementRef.nativeElement.style.backgroundColor = '#705848';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "fairy": {
                    this.elementRef.nativeElement.style.backgroundColor = '#bf6481';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                case "electric": {
                    this.elementRef.nativeElement.style.backgroundColor = '#f3be1f';
                    this.elementRef.nativeElement.style.color = "#fff";
                    this.elementRef.nativeElement.style.padding = '4px 10px';
                }
                default: {
                    break;
                }
            }
      
        }
    }

}