const faq = document.querySelector(".faq");
const faqList = faq.querySelectorAll(".faq-item");

faqList.forEach((faqItem) => {
	var question = faqItem.querySelector(".question");
	var answer = faqItem.querySelector(".answer");
	question.addEventListener("click", () => answer.classList.toggle("active"));
});
