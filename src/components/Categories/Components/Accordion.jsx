import React, { useEffect } from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";
import $ from "../../../js/flexd";

export default function Accordion(props) {
  useEffect(() => {
    let accOne = document.getElementById("collapsible");
    $(accOne).accordion();
  }, []);
  const accordionHTMLSnippet = `<div id="myAccordion" className="accordion">
  <ul>
    <li>
      <div className="accordion-head">Accordion 1</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ab unde doloribus similique
        aspernatur eos culpa voluptatum vel nisi
        molestias quae temporibus modi officia dolore
        at aperiam, perferendis id itaque quasi.
      </div>
    </li>
    <li>
      <div className="accordion-head">Accordion 2</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero, asperiores suscipit
        placeat atque deleniti quod, voluptatibus a
        voluptas at incidunt repudiandae, soluta illo
        et amet praesentium? Dicta maiores repudiandae
        similique.
      </div>
    </li>
    <li>
      <div className="accordion-head">Accordion 3</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Assumenda aspernatur
        sapiente quae ea quaerat, dolores nemo sunt
        aut rem tempore possimus quam eligendi tenetur
        adipisci molestias facilis officiis sit
        recusandae.
      </div>
    </li>
  </ul>
</div>`;
  const accordionJSSnippet = `let myAccordion = document.getElementById("myAccordion");
$(myAccordion).accordion();`;
  return (
    <React.Fragment>
      <Card>
        <h5>Example</h5>
        <div id="collapsible" className="accordion">
          <ul>
            <li>
              <div className="accordion-head">
                Accordion 1<i className="fa fa-angle-down"></i>
              </div>
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde
                doloribus similique aspernatur eos culpa voluptatum vel nisi
                molestias quae temporibus modi officia dolore at aperiam,
                perferendis id itaque quasi.
              </div>
            </li>
            <li>
              <div className="accordion-head">
                Accordion 2<i className="fa fa-angle-down"></i>
              </div>
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                asperiores suscipit placeat atque deleniti quod, voluptatibus a
                voluptas at incidunt repudiandae, soluta illo et amet
                praesentium? Dicta maiores repudiandae similique.
              </div>
            </li>
            <li>
              <div className="accordion-head">
                Accordion 3<i className="fa fa-angle-down"></i>
              </div>
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda aspernatur sapiente quae ea quaerat, dolores nemo sunt
                aut rem tempore possimus quam eligendi tenetur adipisci
                molestias facilis officiis sit recusandae.
              </div>
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <h5>Implementation</h5>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <figure>
              <Code language="language-html">{accordionHTMLSnippet}</Code>
              <Code language="language-js">{accordionJSSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}
