
function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	if ((text.indexOf(cloze)) === (-1)) {
		return console.log("Error: " + cloze + " is the incorrect word.");
	} else {
		this.text = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "__________");
	}
}

module.exports = ClozeCard;