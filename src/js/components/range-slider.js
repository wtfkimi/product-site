const rangeSlider = document.getElementById('range-slider');


if (rangeSlider){
  noUiSlider.create(rangeSlider, {
    start: [10, 5000],
    connect: true,
    step: 1,
    range: {
      'min': [10],
      'max': [5000]
    }
  })
}


const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');

const inputs = [input0, input1];

rangeSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
})

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;
  rangeSlider.noUiSlider.set(arr);
}

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  })
})
