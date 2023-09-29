export default function formatHTML(inputHTML) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = inputHTML;
  
    function format(node, level) {
      let indent = "\t".repeat(level);
      let result = "";
  
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        if (text) {
          result += `${indent}${text}\n`;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName.toLowerCase();
        result += `${indent}<${tag}`;
  
        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          result += ` ${attr.name}="${attr.value}"`;
        }
  
        if (node.childNodes.length === 0) {
          result += " />\n";
        } else {
          result += ">\n";
          for (let i = 0; i < node.childNodes.length; i++) {
            result += format(node.childNodes[i], level + 1);
          }
          result += `${indent}</${tag}>\n`;
        }
      }
  
      return result;
    }
  
    let formattedHTML = "";
    for (let i = 0; i < wrapper.childNodes.length; i++) {
      formattedHTML += format(wrapper.childNodes[i], 0);
    }
  
    return formattedHTML;
  }