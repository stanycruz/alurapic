import Vue from "vue";

Vue.directive('meu-transform', {

    bind(el, biding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function () {

            let incremento = biding.value || 90;
            let efeito;

            if (!biding.arg || biding.arg == 'rotate') {
                if (biding.modifiers.reverse) {
                    current -= incremento;
                } else {
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if (biding.arg = 'scale') {
                efeito = `scale(${incremento})`;
            }

            el.style.transform = efeito;
            if (biding.modifiers.animate) el.style.transition = 'transform 0.5s';
        });
    }
})