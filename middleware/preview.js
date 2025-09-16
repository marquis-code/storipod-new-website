import isBot from '../utils/isbot';

export default function ({ req, redirect }) {

    console.log('User Agent', req.headers['user-agent']);

    if (req && req.headers['user-agent']) {
        const userAgent = req.headers['user-agent'];
        const isAllowedAgent = isBot(userAgent);

        if (!isAllowedAgent) {
            const currentUrl = req.url;
            const host = req.headers.host;
            const protocol = req.headers['x-forwarded-proto'] || 'https';
            const fullUrl = `${protocol}://${host}${currentUrl}`;
            const encodedFullUrl = encodeURIComponent(fullUrl);
            const redirectUrl = `/store?url=${encodedFullUrl}`;
            redirect(redirectUrl);
        }
    }
}