$(".form-group-password").each(function (index, item) {
	var $item = $(item);
	var button = $item.find(".form-icon-button");
	var input = $item.find(".form-input");

	button.click(
		function () {
			var type = this.input.attr("type") === "password" ? "text" : "password";
			this.input.attr("type", type);
			this.input.focus();
		}.bind({ input })
	);
});
