import "./App.css";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState, useEffect } from "react";

function App() {
  const defaults = {
    initTotal: 19500,
    minTotal: 5000,
    maxTotal: 50000,
    stepTotal: 200,
    initTerm: 16,
    minTerm: 3,
    maxTerm: 24,
  };

  const [_total, _setTotal] = useState(defaults.initTotal);
  const [total, setTotal] = useState(defaults.initTotal);
  const [terms, setTerms] = useState(defaults.initTerm);

  useEffect(() => {
    _setTotal(
      `$\u00a0${total.toLocaleString("de", {
        maximumFractionDigits: 0,
      })}`
    );
  }, [total]);

  return (
    <div className="App">
      <div className="AppContainer">
        <h1 style={{ margin: 0 }}>Simulá tu crédito</h1>
        <div className="inputContainer">
          <div className="inputHeader">
            <label htmlFor="total">MONTO TOTAL</label>
            <input
              id="total"
              className="input"
              value={_total}
              onChange={onChangeInputTotal}
            />
          </div>
          <div className="sliderContainer">
            <Slider
              onChange={setTotal}
              value={total}
              min={defaults.minTotal}
              max={defaults.maxTotal}
              step={defaults.stepTotal}
              trackStyle={{ backgroundColor: "white" }}
              handleStyle={{
                borderColor: "white",
                backgroundColor: "white",
              }}
              dotStyle={{ display: "none" }}
              marks={{
                [defaults.minTotal]: (
                  <span
                    style={{ color: "white", fontSize: "1rem" }}
                  >{`$\u00a0${defaults.minTotal.toLocaleString("de")}`}</span>
                ),
                [defaults.maxTotal]: (
                  <span
                    style={{ color: "white", fontSize: "1rem" }}
                  >{`$\u00a0${defaults.maxTotal.toLocaleString("de")}`}</span>
                ),
              }}
            />
          </div>
        </div>
        <div>
          <div className="inputHeader">
            <label htmlFor="term">PLAZO</label>
            <input
              id="term"
              className="input"
              value={terms}
              onChange={onChangeInputTerms}
            />
          </div>
          <div className="sliderContainer">
            <Slider
              onChange={setTerms}
              value={terms}
              min={defaults.minTerm}
              max={defaults.maxTerm}
              trackStyle={{ backgroundColor: "white" }}
              handleStyle={{
                borderColor: "white",
                backgroundColor: "white",
              }}
              dotStyle={{ display: "none" }}
              marks={{
                [defaults.minTerm]: (
                  <span style={{ color: "white", fontSize: "1rem" }}>
                    {defaults.minTerm}
                  </span>
                ),
                [defaults.maxTerm]: (
                  <span style={{ color: "white", fontSize: "1rem" }}>
                    {defaults.maxTerm}
                  </span>
                ),
              }}
            />
          </div>
        </div>
        <div>
          <div className="cuotaContainer">
            <span style={{ fontWeight: "bold" }}>CUOTA FIJA POR MES</span>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              {`$ ${(total / terms).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            </span>
          </div>
          <div className="buttonsContainer">
            <button
              style={{
                backgroundColor: "#17AA8D",
                padding: "1rem 0",
                fontSize: "1.4rem",
              }}
            >
              OBTENÉ CRÉDITO
            </button>
            <button style={{ backgroundColor: "#0B548B" }}>
              VER DETALLE DE CUOTAS
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function onChangeInputTotal(event) {
    setTotal(event.target.value.replace(/[^0-9]+/g, ""));
  }

  function onChangeInputTerms(event) {
    if (event.target.value < 25)
      setTerms(event.target.value.replace(/[^0-9]+/, ""));
  }
}

export default App;
