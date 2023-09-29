/* eslint-disable no-useless-escape */
import katex from "katex";
import "katex/dist/katex.min.css";
/* 
const defaultFonts = [
  "Arial",
  "Comic Sans MS",
  "Courier New",
  "Impact",
  "Georgia",
  "Tahoma",
  "Trebuchet MS",
  "Verdana",
];

const sortedFontOptions = [
  "Logical",
  "Salesforce Sans",
  "Garamond",
  "Sans-Serif",
  "Serif",
  "Times New Roman",
  "Helvetica",
  ...defaultFonts,
].sort();
 */
export const editorOptions = {
  height: 100,
  buttonList: [
    [
      "undo",
      "redo",
      "removeFormat",
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript",
      "font",
      "fontSize",
      "fontColor",
      "hiliteColor",
      "align",
      "horizontalRule",
      "outdent",
      "indent",
      "list",
      "lineHeight",
      "table",
      "link",
      "image",
      "showBlocks",
      "math",
      "preview",
      "print",
      {
        name: "customLink",
        dataDisplay: "dialog",
        title: "Botão de teste sem efeito algum",
        buttonClass: "",
        innerHTML:
          '<svg viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" /></svg>',
      },
    ],
  ],

  katex: katex,
  imageRotation: false,
  fontSize: [12, 14, 16, 18, 20],
  colorList: [
    [
      "#828282",
      "#FF5400",
      "#676464",
      "#F1F2F4",
      "#FF9B00",
      "#F00",
      "#fa6e30",
      "#000",
      "rgba(255, 153, 0, 0.1)",
      "#FF6600",
      "#0099FF",
      "#74CC6D",
      "#FF9900",
      "#CCCCCC",
    ],
  ],
  imageUploadUrl: "http://localhost:8080/chazki-gateway/orders/upload",
  imageGalleryUrl: "http://localhost:8080/chazki-gateway/orders/gallery",
};

export const textExamples = {

  htmlBasic: `<p>An opening paragraph with a <a href="https://example.com">link</a> in it.</p>
  <blockquote><p>A wise quote.</p></blockquote>
  <p>A closing paragraph!</p>`,
  htmlBasic2: `
  <div><p style="font-size:18px; font-weight: bold;">Escreva algo aqui e veja a magia acontecendo!</p></div>
`,
  htmlLightning: `<html style="overflow-y: hidden;">
  <head>
    <title></title>
  </head>
  <body style="height: auto; min-height: auto;"><span style="font-size:24px;"><span style="font-family:Comic Sans MS,cursive;">24px and Comic Sans</span></span><br />
  <br />
  <span style="color:#c0392b;">I am red</span>
  <ul>
    <li>I am bullet</li>
  </ul>
  
  <ol>
    <li>I am numbered</li>
  </ol>
  <br />
  you<span style="color:#1abc9c;"> can </span><span style="font-family:Comic Sans MS,cursive;"><span style="font-size:24px;"><span style="color:#1abc9c;">cus</span>tomize<b> the t</b>ype and the compon</span></span>ent<br />
  <br />
  <b>the text is bold</b><br />
  <br />
  <i>the text is italic</i><br />
  <br />
  <u>this text is underlined</u><br />
  <br />
  <u><b>this text is bold and under lined</b></u>
  
  <div style="text-align: center;">this text is center</div>
  
  <div style="text-align: right;">the text is right</div>
  </body>
  </html> 
  `,
};
