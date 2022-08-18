export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    let stride = Math.round(100 / this.steps);
    
    
    let stepSlider = document.createElement('div');
    stepSlider.classList.add('slider');
    stepSlider.innerHTML = `<div class="slider__thumb" style="left: ${this.value * stride}%;">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress" style="width: ${this.value * stride}%;"></div>
    <div class="slider__steps"></div>`;
    
    
    let sliderSteps = stepSlider.querySelector('.slider__steps');
    for( let i = 0; i < this.steps; i++ ) {
      let step = document.createElement('span');
      if( i == this.value ) step.classList.add('slider__step-active');
      sliderSteps.append(step);
    }
    this._elem = stepSlider;
    this.stepsSlider = sliderSteps.querySelectorAll('span');
    
    
    stepSlider.addEventListener('click', this.change);
  }

  change = (event) => {
    let sliderSteps = this._elem.querySelector('.slider__steps');
    
    
    let quantity = this.steps - 1;
    
    
    for( let child of this.stepsSlider ) {
      if( child.classList.contains('slider__step-active') ) child.classList.remove('slider__step-active');
    }
    
    
    let sliderStepscoords = sliderSteps.getBoundingClientRect();
    let leftOut = (event.clientX - sliderStepscoords.left) / sliderSteps.offsetWidth;
    
    
    let stride = Math.round(leftOut * quantity);
    let sliderValue = this._elem.querySelector('.slider__value');
    sliderValue.innerHTML = stride;
    
    
    this.stepsSlider[stride].classList.add('slider__step-active');
    
    
    let thumb = this._elem.querySelector('.slider__thumb');
    let progress = this._elem.querySelector('.slider__progress');
    let percents = Math.round(100 / quantity);
    
    
    thumb.style.left = `${stride * percents}%`;
    progress.style.width = `${stride * percents}%`;
    
    
    let myEvent = new CustomEvent('slider-change', {
      detail: stride,
      bubbles: true
    });
    this._elem.dispatchEvent(myEvent);
  }

  get elem() {
    return this._elem;
  }
}