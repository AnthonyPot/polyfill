!function(){function mutation(nodes){if(!nodes.length){throw new Error("DOM Exception 8")}else if(nodes.length===1){return nodes[0]}else{var fragment=document.createDocumentFragment(),index,node;for(index in arguments){node=arguments[index];fragment.appendChild(typeof node==="string"?document.createTextNode(node):node)}return fragment}}Element.prototype.prepend=function prepend(){this.insertBefore(mutation(arguments),this.firstChild)};Element.prototype.append=function append(){this.appendChild(mutation(arguments))};Element.prototype.before=function before(){if(this.parentNode){this.parentNode.insertBefore(mutation(arguments),this)}};Element.prototype.after=function append(){if(this.parentNode){this.parentNode.insertBefore(mutation(arguments),this.nextSibling)}};Element.prototype.replace=function append(){if(this.parentNode){this.parentNode.replaceChild(mutation(arguments),this.nextSibling)}};Element.prototype.remove=function remove(){if(this.parentNode){this.parentNode.removeChild(this.nextSibling)}}}();