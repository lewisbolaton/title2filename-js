export const useEntries = () => useState(
	'entries',
	() => [
		{title: '', filter: ''},
		{title: '', filter: ''},
		{title: '', filter: ''},
	] 
);