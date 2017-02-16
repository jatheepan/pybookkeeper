import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const valueAccessor = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagComponent),
    multi: true
};

@Component({
    selector: 'tag-input',
    template: `
    <input type="text" [(ngModel)]="value">
    <div>{{value}}</div>
`,
    providers: [valueAccessor]
})
export class TagComponent implements ControlValueAccessor {
    private _value: any = '';
    get value(): any {
        return this._value;
    };

    set value(v: any) {
        if(v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }

    onChange = (_) => {return;};
    onTouched = () => {return;};

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}