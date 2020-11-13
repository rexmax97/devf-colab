import { Parallax, Background } from 'react-parallax';
import './parallax.css'; 

const Para = () => (
    <Parallax className="parallax"
    bgImageStyle={{Width: '100vw'}} bgImage="https://www.paho.org/sites/default/files/styles/flexslider_full/public/hero/2020-03/covid-19-1190x574-2-full.jpg?h=fdc0eb87&itok=CerQCpzv"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    width: percentage * 500,
                    height: 600,
                }}
                
            />
        )}
    >
        <h2>¿Qué es el COVID-19?</h2>
        <p>El virus que causa la COVID‑19 se transmite principalmente a través de las gotículas generadas cuando una persona infectada tose, estornuda o espira. Estas gotículas son demasiado pesadas para permanecer suspendidas en el aire y caen rápidamente sobre el suelo o las superficies.</p>

<p>Usted puede infectarse al inhalar el virus si está cerca de una persona con COVID‑19 o si, tras tocar una superficie contaminada, se toca los ojos, la nariz o la boca.</p>
    </Parallax>
);

export default Para