import React from "react";

export default function Typography() {
  const typographySnippet = `<div class="grid-12">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
</div>`;
  return (
    <div id="typography" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Typography</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>

      <div className="grid-wrapper">
        <div className="grid-12">
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
        </div>
      </div>

      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <pre className="">
              <code className="language-html">{typographySnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}