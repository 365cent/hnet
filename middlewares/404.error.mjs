function handle404(req, res, next) {
    res.status(404).send(`
    <meta http-equiv="refresh" content="1">
    <p>Wait a moment while we fetch the page...</p>
    `)
}

export {
    handle404
}
