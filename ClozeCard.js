
function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}
	if ((text.indexOf(cloze)) === (-1)) {
		return console.log("Error: " + cloze + " does not appear within the card statement.");
	} else {
		this.text = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
	}
}

module.exports = ClozeCard;