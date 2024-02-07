export const formatKebab = (str: string) => {
	return str
		.split('-')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
};

export const formatISO = (date: string) => {
	const [year, month, day] = date.split('-').map(Number);

	const formattedMonth = month < 10 ? `0${month}` : month.toString();
	const formattedDay = day < 10 ? `0${day}` : day.toString();

	return `${formattedMonth}/${formattedDay}/${year}`;
};
