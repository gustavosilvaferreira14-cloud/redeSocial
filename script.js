//Botão e curtidas
document.addEventListener("DOMContentLoader", () =>{
    const likeBtn = document.querySelector("left-actions . actions-btn:fist-child");
    if (!likeBtn) return;
const likeSvg = likeBtn.querySelector ("svg");
 
//locaiza o contador


let textNode = Array. from(likeBtn.childNods).find(node) => node.nodeType
=== Node.TEXT_Node&& node.TextContent. trim()==**

//zera o contador


let cont = 0

//atualiza

1f(texNode){
    textNoe. TextContent = ´0`

})

//coração
function applyLikedStyle ()
likevg.syle.fill = "#ef4444";
likesvg.style.stroke = "#ef4444';
likeSvg.style.color= "#ef4444";


//efeito curtida
likeSvg.Stile.transform= "scale(1.3)"
seTimeout ()= => (LikeSvg.syle.transform) "scale(1)"150;