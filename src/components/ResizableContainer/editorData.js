/* eslint-disable no-useless-escape */

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

export const editorOptions = {
  height: 200,
  mode: "classic",

  font: sortedFontOptions,
  formats: ["p", "blockquote", "h1", "h2", "h3"],
  imageMultipleFile: true,
  imageAccept: ".jpg, .jpeg, .png, .gif, .webp, .svg",
  videoFileInput: false,
  audioFileInput: true,
  tabDisable: false,
  icons: {
    paragraph_style:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  },
  buttonList: [
    [
      "undo",
      "redo",
      "font",
      "fontSize",
      "formatBlock",
      "paragraphStyle",
      "blockquote",
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript",
      "fontColor",
      "hiliteColor",
      "textStyle",
      "removeFormat",
      "outdent",
      "indent",
      "align",
      "horizontalRule",
      "list",
      "lineHeight",
      "table",
      "link",
      "image",
      "video",
      "audio",

      "fullScreen",
      "showBlocks",
      "preview",
      "print",
      "save",
      "template",
    ],
  ],

  lineHeights: [
    {
      text: "Single",
      value: 1,
    },
    {
      text: "Double",
      value: 2,
    },
  ],
  textStyles: [
    "translucent",
    {
      name: "Emphasis",
      style: "-webkit-text-emphasis: filled;",
      tag: "span",
    },
  ],
  templates: [
    {
      name: "Template-1",
      html: "<p>HTML source1</p>",
    },
    {
      name: "Template-2",
      html: "<p>HTML source2</p>",
    },
  ],
  imageRotation: false,
  fontSize: [8, 10, 14, 18, 24, 36],
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
