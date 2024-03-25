function title2filename(separator, ...fields) {
    for (let i = 0; i < fields.length; i += 1) {
        if (typeof fields[i] === 'string') {
            console.log('Pass main arg ONLY');
        } else {
            console.log('Pass main arg and optional');
        }
    }
}
