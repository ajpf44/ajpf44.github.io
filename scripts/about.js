create_asci_running_animation();

const test_button = document.getElementById("test-button");

const role_element = document.getElementById("role-animation");
const roles = [
    "Dev FullStack",
    "Padawan",
    "Fanático do Linux",
    "Caminheiro",
    "Amante do Javascript",
    "Desenvolvedor",
];
role_element.style.paddingRight = "2px";
role_element.style.width = "fit-content";

let is_cursor_blinking = false;
setInterval(() => {
    if (is_cursor_blinking) {
        role_element.style.borderRight = "2px solid gray";
    } else role_element.style.borderRight = "none";

    is_cursor_blinking = !is_cursor_blinking;
}, 500);

let count_roles = 0;
async function write() {
    await erase_html_text(role_element);
    await write_on_html(role_element, roles[count_roles]);

    ++count_roles;
    if (count_roles == roles.length) count_roles = 0;

    setTimeout(() => {
        write();
    }, 5000);
}

setTimeout(() => write(), 5000);

const erase_html_text = (element) =>
    new Promise((res) => {
        function erase(el) {
            const text = el.innerHTML;

            if (text.length > 0) {
                el.innerHTML = text.slice(0, text.length - 2);

                setTimeout(() => {
                    erase(el);
                }, 100);
            } else {
                res();
                return;
            }
        }

        erase(element);
    });

const write_on_html = (element, str_target) =>
    new Promise((res) => {
        function write_recursive(el, str) {
            const text = el.innerHTML;

            if (text == str) {
                res()
                return;
            };

            el.innerHTML = text + str.charAt(text.length);

            setTimeout(() => {
                write_recursive(el, str);
            }, 100);
        }

        write_recursive(element, str_target);
    });

function create_asci_running_animation() {
    const asci_animation = document.getElementById("asci-animation");
    let first_head = "\\o/";
    let second_head = "(o)";
    let body = "|";
    let feet = "/\\";

    let s = true;
    setInterval(() => {
        if (s)
            asci_animation.innerHTML =
                second_head + "<br>" + "." + body + "<br> ." + feet.replace("\\", ")");
        else asci_animation.innerHTML = first_head + "<br>" + "." + body + "<br>" + feet;

        s = !s;

        first_head = "." + first_head;
        second_head = "." + second_head;
        body = "." + body;
        feet = "." + feet;

        if (body.length > 15) {
            first_head = first_head.replaceAll(".", "");
            second_head = second_head.replaceAll(".", "");
            body = body.replaceAll(".", "");
            feet = feet.replaceAll(".", "");
        }
    }, 500);
}
