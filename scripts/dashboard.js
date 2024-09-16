add_control_blog_carrosell();

function add_control_blog_carrosell() {
    const push_left = document.getElementById("push-left");
    const push_right = document.getElementById("push-right");
    const blog_posts_carrosell =
        document.getElementsByClassName("blog-post-carrossel")[0];

    let scroll_factor = 500;
    push_right.addEventListener("click", () => {
        blog_posts_carrosell.scrollLeft += scroll_factor;
    });
    push_left.addEventListener("click", () => {
        blog_posts_carrosell.scrollLeft -= scroll_factor;
    });
    push_right.addEventListener("", () => {
        console.log("keypress");
    });
}
