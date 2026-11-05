export function SelectionBoxAnimation(Box) {
    Box.style.backgroundColor = "rgb(236, 243, 240)";
    Box.style.border = "solid 0.6cqw rgb(21, 237, 147)";
    Box.firstElementChild.style.color = "rgb(21, 237, 147)";

    Box.style.transition = "0.3s";
    Box.firstElementChild.style.transition = "0.1s";

    Box.style.width = "60%";
    Box.style.height = "6.4cqw";
    Box.firstElementChild.style.fontSize = "3.4cqw";
}