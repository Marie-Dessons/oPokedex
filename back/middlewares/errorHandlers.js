function notFound(req, res, next) {
    const error = new Error("La ressource n'existe pas");

    error.status = 404;

    // * Quand on appelle next en lui passant un argument : express lève une erreur
    next(error);
}

// * On aimerait avoir le stack d'erreur en développement (stack : ce sont les infos complémentaires, utiles au débug)

// * Si express lève une erreur, on doit la gérer
function errorHandler(error, req, res, next) {
    // Le code http sera celui que l'on fourni ou sera 500

    const status = error.status || 500;

    // Le message d'erreur est destiné au client, on ne veut pas être trop précis
    res.status(status).json({ message: error.message });
}

export { notFound, errorHandler };