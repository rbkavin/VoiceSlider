const n = require("NativeUI");

const p = require('Patches');
// values 0 - 1 
var val = 0.5;

const slider = n.slider;
slider.value = 0.5;
slider.visible = true;
slider.value.monitor({ fireOnInitialValue: false }).subscribe((mod) => {
    val = mod.newValue;
    p.setScalarValue('value', val);

});

