const url =
	"https://docs.google.com/forms/d/e/1FAIpQLSdBsTr0ziPgYs77Z8BA9gcN6Mbopv7rrseRpreWDDyY49miyg/formResponse";

function postToGoogle() {
	var field1 = $("#name").val();
	var field2 = $("#mobile").val();
	var field3 = $("#email").val();
	var field4 = $("#city").val();
	var field5 = $("#state").val();
	var field6 = $("#message").val();

	$.ajax({
		url: url,

		//add your google form generated numbers below which are also the 'names' of your inputs
		data: {
			"entry.1879304393": field1,
			"entry.1872128658": field2,
			"entry.1309921460": field3,
			"entry.1957350639": field4,
			"entry.967668950": field5,
			"entry.2061827451": field6,
		},
		type: "POST",
		dataType: "xml",
		success: function (d) {
			$("#contact").trigger("reset");
		},
		error: function (x, y, z) {
			$("#contact").trigger("reset");
		},
	});
	return false;
}
