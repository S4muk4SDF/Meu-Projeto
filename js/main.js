$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

window.onload = function () {
    document.querySelector("#btn_M").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })

    document.querySelector("#btn_P").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })

    document.querySelector("#btn_Q").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })

    document.querySelector("#btn_B").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })

    document.querySelector("#btn_H").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })

    document.querySelector("#btn_G").addEventListener("click", () => {
        alert("Site ainda em contrução ainda :3")
    })
}