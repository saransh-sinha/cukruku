const header = document.querySelector("header");
const menuButton = header.querySelector(".menu");
const navList = header.querySelector("ul");
const navItems = Array.from(navList.children);

const toggleNavList = () => {
	navList.classList.toggle("active");
	header.classList.toggle("fixed");
};

menuButton.addEventListener("click", toggleNavList);

navItems.forEach((n) => {
	n.addEventListener("click", toggleNavList);
});
