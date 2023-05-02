
const main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },

    cacheSelectors: function () {
        this.loadingText = document.querySelector('.loading-text')
        this.imageBlur = document.querySelector('.bg')
        this.repeat = document.querySelector('.repeat')
    },

    bindEvents: function () {
        // Aguarda até que o documento seja carregado e, em seguida, inicia a animação
        document.addEventListener("DOMContentLoaded", () => {
            this.int = setInterval(this.Events.loading.bind(this), 30);
            this.Events.loading.bind(this)();
        });
        this.repeat.addEventListener('click', () => {
            this.load = 0
            console.log(this.load)
            clearInterval(this.int)
            this.int = setInterval(this.Events.loading.bind(this), 30)
            this.Events.loading.bind(this)()
        })
    },

    load: 0,
    int: undefined,
    
    scale: function (number, inMin, inMax, outMin, outMax) {
        // const x = (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
        // console.log(`(${number} - ${inMin}) * (${outMax} - ${outMin}) / (${inMax} - ${inMin}) + ${outMin} `, "Resposta: ", x.toFixed(2), "px")
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },

    Events: {
        loading: function () {
            this.load++
            if (this.load > 99) {
                clearInterval(this.int)
            }
            this.loadingText.innerHTML = `${this.load}%`
            this.loadingText.style.opacity = this.scale(this.load, 0, 100, 1, 0)
            this.imageBlur.style.filter = `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`
        },

    },

}

main.init();
